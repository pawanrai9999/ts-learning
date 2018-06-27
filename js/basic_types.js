var num = 34;
var bool = true;
var col = "blue";
var numarr = [1, 3, 45, 45];
var tup;
tup = ["hello", 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Undefined"] = 2] = "Undefined";
    Gender[Gender["NotToSay"] = 3] = "NotToSay";
})(Gender || (Gender = {}));
var gen = Gender.Male;
var notSure = 4;
notSure = "String";
notSure = false;
function dontRet() {
    alert("I don't return anything");
}
