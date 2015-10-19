function buildCheckerboard() {
	var size = document.getElementById("sizeInput").value; //Dimension
	var i = 0; // Rows
	var j = 1; // Columns

	//Call function to resize the board
	sizeBoard(size);

	var squareHeight = document.getElementById("checkerboard").clientHeight / size; //Set height of squares
	var squareWidth = document.getElementById("checkerboard").clientWidth / size; //Set width of squares

	while(i < size) {
		//For even numbered rows
		if(i%2 == 0) {
			var square = createDark(squareHeight, squareWidth);
			addSquare(square);
			while(j < size) {
				//For even numbered columns
				if(j%2 == 0) {
					//Make sure colors alternate
					square = createDark(squareHeight, squareWidth);
					addSquare(square);
				}
				//For odd numbered columns
				else {
					square = createLight(squareHeight, squareWidth);
					addSquare(square);
				}
				j ++;
			}
		}
		//For odd numbered rows
		else {
			var square = createLight(squareHeight, squareWidth);
			addSquare(square);
			while(j < size) {
				//Even numbered columns
				if(j%2 == 0) {
					//Make sure colors alternate
					square = createLight(squareHeight, squareWidth);
					addSquare(square);
				}
				//Odd numbered columns
				else {
					square = createDark(squareHeight, squareWidth);
					addSquare(square);
				}
				j ++;
			}
		}
		//Reset column counter, increment row counter
		j = 1;
		i++;
	}
}

//Generate light colored squares for the checkerboard
function createLight(height, width) {
	var lightSquare = document.createElement("DIV");
	lightSquare.className = "square_one";
	lightSquare.style.height = height + "px";
	lightSquare.style.width = width + "px";
	return lightSquare;
}

//Generate dark colored squares for the checkerboard
function createDark(height, width) {
	var darkSquare = document.createElement("DIV");
	darkSquare.className = "square_two";
	darkSquare.style.height = height + "px";
	darkSquare.style.width = width + "px";
	return darkSquare;
}

//Function to add the square to the checkerboard
function addSquare(square) {
	document.getElementById("checkerboard").appendChild(square);
}

//Resize the board depending on the chosen dimensions. 
function sizeBoard(size) {
	//Never allow squares to get too small using size ratio.
	document.getElementById("checkerboard").style.height = (size/0.04) + "px";
	document.getElementById("checkerboard").style.width = (size/0.04) + "px";
}

//Clear the old checkerboard and call function to replace it with a new one.
function generateNewCheckerboard() {
	var checkerboard = document.getElementById("checkerboard");

	//Deleting old checkerboard tiles
	while (checkerboard.lastChild) {
		checkerboard.removeChild(checkerboard.lastChild);
	}
	buildCheckerboard();
}