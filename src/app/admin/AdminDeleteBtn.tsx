'use client'
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deletePostAction } from "./posts/actions";
type AdminDeleteBtnProps = {
    id: string;
    title: string;
}

export default function AdminDeleteBtn({ id, title }: AdminDeleteBtnProps) {

    const [isPending, startTransition] = useTransition();

    const handleDelete = async (id: string) => {
        startTransition(async () => {
            await deletePostAction(id);
        })
    }

    return (
        <button
            type="submit"
            className="p-2.5 text-stone-400 hover:text-rose-600
            hover:bg-rose-50 rounded-lg 
            transition-colors border border-transparent 
            hover:border-rose-100 cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:hover:bg-transparent
            "
            title="Delete Post"
            aria-label={`Delete post ${title}`}
            onClick={() => handleDelete(id)}
            disabled={isPending}
        >
            <Trash2 className="w-5 h-5" />
        </button>
    )
}
