import { LightningElement } from 'lwc';

export default class TemplateLoop extends LightningElement {

    carList = ["Ford","Honda","Hyundai","Tata","Skoda","Mahindra"];

    programList = [
        {
            id : "123456",
            language : "Apex",
        },
        {
            id : "123457",
            language : "Java",
        },
        {
            id : "123458",
            language : "Ruby",
        },
        {
            id : "123459",
            language : "Python"
        }
    ];

    ceoList = [
        {
            id : 1,
            company : "Google",
            name : "Sundar Pichai",
        },
        {
            id : 2,
            company : "Amazon",
            name : "Jeff Bezos",
        },
        {
            id : 3,
            company : "FaceBook",
            name:"Mark Zukerberg",
        },
        {
            id : 4,
            company : "Apple",
            name : "Tim Cook",
        }
    ];
}