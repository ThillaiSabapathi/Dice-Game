var randonNumber1 = Math.floor(Math.random() * 6) + 1;

var randonNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = "dice" + randonNumber1 +".png";

var image2 = "dice" + randonNumber2 +".png";

var imageSource1 = "images/" + image1;

var imageSource2 = "images/" + image2;

document.querySelector(".img1").setAttribute("src", imageSource1);

document.querySelector(".img2").setAttribute("src", imageSource2);

if (randonNumber1 > randonNumber2) {
    document.querySelector("h1").textContent = "Player1 Wins" ;
}
else if (randonNumber1 < randonNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins" ;
}
else {
    document.querySelector("h1").textContent = "Draw";
}
