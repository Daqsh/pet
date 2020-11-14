//Create variables here
var dog;
var happydog;
var database;
var foodS;
var foodStock
function preload()
{
  //load images here
 dog_image = loadImage("images/dogImg.png");
 Dog_image = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(10,10,10,10);
  dog.addImage ("dog_image");

 database = firebase.database();
 
 foodStock = dayabase.ref('food')
}


function draw() { 
  Text("print food form thr database",10,10) 
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
  drawSprites();
  
}
function readStokes(data){
  foodS = data.val();
}
function writeStokes(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;  
  }
  database.ref('/').update({

  })
}



