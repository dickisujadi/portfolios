import eaciit from "../assets/eaciit.png";
import kano from "../assets/kano.png";
import mitrais from "../assets/mitrais.png";
import im2 from "../assets/im2.png";
import bsi from "../assets/bsi.png";
import { Experience } from "../typings/Interfaces";

export const experiences: Experience[] = [
    {
        id: 0,
        company: 'Eaciit Vyasa, Pte. Ltd',
        country: 'Singapore',
        period: 'Jan 2022 - Dec 2022',
        position: 'Front End Engineer',
        jobDescHeader: 'Built cash-flow management products and focused on User Interface building, job descriptions such as:',
        jobDesc: [
            'Collaborated with Back-End Engineers to design JSON objects which used on UI.',
            'Improved code efficiency on UI by designing and developing data-driven components using React.',
            'Reduced time and space complexity on UI by analyzing, debugging and modifying code, and advising teammates.',
            'Organized state management using Redux-Saga by REST API integration and structured data responses.'
        ],
        logo: eaciit,
        color: 'text-eaciit',
        industry: 'Oil and Gas Industry'
    },
    {
        id: 1,
        company: 'Pt. Kano Teknologi Utama',
        country: 'Indonesia',
        period: 'Apr 2020 - Dec 2021',
        position: 'Software Engineer',
        jobDescHeader: "Managed Pt. HM Sampoerna's Sales System with job descriptions such as:",
        jobDesc: [
            "Cooperated with client's stakeholders to gather business-values, translated into technical solutions and implemented using C# .Net and SQL Server features.",
            "Presented technical solutions which meet business-values by conducting UAT.",
            "Enhanced existing-application to increase business efficiency by monitoring referred to a set of metrics (KPIs) and evaluation categories."
        ],
        logo: kano,
        color: 'text-kano',
        industry: 'Retail Industry'
    },
    {
        id: 2,
        company: 'Pt. Mitrais',
        country: 'Indonesia',
        period: 'Apr 2018 - Jun 2019',
        position: 'Software Engineer',
        jobDescHeader: 'Built a reward system for employees, job descriptions such as:',
        jobDesc: [
            "Participated into initiation, planning, and developments.",
            "Built Back-End application which produce REST API using Node JS.",
            "Developed Front-End components and integrated with REST API using React."
        ],
        logo: mitrais,
        color: 'text-mitrais',
        industry: ''
    },
    {
        id: 3,
        company: "Pt. BSI (Mitrais' Client)",
        country: 'Indonesia',
        period: 'Aug 2018 - Jan 2019',
        position: 'Business Analyst',
        jobDescHeader: "Enhanced Mitsubishi's Sales System, job descriptions such as:",
        jobDesc: [
            "Gathering business value from client's stakeholders, translating into technical solutions to be provided to developers.",
            "Organized technical documentations to be presented on UAT and SIT with client's stakeholders."
        ],
        logo: bsi,
        color: 'text-mitrais',
        industry: 'Retail Industry'
    },
    {
        id: 4,
        company: "Pt. Indosat Mega Media",
        country: 'Indonesia',
        period: 'Sep 2012 - Jul 2013',
        position: 'Project Lead',
        jobDescHeader: "Participated in SuperWifi project with job descriptions such as:",
        jobDesc: [
            "Did survey on client site for installation of network devices based on network coverages and obstacles.",
            "Managed and directed vendors on client site survey, installation and integration of network devices.",
            "Responsible for Company Partners work permits.",
            "Bridged vendors and internal company management and client."
        ],
        logo: im2,
        color: 'text-im2',
        industry: 'Telecommunication Industry'
    }
]