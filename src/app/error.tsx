"use client"

import { useEffect } from "react";
import ErrorMsg from "../components/ErrorMsg";

export default function GlobalError({ error, reset }: { error: Error, reset: () => void }) {

    useEffect(() => {
        console.log(error)
    }, [error]);

    return (
        <ErrorMsg
            pageTitle="Erro"
            contentTitle="501"
            content={
                <>
                    <p>{error.message}</p>
                    {/* <button className="bg-primary text-primary-foreground px-4 py-2 mt-4 rounded-md cursor-pointer"
                     onClick={reset}>Tentar novamente</button> */}
                </>
            }
        />
    );
}   