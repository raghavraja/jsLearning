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

//-------------------START------------------------------------
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

// ---------------------END--------------------------------