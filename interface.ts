// function printLabel(labelledObj: { label: string}){
//     console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);
//----------------Using Interface---------------
interface labelledValue{
    label: string;
    value?: number;
}

function printLabel(labelledObj: labelledValue){
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size of 10 object"};
printLabel(myObj);