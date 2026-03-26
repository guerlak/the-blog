import { revalidateExampleAction } from "@/src/actions/revalidate-example";

type PostSlugParams = {
    params: Promise<{ slug: string }>;
}

export default async function Exemplo({ params }: PostSlugParams) {

    const { slug } = await params;
    const dateTime = new Date();
    const formattedDate = dateTime.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    return (
        <div className="p-10 gap-4 text-center text-3xl flex items-center flex-col" >
            <h1 className="text-2xl font-bold">{slug}</h1>
            <p className="text-stone-500">{formattedDate}</p>

            <form action={revalidateExampleAction}>
                <input type="hidden" defaultValue={`/exemplo/${slug}`} name="path" />
                <button className="bg-blue-700 text-white p-4 rounded-lg cursor-pointer"
                    type="submit">Revalidar</button>
            </form>
        </div>
    );
}       