import { ReactNode } from "react";

type ErrorMsgProps = {
    pageTitle: string;
    contentTitle: string;
    content: ReactNode;
}

export default function ErrorMsg({ pageTitle, contentTitle, content }: ErrorMsgProps) {
    return (
        <>
            <title>{pageTitle}</title>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">{contentTitle}</h1>
                <p className="text-lg">{content}</p>
            </div>
        </>
    );
}   