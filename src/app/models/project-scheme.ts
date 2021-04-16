export interface Project {
    id:string;
    name: string;
    image: string;
    icon: string;
    type: string;
    description: string;
    achievements: {name:string, description:string}[];
    captures: {
        image: string;
        thumbImage: string;
        alt: string;
        title: string;
    }[];
    tech: {name: string, url:string}[];
    references: {
        icon: string,
        url: string
    }[];
}

