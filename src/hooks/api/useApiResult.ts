import { useEffect, useState } from "react";
import { IRequest } from "../../providers/request/Request";
import { useRequest } from "../../providers/request/RequestProvider";

const useApiResult = (request?: IRequest) => {
    const [results, setResults] = useState(null);
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
            if (response.ok) {
                setResults(await response.json());
                setError(null);
            } else {
                setError(await response.text());
            }
        }).catch((err) => {
            setError(err.message);
        });
        return () => {
            isCancelled = true;
        };
    }, [request, requester]);
    return [results, error];
};

export default useApiResult;
