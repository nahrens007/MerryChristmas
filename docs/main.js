
var y = [];
var xRange = [];
var xStart = [];
var x = [];
var xDirection = [];

var intervalVar;

function bodyOnLoad() {

}

function bodyOnResize() {
  clearInterval(intervalVar);

  containerOnLoad();
}

function containerOnLoad() {
  var width = document.getElementById("body-container").clientWidth;


  for (var i = 0; i < 20; i++)
  {
    x[i] = xStart[i] = Math.random() * width;
    xRange[i] = Math.random() * 500;
    y[i] = -(Math.random() * 1200);
    xDirection[i] = Math.random() * 2;
  }



  /* start snow flakes falling */
  intervalVar = setInterval(function() { updateSnow(); }, 10);
}

function updateSnow() {
  for (var i = 0; i < 20; i++)
  {

    document.getElementById("snowflake" + (i + 1) + "").style.top = y[i] + "px";
    document.getElementById("snowflake" + (i + 1) + "").style.left = x[i] + "px";

    y[i] += 2;

    if (xDirection[i] == 1)
      x[i] += .75;
    else {
      x[i] -= .75;
    }
    if (y[i] > document.getElementById("body-container").clientHeight) {
      y[i] = -80;
    }
    if (x[i] > xStart[i] + (xRange[i] / 2))
      xDirection[i] = 0;
    else if (x[i] + (xRange[i] / 2) < xStart[i]){
      xDirection[i] = 1;
    }

  }
}
