import { experiences } from "../../contents/Experiences";

interface Props {
    expIndex: number;
    onClickChangeExpIndex: (props: number) => void;
    onClickCloseModal: () => void;
}

export default function ModalExperience({ expIndex, onClickChangeExpIndex, onClickCloseModal } : Props) {
    return (
        <div className="hidden sm:block w-4/5 h-screen z-10 text-grey-900 bg-grey-100 fixed right-0">
            <p className="ml-5vw mt-5vh text-left text-3xl text-black" onClick={onClickCloseModal}>X</p>
            <div className="mt-10vh">
                {experiences && experiences.length && experiences.map(experience => (
                    <img 
                        key={experience.id}
                        className={`w-11 my-5vh mx-auto ${expIndex === experience.id ? 'mix-blend-normal' : 'mix-blend-luminosity'}`}
                        src={experience.logo} 
                        alt="experience logo" 
                        onClick={() => onClickChangeExpIndex(experience.id)}
                    />
                ))}
            </div>
        </div>
    )    
}