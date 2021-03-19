canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1 (1).png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "rover.png";
car2_x = 10;
car2_y = 100;

background_image = "mars.jpg";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car_2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '87') {
        up_car_2();
        console.log("up");
    }
    if (keyPressed == '83') {
        down_car_2();
        console.log("down");
    }
    if (keyPressed == '65') {
        left_car_2();
        console.log("left");
    }
    if (keyPressed == '68') {
        right_car_2();
        console.log("right");
    }
}
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function up_car_2() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function down_car_2() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function left_car_2() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function right_car_2() {
    if (car_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}