// This first variable will be used to refer to the parent element that is housing all of the time slots.
var timeGrid = document.querySelector('#timeGrid');
// This variable is used to set and update the time found in the header. 
var clockTime = document.querySelector('#currentDay');

// This array will help us define the time listed on the left column of the slots. It will also make it easier to check against the user's local time, as they are ascending numbers in 24hr time.
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// This function will set the time based on the user's local computer time, and is recalled every second to show a consistently updating time.
// The new Date variable will reference the date and time based on the user's time, and the .toLocaleString will further refine the variable to only show the date and time, not any information based on time zone, etc.
setInterval(() => {
  clockTime.innerHTML = new Date().toLocaleString()
}, 1000)

// This function will switch out each number in the hours array, and return a string that resembles a more user-friendly format of the time.
function numberTranslate(hour) {
  switch (hour) {
    case 9:
      return '9 AM'
      break;
    case 10:
      return '10 AM'
      break;
    case 11:
      return '11 AM'
      break;
    case 12:
      return '12 PM'
      break;
    case 13:
      return '1 PM'
      break;
    case 14:
      return '2 PM'
      break;
    case 15:
      return '3 PM'
      break;
    case 16:
      return '4 PM'
      break;
    case 17:
      return '5 PM'
      break;
    default:
      break;
  }
}

// This function, when run, will compare the current hour, with the hour assigned to each individual text box, and will return past, present, or future depending on the result. 
function timeSet(hour) {
  // We're setting a constant to equal the current hour.
  const currentTime = new Date().getHours()

  if (hour > currentTime) {
    return "future"
  } else if (hour == currentTime) {
    return "present"
  } else {
    return "past"
  }
}

// This for-loop creates time slots depending on how long the hours array is.
for (let index = 0; index < hours.length; index++) {
  var outerDiv = document.createElement('div')
  outerDiv.classList.add('row', 'time-block')

// The inner HTML for the newly created time-slots is the same as was found in the original code. The template literals allows us to create dynamic time boxes that change based on local information.
// For the left hand column that shows the hour, we run our numberTranslate function through our hours array, and allows us to change the data based on where in the index it's found.
// The actual text area, we run our timeSet function through the hours array, which changes the color of the grid.
// The text input from the user is pulled by using the final template literal, which pulls a string from the local storage. If no string is detected, it will return with an empty string, as defined by the || ''.
  outerDiv.innerHTML = `
  <div class="col-2 col-md-1 hour text-center py-3 ">${numberTranslate(hours[index])}</div>
        <textarea class="col-8 col-md-10 description ${timeSet(hours[index])}" rows="3">${localStorage.getItem(hours[index]) || ''}</textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
  `
// As we finish coding what will happen to the time slots, we append them to the parent element.
  timeGrid.append(outerDiv);
}

// These next variables will be used to add functionality to the save buttons and text area's of our scheduler. 
const buttons = document.querySelectorAll('.saveBtn')
const textArea = document.querySelectorAll('.description');


// We use a for-loop to assign an event listener to each button based on their index value, same as the time slots. 
// The console.log methods are there for my own personal debugging.
// One the save button is clicked, any text saved in the respective time slot, will be saved to local storage. It will be pulled and displayed again in the above function.
for (let index = 0; index < buttons.length; index++){
    buttons[index].addEventListener("click", ()=>{
        console.log(hours[index])
        console.log(textArea[index].value)
        localStorage.setItem(hours[index], textArea[index].value)
    })
}
