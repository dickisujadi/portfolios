import { useState, useEffect } from "react";
import { Page } from "../../typings/Interfaces";
import { pages } from "../../utilities/PagesMapping";
import TextBlueHover from "../atoms/Text-BlueHover";
interface HeaderProps {
    content?: string;
    onClick: (props: number) => void;
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

    const contents : Page[] = [
        { 
            name: 'about',
            pageIndex: pages.about
        },
        { 
            name: 'projects',
            pageIndex: pages.projects
        },
        { 
            name: 'contact',
            pageIndex: pages.about
        },
    ]

    
    return <div className={`fixed w-screen min-h-[10vh] ${isScrolled && 'shadow-xl'} bg-white z-20 flex flex-row items-center justify-center`}>
        {contents.map(content => {
            return <TextBlueHover content={content} onClick={onClick} key={content.name}/>
        })}
    </div>
}