import { Page } from "../../typings/Interfaces";

interface TextBlueHoverProps {
    content: Page;
    onClick: (props: number) => void;
}

export default function TextBlueHover({ content, onClick }: TextBlueHoverProps) {
    return <p className="px-[10vh] text-3xl hover:text-[var(--primary-blue)] hover:cursor-pointer" onClick={() => onClick(content.pageIndex)}>{content.name}</p>
}