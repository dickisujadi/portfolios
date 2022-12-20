import { useState } from "react";
import Footer from "../ui/molecules/Footer";
import Header from "../ui/molecules/Header";
import { pages } from "../utilities/PagesMapping";
import About from "./About";
import Projects from "./Projects";

export default function Dashboard() {
    const [page, setPage] = useState<number>(pages.about)

    const changePageHandler = (pageNumber: number) => {
        setPage(pageNumber)
    }

    const renderSwitch = () => {
        switch (page) {
            case pages.about:
                return <About onClick={changePageHandler} />
            case pages.projects:
                return <Projects />
        }
    }

    return <>
            <Header onClick={changePageHandler}/>
            {renderSwitch()}
            <Footer />
        </>
}