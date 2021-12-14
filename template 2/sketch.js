//Creating a house
let x,y,r,g,b
function setup() {
  createCanvas (1000,1000); //size of canvas
  background (245,215,0,);//Yellow
 }
 function draw (){
   fill(245,59,29);//color of square
   rect(300,300,300,300);
   fill(69,34,245);//color of triangle
   triangle(250,300,650,300,450,100);
   fill(41,230,145);//color of rectangle 
   rect(425,500,50,100);
   fill(255,255,255);//color of square windows
   rect(350,350,50,50);
   rect(500,350,50,50);
   line(10,100,20,20);
   r = random(255);
   g = 0;
   b = random(200);
   x = random (width);
   y = random (height);
   noStroke();
   fill(r,g,b,);
   ellipse(x,y,10,10);//size of circle
   
    fill(1);//Move around the mouse and it would create grey dots
   ellipse(mouseX,mouseY,10,10);
  
 }
function mousePressed() {
  background(255);
}


 
