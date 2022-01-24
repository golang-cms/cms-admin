import { useEffect, useState } from "react";
import { IRequest } from "../../providers/request/Request";
import { useRequest } from "../../providers/request/RequestProvider";

const useApiResult = (request?: IRequest) => {
    const [results, setResults] = useState<any | undefined>(null);
    const [error, setError] = useState<any>(null);
    const requester = useRequest();

    useEffect(() => {
        let isCancelled = false;
        if (request === undefined) {
            setResults(null);
            return;
        }
        requester(request).then(async (response: Response) => {
            if (isCancelled) {
                return;
            }
            if (response.status === 204) {
                setResults("No content");
                setError(null);
                return;
            }
            if (response.ok) {
                console.log(response);
                setResults(await response?.json());
                setError(null);
            } else {
                setError(await response?.json());
            }
        }).catch((err) => {
            console.log("I am err");
            setError(err?.message ?? err);
        });
        return () => {
            isCancelled = true;
        };
    }, [request, requester]);
    return [results, error];
};

export default useApiResult;
