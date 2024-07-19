    console.log("Hello Goldking, Welcome your ass to this shit");
    console.log("In order to succeed, you must nedd absolute consistency");
    // this is a comment
    /*This is a 
    comment
    comment
    comment
    multi-line comment*/

    var a = 27;
    var b = 22;

    var sum = 10 + 10;
    console.log(sum);

    var quotes = "and he said \"Do not eat from that plate\" ";
    console.log(quotes)

    var myString = "firstline\n\tsecondline\n\rthirdline\n\r\bfouthline";
    console.log(myString);

    var sentenceOne = "I like pizzas ";
    sentenceOne += "and eba";
    console.log(sentenceOne);

    sentenceOneLength = sentenceOne.length
    console.log(sentenceOneLength);

    firstLetterOfSentenceOne = sentenceOne[14];
    console.log(firstLetterOfSentenceOne);

    lastLetterOfSentenceOne = sentenceOne[sentenceOne.length - 1];
    console.log(lastLetterOfSentenceOne);


    console.log(a * b);

function changeOfEntropy(massOfGas, specificHeatOfGas, initialTemp, finalTemp) {
    var result = massOfGas * specificHeatOfGas * Math.log(initialTemp / finalTemp);
    return result;
}

console.log(changeOfEntropy(3.88, 1, 1273, 773));
console.log(changeOfEntropy(3, 0.81, 647, 400));

var firstArray = [46,458,29];
console.log(firstArray[2]);

firstArray[1] = 32
console.log(firstArray);

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
aSix = myArray[1][2];
anEleven = myArray[3][0][1];
console.log(aSix);
console.log(anEleven);

myArray.push([15,16,17]);
console.log(myArray);
myArray.pop();
myArray.shift();
myArray.unshift([1,2,3]);
console.log(myArray);

function anotherChangeOfEntropy(massOfGas, specificHeatOfGas, initialTemp, finalTemp) {
    console.log(massOfGas * specificHeatOfGas * Math.log(initialTemp / finalTemp));
}

anotherChangeOfEntropy(3.88, 1, 1273, 773);

var myGlobal = 10;

function func1() {
   oppsGlobal = 5;
  return oppsGlobal;
}

function func2() {
    var output = ""
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oppsGlobal != "undefined") {
        output += " oppsGlobal: " + oppsGlobal;
    }
    return output;
}

func1();
func2();
console.log(myGlobal);
