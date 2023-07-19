var timeGrid = document.querySelector('#timeGrid');

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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

function timeSet(hour){
  const currentTime = new Date().getHours()

    if (hour > currentTime){
        return "future"
    } else if (hour == currentTime){
        return "present"
    } else {
        return "past"
    }
}

for (let index = 0; index < hours.length; index++) {
    var outerDiv = document.createElement('div')
    outerDiv.classList.add('row', 'time-block')

    outerDiv.innerHTML = `
  <div class="col-2 col-md-1 hour text-center py-3 ">${numberTranslate(hours[index])}</div>
        <textarea class="col-8 col-md-10 description ${timeSet(hours[index])}" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
  `

    timeGrid.append(outerDiv);
}