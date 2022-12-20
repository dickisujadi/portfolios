import { useState, useEffect } from "react";

export default function Footer() {
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
    return <div className={`w-full h-[10vh] bottom-0 fixed bg-white ${isScrolled && 'border'}`}>
    <p className="text-sm my-[4vh]">With <i style={{fontSize: '.875rem', color: 'var(--aqua-900)'}} className="fa">&#xf004;</i> using React, Typescript, and Tailwind CSS</p>
</div>
}