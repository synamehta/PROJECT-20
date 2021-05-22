var bg;
var mouse,cat;
var c1,c2,m1,m3,m4;


function preload() {
    bg=loadImage("images/garden.png");

    c1=loadAnimation("images/cat1.png");
    c2=loadAnimation("images/cat2.png","images/cat3.png");
    c4=loadAnimation("images/cat4.png");
    m1=loadAnimation("images/mouse1.png");
    m3=loadAnimation("images/mouse2.png","images/mouse3.png");
    m4=loadAnimation("images/mouse4.png");
    

}

function setup(){
    createCanvas(500,500);
    
    cat=createSprite(380,350);
    cat.addAnimation("chillingcat",c1); 
    cat.scale=0.1;
    cat.debug=true;

    mouse=createSprite(50,350);
    mouse.addAnimation("chesse",m1);
    mouse.scale=0.1;
    mouse.debug=true;
    
}

function draw() {

    background(bg);

    if(cat.x-mouse.x<cat.width/2+cat.width/2){
        mouse.addAnimation("chill",m3);
        mouse.changeAnimation("chill");
        cat.velocityX=0;
        cat.addAnimation("stopcat",c4);
        cat.changeAnimation("stopcat");
    } 

    drawSprites();
}

function keyPressed(){

   if(keyDown("left")){
    mouse.addAnimation("teasing",m4);
    mouse.changeAnimation("teasing");

    cat.addAnimation("runcat",c2);
    cat.changeAnimation("runcat");
    cat.velocityX=-2;
     
     
    }
}

