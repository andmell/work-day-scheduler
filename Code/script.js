console.log('hello world')

var timeGrid = document.querySelector('#timeGrid');

const hours =[9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let index = 0; index < hours.length; index++) {
  var outerDiv = document.createElement('div')
  outerDiv.classList.add('row','time-block')

  outerDiv.innerHTML = `
  <div class="col-2 col-md-1 hour text-center py-3 ">${hours[index]}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
  `

  timeGrid.append(outerDiv);
}