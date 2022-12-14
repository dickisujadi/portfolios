import { useState } from "react";
import { experiences } from '../contents/Experiences';
import { Experience } from "../typings/Interfaces";
import { GrFormClose } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";

export default function Projects() {
    const [experience, setExperience] = useState<Experience>(experiences[0]);
    const [showMenu, setShowMenu] = useState(false)

    const changeExperience = (newExperience: Experience) => {
        setExperience(newExperience);
    }

    const setMenuHandler = () => {
        console.log('clicked');
        
        setShowMenu(!showMenu);
    }

    return <div className="flex flex-row w-screen mx-[10vw] py-[15vh] xs:flex-col">
        <div className="max-w-[10vw] flex flex-col xs:hidden">
            {experiences.map((experience_: Experience, index:number) => {
                return <img key={index} src={experience_.logo} alt={`${experience_.id}`} className={`w-[5vw] py-[2vh] hover:cursor-pointer grayscale ${experience_.id == experience.id && 'grayscale-0'}`} onClick={() => changeExperience(experience_)}/>
            })}
        </div>
        {showMenu ? <div className="hidden xs:block xs:fixed flex-col mx-[5vw] text-left mb-[3vh] bg-white w-screen pb-[2vh]">
            <div className="w-screen">
                <GrFormClose className="hover:cursor-pointer" onClick={setMenuHandler}/>
            </div>
            {experiences.map((experience_: Experience, index:number) => {
                return <p className={`hover:cursor-pointer my-[.5vh] ${experience_.id == experience.id && `${experience.color}`}`} key={index} onClick={() => changeExperience(experience_)}>
                    {experience_.company}
                </p>
            })}
        </div>:
        <div className="xs:flex flex-row hidden py-[1vh] mx-[5vw] hover:cursor-pointer fixed bg-white w-screen" onClick={setMenuHandler}>
            <AiFillCaretDown /><p className={`${experience.color}`}>{experience.company}</p>
        </div>
        }

        <div className={`max-w-[70vw] mx-[5vw] text-left xs:pt-[5vh] ${showMenu && 'xs:pt-[20vh]'}`}>
            <p className={`${experience.color} font-['Roboto'] text-2xl sm:text-xl xs:hidden`}>{experience.company}</p>
            <p className="text-4xl sm:text-3xl xs:text-2xl">{experience.position}</p>
            <div className="my-8 text-primary-grey">
                <p className="text-xl sm:text-lg xs:text-base">{experience.period}</p>
                <p className="text-xl sm:text-lg xs:text-base">{experience.country}</p>
                <p className="text-xl sm:text-lg xs:text-base">{experience.industry}</p>
            </div>
            <div className="">
                <p className="text-2xl sm:text-xl xs:text-lg font-['Roboto'] flex-wrap my-8">{experience.jobDescHeader}</p>
                {experience.jobDesc.map((jobDesc: string, index: number) => {
                    return <p className="text-2xl sm:text-xl xs:text-lg font-['Roboto'] flex-wrap my-4" key={index}>{jobDesc}</p>
                })}
            </div>
        </div>
    </ div>
}