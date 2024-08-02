//your parameter variables go here!

var head_level=190;//190 is default
var sclera_eye_level= head_level-30;//-30 is default
var rage= 3;//3 is default
var sclera_eye_height= 50;//50 is default
var sclera_eye_width= 46;//46 is default
var ear_level= head_level-80;//-80 is default
var leg_height=410;//410 is default

var cloude_width= 90;
var cloude_hight= 95;
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 600;
  pWallpaper.grid_settings.cell_height = 600;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(153, 197, 255); 
}

function my_symbol() {
  noStroke();
  fill(37, 122, 48)
  rect(0, 300,600, 260)
  fill(255, 249, 227)
  ellipse(560, 600,cloude_hight, cloude_width)
  ellipse(540, 600,cloude_hight, cloude_width)
  ellipse(520, 610,cloude_hight, cloude_width)
  ellipse(500, 600,cloude_hight, cloude_width)
  ellipse(490, 590,cloude_hight, cloude_width)
  ellipse(480, 600,cloude_hight, cloude_width)
  ellipse(460, 605,cloude_hight, cloude_width)
  ellipse(440, 590,cloude_hight, cloude_width)
  ellipse(420, 600,cloude_hight, cloude_width)
  ellipse(400, 605,cloude_hight, cloude_width)
  ellipse(380, 600,cloude_hight, cloude_width)
  ellipse(369, 590,cloude_hight, cloude_width)
  ellipse(340, 600,cloude_hight, cloude_width)
  ellipse(320, 600,cloude_hight, cloude_width)
  ellipse(300, 590,cloude_hight, cloude_width)
  ellipse(280, 600,cloude_hight, cloude_width)
  ellipse(260, 605,cloude_hight, cloude_width)
  ellipse(240, 600,cloude_hight, cloude_width)
  ellipse(225, 590,cloude_hight, cloude_width)
  ellipse(200, 600,cloude_hight, cloude_width)
  ellipse(225, 605,cloude_hight, cloude_width)
  ellipse(180, 600,cloude_hight, cloude_width)
  ellipse(160, 610,cloude_hight, cloude_width)
  ellipse(140, 600,cloude_hight, cloude_width)
  ellipse(120, 590,cloude_hight, cloude_width)
  ellipse(100, 600,cloude_hight, cloude_width)
  ellipse(80, 605,cloude_hight, cloude_width)
  ellipse(60, 600,cloude_hight, cloude_width)
  ellipse(40, 610,cloude_hight, cloude_width)
  ellipse(20, 600,cloude_hight, cloude_width)
  ellipse(0, 600,cloude_hight, cloude_width)
  ellipse(560, 560,cloude_hight, cloude_width)
  ellipse(540, 560,cloude_hight, cloude_width)
  ellipse(520, 570,cloude_hight, cloude_width)
  ellipse(500, cloude_hight,cloude_hight, cloude_width)
  ellipse(490, cloude_hight,cloude_hight, cloude_width)
  ellipse(480, 560,cloude_hight, cloude_width)
  ellipse(460, 545,cloude_hight, cloude_width)
  ellipse(440, 567,cloude_hight, cloude_width)
  ellipse(420, 567,cloude_hight, cloude_width)
  ellipse(400, 540,cloude_hight, cloude_width)
  ellipse(380, 540,cloude_hight, cloude_width)
  ellipse(369, 530,cloude_hight, cloude_width)
  ellipse(340, 530,cloude_hight, cloude_width)
  ellipse(320, 540,cloude_hight, cloude_width)
  ellipse(300, 580,cloude_hight, cloude_width)
  ellipse(280, 530,cloude_hight, cloude_width)
  ellipse(260, 565,cloude_hight, cloude_width)
  ellipse(240, 520,cloude_hight, cloude_width)
  ellipse(225, 540,cloude_hight, cloude_width)
  ellipse(200, cloude_hight,cloude_hight, cloude_width)
  ellipse(225, 535,cloude_hight, cloude_width)
  ellipse(180, 560,cloude_hight, cloude_width)
  ellipse(160, 540,cloude_hight, cloude_width)
  ellipse(140, 530,cloude_hight, cloude_width)
  ellipse(120, 560,cloude_hight, cloude_width)
  ellipse(100, 565,cloude_hight, cloude_width)
  ellipse(80, 595,cloude_hight, cloude_width)
  ellipse(60, 570,cloude_hight, cloude_width)
  ellipse(40, 540,cloude_hight, cloude_width)
  ellipse(20, 560,cloude_hight, cloude_width)
  ellipse(0, 53,cloude_hight, cloude_width)
  stroke(1);
  //body of bear
  fill(74, 49, 33)
  ellipse(300, 300,180, 210)//outer bearm
  noStroke();
  fill(138, 108, 88)
  ellipse(300, 300,140, 170)//inner bear
  stroke(1);
  //right ear of bear
  fill(74, 49, 33)
  ellipse(375, ear_level,80, 75)
  
  fill(138, 108, 88)
  ellipse(375, ear_level,55, 50)
  //left ear of bear
  fill(74, 49, 33)
  ellipse(225, ear_level,80, 75)

  fill(138, 108, 88)
  ellipse(225, ear_level,55, 50)
  // left arm
  fill(74, 49, 33)
  ellipse(190, 260,130, 80)
  //right arm
  fill(74, 49, 33)
  ellipse(410, 260,130, 80)
  //right palm
  noStroke();
  fill(138, 108, 88)
  ellipse(435, 260,30, 40)
  //left palm
  noStroke();
  fill(138, 108, 88)
  ellipse(165, 260,30, 40)
  stroke(2);
  // head of bear
  fill(74, 49, 33)
  ellipse(300, head_level,180, 160)
  
  //left eyes of bear
  noStroke();
  fill(225,225,225)
  ellipse(270, sclera_eye_level,sclera_eye_height, sclera_eye_width)
  if(rage <3){
    fill(237, 14, 29)
    ellipse(275,sclera_eye_level+30-25,30,30)
  }
  else{
    fill(0,0,0)
    ellipse(275,sclera_eye_level+30-25,30,30)
  }
  
  //grumpy left
  if (sclera_eye_level> head_level-21){
    fill(0,0,0)
    ellipse(270, sclera_eye_level-22,74, 25)
  }
  //right eyes of bear
  fill(225,225,225)
  ellipse(330, sclera_eye_level,sclera_eye_height, sclera_eye_width)
  if(rage <3){
    fill(237, 14, 29)
    ellipse(326,sclera_eye_level+30-25,30,30)
  }
  else{
    fill(0,0,0)
    ellipse(326,sclera_eye_level+30-25,30,30)
  }
  //74, 49, 33
  //grumpy right
  if (sclera_eye_level> head_level-21){
    fill(0,0,0)
    ellipse(330, sclera_eye_level-22,74, 25)
  }
  noStroke();
  //sount of bear
  fill(138, 108, 88)
  ellipse(300, head_level+30,110, 90)
  fill(0,0,0)
  ellipse(300, head_level+30,60, 40)
  
  //snout curves
  // fill(0,0,0)
  // ellipse(snoutcurve-26,snout_curve_hight-7,50,38)
  
  stroke(2);
  //left leg
  fill(74, 49, 33)
  ellipse(230, leg_height-10,80, 100)
  
  //left soul
  noStroke();
  fill(138, 108, 88)
  ellipse(230, leg_height-45,20, 20)
  ellipse(253, leg_height-35,20, 20)
  ellipse(208, leg_height-35,20, 20)
  ellipse(230, leg_height,50, 65)//main soul
  //right leg
  stroke(2);
  fill(74, 49, 33)
  ellipse(362, leg_height-10,80, 100)
  //right soul
  noStroke();
  fill(138, 108, 88)
  ellipse(362, leg_height-45,20, 20)
  ellipse(340, leg_height-35,20, 20)
  ellipse(384, leg_height-35,20, 20)
  ellipse(362, leg_height,50, 65)
  
  
}