import Button from "../ui/atoms/Button";
import { pages } from "../utilities/PagesMapping";

interface AboutProps {
    onClick: (props: number) => void
}

export default function About({onClick}: AboutProps) {
    return <>
        <div className="w-full py-[10vh]">
            <div className="my-[10vh]">
                <p className="text-5xl sm:text-4xl xs:text-3xl">Hi!</p>
                <p className="text-7xl rotate-90 sm:text-6xl xs:text-5xl">D</p>
            </div>
            <div className="mb-[15vh]">
                <p className="text-5xl sm:text-4xl xs:text-3xl font-extralight mb-4">I am <span className="font-normal">Dicki Sujadi</span></p>
                <p className="text-[3.5rem] sm:text-3xl xs:text-4xl font-extralight">I do <span className="font-normal">React</span></p>
            </div>
            <div className="w-1/5 xs:w-3/5 sm:w-2/5 mx-auto my-[10vh]">
                <Button content="See What I've Done" onClick={() => {onClick(pages.projects)}} />
            </div>
        </div>
    </>
}