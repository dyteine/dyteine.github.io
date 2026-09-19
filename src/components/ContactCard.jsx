import { useState } from 'react'

export default function ContactCard({ href = "#", icon: Icon, title, value, external = true, copyText }) {
    const [copied, setCopied] = useState(false)

    const handleClick = (e) => {
        if (copyText) {
            e.preventDefault()
            navigator.clipboard.writeText(copyText)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            {...(external && !copyText ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex items-center justify-between p-4 rounded-xl border border-[#e5e4e7] bg-white shadow-sm hover:border-green-500 transition-all duration-300 group cursor-pointer"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                </div>
                <div>
                    <span className="text-xs font-semibold text-[#6b6375] uppercase tracking-wider">{title}</span>
                    <p className="text-sm font-medium text-[#08060d]">{value}</p>
                </div>
            </div>

            {copyText && (
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-md transition-all">
                    {copied ? "Copied!" : "Click to copy"}
                </span>
            )}
        </a>
    )
}