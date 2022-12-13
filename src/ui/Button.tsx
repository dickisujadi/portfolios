interface ButtonProps {
    content: string,
    onClick?: (props: any) => void
}

export default function Button({content, onClick}: ButtonProps) {
    return <div 
        className="w-full uppercase border-2 rounded-full p-2 cursor-pointer hover:bg-grey-200 hover:text-black"
        onClick={onClick}
        >
            {content}
        </div>

}