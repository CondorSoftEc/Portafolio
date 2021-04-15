export interface Project {
    name: string;
    image: string;
    icon: string;
    type: string;
    description: string;
    achievements: string[];
    captures: {
        image: string;
        thumbImage: string;
        alt: string;
        title: string;
    }[];
    tech: string[];
    references: {
        icon: string,
        url: string
    }[];
}
