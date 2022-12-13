import React, { useEffect, useState } from "react";
import { pages } from "../utilities/PagesMapping";
import Hello from "./Hello";
import Portfolios from "./Portfolios";

export default function Dashboard() {
    const [page, setPage] = useState<number>(pages.hello)

    const changePageHandler = (pageNumber: number) => {
        setPage(pageNumber)
    }

    const renderSwitch = () => {
        switch (page) {
            case pages.hello:
                return <Hello onClick={changePageHandler}/>
            case pages.portfolios:
                return <Portfolios />
        }
    }

    return <>
            {renderSwitch()}
        </>
}