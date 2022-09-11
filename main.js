//variables//
var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x=10;
player_y=10;
var player_object="";

//function//
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80'){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true && keyPressed=='77'){
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;
    }
    if(keyPressed=='37'){
        left();
        console.log("left is pressed")
    }
    if(keyPressed=='38'){
        up();
        console.log("up is pressed")
    }
    if(keyPressed=='39'){
        right();
        console.log("right is pressed")
    }
    if(keyPressed=='40'){
        down();
        console.log("down is pressed")
    }
    if(keyPressed=='87'){
        console.log("w is pressed");
        new_image('wall.jpg');
    }
    if(keyPressed=='84'){
        console.log("t is pressed");
        new_image('trunk.jpg');
    }
    if(keyPressed=='68'){
        console.log("d is pressed");
        new_image('dark_green.png');
    }
    if(keyPressed=='76'){
        console.log("l is pressed");
        new_image('light_green.png');
    }
    if(keyPressed=='89'){
        console.log("y is pressed");
        new_image('yellow_wall.png');
    }
    if(keyPressed=='71'){
        console.log("g is pressed");
        new_image('ground.png');
    }
    if(keyPressed=='82'){
        console.log("r is pressed");
        new_image('roof.jpg');
    }
    if(keyPressed=='67'){
        console.log("c is pressed");
        new_image('cloud.jpg');
    }
    if(keyPressed=='85'){
        console.log("u is pressed");
        new_image('unique.png');
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}