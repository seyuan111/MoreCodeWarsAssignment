//If you can't sleep, just count sheep

//Given a non-negative integer, 3 for example, return a string with a
//murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid,
//i.e. no negative integers.

var countSheep = function(num){
  let str = ""

  for(let i = 1; i <=num; i++){
      str += i.toString() + ' sheep...';
  }
return str
}

//Consider an array/list of sheep where some sheep may be missing from
//their place. We need a function that counts the number of sheep present
//in the array (true means present).

//For example,

//[true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true]

//The correct answer would be 17.

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length
}


//Merge two sorted arrays into one

function mergeArrays(arr1, arr2){
    let sortedArray = arr1.concat(arr2).sort((a,b) => a-b);
    let updatedArray = (array) => [...new Set(array)];
    return updatedArray(sortedArray);
}

//Difference of Valumes of Cuboids

function findDifference(a,b){
    return Math.abs( (a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]));
}

//Removing Elements

function removeEveryOther(arr){
    for(let i=1; i < arr.length; i++){
        arr.splice(i,1);
    }
    return arr;
}

//Round up to the next multiple of 5

function roundToNext5(n){
    return Math.ceil(n/5) * 5;
}

//Rock paper scissors

const rps = (p1, p2) => {
  
    if((p1 === "scissors" && p2 === "paper") || (p1 === "rock" && p2 === "scissors") || (p1 === "paper" && p2 === "rock")){
      return "Player 1 won!"
    }else if((p1 === "paper" && p2 === "scissors") || (p1 === "scissors" && p2 === "rock") || (p1 === "rock" && p2 === "paper")){
      return "Player 2 won!"
    }else if(p1 === p2){
      return "Draw!"
    }
  };

//will you make it. 

//You were camping with your friends far away from home, but when it's
//time to go back, you realize that your fuel is running out and the
//nearest pump is 50 miles away! You know that on average, your car runs
//on about 25 miles per gallon. There are 2 gallons left. Considering
//these factors, write a function that tells you if it is possible to
//get to the pump or not. Function should return true
//(1 in Prolog, NASM and COBOL) if it is possible and false
//(0 in Prolog, NASM and COBOL) if not. The input values are always
//positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(distanceToPump <= mpg * fuelLeft){
      return true
    }else {
      return false
    }
  };

//pillars

//There are pillars near the road. The distance between the pillars is
//the same and the width of the pillars is the same. Your function accepts
//three arguments:

//number of pillars (??? 1);

//distance between pillars (10 - 30 meters);

//width of the pillar (10 - 50 centimeters).

//Calculate the distance between the first and the last pillar in
//centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
    if(num_pill <=1){
      return 0;
    }else{
      return num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100)
    }
  }

//Narcissistic Numbers

//A Narcissistic Number is a number of length n in which the sum of its
//digits to the power of n is equal to the original number.
//If this seems confusing, refer to the example below.

//Ex: 153, where n = 3 (number of digits in 153)
//13 + 53 + 33 = 153

function isNarcissistic(n){
    return n === n.toString().split('').reduce((s,v,i,arr) => s + Math.pow(v, arr.length),0)
  }

//parse nice Int from char problem

function getAge(inputString){
    return parseInt(inputString);
}

//count of positives sum of negatives

//Return an array, where the first element is the count of positives
//numbers and the second element is sum of negative numbers. 0 is neither
//positive nor negative.
//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
  
    if(input === null || input.length === 0){
      return []
    }else{
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num)
    }
  return [positiveNums, negativeNums]
}

//To square(root) or not to square(root)

//Write a method, that will get an integer array as parameter and will
//process every number from this array.

//Return a new array with processing every number of the input-array
//like this:

//If the number has an integer square root, take this, otherwise
//square the number.

function squareOrSquareRoot(array) {
    return array.map((item) => Math.sqrt(item) == Math.sqrt(item).toFixed(0) ? Math.sqrt(item) : item * item)
}

//Simple, remove the spaces from the string, then return the resultant
//string.

function noSpace(x){
  return x.split(" ").join("")
}

