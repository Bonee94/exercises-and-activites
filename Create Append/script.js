var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";


li1.textContent = "Pizza";
li2.textContent = "Chicken and rice";
li3.textContent = "Hamburgers";
li4.textContent = "Apples"


body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);



h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)


listEl.setAttribute("style", "background-color: #333333; padding: 20px;")

li1.setAttribute("style", "background-color: #373737; color:white; margin-left: 35px; padding:5px;");
li2.setAttribute("style", "background-color: #414141; color:white; margin-left: 35px; padding:5px;");
li3.setAttribute("style", "background-color: #393939; color:white; margin-left: 35px; padding:5px;");
li4.setAttribute("style", "background-color: #505050; color:white; margin-left: 35px; padding:5px;");