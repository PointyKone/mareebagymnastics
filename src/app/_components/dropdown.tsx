import { useState } from "react"
import { NavItem } from "./navbar"


export function Dropdown({ name, items }: { name: string, items: { name: string, href: string }[] }) {
    const [open, setOpen] = useState<Boolean>(false)

    return (
        <div className="my-auto relative">
            <button onMouseLeave={() => setOpen(false)} onMouseOver={() => setOpen(true)} className="pl-8 font-extralight flex uppercase text-xs" key={name}>{name}<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 pl-2 h-full my-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg></span></button>
            <div onMouseLeave={() => setOpen(false)} onMouseOver={() => setOpen(true)} className={`${open ? "flex opacity-100 z-10" : "invisible opacity-0"} absolute flex-col flex justify-end text-center bg-white p-8 shadow-md rounded-md left-[-16px] top-12 transition-all ease-in-out duration-150 `}>
                {items.map(item => {
                    {
                        if (item.name === "") {
                            return
                        }
                    }
                    return (
                        <a className="py-2 font-extralight uppercase text-xs" href={item.href}>{item.name}</a>
                    )
                })}
            </div>
        </div>
    )
}