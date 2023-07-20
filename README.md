# work-day-scheduler

## Description
This app was built to assist a user in organizing their 9 to 5 workday. It allows a user to input text to time blocks, which will change color depending on if the time block is set in the future, past, or is currently active, depending on the user's local time. 

This application is JavaScript heavy, and relies heavily on third party libraries such as Jquery and Bootstrap. It was an interesting challenge, being able to navigate those libraries to enhance the function of the app. 

## Installation
This is an application that has been deployed on GitHub's native webpage deployment software, and can be navigated to [here](https://andmell.github.io/work-day-scheduler/). No installation is necessary.

## Usage
Once navigated to the application, you may see differing colored blocks depending on your local time. A green block indicates a time that is at least 1 hour in the future. A red block indicates an hour that is currently being passed. A gray block is a time that has already passed.

For example, if a user's time is 11:01 AM, the blocks 9 AM, and 10 AM will be grayed out. The block 11 AM will be colored red, and all blocks beyond 11 AM will be colored green. These time blocks will actively react to the time, and shift color without reload.

Additionally, a user may enter text into a block-space, and click the button with the save-icon on the right-hand side of the screen. This will save the text into the user's local storage, and then print it back into the same text box that the user originally entered the text into. This will allow the user to exit and re-enter the page without losing their data. In turn, a user may find this application to aid in organization.

## Credits
- [Changing elements based on time](https://stackoverflow.com/questions/40759946/change-element-based-on-time)
- [Defining variables in jquery](https://stackoverflow.com/questions/1418613/how-to-define-variable-in-jquery)
- [Documentation of DayJS](https://day.js.org/docs/en/installation/installation)
- [The addClass function in jquery](https://api.jquery.com/addclass/)
- [The toggleClass attribute in jquery](https://api.jquery.com/toggleclass/)
- [jQuery, a third-party API meant for simplifying JavaScript coding.](https://jquery.com/)
- [Bootstrap, a third-party API meant for simplifying styling](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- A personal tutoring session with Jude Clark, who co-authored sections of this code alongside me. Jude Clark was found through Washington University's FullStack Coding BootCamp tutoring program. 

## License
Please refer to the respective Github repository for licensing information.