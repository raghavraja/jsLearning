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

//-------------------START----------------------------------------------------------
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

// ---------------------END---------------------------------------------------------



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



//----------------END---------------------------------------------------------
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
//------------------END-----------------------------------------------------

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
//---------------------------END--------------------------------------------



// Loop concept
//FOR LOOP, WHILE LOOP, DO WHILE, FOR IN LOOP, FOR OF LOOP
//for( initialExpression; condition; step)

let fruits = ['apple', 'Bannana', 'orange', 'red banana']
for (let i = 0; i<fruits.length; i++){
console.log(fruits[i]);
document.write(fruits[i] + " " + "</br>")
}



// looping odd number and even number;
for(let i = 1; i<2; i++){
// console.log(i);
if(i%2 !== 0){
    document.write("Hello" + " " +i + "</br>");
}
}
//----------------END---------------------------------------------------


// while loop

let ark = 2;
while(ark >= 1){

if(ark % 2 !== 0){
    document.write("Hello" + " " +ark + "</br>");
}
ark--;
}


// for in loop object 

let person = {
personName: "Rajaji",
age:28,
liveLocation: "chennai",
}


for(let userDetails in person){
document.write(userDetails+ ":" + " " + person[userDetails] + " " + "</br>" );

}

//-----------------------END---------------------------------------------------

// for in loop Array

let colors = ['yellow', 'blue', 'green', 'red'];
for(let key in colors){
document.write(key + " " + colors[key] + "</br>");
}

//for of loop
for(let color of colors){
    document.write("colors:" + color + "</br>");
}

//-----------------------END----------------------------------------------------


//object OOP(object orented program)


 let userDetails = {
person_firstName: "Rajesh",
person_secondName: "Kanna",
person_age:28,
isalive:true,
person_location: "chennai",
person_hobbies: ['cricket', 'football', 'Archery'],
person_family: {

    father: "Kasivel",
    Mother: "Pawn Ammal",
},
greeting: function(){
let mart = `hi my name is${this.person_firstName} my hoobeis are ${this.person_hobbies}
my family members father: ${this.person_family.father} , Mother: ${this.person_family.Mother}`;
console.log(mart);
}
};

console.log(userDetails.person_age);
userDetails.greeting(); 

//---------------------------------END--------------------------------------------


// factory function 

function createperson(person_firstName, person_secondName, person_age ){
return{
    person_firstName : person_firstName,
    person_secondName: person_secondName,
    person_age : person_age,
    greeting : function(){
        let msg = `my name is${this.person_firstName} ${this.person_secondName}`;
        console.log(msg);
    }
};

};

let raj = createperson("Rajaji", "Kasivel", 28);
let arjun = createperson("Arjun", "Max", 27);

console.log(arjun.person_firstName + " " + arjun.person_secondName);
raj.greeting();
arjun.greeting();

//-----------------------------END---------------------------------


// construtur function  --- need to practice factory function and cunstruction function

function Person(name){
this.name = name;

this.greet = () => {
    console.log(`${name}`);
}

};

let mark = new Person("kishore");
let kisk = new Person("kishore");
mark.greet();
kisk.greet();

//--------------------------------------END------------------

// dynamic object in javascript

let zoho = {

    userName : "Rajaji",
}
zoho.age = 28;

zoho.greeting = function(){
console.log("makya" + this.userName);
}
delete zoho.age;
console.log(zoho);
zoho.greeting();

//--------------------------END--------------------------
// construtor property

let abx =  new String("hello max");
//let abx = "hello";
let abr = new Number(24);
let xrb = new Boolean(true);
let maxo = new Array(1,2,3,34,)
let ortix = new Object();
console.log(abx[0], abx[2]);
//---------------END---------------------------------------


let baby = "dhiya";
let baby2 = new String("dheera");
console.log(baby, baby2);

let mte1 = {};
let mte = new Object();


function Userpoint(name, age, school){
    this.name = name;
    this.age = age;
    this.school = school;
    this.macaro  = ()=> {
    console.log(this.name + this.school);
    }
    console.log(`over all output ${this.name} ${this.age}`);
    }
    
    let upoint = new Userpoint("Rajaji", 28, "Zoho Schools")
    upoint.macaro();
    console.log(upoint['name']); 

    for ( let key in upoint){
        console.log(`tenderrrrr ${key}: ${upoint[key]}`);
    };

    for(let marx of Object.keys(upoint)){
    console.log(marx);
    }


    for(let dingo in upoint){
        console.log("maxertt", dingo);
    }

    for (let minto of Object.values(upoint)){
        console.log("cererytr"  + minto);
    }

    for(let sis of Object.entries(upoint)){
    console.log(sis);
    }

    if('school' in upoint){
        console.log("yes");
    }
    else{
        console.log("no");
    }


