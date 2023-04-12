import { contents } from "../../static/Pages";

interface Props {
    contentIndex: number;
    onClickChangePage: (props: number) => void;
    onClickCloseModal: () => void;
}

export default function ModalPage({ contentIndex, onClickChangePage, onClickCloseModal } : Props) {
    return (
        <div className="hidden sm:block w-4/5 h-screen z-10 text-grey-900 bg-grey-100 fixed right-0">
            <p className="ml-5vw mt-5vh text-left text-3xl text-black" onClick={onClickCloseModal}>X</p>
            <div className="mt-20vh">
                {contents && contents.length && contents.map((content, idx) => (
                    <p 
                        key={`${content.pageIndex}-${idx}`}
                        className={`my-5vh text-2xl ${content.pageIndex === contentIndex && 'underline underline-offset-4'}`} 
                        onClick={() => onClickChangePage(content.pageIndex)}
                    >
                        {content.name}
                    </p>
                ))}
            </div>
        </div>
    )    
}