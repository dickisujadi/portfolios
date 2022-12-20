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
        {/* <div className="flex flex-row flex-wrap w-screen mt-[5vh] xs:flex-col">
            {experiences && experiences.length && experiences.map(experience => {
                return <div className="lg:w-[50vw] sm:w-screen my-[10vh] " key={experience.id}>
                    <div className="">
                        <div className="z-10 rounded-[50%] border-4 border-solid border-[var(--grey-200)] bg-[var(--grey-300)] w-[8rem] h-[8rem] float-right -mt-[4rem] mr-[10%] xs:w-[4rem] xs:h-[4rem] xs:-mt-[2rem] sm:w-[6rem] sm:h-[6rem] sm:-mt-[3rem]">
                            <img src={experience.logo} alt="" className="mt-[25%]"/>
                        </div>

                        <div className="mx-auto w-3/4 min-h-[70vh] border-4 border-solid border-[var(--grey-200)] mt-[4rem] rounded-[3.125rem] xs:mt-[2rem] sm:mt-[3rem] xs:border-2">
                            <div className="mt-16 mx-[10%] xs:mt-6 sm:mt-8">
                                <p className={`text-left ${experience.color} text-[1.5rem] sm:text-[1rem] xs:text-[1rem]`}>{experience.company}</p>
                                <p className="text-left text-[1.25rem] text-grey-500 sm:text-[.75rem] xs:text-[.75rem]">{experience.country}</p>
                                <p className="text-right text-[1.5rem] text-grey-200 sm:text-[1rem] xs:text-[1rem]">{experience.position}</p>
                                <p className="text-right text-[1rem] text-grey-500 sm:text-[.75rem] xs:text-[.75rem]">{experience.period}</p>
                            </div>
                            <p className="mx-[10%] text-left text-[1rem] my-6 xs:text-[.9rem] sm:text-[.9rem]">{experience.jobDescHeader}</p>
                            <div className="my-8 ml-[12%] mr-[10%]">
                                <ul style={{ listStyleType: "circle" }}> 
                                    {experience.jobDesc && experience.jobDesc.length && experience.jobDesc.map(jobDesc => {
                                        return <li className="text-left text-[1.25rem] mb-4 xs:text-[1rem] sm:text-[1rem]" key={jobDesc}>
                                            {jobDesc}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            })}

        </div> */}
    </ div>
}