import eaciit from "../assets/eaciit.png";
import kano from "../assets/kano.png";

export const experiences = [
    {
        company: 'Eaciit Vyasa, Pte. Ltd',
        country: 'Singapore',
        period: 'Jan 2022 - Dec 2022',
        position: 'Front End Engineer',
        jobDesc: [
            'Collaborated with Back-End Engineers to design JSON objects which used on UI.',
            'Improved code efficiency on UI by designing and developing data-driven components using React.',
            'Reduced time and space complexity on UI by analyzing, debugging and modifying code, and advising teammates.',
            'Organized state management using Redux-Saga by REST API integration and structured data responses.'
        ],
        logo: eaciit,
        color: 'text-eaciit',
    },
    {
        company: 'Pt. Kano Teknologi Utama',
        country: 'Indonesia',
        period: 'Apr 2020 - Dec 2021',
        position: 'Software Engineer',
        jobDesc: [
            "Cooperated with client's stakeholders to gather business-values, translated into technical solutions and implemented using C# .Net and SQL Server features.",
            "Presented technical solutions which meet business-values by conducting UAT.",
            "Enhanced existing-application to increase business efficiency by monitoring referred to a set of metrics (KPIs) and evaluation categories."
        ],
        logo: kano,
        color: 'text-kano',
    }
]