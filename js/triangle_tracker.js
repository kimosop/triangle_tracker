var triangle = function(sideOne, sideTwo, sideThree){
  if (isTriangle(sideOne, sideTwo, sideThree)) {
    return triangleType(sideOne, sideTwo, sideThree)
  } else {
    return "These sides do not a triangle make.";
  }
};