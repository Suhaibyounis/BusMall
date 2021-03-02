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
const clickCounter = 25;

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

function renderNewBusMall() {
  let firstImageIndex = randomNumber( 2, BusMall.All.length - 3 );
  if (BusMall.counter % 2 === firstImageIndex % 2){
    firstImageIndex += 0;
  } else{
    firstImageIndex += 1;
  }
  firstImage.src = BusMall.All[firstImageIndex].image;
  firstImage.alt = BusMall.All[firstImageIndex].name;
  firstImageBusMall = firstImageIndex;

  let secondImageIndex = firstImageIndex - 2;

  secondImage.src = BusMall.All[secondImageIndex].image;
  secondImage.alt = BusMall.All[secondImageIndex].name;
  secondImageBusMall = secondImageIndex;

  let thirdImageIndex = firstImageIndex + 2;
  if (thirdImageIndex === 20){
    thirdImageIndex = thirdImageIndex - 20;
  }

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
      }else {
        buttonResult.style.display = 'block';
      }

      BusMall.counter++;
      renderNewBusMall();

    }

  }else {
    renderChart();
  }
  removeEventListener ( 'click' , handleButoonClick);

  localStorage.setItem( 'BusMall', JSON.stringify( BusMall.All ) );

  buttonResult.addEventListener ( 'click' , handleButoonClick);
}


busMallSection.addEventListener('click' ,handleClick);

// console.log( BusMall.All );


const buttonResult=document.getElementById('button');
// buttonResult.addEventListener ( 'click' , handleButoonClick);
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

// function handleSubmit (event){
//   event.preventDefault();
// }

function renderChart(){
  let shownArray = [];
  let clicksArray = [];
  for( let i = 0; i < busMAllArray.length; i++){
    shownArray.push(BusMall.All[i].shown);
    clicksArray.push(BusMall.All[i].clicks);
  }

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels : busMAllArray,
      datasets: [{
        label: '# of shown',
        data: shownArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderWidth: 1
      },

      {
        label: '# of Clicks',
        data: clicksArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


function getData() {
  const data = localStorage.getItem('BusMall');
  if(data) {
    const objData = JSON.parse(data);
    BusMall.All = objData;
    renderNewBusMall();
  }
}



getData();

