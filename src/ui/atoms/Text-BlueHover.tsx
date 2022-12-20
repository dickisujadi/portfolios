import { Page } from "../../typings/Interfaces";

interface TextBlueHoverProps {
    content: Page;
    onClick: (props: number) => void;
}

export default function TextBlueHover({ content, onClick }: TextBlueHoverProps) {
    return <p className="px-[10vw] xs:py-[.5vh] sm:px-[5vw] text-3xl sm:text-2xl xs:text-base hover:text-[var(--primary-blue)] hover:cursor-pointer" onClick={() => onClick(content.pageIndex)}>{content.name}</p>
}