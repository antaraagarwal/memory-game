var canvas, backgroundImage;

/* var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database; */

var alpaca, bear, bull, donkey, goat, horse, pig, raccoon, tiger,alpaca1, bear1, bull1, donkey1, goat1, horse1, pig1, raccoon1, tiger1
//var card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20;  


function preload()
{
  alpacaImage = loadImage("images/alpaca.jpg");
  bearImage = loadImage("images/bear.jpg");
  sheepImage = loadImage("images/blacksheep.jpg");
  bullImage = loadImage("images/bull.jpg");
  donkeyImage = loadImage("images/donkey.jpg");
  goatImage = loadImage("images/goat.jpg");
  horseImage = loadImage("images/horse.jpg");
  pigImage = loadImage("images/pig.jpg");
  raccoonImage = loadImage("images/raccoon2.jpg");
  tigerImage = loadImage("images/tiger.jpg");
}

function setup()
{
  canvas = createCanvas(710,550);
  
  alpaca= createSprite(80,75,120,120)
  alpaca.shapeColor="black"

  bear= createSprite(80,210,120,120)
  bear.shapeColor="black"

  sheep= createSprite(80,340,120,120)
  sheep.shapeColor="black"
  
  bull= createSprite(80,470,120,120)
  bull.shapeColor="black"
  //*****************************************************

  donkey= createSprite(215,75,120,120)
  donkey.shapeColor="black"
  
  goat= createSprite(215,210,120,120)
  goat.shapeColor="black"

  horse= createSprite(215,340,120,120)
  horse.shapeColor="black"
  
  pig= createSprite(215,470,120,120)
  pig.shapeColor="black"

  //***************************************************** */
  tiger= createSprite(350,75,120,120)
  tiger.shapeColor="black"
  
  raccoon= createSprite(350,210,120,120)
  raccoon.shapeColor="black"

  alpaca1= createSprite(350,340,120,120)
  alpaca1.shapeColor="black"
  
  horse1= createSprite(350,470,120,120)
  horse1.shapeColor="black"
//********************************************************** */
  sheep1= createSprite(485,75,120,120)
  sheep1.shapeColor="black"
  
  pig1= createSprite(485,210,120,120)
  pig1.shapeColor="black"

  goat1= createSprite(485,340,120,120)
  goat1.shapeColor="black"

  raccoon1= createSprite(485,470,120,120)
  raccoon1.shapeColor="black"
//***************************************************** */
  tiger1= createSprite(620,75,120,120)
  tiger1.shapeColor="black"
  
  donkey1= createSprite(620,210,120,120)
  donkey1.shapeColor="black"

  bear1= createSprite(620,340,120,120)
  bear1.shapeColor="black"

  bull1= createSprite(620,470,120,120)
  bull1.shapeColor="black"

//************************************************************** */
  
}


function draw()
{
background (176,156,208)

if(mousePressedOver(alpaca))
{
  alpaca.addImage(alpacaImage) 
}

if(mousePressedOver(bear))
{
  bear.addImage(bearImage)
  bear.scale=0.7
}

if(mousePressedOver(sheep))
{
  sheep.addImage(sheepImage)
  sheep.scale=0.7
}

if(mousePressedOver(bull))
{
  bull.addImage(bullImage)
  bull.scale=0.7
}

if(mousePressedOver(donkey))
{
  donkey.addImage(donkeyImage)
  donkey.scale=0.7

}

if(mousePressedOver(goat))
{
  goat.addImage(goatImage)
  goat.scale=0.7

}

if(mousePressedOver(horse))
{
  horse.addImage(horseImage)
  horse.scale=0.7

}

if(mousePressedOver(pig))
{
  pig.addImage(pigImage)
  pig.scale=0.7

}

if(mousePressedOver(raccoon))
{
  raccoon.addImage(raccoonImage)
  raccoon.scale=0.7

}

if(mousePressedOver(tiger))
{
  tiger.addImage(tigerImage)
  tiger.scale=0.7

}

//------------------------------
if(mousePressedOver(alpaca1))
{
  alpaca1.addImage(alpacaImage) 
}

if(mousePressedOver(bear1))
{
  bear1.addImage(bearImage)
  bear1.scale=0.7
}

if(mousePressedOver(sheep1))
{
  sheep1.addImage(sheepImage)
  sheep1.scale=0.7
}

if(mousePressedOver(bull1))
{
  bull1.addImage(bullImage)
  bull1.scale=0.7
}

if(mousePressedOver(donkey1))
{
  donkey1.addImage(donkeyImage)
  donkey1.scale=0.7
}

if(mousePressedOver(goat1))
{
  goat1.addImage(goatImage)
  goat1.scale=0.7
}

if(mousePressedOver(horse1))
{
  horse1.addImage(horseImage)
  horse1.scale=0.7
}

if(mousePressedOver(pig1))
{
  pig1.addImage(pigImage)
  pig1.scale=0.7
}

if(mousePressedOver(raccoon1))
{
  raccoon1.addImage(raccoonImage)
  raccoon1.scale=0.7
}

if(mousePressedOver(tiger1))
{
  tiger1.addImage(tigerImage)
  tiger1.scale=0.7
}







// when you press a card and the animal appears you need to press the same animal
// if it is the wrong animal then cards[].depth > animals[].depth
// if it is correct then the two cards and the animals . visibility = 0

//points
//music?

  drawSprites()
}




