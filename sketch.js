var canvas;
var music;
var block1, block2, block3, block4;
var box, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,50);
    block1.shapeColor = "blue";

    block2 = createSprite(320,580,220,50);
    block2.shapeColor = "orange";

    block3 = createSprite(560,580,200,50);
    block3.shapeColor = "red";

    block4 = createSprite(790,580,200,50);
    block4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750),100, 45,45);
    box.shapeColor = rgb(255,255,255);
    box.velocityX = 4;
    box.velocityY = 9;  

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

 drawSprites();
    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = rgb(0,0,255);
        music.play();
    }
    
    if(block2.isTouching(box)){
        box.shapeColor = rgb(255,165,0);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = rgb(255,0,0);
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = rgb(0,128,0);
    }


}