//String cleaning

//Your boss decided to save money by purchasing some cut-rate optical
//character recognition software for scanning in the text of old novels
//to your database. At first it seems to capture words okay, but you
//quickly notice that it throws in a lot of numbers at random places in
//the text.

//Examples (input -> output)
//'! !'                 -> '! !'
//'123456789'           -> ''
//'This looks5 grea8t!' -> 'This looks great!'

//Your harried co-workers are looking to you for a solution to take this
//garbled text and remove all of the numbers. Your program will take in a
//string and clean out all numeric characters, and return a string with
//spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
  return s.replace(/[0-9]/g,"")
}

//Write a function that returns a string in which firstname is swapped
//with last name.

//nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

//We need a simple function that determines if a plural is needed or not.
//It should take a number, and return true if a plural should be used with
//that number or false if not. This would be useful when printing out a
//string such as 5 minutes, 14 apples, or 1 sun.

function plural(n) {
  if(n > 1 || n !==1){
    return true;
  }else{
    return false;
  }
}

//Don't give me five!

//In this kata you get the start number and the end number of a region
//and should return the count of all numbers except numbers with a 5 in it.
//The start and the end number are both inclusive!

function dontGiveMeFive(start, end) {
  let result = 0;
  for(let i = start; i <= end; i++){
    if(!/5/.test(i)){
      result++
    }
  }
  return result
}

//How good are you really?

//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than
//the average student in your class.

//You receive an array with your peers' test scores. Now calculate the
//average and compare your score!

//Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let average = classPoints.reduce((x,y) => x+y,0)/classPoints.length
  
  if(yourPoints > average){
    return true
  }else{
    return false
  }
}

//Lario and Muigi Pipe Problem

//Issue

//Looks like some hoodlum plumber and his brother has been running
//around and damaging your stages again.

//The pipes connecting your level's stages together need to be fixed
//before you receive any more complaints.

//Pipes list is correct when each pipe after the first index is
//greater (+1) than the previous one, and that there is no duplicates.

//Task

//Given the a list of numbers, return a fixed list so that the values
//increment by 1 for each index from the minimum value up to the maximum
//value (both included).

function pipeFix(numbers){
  
  let arr = []
  
  for(let i = numbers[0]; i <= numbers[numbers.length -1]; i++){
    arr.push(i)
  }
  return arr
}

//Find all pairs

//You are given array of integers, your task will be to count all pairs
//in that array and return their count.

//example

//[1, 2, 5, 6, 5, 2]  -->  2
//...because there are 2 pairs: 2 and 5

function duplicates(array){
  array = array.slice().sort()
  let count = 0;
  
  for(let i = 0; i < array.length; i++){
    if(array[i] === array[i+1]){
      count++
      array[i] = ''
      array[i+1] = ''
    }
  }
  return count
}

//I love you, a little , a lot, passionately ... not at all

//Who remembers back to their time in the schoolyard, when girls would take
//a flower and tear its petals, saying each of the following phrases each
//time a petal was torn:

//I love you
//a little
//a lot
//passionately
//madly
//not at all
//When the last petal was torn there were cries of excitement, dreams,
//surging thoughts and emotions.

//Your goal in this kata is to determine which phrase the girls would say
//for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    
  let arr = ["I love you","a little","a lot","passionately","madly","not at all"]
  
  for(let i = 0; i <= nbPetals; i++){
      arr.push(arr[i])
  }
return arr[nbPetals-1]
}

//Convert number to reversed array of digits

//Given a random non-negative number, you have to return the digits of this
//number within an array in reverse order.

//Example:
//348597 => [7,9,5,8,4,3]

function digitize(n) {
  let str = String(n)
  
  return str.split('').map(Number).reverse()
}

//Determine offspring sex based on genes XX and XY chromosomes

//If the sperm contains the X chromosome, return "Congratulations! You're
//going to have a daughter."; If the sperm contains the Y chromosome,
//return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
  if(sperm === "XX"){
    return "Congratulations! You're going to have a daughter."
  }else if(sperm === "XY"){
    return "Congratulations! You're going to have a son."
  }
}

