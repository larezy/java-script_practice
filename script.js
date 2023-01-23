
    /*let js = 'amazing';
    console.log(40 + 8 + 23 - 10);

    console.log('james');
    console.log(23);
    let firstname ='lael';
    console.log(firstname);
    
    
    // let javaScriptIsFun = true;
    // console.log(javaScriptIsFun);
    
    // console.log(typeof true);
    // console.log(typeof javaScriptIsFun);
    // console.log(typeof 23);
    // console.log(typeof 'lael');
    
    let year;
    console.log(year);
    console.log(typeof year);
    
    const ageJames = 2037 -1991;
    const ageSarah = 2037 -2018;
    console.log(ageJames,ageSarah);    
    console.log(ageJames * 2,ageSarah / 10, 2**3);   
    
    const firstName = 'Jonas';
    const lastName = ' Schmedtmann';
    console.log(firstName+ ' '+lastName)

    let x = 10 + 5;
    console.log(x + ' Just dey play');
    console.log(' MY NAME IS '+ firstName+ lastName+' AND I AM '+ ageJames +' years old');

    x+=10;

    console.log(ageJames > ageSarah);
    console.log(ageSarah >= 18);

    const isFullAge = ageSarah >= 18;
    
    const now = 2037;
    const ageJonas = now - 1991;
        const ageSarah = now - 2018;
        console.log(now - 1991 > now - 2018);

        
        console.log('Test-Data 1 \n');
        
        //firstly Store Mark's and John's masss and height in variables.
        
        let markMass = 78, markHeight = 1.69, markBMI;
        let johnMass =92, johnHeight = 1.95, johnBMI;

markBMI = markMass / (markHeight **2);
johnBMI = johnMass / (johnHeight **2);

console.log('Mark\'s BMI is :- ' + markBMI +'kgm^-1' + ' \nJohn\'s BMI is :- ' + johnBMI +'kgm^-1')

let markHigherBMI = markBMI > johnBMI;

console.log(typeof markHigherBMI);
console.log( markHigherBMI);


console.log('Test-Data 2 \n'); 
//data 2


markMass = 95, markHeight = 1.88;
johnMass =85, johnHeight = 1.76;

markBMI = markMass / (markHeight **2);
johnBMI = johnMass / (johnHeight **2);

console.log('Mark\'s BMI is :- ' + markBMI +'kgm^-1' + ' \nJohn\'s BMI is :- ' + johnBMI +'kgm^-1')

markHigherBMI = markBMI > johnBMI;

console.log(typeof markHigherBMI);
console.log( markHigherBMI);


const age = 15;


if(age >= 18){
    console.log('Sarah can start driving license 🚗')
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years 😊`)};



        console.log('Test-Data 1 \n');
        
        //firstly Store Mark's and John's masss and height in variables.
        
        let markMass = 78, markHeight = 1.69, markBMI;
        let johnMass =92, johnHeight = 1.95, johnBMI;

markBMI = markMass / (markHeight **2);
johnBMI = johnMass / (johnHeight **2);

/*console.log('Mark\'s BMI is :- ' + markBMI +'kgm^-1' + ' \nJohn\'s BMI is :- ' + johnBMI +'kgm^-1')

let markHigherBMI = markBMI > johnBMI;

console.log(typeof markHigherBMI);
// console.log( markHigherBMI);

if(markBMI > johnBMI){
    console.log('Mark\'s BMI is higher than John\'s!')
}else{
    console.log('John\'s BMI is higher than Mark\'s!')
}

if(markBMI > johnBMI){
    console.log(`"Mark\'s BMI is ${Math.round(markBMI)} higher than John\'s ${Math.round(johnBMI)}!"`)
}else{
    console.log(`"J"ohn\'s ${Math.round(johnBMI)} BMI is higher than Mark\'s ${Math.round(markBMI)}!"`)
}


//type conversion
let inputyear = '1991';

console.log(18);
console.log(inputyear + 18);
console.log(Number(inputyear) + 18);
console.log(String(inputyear));
console.log(Number(inputyear));

//type coersion

console.log('I am '+ 23 + ' years old');


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 'Jacob';
if(money){
    console.log("Don't splend it all ")
}else{
    console.log('You should get a job! ')
}


const age = '18';
if(age === 18){
    console.log("You just became an adult :D (strict)");
}
if(age == 18){
    console.log('You just became an adult :D (loose)')
}

prompt("What's your favourites number?");

//console.log('Pls, enter your name below');
const fullName = prompt("What's your name?");
const userAge = Number(prompt("What's your Age"));
//const userAge = prompt("What's your Age");

console.log(`
Your name is ${fullName}, and i am ${userAge} years old 
`)


if(userAge === 18){
    console.log('You just became an adult :D (loose)')
}

console.log(userAge);
//Coding Challenge #3

let dolphinScore = 96 + 108 +89;
let dolphinAverage = dolphinScore/3;

let koalasScore = 96 + 89 +108;
let koalasAverage = koalasScore/3;

console.log(`Dolphin_Average score is ${dolphinAverage} and Koalas_Average  Score is ${koalasAverage}`)

//challenge 2
if(dolphinAverage>koalasAverage){
    console.log("Dolphins is the winner of the competition")
}else if(dolphinAverage===koalasAverage){
    console.log("The both team's drew")
}else{
    console.log("Koalas is the winneer of the competition")
}


// test bonus 1
let dolphinScore = 97 + 122 +101;
let dolphinAverage = dolphinScore/3;

let koalasScore = 109 + 95 +123;
let koalasAverage = koalasScore/3;

let dolphins = dolphinAverage >=100;
let koalas = koalasAverage >=100;

console.log(`Dolphin_Average score is ${dolphinAverage} and Koalas_Average  Score is ${koalasAverage}`)

//challenge 2
if(dolphins && koalas ){ 
if(dolphinAverage>koalasAverage){
    console.log("Dolphins is the winner of the competition")
}else if(dolphinAverage===koalasAverage){
    console.log("The both team's drew")
}else{
    console.log("Koalas is the winneer of the competition")
}

}

const day = 'monday';
switch (day){
    case 'monday':
console.log ('Plan course structure');      
console.log ('Go to coding meetup');break;
    case 'tuesday':
        console.log ('prepare theory videos');break;
    case 'wednesday' :
    case 'thursday' :
        console.log('Write code examples');break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');break;

        default:
            console.log('Not a valid day')

}

//if statement
if(day === 'monday'){
    console.log('monday');
}else if (day === 'tuesday'){
    console.log('prepare theory videos');
}
else if (day === 'wednesday' || day ==='thursday'){
    console.log('Write code examples');
}
else if (day === 'friday'){
    console.log('Record code'); 
}

else if (day === 'saturday' || day ==='sunday'){
    console.log('Enjoy the weekend');
    
    else{
        consolelog('Not a Valid day!')
        
    }
}

const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 🥛')*/

let billValue = 427;
let totalValue;
let tip;

billValue >=50 && billValue<=300 ?console.log(`Your tips is 15% which is : ${(15 * billValue)/100}`) :console.log(`Your tips is 20% which is : ${(20 * billValue)/100}`);

totalValue = (billValue + tip)
console.log(`\nThe bill was ${billValue}, the tip was ${tip}, and the total value ${totalValue} `)

