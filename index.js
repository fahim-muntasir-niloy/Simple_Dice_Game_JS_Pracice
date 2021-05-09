//for dice 1
var randomNumber1 = Math.floor((Math.random())*6)+1;
var dice_no_1 = "dice"+randomNumber1+".png";
var dice_img_1 = "images/"+dice_no_1; //selecting the random image 1.
document.querySelector(".img1").setAttribute("src", dice_img_1);

//for dice 2
var randomNumber2 = Math.floor((Math.random())*6)+1;
var dice_no_2 = "dice"+randomNumber2+".png";
var dice_img_2 = "images/"+dice_no_2; //selecting the random image 2.
document.querySelector(".img2").setAttribute("src", dice_img_2);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "🚩 Its a Draw 🚩"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = " 🚩 Player 1 Wins"
}
else{
    document.querySelector("h1").textContent = " Player 2 Wins 🚩"
}
