import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

export default function SafeMarkdown({ content }: { content: string }) {
    return (
        <div className="prose prose-slate w-full max-w-none">
            <ReactMarkdown
                rehypePlugins={[rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
            >{content}</ReactMarkdown>
        </div>
    );
}