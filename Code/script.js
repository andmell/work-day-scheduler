let currentHour = dayjs().hour();
timeBlock = $('.time-block');
let currentDay = document.querySelector('#currentDay');

// if (timeBlockTime < currentHour){
//   $('.time-block').addClass("past");
// } else if (timeBlockTime == currentHour) {
//   $('.time-block').addClass("present") 
// } else {
//   $('.time-block').addClass("future");
// };

function setTime() {
  currentDay.innerHTML = dayjs().format('dddd, MMMM D' + ', ' + 'hh' + ':' + 'mma');
}
setInterval(setTime, 1000);

function setColor(){
timeBlock.each(function() {
  const blockNumber = parseInt(this.id);
 console.log(blockNumber);
$(this).toggleClass('past', blockNumber < currentHour);
$(this).toggleClass('present', blockNumber === currentHour);
$(this).toggleClass('future', blockNumber > currentHour);
});
};

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
setColor();




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


// If loop
// if the time is equal to present time, set state present
// else if the time is after present time, set state past
// else set state future 

// Maybe in HTML have one time block, and then ammend additional ones to it in, with an increasing index. 