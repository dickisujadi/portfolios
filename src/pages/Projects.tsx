import { useState } from "react";
import { experiences } from '../contents/Experiences';
import { Experience } from "../typings/Interfaces";

export default function Projects() {
    const [experience, setExperience] = useState<Experience>(experiences[0]);

    const changeExperience = (newExperience: Experience) => {
        setExperience(newExperience);
    }

    return <div className="flex flex-row w-screen mx-[10vw] py-[15vh]">
        <div className="max-w-[10vw] flex flex-col h-screen">
            {experiences.map((experience: Experience, index:number) => {
                return <img key={index} src={experience.logo} alt={`${experience.id}`} className="w-[10vh] py-[2vh] hover:cursor-pointer" onClick={() => changeExperience(experience)}/>
            })}
        </div>
        <div className="max-w-[70vw] mx-[5vw] text-left">
            <p className={`${experience.color} font-['Roboto'] text-2xl`}>{experience.company}</p>
            <p className={`text-4xl`}>{experience.position}</p>
            <div className="my-8 text-primary-grey">
                <p className={`text-xl`}>{experience.period}</p>
                <p className={`text-xl`}>{experience.country}</p>
                <p className={`text-xl`}>{experience.industry}</p>
            </div>
            <div className="">
                <p className="text-2xl font-['Roboto'] flex-wrap my-8">{experience.jobDescHeader}</p>
                {experience.jobDesc.map((jobDesc: string, index: number) => {
                    return <p className="text-2xl font-['Roboto'] flex-wrap my-4" key={index}>{jobDesc}</p>
                })}
            </div>
        </div>
    </ div>
}