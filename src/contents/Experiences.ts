import sqe from "../assets/sqe.svg";
import eaciit from "../assets/eaciit.svg";
import kano from "../assets/kano.svg";
import mitrais from "../assets/mitrais.svg";
import im2 from "../assets/im2.svg";
import bsi from "../assets/bsi.svg";
import { Experience } from "../static/Interfaces";

export const experiences: Experience[] = [
  {
    id: 0,
    company: "SQE",
    country: "Indonesia",
    period: "Jan 2023 – present",
    position: "Senior Front End Engineer",
    jobDescHeader:
      "Participating in Customer Care application which has chat and video call features, jod description such as:",
    jobDesc: [
      "Developed and shipped features, by doing code on UI parts, collaborated with product team, and worked together with Back-End engineers.",
      "Sped up features development, by conducting a 1-on-1 either group meeting of engineers from different roles.",
      "Led state-management researched which used on the apps, reported on confluence documentation, presented the results on platform engineering meeting.",
      "Prioritized features which aligned with MVP, by doing and leading the development from my side and other engineers from the same either different teams.",
      "Demonstrated simply-and-clear review on pull-requests by teammates.",
    ],
    logo: sqe,
    color: "text-eaciit",
    industry: "Financial Digital Service",
  },
  {
    id: 1,
    company: "Eaciit",
    country: "Singapore",
    period: "Jan 2022 - Dec 2022",
    position: "Front End Engineer",
    jobDescHeader:
      "Built cash-flow management products and focused on User Interface building, job descriptions such as:",
    jobDesc: [
      "Collaborated with Back-End Engineers to design JSON objects which used on UI.",
      "Improved code efficiency on UI by designing and developing data-driven components using React.",
      "Reduced time and space complexity on UI by analyzing, debugging and modifying code, and advising teammates.",
      "Organized state management using Redux-Saga by REST API integration and structured data responses.",
    ],
    logo: eaciit,
    color: "text-eaciit",
    industry: "Oil and Gas Industry",
  },
  {
    id: 2,
    company: "Kano",
    country: "Indonesia",
    period: "Apr 2020 - Dec 2021",
    position: "Software Engineer",
    jobDescHeader:
      "Managed Sampoerna's (big tobacco company in Indonesia) Sales System with job descriptions such as:",
    jobDesc: [
      "Cooperated with client's stakeholders to gather business-values, translated into technical solutions and implemented using C# .Net and SQL Server features.",
      "Presented technical solutions which meet business-values by conducting UAT.",
      "Enhanced existing-application to increase business efficiency by monitoring referred to a set of metrics (KPIs) and evaluation categories.",
    ],
    logo: kano,
    color: "text-kano",
    industry: "Retail Industry",
  },
  {
    id: 3,
    company: "Mitrais",
    country: "Indonesia",
    period: "Apr 2018 - Jun 2019",
    position: "Software Engineer",
    jobDescHeader:
      "Built a reward system for employees, job descriptions such as:",
    jobDesc: [
      "Participated into initiation, planning, and developments.",
      "Built Back-End application which produce REST API using Node JS.",
      "Developed Front-End components and integrated with REST API using React.",
    ],
    logo: mitrais,
    color: "text-mitrais",
    industry: "",
  },
  {
    id: 4,
    company: "BSI (Mitrais' Client)",
    country: "Indonesia",
    period: "Aug 2018 - Jan 2019",
    position: "Business Analyst",
    jobDescHeader:
      "Enhanced Mitsubishi's Sales System, job descriptions such as:",
    jobDesc: [
      "Gathering business value from client's stakeholders, translating into technical solutions to be provided to developers.",
      "Organized technical documentations to be presented on UAT and SIT with client's stakeholders.",
    ],
    logo: bsi,
    color: "text-mitrais",
    industry: "Retail Industry",
  },
  {
    id: 5,
    company: "Indosat Mega Media",
    country: "Indonesia",
    period: "Sep 2012 - Jul 2013",
    position: "Project Lead",
    jobDescHeader:
      "Participated in SuperWifi project with job descriptions such as:",
    jobDesc: [
      "Did survey on client site for installation of network devices based on network coverages and obstacles.",
      "Managed and directed vendors on client site survey, installation and integration of network devices.",
      "Responsible for Company Partners work permits.",
      "Bridged vendors and internal company management and client.",
    ],
    logo: im2,
    color: "text-im2",
    industry: "Telecommunication Industry",
  },
];
