var colors = [  "rgb(255, 0, 0)",          //made 6 colors for each square
                "rgb(255, 255, 0)",
                "rgb(0, 255, 0)",
                "rgb(0, 255, 255)",
                "rgb(0, 0, 255)",
                "rgb(255, 0, 255)"
            ];

var squares = document.querySelectorAll(".square");       //select squares
var pickedColor = pickColor();                              //pick 1 color,
var colorDisplay=document.getElementById("colorDisplay");  //select in h1 Rgb
var messageDisplay=document.querySelector("#message");     //under h1 try again/correct

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



//function when u pick right color change all squared in this color
function changeColors(color)  {
//loop through all squares
    for (var i=0; i<squares.length; i++){
    //change all of them in same correct color
        squares[i].style.backgroundColor = color;

}

}

//random color funtcion
function pickColor() {

var random = Math.floor(Math.random() * colors.length);     //picks random number od o do array lenght,3 ili 6
return colors[random];      //return color on that place in array colors[3]=yellow
}



