var last_position_of_x, last_position_of_y;
color = "black";
width_of_line =2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var device_width = screen.width;

new_canvas_width = screen.width - 70;

new_canvas_height = screen.height - 300;

if (device_width - 792){
document.getElementById("myCanvas").width = new_canvas_width;
document.getElementById("myCanvas").height = new_canvas_height;
document.body.style.overflow = "hidden";

}

canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e){
    console.log("my_touchstart detected")
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_TouchMove)

function my_TouchMove(e){
    console.log("touch_move is operational")
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and last position of y = ")
    console.log("x= " + last_position_of_x + "y= " + last_position_of_y)
    ctx.moveTo(last_position_of_x, last_position_of_y)

    console.log("Current position of x and current position of y = ")
    console.log("x= " + current_position_of_x + "y= " + current_position_of_y)
    ctx.lineTo(current_position_of_x, current_position_of_y)

    ctx.stroke()

    last_position_of_x = current_position_of_x
    last_position_of_y = current_position_of_y

}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}