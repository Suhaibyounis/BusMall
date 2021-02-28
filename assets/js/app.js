'use strict';

let busMAllArray= ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg',
  'chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg',
  'shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];


const busMallSection = document.getElementById( 'busMallSection' );
const firstImage = document.getElementById( 'firstImage' );
const secondImage = document.getElementById( 'secondImage' );
const thirdImage = document.getElementById( 'thirdImage' );

// const button = document.getElementById('button');
let firstImageBusMall = 0;
let secondImageBusMall = 0;
let thirdImageBusMall = 0;
const clickCounter = 5;

function BusMall( name ) {
  this.name = name;
  this.image = `./assets/img/${name}`;
  this.clicks = 0;
  this.shown = 0;
  BusMall.All.push(this);
}

BusMall.All = [];
BusMall.counter=0;


for( let i = 0; i < busMAllArray.length; i++ ) {
  new BusMall( busMAllArray[i] );
}


//
function renderNewBusMall() {
  buttonResult.style.display = 'none';
  let firstImageIndex = randomNumber( 0, BusMall.All.length - 1 );
  firstImage.src = BusMall.All[firstImageIndex].image;
  firstImage.alt = BusMall.All[firstImageIndex].name;
  firstImageBusMall = firstImageIndex;

  //secondImage
  let secondImageIndex;
  do {
    secondImageIndex = randomNumber( 0, BusMall.All.length - 1 );
  } while( firstImageIndex === secondImageIndex);

  secondImage.src = BusMall.All[secondImageIndex].image;
  secondImage.alt = BusMall.All[secondImageIndex].name;
  secondImageBusMall = secondImageIndex;

  //thirdImage
  let thirdImageIndex;
  do {
    thirdImageIndex = randomNumber( 0, BusMall.All.length - 1 );
  } while( firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex);

  thirdImage.src = BusMall.All[thirdImageIndex].image;
  thirdImage.alt = BusMall.All[thirdImageIndex].name;
  thirdImageBusMall = thirdImageIndex;

  BusMall.All[firstImageIndex].shown++;
  BusMall.All[secondImageIndex].shown++;
  BusMall.All[thirdImageIndex].shown++;


}


//

function handleClick( event ) {
  if( BusMall.counter <= clickCounter-1 ) {
    const clickedElement = event.target;
    if( clickedElement.id === 'firstImage' || clickedElement.id === 'secondImage' || clickedElement.id === 'thirdImage' ) {
      if( clickedElement.id === 'firstImage' ) {
        BusMall.All[firstImageBusMall].clicks++;
      }
      if( clickedElement.id === 'secondImage' ) {
        BusMall.All[secondImageBusMall].clicks++;
      }

      if( clickedElement.id === 'thirdImage' ){
        BusMall.All[thirdImageBusMall].clicks++;
      }

      BusMall.counter++;
      renderNewBusMall();

    //   console.log( BusMall.All );
    }

  }
  buttonResult.style.display = 'block';
}



busMallSection.addEventListener('click' ,handleClick);

console.log( BusMall.All );

const buttonResult=document.getElementById('button');
buttonResult.addEventListener ( 'click' , handleButoonClick);
function handleButoonClick (){
  const ulElements = document.getElementById('results');
  for( let i=0; i < BusMall.All.length; i++ ){
    const liElement = document.createElement('li');
    ulElements.appendChild(liElement);
    liElement.textContent=`${BusMall.All[i].name.slice(0,-4)} had ${BusMall.All[i].clicks} votes, and was seen ${BusMall.All[i].shown} times.`;
  }
  buttonResult.removeEventListener('click' , handleButoonClick);
}



function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}


renderNewBusMall();

