function reverseFunction(){
  let theSentence = prompt("Enter a sentence for it to be reversed:");
  let firstLetter = theSentence.charAt(0).toUpperCase();
  let lastLetter = theSentence.charAt(theSentence.length-1).toUpperCase();
  let middleLetter = theSentence.charAt(theSentence.length/2);
  let newSentence = middleLetter + theSentence + lastLetter + firstLetter;
  let newestSentence = "";
  for (var i = newSentence.length - 1; i >=0; i--){
    newestSentence += newSentence[i];
  }
  alert(newestSentence);
}

reverseFunction();
// testStringPick = prompt("Testing:");
// alert(testStringPick[2]);
// alert(testStringPick.charAt(2));
// function reverseFunctionTwo(){
//   let theSentence = prompt("Enter a sentence for it to be reversed:");
//   let firstLetter = theSentence.charAt(0).toUpperCase();
//   let lastLetter = theSentence.charAt(theSentence.length-1).toUpperCase();
//   let middleLetter = theSentence.charAt(theSentence.length/2);
//   let newSentence = middleLetter + theSentence + lastLetter + firstLetter;
//   let splitSentence = newSentence.split();
  // let reverseArray = splitSentence.reverse();
  // let joinArray = reverseArray.join("");
  // alert(joinArray);
// }
// reverseFunctionTwo();
// reverseFunction();
// function forwardFunction(){
//   let theSentence = prompt("Enter a sentence for it to be reversed:");
//   let firstLetter = theSentence.charAt(0).toUpperCase();
//   let lastLetter = theSentence.charAt(theSentence.length-1).toUpperCase();
//   let middleLetter = theSentence.charAt(theSentence.length/2);
//   let newSentence = middleLetter + theSentence + lastLetter + firstLetter;
//   alert(newSentence);
// }