import darkTheme from "./modules/lamp.js";

document.addEventListener('DOMContentLoaded', e => {
    darkTheme('[data-lamp-icon] *')
});

/* DARK MODE (default):
>> lamp-on.png
>> night.gif
>> colors:
    - $left-color: #414564;
    - $right-color: #50556E;
    - $floor-color: #512F39;
*/

/* CHANGE TO LIGHT MODE
>> lamp-off.png
>> secuence:
    - transition-night.gif
    - day.gif
>> change colors:
    - $left-color: #616C81;
    - $right-color: #7D949F;
    - $floor-color: #7C5C4E;
*/

/* CHANGE TO DARK MODE
>> lamp-on.png
>> secuence:
    - transition-day.gif
    - night.gif
>> change colors:
    - $left-color: #414564;
    - $right-color: #50556E;
    - $floor-color: #512F39;
*/
