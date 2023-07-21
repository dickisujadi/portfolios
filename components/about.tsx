import {
  montserrat_100,
  montserrat_200,
  montserrat_300,
  montserrat_400,
} from "@/common/fonts";

export default function About() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className={`${montserrat_100.className} text-7xl sm:text-5xl`}>
        DICKI <span className={montserrat_400.className}>SUJADI</span>
      </h1>
      <p className={`${montserrat_300.className} text-4xl sm:text-2xl`}>
        Front End Engineer
      </p>
      <p className={`${montserrat_200.className} text-3xl sm:text-xl`}>
        Indonesia
      </p>
    </div>
  );
}
