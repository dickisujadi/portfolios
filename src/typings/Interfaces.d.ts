export interface Experience {
    id: number,
    company: string,
    country: string,
    period: string,
    position: string,
    jobDescHeader: string,
    jobDesc: string[],
    logo: string,
    color: string,
}

export interface Page {
    name: string;
    pageIndex: number;
}