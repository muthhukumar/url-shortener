import { useState, useRef, useEffect } from "react";

import axios from "../axios/axiosInstances";

type parameterType = <T>(
  body: T,
  method: "get" | "post" | "delete" | "patch",
  url: string
) => [any, boolean, string];

export const useHttpClient: parameterType = (body, method, url) => {
  const activeHttpRequest = useRef<AbortController[]>([]);
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  (() => {
    const httpAbortCtrl = new AbortController();
    activeHttpRequest.current.push(httpAbortCtrl);
    setIsLoading(true);
    axios({
      method,
      url,
      data: body,
    })
      .then((res) => {
        activeHttpRequest.current = activeHttpRequest.current.filter(
          (abortCtrl) => abortCtrl !== httpAbortCtrl
        );
        setResponse(res);
      })
      .catch((err) => {
        setError(err);
      });
    setIsLoading(false);
  })();

  useEffect(() => {
    activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
  }, []);

  return [response, isLoading, error];
};
