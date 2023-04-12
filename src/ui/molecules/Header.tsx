import { contents } from "../../static/Pages";

interface Props {
    contentIndex: number;
    onClick: (props: number) => void;
    onClickOpenModal: () => void;
}

export default function Header({ contentIndex, onClick, onClickOpenModal }: Props) {
    return (
    <div className="w-full flex text-white">
        <div className="w-full flex flex-row-reverse">
            {contents && contents.length && contents.map(content => (
                content.pageIndex !== 0 && 
                <div onClick={() => onClick(content.pageIndex)} key={content.pageIndex} className={`sm:hidden pl-12 cursor-pointer ${contentIndex === content.pageIndex && 'underline underline-offset-8'}`}>
                    {content.name}
                </div>
            ))}
        </div>
        <div onClick={onClickOpenModal} className="hidden sm:flex flex-row border rounded-full px-4 py-1 mt-10">
            {contents[contentIndex].name}
            <p className="rotate-90 ml-4">{`>`}</p>
        </div>
        {contentIndex !== 0 && <p onClick={() => onClick(0)} className="cursor-pointer left-0 absolute ml-15vw font-semibold text-4xl sm:hidden">.sjd</p>}
    </div>
    )
}