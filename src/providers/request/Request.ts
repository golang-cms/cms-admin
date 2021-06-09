
export type IRequest = [url: RequestInfo, options?: RequestInit];
export type IRequestFunc = (request: IRequest) => Promise<Response>;

const request: IRequestFunc = (request: IRequest): Promise<Response> => {
    // we can swap out fetch with another library later on if needed
    const [url, options] = request;
    return fetch(url, options);
}

export default request;