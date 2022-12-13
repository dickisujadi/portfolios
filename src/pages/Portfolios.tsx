import Header from "../components/Header";
import { experiences } from '../contents/Experiences';

interface PortfoliosProps {
    onClick?: () => void
}

export default function Portfolios({ onClick }: PortfoliosProps) {
    return <div className="flex flex-col">
        <Header content="portfolios" onClick={onClick}/>
        <div className="flex flex-row flex-wrap w-screen mt-[5vh] xs:flex-col">
            {experiences && experiences.length && experiences.map(experience => {
                return <div className="w-[50vw] my-[15vh]" key={experience.id}>
                    <div className="">
                        <div className="z-10 rounded-[50%] border-4 border-solid border-[var(--grey-200)] bg-[var(--grey-300)] w-[8rem] h-[8rem] float-right -mt-[4rem] mr-[10%]">
                            <img src={experience.logo} alt="" className="mt-[25%]"/>
                        </div>

                        <div className="mx-auto w-3/4 min-h-[70vh] border-4 border-solid border-[var(--grey-200)] mt-[4rem] rounded-[3.125rem]">
                            <div className="mt-16 mx-[10%]">
                                <p className={`text-left ${experience.color} text-[1.5rem]`}>{experience.company}</p>
                                <p className="text-left text-[1.25rem] text-grey-500">{experience.country}</p>
                                <p className="text-right text-[1.5rem] text-grey-200">{experience.position}</p>
                                <p className="text-right text-[1rem] text-grey-500">{experience.period}</p>
                            </div>
                            <div className="my-8 ml-[12%] mr-[10%]">
                                <ul style={{ listStyleType: "circle" }}> 
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