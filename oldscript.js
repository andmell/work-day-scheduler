//This is legacy JavaScript that I'm keeping for my own personal records. Currently not linked to my HTML.

let currentHour = dayjs().hour();
timeBlock = $('.time-block');
let currentDay = document.querySelector('#currentDay');


function setTime() {
  currentDay.innerHTML = dayjs().format('dddd, MMMM D' + ', ' + 'hh' + ':' + 'mma');
}
setInterval(setTime, 1000);


function resetColor() {
  timeBlock.each(function(){
    const blockNumber = parseInt(this.id);
    if (blockNumber < currentHour){
      blockNumber.removeClass('present future');
    } else if (blockNumber === currentHour){
      blockNumber.removeClass('past future');
    } else if (blockNumber > currentHour){
      blockNumber.removeClass('past present');
    };
  })
}
resetColor();

$(function () {
});
