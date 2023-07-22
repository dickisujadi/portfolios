import {
  montserrat_100,
  montserrat_200,
  montserrat_300,
  montserrat_400,
} from "@/common/fonts";
import LinkedInIcon from "./common/icons/linkedin";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col w-3/5 mx-auto h-screen justify-center items-center text-center sm:w-5/6">
        <p className={`${montserrat_400.className} text-3xl sm:text-xl`}>
          S-Quantum Engine
        </p>
        <p className={`${montserrat_200.className} text-5xl mb-20 sm:text-3xl`}>
          Senior Front End Engineer
        </p>
        <p className={`${montserrat_300.className} text-xl sm:text-base`}>
          I have delivered
        </p>
        <p
          className={`${montserrat_300.className} text-xl my-6 mx-[10vw] sm:text-base sm:mx-0`}
        >
          <span className={`text-rose-700`}>Customer Care Application</span>,
          that is designed to facilitate communication between Customer and
          Agents (Employees) through chat, voice calls, or video calls.
        </p>
        <p
          className={`${montserrat_300.className} text-xl mx-[10vw] my-6 sm:text-base sm:mx-0`}
        >
          <span className={`text-rose-700`}>SSO Application</span>, is an
          application that ensures the secure authentication and authorization
          of {"clients'"} applications.
        </p>
        <p
          className={`${montserrat_300.className} text-xl mt-28 mb-6 sm:text-base`}
        >
          See more on my LinkedIn
        </p>
        <LinkedInIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/dickisujadi/", "_blank")
          }
        />
      </div>
    </>
  );
}
