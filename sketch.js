
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var girl;
var GIRL_IMG;
var gameSTATE = 0;
var gametest;
var bubble;
var sample;
var BOOKimage;
var test;
var button;
var readButton;
var gameButton;
var CalendulaButton;
var SunflowerButton;
var TomatoButton;
var LemongrassButton;
var MarigoldButton;
var BasilButton;
var LavenderButton;
var c1,c2,s1,s2,t1,t2,l1,l2,m1,m2,b1,b2,la1,la2;
var water1,water2,water3,water4,water5,water6,water7;
var npk1,n1,n2,manure1,manure2;
var sunflower_water;
var calendula_water;
var tomato_water;
var lemongrass_water;
var marigold_water;
var basil_water;
var lavender_water;
var tomato_npk;
var lemongrass_n2;
var marigold_n2;
var basil_om;
var lavender_om;
var lives = 2;
var lives1 = 2;
var lives3 = 2;
var lives4 = 2;
var lives5 = 2;
var lives6 = 2;
var lives7 = 2;
var sunflowers = 0;
var calendulas = 0;
var tomatoes = 0;
var lemongrasses = 0;
var marigolds = 0;
var basils = 0;
var lavenders = 0;
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var i5 = 0;
var i6 = 0;
var i7 = 0;

/*var sunflowers = 7;
var calendulas = 5;
var tomatoes = 18;
var lemongrasses = 500;
var marigolds = 7;
var basils = 500;
var lavenders = 650;*/

var seed_soil ={
  "SUNFLOWER":"SUNNY",
  "BASIL": "SUNNY",
  "LEMONGRASS":"SUNNY",
  "TOMATO":"MODERATE_SUNNY",
  "LAVENDER":"MODERATE_SUNNY",
  "MARIGOLD": "MODERATE_SUNNY",
  "CALENDULA":"COOL"
}

var engine, world;

function preload(){

backIMG = loadImage("images/BACKGROUND.jpg");
life2 = loadImage("images/LIFE.png")

}

function setup() {

   engine = Engine.create();
   world = engine.world;
   Engine.update(engine);
   gametest = new GAME();

   // TO CREATE THE CANVAS
   createCanvas(displayWidth,displayHeight);
 
}

function draw() {
   background("#BFD540"); 
  
   // GAMESTATE 0
   if(gameSTATE === 0){
     background(backIMG);
     gametest.story();

   }

   //GAMESTATE 1
   if(gameSTATE === 1){
     gametest.rules(); 
   }

   // GAMESTATE 2
      if(gameSTATE === 2){
        gametest.firstpage();
      }

   // GAMESTATE 3
      if(gameSTATE === 3){
        gametest.demo();
      }

  // BOOK STATES
      if(gameSTATE === 21){
        gametest.calendula();
      }

      else if(gameSTATE === 22){
        gametest.sunflower();
      }

      else if(gameSTATE === 23){
        gametest.tomato();
      }

      else if(gameSTATE === 24){
        gametest.lemongrass();
      }

      else if(gameSTATE === 25){
        gametest.marigold();
      }

      else if(gameSTATE === 26){
        gametest.basil();
      }

      else if (gameSTATE === 27){
        gametest.lavender();
      }

      if(gameSTATE === 31){
        gametest.gameCAL(seed_soil.calendula);
      }
      else if (gameSTATE === 32){
        gametest.gameSUN(seed_soil.sunflower);
      }
      else if(gameSTATE === 33){
        gametest.gameTOM(seed_soil.tomato);
      }
      else if(gameSTATE === 34){
        gametest.gameLEM(seed_soil.lemongrass);
      }
      else if(gameSTATE === 35){
        gametest.gameMAR(seed_soil.marigold);
      }
      else if(gameSTATE === 36){
        gametest.gameBAS(seed_soil.basil);
      }
      else if(gameSTATE === 37){
        gametest.gameLAV(seed_soil.lavender);
      }

      if(gameSTATE === 311){
        gametest.flower1();
      }

      else if(gameSTATE === 321){
        gametest.flower2();
      }

      else if(gameSTATE === 331){
        gametest.flower3();
      }

      else if(gameSTATE === 341){
        gametest.flower4();
      }

      else if(gameSTATE === 351){
        gametest.flower5();
      }

      else if(gameSTATE === 361){
        gametest.flower6();
      }

      else if(gameSTATE === 371){
        gametest.flower7();
      }

      if(gameSTATE === "SUNFLOWER_HARVEST"){
        gametest.SUNFLOWER_HARVESTING(sunflowers);
      }

      if(gameSTATE === "CALENDULA_HARVEST"){
        gametest.CALENDULA_HARVESTING(calendulas);
      }

      if(gameSTATE === "TOMATO_HARVEST"){
        gametest.TOMATO_HARVESTING(tomatoes);
      }

      if(gameSTATE === "LEMONGRASS_HARVEST"){
        gametest.LEMONGRASS_HARVESTING(lemongrasses);
      }

      if(gameSTATE === "MARIGOLD_HARVEST"){
        gametest.MARIGOLD_HARVESTING(marigolds);
      }

      if(gameSTATE === "BASIL_HARVEST"){
        gametest.BASIL_HARVESTING(basils);
      }

      if(gameSTATE === "LAVENDER_HARVEST"){
        gametest.LAVENDER_HARVESTING(lavenders);
      }

      if(gameSTATE === "calendulaFINAL"){
        gametest.calendulaLAST();
      }

      else if(gameSTATE === "sunflowerFINAL"){
        gametest.sunflowerLAST();
      }

      else if(gameSTATE === "tomatoFINAL"){
        gametest.tomatoLAST();
      }

      else if(gameSTATE === "lemongrassFINAL"){
        gametest.lemongrassLAST();
      }

      else if(gameSTATE === "marigoldFINAL"){
        gametest.marigoldLAST();
      }

      else if(gameSTATE === "basilFINAL"){
        gametest.basilLAST();
      }

      else if(gameSTATE === "lavenderFINAL"){
        gametest.lavenderLAST();
      }

 

}