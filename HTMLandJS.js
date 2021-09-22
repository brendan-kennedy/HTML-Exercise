var button = document.querySelector("button");

var clickAlert = function() {
    alert("SOMEONE CLICKED THE BUTTON!!");
}
 

button.addEventListener("click", clickAlert);

var clickCount = 0

var logText = function(event) {
    console.log(event.target.textContent)
    button.innerHTML = clickCount += 1;
  }
  
  window.addEventListener("click", logText);

  var div = document.querySelector("div");

  var logText = function(event) {
    console.log(event.target.textContent);
  }
  
  div.addEventListener("click", logText);