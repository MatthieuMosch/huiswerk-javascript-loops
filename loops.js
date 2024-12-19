// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================
console.log("Opdracht 1");
for (let i = 1; i < 6; i++) { //loop from 1 bcause firts line already has 1 *
    console.log("*".repeat(i)); //another option would have been to loop from 0 and use .repeat(i+1) on this line
}

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
console.log("Opdracht 2");
/*
for (let i = 0; i < 5; i++) { //this is a version with if..else which i think is being asked
    if (i<4) {
        console.log("loop...");
    } else{
        console.log("klaar!");
    }
}
*/

//the code in comment above is what is being asked, but this is a better version with the same result
for (let i = 0; i < 4; i++) {
    console.log("loop...");
}
console.log("klaar!");

// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
console.log("Opdracht 3");
for (let i = 0; i < 9; i++) {
    console.log(">".repeat(i / 3) + i);
}

// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================
console.log("Opdracht 4");
for (let i = 0; i < 100; i++) { //0 tot 100 is including 0 and without 100, the example output is from 1 to 100
    let outputString = "";
    if (i%3===0) outputString = "Fizz";
    if (i%5===0) outputString += "Buzz";
    if (outputString==="") {
        console.log(i);
    } else{
        console.log(outputString);
    }
}


