// Array for the three colors
var colorList = ["red", "green", "blue"];
var elements = [];

// Function for creating the Div tag
function createDiv(data){
  var that = this;
  this.totalClicks = 0;
  this.ele = document.createElement("div");
  this.eleClicks = document.createElement("div");
  this.eleClicks.innerHTML = this.totalClicks;
  this.ele.addEventListener("click", function() {
    that.increaseClicks();
  });
  
  //Styling the div tags through javascript
  this.ele.style.backgroundColor = data;
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.borderRadius = "10px";
  this.eleClicks.style.fontSize = "18px";
  this.eleClicks.style.color = "white";
  this.eleClicks.style.textAlign = "center";
  this.eleClicks.style.top = "50px";
  this.eleClicks.style.paddingTop = "40px";
  
  // This is appending the ele to the html body 
  this.ele.appendChild(this.eleClicks);
  document.body.appendChild(this.ele);
}

// Prototype function for the increasing clicks
createDiv.prototype.increaseClicks = function () {
  this.totalClicks = this.totalClicks + 1;
  this.eleClicks.innerHTML = this.totalClicks;
};

// element pushing for multiple Div tags
for(var ii = 0; ii < colorList.length; ii++){
  elements.push(new createDiv(colorList[ii]));
}