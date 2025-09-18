import { useEffect, useState } from "react";

export function useFileExists(fileUrl: string) {
    const [fileExists, setFileExists] = useState(false);

    useEffect(() => {
        // Intenta hacer un HEAD request al archivo
        fetch(fileUrl, { method: "HEAD" })
            .then(res => setFileExists(res.ok))
            .catch(() => setFileExists(false));
    }, [fileUrl]);

    return fileExists;
}
