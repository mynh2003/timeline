import Switch from './switch.js';
import InitTimeline from './initTimeline.js';
import InitBirthday from './initBirthday.js';

function handleClick(){
    InitBirthday();
    InitTimeline();
}

document.addEventListener('DOMContentLoaded', function () {
    handleClick()
    Switch();

    console.log('main')
});






