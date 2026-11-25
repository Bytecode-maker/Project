var count = 0;
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
 var dark = document.body.classList.toggle("dark-mode");
  themeToggle.textContent = dark ? " 🌙": " ☀️";
});

btn.addEventListener("click", function () {
  count++;
  btn.textContent = "Clicked " + count + 
    (count === 1 ? " time" : " times");
  console.log("count is now", count);
});

btn2.addEventListener("click", function () {
  alert("Hi, bbgurl! How r u? :>");
});

btn3.addEventListener("click", function () {
  document.body.style.background = "pink";
});