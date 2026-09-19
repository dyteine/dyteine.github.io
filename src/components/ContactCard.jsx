export default function ContactCard({ href, icon: Icon, title, value, external = true }) {
    return (
        <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex items-center gap-4 p-4 rounded-xl border border-[#E5E4E7] bg-white shadow-sm hover:border-green-500 transition-all duration-300 group"
        >
            <div className="p-3 rounded-lg bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                <Icon size={22} />
            </div>
            <div>
                <span className="text-xs font-semibold text-[#6B6375] uppercase tracking-wider">{title}</span>
                <p className="text-sm font-medium text-[#08060D]">{value}</p>
            </div>
        </a>
    )
}