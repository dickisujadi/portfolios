import { useEffect, useState } from "react";
import Button from "../ui/atoms/Button";
import { pages } from "../utilities/PagesMapping";
import { default as logo} from "./../assets/smiling-d-transparent-grey-circle.svg";
import Footer from "../ui/molecules/Footer";
import Header from "../ui/molecules/Header";

interface AboutProps {
    onClick: (props: number) => void
}

export default function About({onClick}: AboutProps) {
    return <>
        <div className="w-full py-[10vh]">
            <div className="my-[10vh]">
                <p className="text-5xl">Hi!</p>
                <p className="text-7xl rotate-90">D</p>
            </div>
            <div className="mb-[15vh]">
                <p className="text-5xl font-extralight mb-4">I am <span className="font-normal">Dicki Sujadi</span></p>
                <p className="text-[3.5rem] font-extralight">I do <span className="font-normal">Code</span></p>
            </div>
            <div className="w-1/5 xs:w-3/5 sm:w-2/5 mx-auto my-[10vh]">
                <Button content="See What I've Done" onClick={() => {onClick(pages.projects)}} />
            </div>
        </div>
    </>
}