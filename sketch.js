var marks = [30,40,45,35];
var sum = 0 ;

function avg_marks(){
  for(var i=0; i < marks.length; i++){
    sum = sum + marks[i];
  }

  var avg = sum/marks.length;
  console.log(avg);
}

function setup() {
  createCanvas(400, 400);
  avg_marks();
}

function draw() {
  background(150);
}