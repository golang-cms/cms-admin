import { useMemo } from "react";
import { IRequest } from "../providers/request/Request";
import useApiResult from "./useApiResult";

const usePosts = () => {
  //TODO may use it later for cache
  const request = useMemo(() => getPosts(), []);
  //const request = getPosts();
  return useApiResult(request);
};

const CONTENT_API_BASE_URL = "/v1";
const getPosts = (): IRequest => {
  return [
    `${CONTENT_API_BASE_URL}/posts`,
    {
      method: "GET",
    },
  ];
};

export default usePosts;
