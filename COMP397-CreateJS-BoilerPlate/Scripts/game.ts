/*Diego Rodriguez
 * Dice Game
 */

/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "uno", src: "assets/images/1.png" },
    { id: "dos", src: "assets/images/2.png" },
    { id: "tres", src: "assets/images/3.png" },
    { id: "cuatro", src: "assets/images/4.png" },
    { id: "cinco", src: "assets/images/5.png" },
    { id: "seis", src: "assets/images/6.png" },
    { id: "button", src: "assets/images/button.png" },
    { id: "pinkButton", src: "assets/images/pinkButton.png" },
    { id: "clicked", src: "assets/audio/clicked.wav" }
];

//VARIABLES FOR TEXT AND NUMBERS
var textR = "";
var textL = "";
var numberR = 0;
var numberL = 0;

// Game Variables
var unoL: createjs.Bitmap;
var dosL: createjs.Bitmap;
var tresL: createjs.Bitmap;
var cuatroL: createjs.Bitmap;
var cincoL: createjs.Bitmap;
var seisL: createjs.Bitmap;
var lblTextL: createjs.Text; 

var unoR: createjs.Bitmap;
var dosR: createjs.Bitmap;
var tresR: createjs.Bitmap;
var cuatroR: createjs.Bitmap;
var cincoR: createjs.Bitmap;
var seisR: createjs.Bitmap;
var button: createjs.Bitmap;
var lblTextR: createjs.Text; 
var pinkButton: createjs.Bitmap;



// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '330px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    stage.update();

    stats.end(); // end measuring
}

// Callback function that allows me to respond to button click events
function ButtonClicked(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");
    var numeroR = Math.floor((Math.random() * 6) + 1);
    var numeroL = Math.floor((Math.random() * 6) + 1);

    //look for number Left
    switch (numeroL) {
        case 1:
            textL = "one";
            //stage.removeChild(unoL, dosL, tresL, cuatroL, cincoL, seisL, lblTextL);
            stage.removeAllChildren()
            stage.addChild(button);
            stage.addChild(unoL);
            lblTextL = new createjs.Text(textL, "20px Consolas", "#000000");
            lblTextL.x = 80;
            lblTextL.y = 130;
            stage.addChild(lblTextL);
            break

        case 2:
            textL = "two";
            //stage.removeChild(unoL, dosL, tresL, cuatroL, cincoL, seisL, lblTextL);
            stage.removeAllChildren()
            stage.addChild(button);
            stage.addChild(dosL);
            lblTextL = new createjs.Text(textL, "20px Consolas", "#000000");
            lblTextL.x = 80;
            lblTextL.y = 130;
            stage.addChild(lblTextL);
            break
        case 3:
            textL = "three";
            //stage.removeChild(unoL, dosL, tresL, cuatroL, cincoL, seisL, lblTextL);
            stage.removeAllChildren()
            stage.addChild(button);
            stage.addChild(tresL);
            lblTextL = new createjs.Text(textL, "20px Consolas", "#000000");
            lblTextL.x = 80;
            lblTextL.y = 130;
            stage.addChild(lblTextL);
            break
        case 4:
            textL = "four";
            //stage.removeChild(unoL, dosL, tresL, cuatroL, cincoL, seisL, lblTextL);
            stage.removeAllChildren()
            stage.addChild(button);
            stage.addChild(cuatroL);
            lblTextL = new createjs.Text(textL, "20px Consolas", "#000000");
            lblTextL.x = 80;
            lblTextL.y = 130;
            stage.addChild(lblTextL);
            break
        case 5:
            textL = "five";
            //stage.removeChild(unoL, dosL, tresL, cuatroL, cincoL, seisL, lblTextL);
            stage.removeAllChildren()
            stage.addChild(button);
            stage.addChild(cincoL);
            lblTextL = new createjs.Text(textL, "20px Consolas", "#000000");
            lblTextL.x = 80;
            lblTextL.y = 130;
            stage.addChild(lblTextL);
            break
        case 6:
            textL = "six";
            //stage.removeChild(unoL, dosL, tresL, cuatroL, cincoL, seisL, lblTextL);
            stage.removeAllChildren()
            stage.addChild(button);
            stage.addChild(seisL);
            lblTextL = new createjs.Text(textL, "20px Consolas", "#000000");
            lblTextL.x = 80;
            lblTextL.y = 130;
            stage.addChild(lblTextL);
            break
    }

    //look for number Right
    switch (numeroR) {
        case 1:
            textR = "one";
            stage.removeChild(unoR, dosR, tresR, cuatroR, cincoR, seisR, lblTextR);
            stage.addChild(button);
            stage.addChild(unoR);
            lblTextR = new createjs.Text(textR, "20px Consolas", "#000000");
            lblTextR.x = 210;
            lblTextR.y = 130;
            stage.addChild(lblTextR);
            break

        case 2:
            textR = "two";
            stage.removeChild(unoR, dosR, tresR, cuatroR, cincoR, seisR, lblTextR);
            stage.addChild(button);
            stage.addChild(dosR);
            lblTextR = new createjs.Text(textR, "20px Consolas", "#000000");
            lblTextR.x = 210;
            lblTextR.y = 130;
            stage.addChild(lblTextR);
            break
        case 3:
            textR = "three";
            stage.removeChild(unoR, dosR, tresR, cuatroR, cincoR, seisR, lblTextR);
            stage.addChild(button);
            stage.addChild(tresR);
            lblTextR = new createjs.Text(textR, "20px Consolas", "#000000");
            lblTextR.x = 210;
            lblTextR.y = 130;
            stage.addChild(lblTextR);
            break
        case 4:
            textR = "four";
            stage.removeChild(unoR, dosR, tresR, cuatroR, cincoR, seisR, lblTextR);
            stage.addChild(button);
            stage.addChild(cuatroR);
            lblTextR = new createjs.Text(textR, "20px Consolas", "#000000");
            lblTextR.x = 210;
            lblTextR.y = 130;
            stage.addChild(lblTextR);
            break
        case 5:
            textR = "five";
            stage.removeChild(unoR, dosR, tresR, cuatroR, cincoR, seisR, lblTextR);
            stage.addChild(button);
            stage.addChild(cincoR);
            lblTextR = new createjs.Text(textR, "20px Consolas", "#000000");
            lblTextR.x = 210;
            lblTextR.y = 130;
            stage.addChild(lblTextR);
            break
        case 6:
            textR = "six";
            stage.removeChild(unoR, dosR, tresR, cuatroR, cincoR, seisR, lblTextR);
            stage.addChild(button);
            stage.addChild(seisR);
            lblTextR = new createjs.Text(textR, "20px Consolas", "#000000");
            lblTextR.x = 210;
            lblTextR.y = 130;
            stage.addChild(lblTextR);
            break



    }
}

