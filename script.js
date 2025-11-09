// Assignment -3

//Question 1
// let inputStr = "AbaDd";
// let counterA = 0;
// let counterD = 0;

// for(let i = 0 ; i < inputStr.length ; i++){

//     if(inputStr[i] === "A"){
//         counterA++;
//     }
//     if(inputStr[i] === "D"){
//         counterD++
//     }
// }

// console.log(`${counterA} ${counterD}`);


// Question 2 ******DOUBT******

// let string = "prepbytes";
// let count = 0;

// for(let i = 0 ; i < string.length ; i++){

//     for(let j = i+1 ; j < string.length ; j++){

//         // console.log(` ${i} ${j} ${string[j]}`);
//         // console.log(`${j} ${string[j]}`);
        

//         if(string[i] === string[j]){
            
//             count++;
//             console.log(`${string[i]} ${string[j]} ${count}`);
//         }
//     }
// }
// console.log(`${string}${count} `);


// Question 3

// let str = "Prepbytes";
// let lowerVowles = "aeiou"
// let upperVowles = "AEIOU"
// let count = 0;

// for (let i = 0; i < str.length; i++) {

//     for (let j = 0; j < str.length; j++) {
        

        
//         if((str[i] === lowerVowles[j]) || (str[i] === upperVowles[j])){
    
//             count++;
            
//         }

//     }
    
    
// }
// console.log(count);


// ---------------------------------------------------------------------------------------------

//Question 4

// let str1 = "Prep";
// let str2 = "bytes";

// let result = str1.concat(str2);
// console.log(result);


// ----------------------------------------------------------------------------------------------

// Question 5
// let str = "Kartik";
// let count = 0;

// for (let i = 0; i < str.length; i++) {

//     count++
    
    
// }

// console.log(`The length of the string is ${count}`);

//WITHOUT USING LENGTH FUNCTION AT ALL
// let str = "Kartik";
// let count = 0;

// while (str[count] !== undefined) {
//     count++;
// }

// console.log(`The length of the string is ${count}`);


// ---------------------------------------------------------------------------------------------------------------

// Question 6

// let str = "ADDADDDDDDA";
// let str = "AADD"
// let countA = 0;
// let countD = 0;

// for (let i = 0; i< str.length; i++) {

//     if (str[i] === "A") {

//         countA++
        
//     }
//     else{
//         countD++
//     }
// }

// if(countA > countD){
//     console.log(`Anish is winner`);
    

// }
// else if(countD > countA){
//     console.log(`Danish is the winner`);
    
// }
// else{
//     console.log(`Draw Match`);
    
// }


// -------------------------------------------------------------------------------------------------------------------------------------

// Question 7

// let str1 = "kartik";
// let str2 = "Bhatt"

// let result = str1.concat(str2);

// console.log(result);


// ------------------------------------------------------------------------------------------------------------------

// Question 8
// let str = "racecar";
// let isPalindrome = true;
// for (let i = 0; i < str.length / 2; i++) {
    
//     if(str[i] !== str[str.length - 1 - i]){

//         isPalindrome = false;
//         break;

//     }
    
// }

// if (isPalindrome) {

//     console.log(`Its a Palindrome`);
    
    
// }
// else{
//     console.log(`Its not palindrome`);
    
// }


// --------------------------------------------------------------------------------------------------------------------------------
// Question 9
// let str = "Kartik Bhatt";

// let reverseString = "";

// for (let i = str.length - 1; i >= 0 ;i--) {

//     reverseString = reverseString + str[i];
    
    
// }

// console.log(reverseString);

// ------------------------------------------------------------------------------------------------------------------------------
// Question 10

// let str1 = "kartik";
// let str2 = "kartik";

// if (str1.toLowerCase() === str2.toLowerCase()) {

//     console.log(`Strings are same`);
    
    
// }
// else{
//     console.log(`They ar not Same`);
    
// }

// ----------------------------------------------------------------------------------------------------------------------------------
//Question 11

// let str = "Hi , I am You. You Prepbytes";

// let result = str.replaceAll("You" , "")
// console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------
//Question 12

// let str = "I am kartik bhatt";

// let result = str.split(" ")
// console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------

//Question 13
// let str = "Kartik";

// let lowerCaseVowles = "aeiou";
// let upperCaseVowles = "AEIOU";
// let vowlesCount = 0;
// let cosonantCount = 0;

// for (let i = 0; i < str.length; i++) {
    
//     if(lowerCaseVowles.includes(str[i]) || upperCaseVowles.includes(str[i])){

//         vowlesCount++
        
//     }
//     else{
//         cosonantCount++;
//     }
    
// }


// console.log(`Vowles count ${vowlesCount} & Consonant Count ${cosonantCount}`);




















