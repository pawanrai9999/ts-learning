let num: number = 34;
let bool: boolean = true;
let col: string = "blue";
let numarr: Array<number> = [1, 3, 45, 45];
let tup: [string, number];
tup = ["hello", 10];
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
enum Gender {
    Male,
    Female,
    Undefined,
    NotToSay
}
let gen: Gender = Gender.Male;
let notSure: any = 4;
notSure = "String";
notSure = false;

function dontRet(): void {
    alert("I don't return anything");
}