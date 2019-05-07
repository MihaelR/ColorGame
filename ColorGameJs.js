var colors=generateRandomColors(6);
var squares = document.querySelectorAll(".square");       //select squares
var pickedColor = pickColor();                              //pick 1 color,
var colorDisplay=document.getElementById("colorDisplay");  //select in h1 Rgb
var messageDisplay=document.querySelector("#message");     //under h1 try again/correct
                         //colors from random colors func, it willl generate 6 colors

colorDisplay.textContent=pickedColor;                          //in h1 text content = picked color

for (var i=0; i <squares.length; i++) {                     //color squares

        //add inital colors to the squares
        squares[i].style.backgroundColor=colors[i];
        //add clicklistener to squares
        squares[i].addEventListener("click", function(){

            //grab color of clicked square
           var clickedColor = this.style.backgroundColor;               //pick square and see whicj color it is
            //compare color to pickedColor
            if (clickedColor===pickedColor) {
               messageDisplay.textContent="Correct!";             //if u pick right color u get under h1 correct
               changeColors(clickedColor);  //if u guess correctly all squares will be same colors
            }
            else {
                this.style.backgroundColor="#232323";  //if you click on the wrong one square.color=black
                messageDisplay.textContent="Try again!";   //if u miss color message is try again
            }

            
        });
}



//1.function when u pick right color change all squared in this color
function changeColors(color)  {
//loop through all squares
    for (var i=0; i<squares.length; i++){
    //change all of them in same correct color
        squares[i].style.backgroundColor = color;

}

}





//4.give to every square different random color
function pickColor() {

var random = Math.floor(Math.random() * colors.length);     //picks random number od o do array lenght,3 ili 6
return colors[random];      //return color on that place in array colors[3]=yellow
}


//3.RANDOM COLOR FUNC-generate 1 random color
function randomColor() {
    //get red 0-255
    var r = Math.floor(Math.random()*256);
    //get green 0-255
    var g = Math.floor(Math.random()*256);
    //get blue 0-255
    var b = Math.floor(Math.random()*256);
    //putit together
    return "rgb(" + r + "," + g + "," + b + ")";
}

//2.RANDOM COLOR PUSH INTO ARRAY
function generateRandomColors(num){
//make an array
    var arr=[]
//repeat num times
    for (var i= 0; i<num ; i++) {
        //get random color and push into arr
        arr.push(randomColor())

}
//return that array
return arr;

}
