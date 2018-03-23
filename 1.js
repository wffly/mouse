var robot = require("robotjs");
function getPosition() {
    var mouse = robot.getMousePos();
    console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y);
}
setTimeout(getPosition,2000);

