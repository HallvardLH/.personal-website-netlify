import { BrandType } from "~/components/project/logo";

export type Project = {
    id: string;
    title: string;
    byline: string;
    description: string[];
    technologies: BrandType[] | string[];
    date: string;
    github: string;
    image: string;
    gallery?: string[];
    demo?: string;
};