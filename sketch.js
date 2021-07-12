var bg, bgImg, arrow, arrowImg, bow, bowImg, arrowsGroup, yellowBalloonGroup, blueBalloonGroup, greenBalloonGroup, redBalloonGroup, Score, yellowImg, blueImg, greenImg, redImg, rand;

function preload() {
    bgImg = loadImage('./assets/sunshine_showers.png');
    arrowImg = loadImage('./assets/arrow.png');
    bowImg = loadImage('./assets/bow.png');
    yellowImg = loadImage('./assets/yellow.png');
    blueImg = loadImage('./assets/blue.png');
    greenImg = loadImage('./assets/green.png');
    redImg = loadImage('./assets/red.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    bg = createSprite(windowWidth / 2, windowHeight / 1000);
    bg.addImage(bgImg);
    bg.scale = (windowWidth * windowHeight) / 50000;

    arrow = createSprite(windowWidth - 40, 200, 50, 20);
    arrow.addImage(arrowImg);
    arrow.visible = false;

    bow = createSprite(windowWidth - 20, 200, 50, 25);
    bow.addImage(bowImg);

    arrowsGroup = createGroup();
    yellowBalloonGroup = createGroup();
    blueBalloonGroup = createGroup();
    greenBalloonGroup = createGroup();
    redBalloonGroup = createGroup();

    Score = 0;

    rightEdgeWall = createSprite(windowWidth, windowHeight / 2, 5, windowHeight);
}

function draw() {
    background(255)

    arrow.y = bow.y;

    bg.velocityX = -2;
    bow.y = World.mouseY;

    if (bg.x < 0) {
        bg.x = windowWidth/2;
    }

    if (keyDown("space")) {
        createArrows();
    }

    if (arrowsGroup.isTouching(yellowBalloonGroup)) {
        yellowBalloonGroup.destroyEach();
        arrowsGroup.destroyEach();
        Score = Score + 1;

    }
    if (arrowsGroup.isTouching(blueBalloonGroup)) {
        blueBalloonGroup.destroyEach();
        arrowsGroup.destroyEach();
        Score = Score + 1;

    }
    if (arrowsGroup.isTouching(greenBalloonGroup)) {
        greenBalloonGroup.destroyEach();
        arrowsGroup.destroyEach();
        Score = Score + 1;

    }
    if (arrowsGroup.isTouching(redBalloonGroup)) {
        redBalloonGroup.destroyEach();
        arrowsGroup.destroyEach();
        Score = Score + 1;
    }
    if (redBalloonGroup.isTouching(rightEdgeWall)) {
        redBalloonGroup.destroyEach();
        Score = Score - 1;
    } 
    if (blueBalloonGroup.isTouching(rightEdgeWall)) {
        blueBalloonGroup.destroyEach();
        Score = Score - 1;
    } 
    if (yellowBalloonGroup.isTouching(rightEdgeWall)) {
        yellowBalloonGroup.destroyEach();
        Score = Score - 1;
    }
    if (greenBalloonGroup.isTouching(rightEdgeWall)) {
        greenBalloonGroup.destroyEach();
        Score = Score - 1;
    }
    if(mousePressedOver(bg)){
        createArrows();
    }
    yellowB();
    blueB();
    greenB();
    redB();
    reset();
    drawSprites();

    yellowBalloonGroup.bounce(blueBalloonGroup);
    yellowBalloonGroup.bounce(greenBalloonGroup);
    yellowBalloonGroup.bounce(redBalloonGroup);
    blueBalloonGroup.bounce(greenBalloonGroup);
    blueBalloonGroup.bounce(redBalloonGroup);
    greenBalloonGroup.bounce(redBalloonGroup);

    textSize((windowWidth*windowHeight)/35156)
    text("Score : " + Score, 270, 30);
    console.log((windowWidth*windowHeight)/35156)
    function createArrows() {
        var arrow = createSprite(windowWidth - 40, 100, 5, 10);
        arrow.addImage(arrowImg);
        arrow.velocityX = -6;
        arrow.y = bow.y;
        arrowsGroup.add(arrow);
        return arrow;
    }
    function yellowB() {
        if (World.frameCount % (windowWidth/7) === 0) {
            var yellowBalloon = createSprite(0, 0, 20, 20);
            yellowBalloon.addImage(yellowImg);
            yellowBalloon.scale = 0.8;
            yellowBalloon.velocityX = 6;
            yellowBalloon.y = random(50, 350);
            yellowBalloonGroup.add(yellowBalloon);
            bow.depth = yellowBalloonGroup.depth;
            yellowBalloonGroup.depth = yellowBalloonGroup.depth - 1;
        }
    }
    function blueB() {
        if (World.frameCount % (windowWidth/8) === 0) {
            var blueBalloon = createSprite(0, 0, 20, 20);
            blueBalloon.addImage(blueImg);
            blueBalloon.scale = 0.8;
            blueBalloon.velocityX = 6;
            blueBalloon.y = random(50, 350);
            blueBalloonGroup.add(blueBalloon);
            bow.depth = blueBalloonGroup.depth;
            blueBalloonGroup.depth = blueBalloonGroup.depth - 1;

        }
    }
    function greenB() {
        if (World.frameCount % (windowWidth/8) === 0) {
            var greenBalloon = createSprite(0, 0, 20, 20);
            greenBalloon.addImage(greenImg);
            greenBalloon.scale = 0.8;
            greenBalloon.velocityX = 6;
            greenBalloon.y = random(50, 350);
            greenBalloonGroup.add(greenBalloon);
            bow.depth = greenBalloonGroup.depth;
            greenBalloonGroup.depth = greenBalloonGroup.depth + 1;

        }
    }
    function redB() {
        if (World.frameCount % (windowWidth/7) === 0) {
            var redBalloon = createSprite();
            redBalloon.addImage(redImg);
            redBalloon.scale = 0.8;
            redBalloon.velocityX = 6;
            redBalloon.y = random(50, windowHeight - 50);
            redBalloon.lifetime = windowWidth / redBalloon.velocityX;
            redBalloonGroup.add(redBalloon);
            bow.depth = redBalloonGroup.depth;
            redBalloonGroup.depth = redBalloonGroup.depth + 1;
        }
    }
}
function reset() {
    if (keyDown("r") || bow.x < 0) {
        arrow.x = bow.x;
        arrow.velocityX = 0;
    }
}
