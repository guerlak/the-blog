"use client"
import ErrorMsg from "../components/ErrorMsg";

export default function GlobalError() {
    return (
        <ErrorMsg
            pageTitle="Erro"
            contentTitle="Erro"
            content="Erro ao carregar a página."
        />
    );
}   