let another = Object.assign([], upoint)
console.log(another);

let mango = {...upoint}
console.log(mango);


let name3 = "banana";

switch(name3){
case ("banana") : console.log("hello ");
break;
case("apple"): console.log();
break;
}

//math.pi
console.log(Math.PI);

//Math.absloute
console.log(Math.abs(-4));

let digrer = Math.max(12,67,89,3,45);
let digrer2 = Math.min(12,67,89,3,45);
console.log(digrer2);

//maximum mark

let schoolMarks = [45,76,89,12,34];
let highMark = Object.assign([], schoolMarks)
let grt = Math.max(...highMark);
console.log(grt);


let firstName = new String ("Rajaji hello world");
let lastName = "Kasivel";

//string object 
console.log(firstName.length);
console.log(firstName.charAt(3));
let connect = firstName.concat( " ", lastName);
let inc = firstName.includes("hello");
let ender = firstName.endsWith("world");
let stra = firstName.startsWith("Rajaji")
let ender2 = firstName.endsWith("world")
let inder = firstName.indexOf("hello");
let bmr = firstName.lastIndexOf("w");
console.log(connect);
console.log("yes data is available:" + " " + inc);
console.log(ender);
console.log("start with" + " "+ stra);
console.log("End with" + " " +  ender);
console.log(inder);
console.log("super man" + bmr);

<<<<<<< HEAD
let msr = new Date();
let [month, date, year] = [msr.getMonth(), msr.getDate(), msr.getFullYear()]
console.log(month,date,year);
=======
let crm = "Neela Magam";
let inrs = crm.indexOf("l");
console.log(inrs);
let larin = crm.lastIndexOf();
console.log(larin);
let repe = crm.repeat(14);
console.log(repe);
let repl = crm.replace(crm, "Arun");
console.log(repl);
console.log(crm);
console.log(crm.split(" ", 1));
let subr = crm.substring(6);
console.log(subr);
let upper = crm.toUpperCase();
console.log(upper);
let lower = crm.toLowerCase();
console.log(lower);
let trimmer =  "\"Hello i am Rajaji\", i am working in zoho";
console.log(trimmer.trim());
console.log(trimmer.trimStart());
let numso = "1 + 5"
console.log(numso.valueOf());
console.log(eval(numso));
console.log(eval(numso.valueOf()));


// Template Littrals
let message = `Hello super "hero"
where are
you from`
console.log(message);


//date and object
let timmers = new Date(1995, 11, 7);
console.log(timmers);


let mncr = new Date()
let [month, year, date] = [mncr.getMonth, mncr.getFullYear, mncr.getDay]
console.log(month, year, date);


let fruits2 = ['Apple'];
fruits2[0]  = 'mango';
fruits2[1]  = 'orange';
fruits2[2]  = 'Apple';

let arr = ['hello Rajaji', 'welcome to Array', fruits2];
let obr = {crack: 'smack'}


console.log("Hello arr" + (arr[2]));
console.log(fruits);
console.log(fruits2[0] + " " +  fruits2[2]);

for(let orbit in obr)
{
    console.log(orbit + " " + obr[orbit]);
}


// Array
let favcolors = ['red', 'blue', 'green'];
favcolors[4] = 'black';
console.log(favcolors);
console.log(favcolors.length);


//Adding array in existing array value
const cart = ['Hello', 1, true, null, undefined];
document.write(cart[4] + '</br>');


const openCart = ['html', 'javascript', 'css']
//push
openCart.push('mangodb')
//unshift
openCart.unshift('ajax')
//splice
openCart.splice(2, 0, {banana: "yellostone"});
openCart.splice(4,0, "sniper")
console.log(openCart[3]);
document.write(openCart[2].banana);

//finding elements in Array primitive values

const findCart = ['price', 'value', 'count', 'maximum'];
console.log(findCart.indexOf('maximum'));
console.log(findCart.includes('value'));


if(findCart.includes('value') == 1)
{
    console.log("micro");
}

else{
console.log('nato');
};


// finding elements Array reference value
let books = [

    { id:1, uname:"rajaji", class:'b'},
    {id:2, uname:"Navin", class:"c",},   
]

console.log(books.find(function(order){
console.log(order);

}));









































>>>>>>> 425fbacdd25ff3624a916e2ada09e1a4f9501374
