var bg, bgImg;

function preload(){
    bgImg = loadImage('./assets/sunshine_showers.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    bg = createSprite(windowWidth/2, windowHeight/2);
    bg.addImage(bgImg);
    console.log((windowWidth*windowHeight)/127777)
    bg.scale=(windowWidth*windowHeight)/127777;
    // bg.velocityX=-2;
}

function draw(){
    background(100)
    drawSprites();
}