// Callback functions that change the alpha transparency of the button

// Mouseover event
function ButtonOver() {
    button.alpha = 0.8;
}

// Mouseout event
function ButtonOut() {
    button.alpha = 1.0;
}

// Our Main Game Function
function main() {
    console.log("Game is Running");



    //adding left  dice and text*********************************************************+
    unoL = new createjs.Bitmap(assets.getResult("uno"));
    unoL.x = 55;
    unoL.y = 50;
    

    dosL = new createjs.Bitmap(assets.getResult("dos"));
    dosL.x = 55;
    dosL.y = 50;

    tresL = new createjs.Bitmap(assets.getResult("tres"));
    tresL.x = 55;
    tresL.y = 50;

    cuatroL = new createjs.Bitmap(assets.getResult("cuatro"));
    cuatroL.x = 55;
    cuatroL.y = 50;

    cincoL = new createjs.Bitmap(assets.getResult("cinco"));
    cincoL.x = 55;
    cincoL.y = 50;

    seisL = new createjs.Bitmap(assets.getResult("seis"));
    seisL.x = 55;
    seisL.y = 50;


    

    //adding right  dice*********************************************************+
    unoR = new createjs.Bitmap(assets.getResult("uno"));
    unoR.x = 180;
    unoR.y = 50;
    

    dosR = new createjs.Bitmap(assets.getResult("dos"));
    dosR.x = 180;
    dosR.y = 50;

    tresR = new createjs.Bitmap(assets.getResult("tres"));
    tresR.x = 180;
    tresR.y = 50;

    cuatroR = new createjs.Bitmap(assets.getResult("cuatro"));
    cuatroR.x = 180;
    cuatroR.y = 50;

    cincoR = new createjs.Bitmap(assets.getResult("cinco"));
    cincoR.x = 180;
    cincoR.y = 50;

    seisR = new createjs.Bitmap(assets.getResult("seis"));
    seisR.x = 180;
    seisR.y = 50;


    
    
    

   //button on screeen 
    button = new createjs.Bitmap(assets.getResult("button"));
    button.x = 50;
    button.y = 250;
    stage.addChild(button);
    button.on("click", ButtonClicked);
    button.on("mouseover", ButtonOver);
    button.on("mouseout", ButtonOut);




}