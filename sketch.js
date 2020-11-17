//Create variables here
var dog, dogHappy, database, foodS, foodStock;
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogHappy= loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog = addImage(dogHappy);
  }
  
  drawSprites();
  //add styles here
  fontSize(15);
  stroke(10);
  fill ("black");
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",100,100);
}

//function to read values from DB
function readStock(data){
  foodS = data.val();
}

//function readStock(){
// database.ref("Food").on("value", function(data){
//  Food = data.val()
//});
//}

//function to write values in DB
function writeStock(x){
  if(x<=0){
  x=0;
}
  else{
  x=x-1;
  }
database.ref('/').update({
  Food:x});
}


