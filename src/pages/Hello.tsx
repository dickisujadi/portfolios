import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { pages } from "../utilities/PagesMapping";
import { default as logo} from "./../assets/smiling-d-transparent-grey-circle.svg";

interface HelloProps {
    onClick: (props: number) => void
}

export default function Hello({onClick}: HelloProps) {
    return <>
        <div className="w-full my-[20vh]">
            <div className="max-w-[5rem] max-h-[5rem] min-w-[5rem] min-h-[5rem] m-auto xs:max-w-[3rem] xs:max-h-[3rem] xs:min-w-[3rem] xs:min-h-[3rem]">
                <img src={logo} alt="" />
            </div>
            <p className="uppercase font-semibold text-[4rem] leading-[4.625rem] my-[2vh] xs:text-[2rem] xs:leading-[2rem] xs:my-[4vh]">hello</p>
            <p className="capitalize font-light text-grey_500 text-[2.25rem] leading-[2.5625rem] mb-[10.625rem] xs:text-[1.125rem] xs:leading-[1.25rem] xs:mb-[10.625rem]">thank you for visiting</p>
            <div className="w-1/5 xs:w-3/5 sm:w-2/5 m-auto">
                <Button content="portfolios" onClick={() => {onClick(pages.portfolios)}} />
            </div>
        </div>
        <div className="">
            <p className="text-sm">With <i style={{fontSize: '.875rem', color: 'var(--aqua-900)'}} className="fa">&#xf004;</i> using React, Typescript, and Tailwind CSS</p>
        </div>
    </>
}