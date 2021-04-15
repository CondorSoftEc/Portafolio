export interface Technology {
 name: string;
 code: Array<any>;
 example:{
     url: any;
     content: string;
     media: string;
 };
 image: string;
 description: string;
 showCode: boolean;
 showExample: boolean;
}