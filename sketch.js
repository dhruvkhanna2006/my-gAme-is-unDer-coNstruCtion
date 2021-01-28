var bg,man,man.walk;
var bgimg,characterimg,mummyimg,monsterimg,Vampireimg;


function preload(){
bgimg=loadImage("images/bg.jpg");
manimg=loadImage("images/man.png");
man.walk,gif=loadAnimation("images/man.walk.gif");
}

function setup(){
createCanvas(1530,745);

bg=createSprite(765,327.5,10,60);
bg.addImage(bgimg);
bg.scale=0.8;

man=createSprite(1400,580,10,10);
man.addImage(manimg);
man.scale=1;

man.walk.gif=createSprite(280,590,10,10);
man.walk.gif.addAnimation(man.walk);
man.walk.gif.scale=1;
}
