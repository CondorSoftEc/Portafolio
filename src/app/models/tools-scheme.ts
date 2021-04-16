export interface Tools {
    name: string;
    software: Array<{
        image: string;
        title: string;
        url: string;
        description: string;
        panelOpen: boolean;
    }>
}