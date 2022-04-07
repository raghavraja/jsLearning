//conditional opreators
// Ticket System
// above 18 will be consider as a adult;
// belove 17 will be consider as a children;

let age = 17;
let ismale = false;
if (age >= 18 && ismale) {
    console.log("Adult: Male: TIcket Price is Rs:20");
} else if (age >= 18 && ismale == false) {
    console.log("Adult: Female: Ticket Price is Rs: 15");
} else {
    console.log("Children: Ticket price is Rs:5");
}

//-------------------START--------------------------------------
// greeting app
// if hour is between 12am(0) to 13pm (12) --- good morning
// if hour is between 1pm(13) to 5pm (17) --- good evening
// if hour is between 5pm(17) to 12am(0) -- good night

let mis = new Date();
let clock = mis.getHours();

if (clock >= 0 && clock <= 13) {
    console.log("Good Morning");
} else if (clock >= 13 && clock <= 17) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening" + " " + "Time:" + clock);
}

// ---------------------END-------------------------------------

// switch case
// anna university grade system
// s- satisfied, a-grade, b-grade, e-grade, u-grade;

let grade = "e";
switch(grade){
case "s" : console.log(" S - satisfied grade ");
break;
case "a" : console.log("A - First Class Grade");
break;
case "b": console.log("B- Second Class Grade");
break;
case "r":
case "e": console.log("E- Just Pass");
break;
case "u": console.log("U - Failed Grade");
break;
default : console.log("Unknown Grade");
};
//----------------END--------------------------------------------
//switch condition

let marks = 97;
switch(true){
    case (marks <= 60) :
        console.log("Above avarage");
        break;
        case (marks > 90):
            console.log("Super grade");
            break; 
        default: console.log("unknown marks");
        
    
}
//------------------END------------------------------------------

//mobile buying options
// if given amount is > 10k then buy android mobile
// if given ammount is >50k then bye iphone mobile
// if given ammount is <5k || <10 k buy basic mobile


let savingAmountValue = 5000;

switch(true){
    case(savingAmountValue >= 50000):
console.log("Dear card holder you are eligable for buy iphone");    
break;
case (savingAmountValue >= 10000):
    console.log("Dear Card holder you are eligiable for buying andriod phone");
    break;
case(savingAmountValue>=5000 && savingAmountValue<=10000):
console.log("Dear card holder you are elgiable to buy basic phone");
break;
    default : console.log("you are not elgible to buy phone");
}
//---------------------------END--------------------------------

// Loop concept
//FOR LOOP, WHILE LOOP, DO WHILE, FOR IN LOOP, FOR OF LOOP
//for( initialExpression; condition; step)

let fruits = ['apple', 'Bannana', 'orange', 'red banana']
for (let i = 0; i<fruits.length; i++){
console.log(fruits[i]);
document.write(fruits[i] + " " + "</br>")

}
// looping odd number and even number;

for(let i = 1; i<10; i++){
// console.log(i);
if(i%2 !== 0){
    document.write("Hello" + " " +i + "</br>");
}
}
//----------------END--------------------------------------------


