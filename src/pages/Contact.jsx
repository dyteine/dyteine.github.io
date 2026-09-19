import ContactCard from '../components/ContactCard'

import { Mail, GitBranch, MessageSquare } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-8 text-left">
            <div>
                <h1 className="text-3xl font-bold text-[#08060d] mb-3">Let's Connect!</h1>
                <p className="text-[#6b6375] leading-relaxed">
                    Have questions, want to collaborate, or just want to say hello? You've come to the right place!
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <ContactCard
                    href="mailto:dwightdwayne.yu@outlook.com"
                    icon={Mail}
                    title="Email Me"
                    value="dwightdwayne.yu@outlook.com"
                    external={false}
                />

                <ContactCard
                    href="https://github.com/dyteine"
                    icon={GitBranch}
                    title="GitHub"
                    value="github.com/dyteine"
                    external={true}
                />

                <ContactCard
                    href="#"
                    icon={MessageSquare}
                    title="Discord Username"
                    value="dyteine"
                    external={false}
                />
            </div>
        </div>
    )
}