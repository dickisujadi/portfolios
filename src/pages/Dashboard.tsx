import { useState } from "react";
import { pages } from "../utilities/PagesMapping";
import About from "./About";
import Portfolios from "./Portfolios";

export default function Dashboard() {
    const [page, setPage] = useState<number>(pages.about)

    const changePageHandler = (pageNumber: number) => {
        setPage(pageNumber)
    }

    const backAboutHandler = () => {
        setPage(pages.about)
    }

    const renderSwitch = () => {
        switch (page) {
            case pages.about:
                return <About onClick={changePageHandler} />
            case pages.portfolios:
                return <Portfolios onClick={backAboutHandler}/>
        }
    }

    return <>
            {renderSwitch()}
        </>
}