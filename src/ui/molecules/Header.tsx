import { useState, useEffect } from "react";
import { Page } from "../../typings/Interfaces";
import { pages } from "../../utilities/PagesMapping";
import TextBlueHover from "../atoms/Text-BlueHover";
import { TbMenu } from "react-icons/tb";
import { GrFormClose } from "react-icons/gr";

interface HeaderProps {
    content?: string;
    onClick: (props: number) => void;
}

export default function Header({ content, onClick }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuAppears, setIsMenuAppears] = useState(false);

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

    const setMenuHandler = () => {
        setIsMenuAppears(!isMenuAppears);
    }

    
    return <>
        <div className={`fixed w-screen min-h-[10vh] xs:h-[13vh] ${isScrolled && 'shadow-xl xs:shadow-none'} bg-white z-20 flex flex-row items-center justify-center xs:flex-col`}>
            <div className={`xs:block hidden ${isMenuAppears&& 'w-screen px-[30vw]'}`} onClick={setMenuHandler}>
                {isMenuAppears? <GrFormClose className="hover:cursor-pointer"/> : <TbMenu />}
            </div>
            <div className={`${!isMenuAppears ? 'xs:hidden flex' : 'xs:flex xs:flex-col flex'}`}>
                {contents.map(content => {
                    return <TextBlueHover content={content} onClick={onClick} key={content.name}/>
                })}
            </div>
        </div>
    </>
}