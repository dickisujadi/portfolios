import { accounts } from "../../static/Accounts";

export default function Home() {
    return (
        <>
            <div className="text-left px-15vw text-grey-300 sm:px-5vw sm:text-center">
                <div className="py-15vh sm:py-10vh">
                    <p className="font-medium text-7xl mb-4 sm:text-5xl">.sjd</p>
                    <p className="text-grey-500 text-5xl sm:text-3xl">frontend engineer</p>
                    <p className="text-grey-700 text-3xl sm:text-xl">Indonesia</p>
                </div>
                <div className="text-right text-xl border-0 border-r-4 border-white pr-8 py-1 sm:border-r-0 sm:text-center sm:pr-0">
                    <p className="">kindle <span className="font-bold">the flame</span></p>
                    <p className="">-Socrates</p>
                </div>
            </div>
            <div className="w-full flex h-fit justify-center pt-15vh">
                <div className="w-3/4 flex flex-row justify-center sm:w-full">
                    {accounts.map(item => (
                        <a key={item.tooltip} href={item.href} target="blank">
                            <img src={item.imgSrc} alt={item.tooltip} className="mx-10 w-7 cursor-pointer"/>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
    
}