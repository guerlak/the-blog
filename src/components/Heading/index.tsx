export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-primary text-4xl md:text-5xl font-black tracking-tight">{children}</h1>
    )
}