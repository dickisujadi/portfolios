interface HeaderProps {
    content : string
}

export default function Header({content}: HeaderProps) {
    return <div className="fixed w-screen min-h-[10vh] border-b bg-[var(--black-100)] z-20">
        <p className="capitalize font-normal text-4xl text-left ml-[5vw] mt-[2vh]">{content}</p>
    </div>
}