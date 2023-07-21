import {
  montserrat_100,
  montserrat_200,
  montserrat_300,
  montserrat_400,
} from "@/common/fonts";

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
          I have delivered:
        </p>
        <p
          className={`${montserrat_300.className} text-xl my-6 mx-[10vw] sm:text-base sm:mx-0`}
        >
          <span className={`text-rose-700`}>Customer Care Application</span> is
          designed to facilitate communication between Customer and Agents
          (Employees) through chat, voice calls, or video calls
        </p>
        <p
          className={`${montserrat_300.className} text-xl mx-[10vw] sm:text-base sm:mx-0`}
        >
          <span className={`text-rose-700`}>SSO Application</span>, application
          that secured Authentication and Authorization of {"clients'"}{" "}
          Application
        </p>
      </div>
      <div className="flex flex-col w-3/5 mx-auto h-screen justify-center items-center text-center sm:w-5/6">
        <p className={`${montserrat_400.className} text-3xl sm:text-xl`}>
          Eaciit
        </p>
        <p className={`${montserrat_200.className} text-5xl mb-20 sm:text-3xl`}>
          Front End Engineer
        </p>
        <p className={`${montserrat_300.className} text-xl sm:text-base`}>
          I have delivered:
        </p>
        <p
          className={`${montserrat_300.className} text-xl my-6 mx-[10vw] sm:text-base sm:mx-0`}
        >
          <span className={`text-orange-700`}>
            Cashflow Management Applications
          </span>{" "}
          serve the purpose of overseeing and enhancing key performance
          indicators (KPIs) to achieve greater efficiencies and boost the
          generation of free cash flow.
        </p>
      </div>
    </>
  );
}
