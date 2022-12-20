interface ButtonProps {
    content: string,
    onClick?: (props: any) => void
}

export default function Button({content, onClick}: ButtonProps) {
    return <div 
        className="w-full capitalize border-2 rounded-full p-2 cursor-pointer border-[var(--primary-blue)] hover:bg-[var(--primary-blue)]  hover:text-white"
        onClick={onClick}
        >
            {content}
        </div>

}