//Convert a string to an array

//Write a function to split a string and convert it into an array of words.
//"Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string){

	return string.split(' ')

}

//Ghostbusters (whitespace removal)

//Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid
//of them and save the day!
//In this kata, strings represent buildings while whitespaces within those
//strings represent ghosts.

//So what are you waiting for? Return the building(string) without any
//ghosts(whitespaces)!

//Example: ghostBusters("Sky scra per");

function ghostBusters(building) {
  if (building.match(/ /)){
    return building.replace(/ /g, "")
  }else{
    return "You just wanted my autograph didn't you?"
  }
}

//Fake Binary

//Given a string of digits, you should replace any digit below 5 with '0'
//and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
  return x.split('').map((num) => num > 4 ? 1 : 0).join('')
 }

//Expressions Matter

//Given three integers a ,b ,c, return the largest number obtained after
//inserting the following operators and brackets: +, *, ()
//In other words, try every combination of a,b,c with [*+()] , and return
//the Maximum Obtained

//Example
//With the numbers are 1, 2 and 3 , here are some ways of placing signs
//and brackets:

//1 * (2 + 3) = 5
//1 * 2 * 3 = 6
//1 + 2 * 3 = 7
//(1 + 2) * 3 = 9

//So the maximum value that you can obtain is 9.

function expressionMatter(a, b, c) {
  let value = Math.max(
    a + b + c,
    a * b * c,
    a * b + c,
    a * (b + c),
    a + b * c,
    (a + b) * c
  )
  return value
}

//How many stairs will Suzuki climb in 20 years?

//Suzuki is a monk who climbs a large staircase to the monastery as part
//of a ritual. Some days he climbs more stairs than others depending on
//the number of students he must train in the morning. He is curious how
//many stairs might be climbed over the next 20 years and has spent a year
//marking down his daily progress.

//The sum of all the stairs logged in a year will be used for estimating
//the number he might climb in 20.

//20_year_estimate = one_year_total * 20

function stairsIn20(s){
  return s.reduce((steps,day) => steps.concat(day)).reduce((sum,count) => sum + count) * 20
}

//Is the string uppercase?

//Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}

//FIXME: Replace all dots

//The code provided is supposed replace all the dots . in the specified
//String str with dashes -

//But it's not working properly.

//Task

//Fix the bug so we can all go home early.

var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}

//String repeat

//Write a function that accepts an integer n and a string s as parameters,
//and returns a string of s repeated exactly n times.

//Examples (input -> output)
//6, "I"     -> "IIIIII"
//5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let str = "";
  
  for(let i = 0; i < n; i++){
    str += s
  }
  return str
}

//or

return s.repeat(n)

//Ce*s*r*d Strings

//My PC got infected by a strange virus. It only infects my text files and
//replaces random letters by *, li*e th*s (like this).

//Fortunately, I discovered that the virus hides my censored letters
//inside root directory.

//It will be very tedious to recover all these files manually, so your
//goal is to implement uncensor function that does the hard work
//automatically.

//Examples
//uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ??? "This is very strange"

//uncensor("A**Z*N*", "MAIG") ??? "AMAZING"

//uncensor("xyz", "") ??? "xyz"

function uncensor(infected, discovered) {
  let result = "", discoveredIndex = 0;
  
  for(let infectedIndex = 0; infectedIndex < infected.length; infectedIndex++){
    if(infected[infectedIndex] === "*"){
      result += discovered[discoveredIndex]
      discoveredIndex++
    }else{
      result += infected[infectedIndex]
    }
  }
  return result;
}

//or

const arr = [...discovered]
return [...infected].map(el=> el === '*' ? arr.shift() : el).join('')

//Find Maximum and Minimum Values of a List

//Your task is to make two functions ( max and min, or maximum and
//minimum, etc., depending on the language ) that receive a list of
//integers as input, and return the largest and lowest number in that
//list, respectively.

//* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//* [42, 54, 65, 87, 0]             -> min = 0, max = 87
//* [5]                             -> min = 5, max = 5

