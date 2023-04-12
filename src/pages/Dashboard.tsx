import { useEffect, useState } from "react";
import Header from "../ui/molecules/Header";
import { pagesMapping } from "../utilities/PagesMapping";
import Home from "../ui/molecules/Home";
import ModalPage from "../ui/molecules/ModalChangePage";
import Portfolios from "../ui/molecules/Portfolios";
import ModalExperience from "../ui/molecules/ModalChangeExperience";
import { Experience } from "../static/Interfaces";
import { experiences } from "../contents/Experiences";

export default function Dashboard() {
    const [ page, setPage ] = useState<number>(pagesMapping.home);
    const [ experience, setExperience ] = useState<Experience>(experiences[0]);
    const [ isModalPageOpen, setIsModalPageOpen ] = useState<boolean>(false);
    const [ isModalExpOpen, setIsModalExpOpen ] = useState<boolean>(false);

    const changePageHandler = (pageNumber: number) => {
        setPage(pageNumber);
    }

    const renderSwitch = () => {
        switch (page) {
            case pagesMapping.home:
                return <Home />
            case pagesMapping.portfolios:
                return <Portfolios 
                    experience={experience} 
                    onClickChangeExp={changeExpIndexHandler} 
                    onClickOpenModal={toggleModalExpHandler}
                />
        }
    }

    const toggleModalPageHandler = () => {
        setIsModalPageOpen(prev => !prev);
    }

    const toggleModalExpHandler = () => {
        setIsModalExpOpen(prev => !prev);
    }

    const changeExpIndexHandler = (expIndex: number) => {
        setExperience(experiences[expIndex]);
    }

    return (
        <div className="bg-gradient-to-b from-primary-blue to-primary-peach w-screen h-fit min-h-screen px-15vw pt-5vh sm:px-10vw sm:pt-0">
            {
                isModalExpOpen && 
                <ModalExperience 
                    expIndex={experience.id} 
                    onClickChangeExpIndex={changeExpIndexHandler}
                    onClickCloseModal={toggleModalExpHandler}
                />
            }
            {
                isModalPageOpen && 
                <ModalPage 
                    contentIndex={page} 
                    onClickCloseModal={toggleModalPageHandler} 
                    onClickChangePage={changePageHandler}
                />
            }
            <Header onClick={changePageHandler} contentIndex={page} onClickOpenModal={toggleModalPageHandler}/>
            {renderSwitch()}
        </div>
    )
}