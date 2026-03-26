export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-[1400px] p-4 mx-auto">
            {children}
        </div>
    )
}   