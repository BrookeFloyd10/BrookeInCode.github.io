

let funFactsArr = [
  "I sing in a folk band",

  "<p>I love DIY home renovation projects of all types.</p><br>" +
  "<img src='images/kitchen.png' width='100%' alt='Kitchen remodel featuring a picture window addition.'/><br>" +
  "<p>I opened up my kitchen by adding a picture window.</p>",

  "I recently learned to juggle and fulfilled a childhood goal.",

  "I have been skydiving.",

  "<p>Meet Harriet!</p><br>" +
  "<img src='images/Harriet.jpg' width='100%' alt='My cat Harriet snoozing while cuddling a PlayStation controller.'/><br>" + 
  "<p>She was named after Harriet the Spy.</p>",

  "I am a video game enthusiast and enjoy exploring different genres.",

  "I have a green thumb… but only for plants. Flowers and I are not on speaking terms.",

  "<p>Meet Skittles!</p><br>" +
  "<img src='images/skits.jpg' width='100%' max-heigth='95%' alt='My dog sitting in the driver seat of my car.'/><br>" +
  "<p>My son named him after his favorite candy.</p>",

  "I can still pull off the classic “worm” from the breakdancing era.",

  "I restored my childhood SNES by taking it apart and rebuilding it."
];
const funfactId = document.getElementById("fun-fact");
let counter = 0;
function cycleFactsArr(array) {
        if (counter <= array.length -1) {
            let currentFact = array[counter];
            counter++
            funfactId.innerHTML =currentFact;
        }
        if (counter === array.length) {
            return counter = 0; 
        }
    }
cycleFactsArr(funFactsArr)
setInterval (( ) => {
cycleFactsArr(funFactsArr)}, 7000);