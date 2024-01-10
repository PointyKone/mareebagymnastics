"use client"

export type NavItem = {
    name?: string
    items: {
        name: string
        href: string
    }[]
}

import Link from "next/link"
import { Dropdown } from "./dropdown"

export function Navbar() {

    const nav: NavItem[] = [
        { items: [{name: "Home", href: "/"}]},
        { name: "Club", items: [{name: "Team", href: "/club/team"}, { name: "Sponsers", href: "/club/sponsers"}]},
        { items: [{name: "Classes", href: "/classes"}]},
        { items: [{name: "Book Now", href: "/book"}]},
        { items: [{name: "Holidays", href: "/holidays"}]},
        { name: "Competitions", items: [{name: "Nomination Links", href: "/competitions/nominations"}, { name: "2022 Competition Results", href: "/competitions/results/2022"}, { name: "2021 Competition Results", href: "/competitions/results/2021"},]},
        { name: "News", items: [{name: "Club Calendar", href: "/calendar"}, {name: "", href: "/"}]},
        { items: [{name: "Contact", href: "/contact"}]},
        { items: [{name: "FAQ", href: "/faq"}]},
        { items: [{name: "Shop", href: "/shop"}]},
    ]
    return (
        <nav className="h-24 w-full bg-[#92d0da] px-36 py-2 flex justify-between">
            <img src="/logo/transparent-white.png" alt="" className="" />
            <div className="text-center flex justify-end align-middle">

                {nav.map(i => {
                    if (i.items.length === 1) return <a className="pl-8 my-auto font-extralight uppercase text-xs" href={i.items[0]?.href}>{i.items[0]?.name}</a>
        
                    return (
                        i.name ? <Dropdown name={i.name} items={i.items} /> : ""
                    )

                })}
            </div>
        </nav>
    )
}