import { useState, useEffect } from "react";
interface HeaderProps {
    content: string,
    onClick?: () => void
}

export default function Header({ content, onClick }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
        if(window.scrollY > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        }

        window.addEventListener("scroll", scrollHandler)

        return () => {
        window.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    
    return <div className={`fixed w-screen min-h-[10vh] ${isScrolled && 'shadow-xl'} bg-[var(--black-100)] z-20`}>
        <p className="capitalize font-normal text-4xl text-left ml-[7vw] mt-[2vh] xs:text-2xl"><span className="hover:cursor-pointer" onClick={onClick}>{`< `}</span>{content}</p>
    </div>
}