
export default async function Exemplo() {

    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    const posts = json.slice(0, 5);
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
            <p className="text-stone-500">{formattedDate}</p>
            {posts.map((item: any) => (
                <div key={item.id} className="flex flex-col gap-4 max-w-2xl border-2 border-gray-500">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <p className="text-sm">{item.body}</p>
                </div>
            ))}
        </div>
    );
}       