function myFunction() {
  var triangle= document.getElementById("sideOne","sideTwo","sideThree").value;
//var triangle = function(sideOne, sideTwo, sideThree){
  if (isTriangle(sideOne, sideTwo, sideThree)) {
    return triangleType(sideOne, sideTwo, sideThree)
  } else {
    text="These sides do not a triangle make.";
  }
};
var triangleType = function(sideOne, sideTwo, sideThree){
  if (sideOne===sideTwo && sideTwo===sideThree) {
    text= "equilateral triangle";
  } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
    text= "isosceles triangle";
  } else {
    text= "scalene triangle";
  }
};
document.getElementById("feedback").innerHTML = text;
}