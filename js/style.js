// Global Variables

const transWrap = document.querySelector('.transcriptWrapper');
const span = document.querySelectorAll('span');
const vid = document.getElementById('vid');

function blackOut() {
  for (let i = 0; i < span.length; i += 1) {
    span[i].style.color = 'black';
  }
}


// Video Controls

vid.style.color = 'red';

$('video').mediaelementplayer({
  features: ['playpause', 'current', 'progress', 'duration', //'tracks'
   'volume', 'fullscreen']

});


// Highlight Current transcriptWrapper

vid.addEventListener('timeupdate', () => {
  if (vid.currentTime < 4.13 && vid.currentTime > .240) {
      span[0].style.color = 'orange';
  }
  if (vid.currentTime < 7.53 && vid.currentTime > 4.14) {
      span[1].style.color = 'orange';
      span[0].style.color = 'black';
  }
  if (vid.currentTime < 11.27 && vid.currentTime > 7.54) {
     span[2].style.color = 'orange';
     span[1].style.color = 'black';
  }
  if (vid.currentTime < 13.96 && vid.currentTime > 11.28) {
    span[3].style.color = 'orange';
    span[2].style.color = 'black';
  }
  if (vid.currentTime < 17.94 && vid.currentTime > 13.96) {
   span[4].style.color = 'orange';
   span[3].style.color = 'black';
  }
  if (vid.currentTime < 22.37 && vid.currentTime > 17.94) {
   span[5].style.color = 'orange';
   span[4].style.color = 'black';
  }
  if (vid.currentTime < 26.88 && vid.currentTime > 22.37) {
   span[6].style.color = 'orange';
   span[5].style.color = 'black';
  }
  if (vid.currentTime < 30.92 && vid.currentTime > 26.88) {
   span[7].style.color = 'orange';
   span[6].style.color = 'black';
  }
  if (vid.currentTime < 34.73 && vid.currentTime > 30.92) {
   span[8].style.color = 'orange';
   span[7].style.color = 'black';
  }
  if (vid.currentTime < 39.43 && vid.currentTime > 34.73) {
   span[9].style.color = 'orange';
   span[8].style.color = 'black';
  }
  if (vid.currentTime < 41.19 && vid.currentTime > 39.43) {
   span[10].style.color = 'orange';
   span[9].style.color = 'black';
  }
  if (vid.currentTime < 46.30 && vid.currentTime > 41.19) {
   span[11].style.color = 'orange';
   span[10].style.color = 'black';
  }
  if (vid.currentTime < 49.27 && vid.currentTime > 46.3) {
   span[12].style.color = 'orange';
   span[11].style.color = 'black';
  }
  if (vid.currentTime < 53.76 && vid.currentTime > 49.27) {
   span[13].style.color = 'orange';
   span[12].style.color = 'black';
  }
  if (vid.currentTime < 57.78 && vid.currentTime > 53.76) {
   span[14].style.color = 'orange';
   span[13].style.color = 'black';
  }
  if (vid.currentTime < 58.9 && vid.currentTime > 57.78) {
   span[15].style.color = 'orange';
   span[14].style.color = 'black';
 }
});

// Set currentTime on 'click'

transWrap.addEventListener('click', (event) => {
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--0')
     vid.currentTime = 0.1;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--1')
     vid.currentTime = 4.13;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--2')
     vid.currentTime = 7.53;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--3')
     vid.currentTime = 11.27;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--4')
     vid.currentTime = 13.96;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--5')
     vid.currentTime = 17.94;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--6')
     vid.currentTime = 22.37;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--7')
     vid.currentTime = 26.88;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--8')
     vid.currentTime = 32.1;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--9')
     vid.currentTime = 34.73;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--10')
     vid.currentTime = 39.43;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--11')
     vid.currentTime = 42.35;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--12')
     vid.currentTime = 46.3;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--13')
     vid.currentTime = 49.27;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--14')
     vid.currentTime = 53.76;
     blackOut();
  }
  if(event.target.tagName == 'SPAN') {
    if(event.target.className == 'trs__wrp--15')
     vid.currentTime = 57.78;
     blackOut();
  }
});
