import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <LoaderIcon
            role="status"
            aria-label="Loading"
            className={cn("size-10 animate-spin", className)}
            {...props}
        />
    )
}

export function SpinLoader() {
    return (
        <div className="flex justify-center items-center flex-1 min-h-screen">
            <Spinner className="w-20 h-20" />
        </div>
    )
}
