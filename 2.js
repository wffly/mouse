var robot = require("robotjs");
var events = require('events');

function click(){
    robot.moveMouse(983,527);
    robot.mouseClick();
    robot.moveMouse(1033,598);
    robot.mouseClick();
    setTimeout(click,3000);
};
click();


