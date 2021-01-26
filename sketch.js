var cat1,mouse1,background;
var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3,backgroundimg;
function preload() {
    //load the images here
    catImg1= loadAnimation("images/cat1.png");
    catImg2= loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mouseImg1= loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3= loadAnimation("images/mouse4.png");
    backgroundimg= loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1= createSprite(870,600,50,50);
    cat1.addAnimation("cStanding",catImg1);
    cat1.scale= 0.2;

    mouse1= createSprite(210,620,50,50);
    mouse1.addAnimation("mStanding",mouseImg1);
    mouse1.scale=0.1;

    //background= createSprite(500,400,1000,800);
    //background.addImage(backgroundimg);

}

function draw() {

    background(backgroundimg);
    //Write condition here to evalute if tom and jerry collide
    if (cat1.x - mouse1.x < (cat1.width - mouse1.width)/2)
    {
      cat1.velocityX=0;
      cat1.addAnimation("cStop",catImg3);
      cat1.changeAnimation("cStop");

      mouse1.addAnimation("mStop",mouseImg3);
      mouse1.changeAnimation("mStop");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if (keyCode === LEFT_ARROW)
   {
       cat1.velocityX=-5;
       cat1.addAnimation("catRunning",catImg2);
       cat1.changeAnimation("catRunning");

       mouse1.addAnimation("mRunning",mouseImg2);
       mouse1.changeAnimation("mRunning");
   }

}
