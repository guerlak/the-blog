import ErrorMsg from "../components/ErrorMsg";

export default function NotFound() {
    return (
        <ErrorMsg
            pageTitle="Página não encontrada"
            contentTitle="404"
            content="Página não encontrada."
        />
    );
}