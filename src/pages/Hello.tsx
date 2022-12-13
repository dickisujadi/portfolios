import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { pages } from "../utilities/PagesMapping";
import { default as logo} from "./../assets/smiling-d-transparent-grey-circle.svg";

interface HelloProps {
    onClick: (props: number) => void
}

export default function Hello({onClick}: HelloProps) {
    return <>
        <div className="w-full mt-[30vh]">
            <div className="max-w-[5rem] max-h-[5rem] min-w-[5rem] min-h-[5rem] m-auto">
                <img src={logo} alt="" />
            </div>
            <p className="uppercase text-[4rem] font-semibold leading-[4.625rem] mt-[1vh]">hello</p>
            <p className="capitalize text-[2.25rem] font-normal leading-[2.5625rem] text-grey_500 mb-[10.625rem]">thank you for visiting</p>
            <div className="w-1/5 m-auto">
                <Button content="portfolios" onClick={() => {onClick(pages.portfolios)}} />
            </div>
        </div>
    </>
}