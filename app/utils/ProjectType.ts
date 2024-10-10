import { BrandType } from "~/components/project/logo";

export type Project = {
    id: number;
    title: string;
    byline: string;
    description: string[];
    technologies: BrandType[];
    date: string;
    github: string;
    image: string;
    gallery?: string[];
    demo?: string;
};