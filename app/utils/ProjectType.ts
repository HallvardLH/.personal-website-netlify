import { BrandType } from "~/components/project/logo";

export type Project = {
    id: string;
    title: string;
    byline: string;
    description: string[];
    technologies: BrandType[] | string[];
    date: string;
    github: string;
    play_store?: string;
    app_store?: string;
    image: string;
    gallery?: string[];
    gallery_captions?: string[];
    demo?: string;
};