var cnv;
let starCanvas;

let size = 30;
let starArr= [];
let numStars = 2001;
const map = [];




function setup() {
  createCanvas(800,800);

  background("#040107");

  starCanvas = createGraphics(800,800,WEBGL);
  starCanvas.clear();

  for(var y = 0; y < (height/size);y++){
    var line = [];
    for(var x = 0; x < (width/size); x++){
      line.push((round(random(100,999)) % 2) == 0?true:false);
    }
    map.push(line);
  }
 

  for(let i = 0; i < numStars; i++){
    starArr.push(new STARS());
  }

}





function draw() {
 

  starCanvas.camera(0,0,900,0,0,0,1,-1,1);
  starCanvas.smooth();
  
   
 

  for(let i = 0; i < numStars; i++){
    starArr[i].drawstar();
  }
 
  

  


  starCanvas.ambientLight(29, 22, 30);
  starCanvas.pointLight(64,47,96,0,0,0);
  starCanvas.pointLight(10,43,117,800,0,0);
  starCanvas.pointLight(10,43,117,0,800,-100);

  starCanvas.pointLight(76,28,70,0,-800,-100);
  starCanvas.pointLight(76,28,70,-800,0,0);

  starCanvas.spotLight(76,28,70,0,0,1000,0,0,-1);

  for(var y = 0; y < (height/size); y++){
    for (var x = 0; x < (width/size); x++){
      if (map[y][x]){
        starCanvas.push();
        //starCanvas.ambientMaterial(255);
        starCanvas.specularMaterial(100);
        starCanvas.stroke("#FAEA88");
        starCanvas.strokeWeight(.2);
        starCanvas.translate((x*size)-(width/2),(y*size)-(height/2),0);
        starCanvas.box(size);
        starCanvas.pop();
      }
    }
  }

  image(starCanvas,0,0);
  


 
  noLoop();
}

function drawstar(){
}


class STARS{

  constructor(){
    this.Xpos = random(0,width);
    this.Ypos = random(0,height);
    this.stroke =  random(0.2,1.4);


  }

  drawstar(){
     
   strokeWeight(this.stroke);
   stroke(250);
   
   //point(this.Xpos,this.Ypos);

  
   point(this.Xpos,this.Ypos);
   
    
  }

}



