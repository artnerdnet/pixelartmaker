const table = $("#pixelCanvas");

// Create the Canvas
function makeGrid() {
	const height = $("#inputHeight").val();
	const width = $("#inputWeigth").val();
	for (let i = 0; i < height; i++) {
		table.append("<tr></tr>");
	}
	for (let i = 0; i < width; i++) {
		$("tr").append("<td></td>");
	}
}

// Colorize! 
table.on("click", "td", function() {
	const color = $("#colorPicker").val();
	$(this).css("background-color", color);
});

// Erase color with right click
table.on("contextmenu", "td", function(clear) {
	$(this).css("background-color", "transparent");
	clear.preventDefault();
});

// Calling function
$(document).ready(function() {
	$("#sizePicker").on("submit", function(evt) {
		table.html(""); 
		makeGrid();
		evt.preventDefault();
	});
});
//GETS COLOR
//set a value for the selected color
var selectedColor = $('#colorPicker').val();
console.log(selectedColor);
//create a function for changing the value of the colorPicker
$('#colorPicker').on("input",function(evt){
  evt.preventDefault();
  selectedColor = $(evt.target).val()
  console.log(selectedColor);
});

//add a click event to all cells
function colorChange(){
  $('td').each(function (){
    $(this).on("click",function(){
      $(this).css('background-color', selectedColor);
      console.log("this cell has been clicked and is now" + selectedColor)
    });
  });
}