var colors = [  "rgb(255, 0, 0)",          //made 6 colors for each square
                "rgb(255, 255, 0)",
                "rgb(0, 255, 0)",
                "rgb(0, 255, 255)",
                "rgb(, 0, 255)",
                "rgb(255, 0, 255)"
            ];

var squares = document.querySelectorAll(".square");       //select squares
var pickedColor = colors[3];                              //pick 1 color
var colorDisplay=document.getElementById("colorDisplay");  //select in h1 Rgb

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
                alert("correct");
            }
            else { alert("wrong!!")};

            
        });
}



