'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { SidebarItem } from "../../molecules"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { sidebarItems } from "./utils"

export const Sidebar = () => {

    const [expanded, setExpanded] = useState(false)
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/auth/login');
    }

    return (
        <aside className="h-screen">
            <nav className="h-full bg-white flex flex-col border-r shadow-md">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h2 className={`text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 text-2xl overflow-hidden transition-all font-bold ${expanded ? 'w-32' : 'w-0'}`}>Bancool</h2>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all" onClick={() => setExpanded(!expanded)}>
                        {expanded ? <ArrowLeft className="w-6 h-6 text-gray-500" /> : <ArrowLeft className="text-gray-500 w-6 h-6 transform rotate-180" />}
                    </button>
                </div>
                <ul className="flex-1 px-3">
                    {
                        sidebarItems.map(({ id, icon: Icon, text, active, link }) => (
                            <SidebarItem
                                key={id}
                                icon={<Icon />}
                                text={text}
                                active={active}
                                expanded={expanded}
                                link={link}
                            />
                        ))
                    }
                </ul>
                <div className="flex-2 px-3">
                    <button onClick={handleLogout} className={`relative flex items-center p-3 justify-center my-2 rounded-full cursor-pointer transition-colors group bg-gradient-to-l from-orange-500 font-bold to-white hover:bg-gradient-to-l`}>
                        <ArrowRight />
                        <span className={`overflow-hidden ${expanded ? 'w-52 ml-3' : 'w-0'}`}>Logout</span>
                        {
                            !expanded && (
                                <div className="absolute left-full rounded-full p-2 ml-6 bg-orange-500 text-xs opacity-50 transition-all invisible -translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 text-white">
                                    Logout
                                </div>
                            )
                        }
                    </button>
                </div>
                <div className="border-t flex p-3">
                    <div className={`flex-row-center overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}>
                        <div className="leading-4">
                            <h4>Developed by Brayan</h4>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    )
}