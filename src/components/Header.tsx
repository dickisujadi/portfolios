interface HeaderProps {
    content: string,
    onClick?: () => void
}

export default function Header({ content, onClick }: HeaderProps) {
    return <div className="fixed w-screen min-h-[10vh] border-b bg-[var(--black-100)] z-20">
        <p className="capitalize font-normal text-4xl text-left ml-[7vw] mt-[2vh] xs:text-2xl"><span className="hover:cursor-pointer" onClick={onClick}>{`< `}</span>{content}</p>
    </div>
}