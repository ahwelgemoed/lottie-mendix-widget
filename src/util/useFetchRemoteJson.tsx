import { useEffect, useState } from "react";

export const useFetchRemoteJson = (url: string): any => {
    const [response, setResponse] = useState(null);
    if (url) {
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch(url);
                    const json = await res.json();
                    setResponse(json);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        }, []);
    }
    return { response };
};
