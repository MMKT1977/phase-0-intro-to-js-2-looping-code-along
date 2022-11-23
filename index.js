// Code your solutions in this file
const gifts = ["Aki", "Ollie", "Guadalupe"];

/*function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}*/
//wrapGifts(gifts);

function writeCards(gifts){

  const birthdaymessage= [];
  for (let i = 0; i < gifts.length; i++) {

    birthdaymessage.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
   
    debugger;
  }
 return birthdaymessage;
}
writeCards();

function countDown(){
  let n =10;
  while (n>=0){
    console.log(n);
    n--;
    debugger;
  }
  return n;
}
countDown();
console.log (n);