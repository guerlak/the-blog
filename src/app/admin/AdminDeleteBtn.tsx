'use client'
import { Trash2, Check, X } from "lucide-react";
import { useState, useTransition } from "react";
import { deletePostAction } from "./posts/actions";

type AdminDeleteBtnProps = {
    id: string;
    title: string;
}

export default function AdminDeleteBtn({ id, title }: AdminDeleteBtnProps) {

    const [isPending, startTransition] = useTransition();
    const [isConfirming, setIsConfirming] = useState(false);

    const handleConfirm = () => {
        setIsConfirming(!isConfirming);
    }

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
            relative
            "
            title="Delete Post"
            aria-label={`Delete post ${title}`}
            onClick={handleConfirm}
            disabled={isPending}
        >
            <Trash2 className="w-5 h-5" />
            {isConfirming && <div className="">
                <button onClick={() => handleDelete(id)} className="flex items-center gap-2 absolute -bottom-6 -left-2 cursor-pointer"><Check color="green" /></button>
                <button onClick={() => handleConfirm} className="flex items-center gap-2 absolute -bottom-6 -right-2 cursor-pointer"><X color="red" /></button>
            </div>}
        </button>
    )
}
