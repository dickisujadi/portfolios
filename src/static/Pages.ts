import { pagesMapping } from "../utilities/PagesMapping";
import { Page } from "./Interfaces";

export const contents : Page[] = [
    { 
        name: 'home',
        pageIndex: pagesMapping.home
    },
    { 
        name: 'portfolios',
        pageIndex: pagesMapping.portfolios
    },
    { 
        name: 'spaces',
        pageIndex: pagesMapping.spaces
    },
]