var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}

//Object Oriented Piracy

//You are a leader of a small pirate crew. And you have a plan. With the
//help of OOP you wish to make a pretty efficient system to identify ships
//with a heavy booty on board.

//Unfortunattely for you, people weigh a lot this days, so how do you know
//if a ship if full of gold and not people?

//You begin with writing a generic Ship class / struct:

//function Ship(draft,crew) {
// this.draft = draft;
// this.crew = crew;
//}

//Every time your spies see a new ship enter the dock, they will create a
//new ship object based on their observations:

//draft - an estimate of the ship's weight based on how low it is in the
//water
//crew - the count of crew on board
//var titanic = new Ship(15, 10);
//Taking into account that an average crew member on board adds 1.5 units
//to the draft, a ship that has a draft of more than 20 without crew is
//considered worthy to loot. Any ship weighing that much must have a lot
//of booty!

//Add the method

//isWorthIt
//to decide if the ship is worthy to loot. For example:

//titanic.isWorthIt() // return false

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function(){
    return this.draft - this.crew * 1.5 > 20
  }
 }

//A wolf in sheep's clothing

//Wolves have been reintroduced to Great Britain. You are a sheep farmer,
//and are now plagued by wolves which pretend to be sheep. Fortunately,
//you are good at spotting them.

//Warn the sheep in front of the wolf that it is about to be eaten.
//Remember that you are standing at the front of the queue which is at the
//end of the array:

//Examples
//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

//Input: ["sheep", "sheep", "wolf"]
//Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
  let sheep = queue.reverse()
  
  for(let i = 0; i < queue.length; i++){
    if (sheep[0] === "wolf"){
      return "Pls go away and stop eating my sheep"
    }else{
      return `Oi! Sheep number ${sheep.indexOf("wolf")}! You are about to be eaten by a wolf!`
    }
  }
}

//Dot Calculator

//You have to write a calculator that receives strings for input. The dots
//will represent the number in the equation. There will be dots on one
//side, an operator, and dots again after the operator. The dots and the
//operator will be separated by one space.

//Here are the following valid operators :

//+ Addition
//- Subtraction
//* Multiplication
// // Integer Division
//Your Work (Task)

//You'll have to return a string that contains dots, as many the equation
//returns. If the result is 0, return the empty string. When it comes to
//subtraction, the first number will always be greater than or equal to
//the second number.

const dotCalculator = (equation) => {
  const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(' ');
  return '.'.repeat(operations[operator](left.length, right.length));
}

//Help Suzuki complete his chores!

//Suzuki has a long list of chores required to keep the monastery in good
//order. Each chore can be completed independently of the others and
//assigned to any student. Knowing there will always be an even number of
//chores and that the number of students isn't limited, Suzuki needs to
//assign two chores to each student in a way which minimizes the total
//duration of the day's work.

//For example, with the list of chores [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9],
//he'll need 6 students whose total workload will
//be: [7, 8, 8, 10, 10, 11] (as for [5+2, 4+4, 6+2, 8+2, 1+9, 9+2]).
//In this case, the maximal workload is minimized to 11 (=9+2. Keep in
//mind two chores must be assigned to each student involved).

//Input/output

//Input: 10 ??? chores length ??? 30, chores length is always even.
//Output: array of workloads, in ascending order.

function choreAssignment(chores) {
  return chores.sort((a,b) => a-b).map((cur, idx) => cur + chores[chores.length-idx-1]).splice(chores.length/2, chores.length/2).sort((a,b) => a-b);
}

//A Needle in the Haystack

//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but
//containing one "needle"

//After your function finds the needle it should return a message
//(as a string) that says:

//"found the needle at position " plus the index it found the needle, so:

//Example(Input --> Output)

//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
  let needle = 0;

  for(let i = 0; i <= haystack.length; i++){
      if(haystack[i] === 'needle'){
          needle = haystack.indexOf('needle');
      }

  }
 return `found the needle at position ${needle}`;
}

//reverse string

function solution(str){
  return str.split('').reverse().join('')
}