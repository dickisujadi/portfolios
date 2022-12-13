import Header from "../components/Header";
import { experiences } from '../data/Experiences';
import eaciit from "../assets/eaciit.png";

export default function Portfolios() {
    return <div className="flex flex-col">
        <Header content="portfolios"/>
        <div className="flex flex-row flex-nowrap mt-[5vh] xs:flex-col">
            {experiences && experiences.length && experiences.map(experience => {
                return <div className="w-[50vw] my-[15vh] sm:w-screen" key={experience.company}>
                    <div className="">
                        <div className="z-10 rounded-[50%] border-4 border-solid border-[var(--grey-200)] bg-[var(--grey-300)] w-[8rem] h-[8rem] float-right -mt-[4rem] mr-[10%]">
                            <img src={experience.logo} alt="" className="mt-[25%]"/>
                        </div>

                        <div className="mx-auto w-3/4 min-h-[70vh] border-4 border-solid border-[var(--grey-200)] mt-[4rem] rounded-[3.125rem]">
                            <div className="mt-16 mx-[7%]">
                                <p className={`text-right ${experience.color} text-[1.5rem]`}>{experience.company}</p>
                                <p className="text-right text-[1.25rem] text-grey-500">{experience.country}</p>
                                <p className="text-left text-[1.5rem] text-grey-200">{experience.position}</p>
                                <p className="text-left text-[1rem] text-grey-500">{experience.period}</p>
                            </div>
                            <div className="my-8 mx-[7%]">
                                <ul>
                                    {experience.jobDesc && experience.jobDesc.length && experience.jobDesc.map(jobDesc => {
                                        return <li className="text-left text-[1.25rem] mb-4" key={jobDesc}>
                                            {jobDesc}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            })}

        </div>
    </ div>
}