import { experiences } from "../../contents/Experiences";
import { Experience } from "../../static/Interfaces";

interface Props {
    experience: Experience;
    onClickChangeExp: (props: number) => void;
    onClickOpenModal: () => void;
}

export default function Portfolios({ experience, onClickChangeExp, onClickOpenModal }: Props) {
    const changeExpHandler = (expIndex: number) => {
        onClickChangeExp(expIndex);
    }

    return (
        <>
            <div className="hidden mt-5vh h-fit min-h-[9vh] sm:block">
                <img src={experience.logo} alt="work-logo" className="mx-auto"/>
            </div>
            <div className="flex flex-row mt-20vh sm:mt-5 text-white">
                <div className="w-3/12 mr-5 sm:hidden">
                    {experiences && experiences.length && experiences.map((_experience, idx) => (
                        <img 
                            key={`${_experience.id}-${idx}`}
                            src={_experience.logo} 
                            alt={_experience.company} 
                            className={`cursor-pointer mx-auto hover:mix-blend-normal my-5vh
                                ${_experience.id === experience.id ? 'mix-blend-normal' : 'mix-blend-luminosity'} 
                                ${_experience.id === 0 && 'mt-0'}
                            `} 
                            onClick={() => changeExpHandler(_experience.id)}
                        />
                    ))}
                </div>
                <div className="w-full text-left">
                    <div className="h-fit min-h-[15vh] sm:min-h-[15vh]">
                        <p className="font-bold text-4xl sm:hidden sm:text-3xl">{experience.position}</p>
                        <div 
                            className="flex flex-row text-2xl h-fit sm:text-xl sm:border sm:rounded-full sm:px-4 sm:py-1" 
                            onClick={onClickOpenModal}
                            >
                            {experience.company}
                            <p className="hidden sm:block rotate-90 ml-auto">{`>`}</p>
                        </div>

                        <p className="hidden font-bold text-4xl sm:block sm:text-3xl mt-5">{experience.position}</p>
                        <p className="text-xl sm:text-lg">{experience.industry}</p>
                        <p className="text-lg sm:text-base">{experience.period}</p>
                    </div>
                    <div className="my-5vh">
                        <p className="text-lg sm:text-base">{experience.jobDescHeader}</p>
                        <ul className="list-disc">
                            {experience.jobDesc && experience.jobDesc.length && experience.jobDesc.map((jobDesc, idx) => (
                                <li className="text-lg my-5 sm:text-base ml-5" key={`${experience.id}-${idx}`}>{jobDesc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}