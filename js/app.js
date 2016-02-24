//First Jquery App.js
// By CX

// defining key variables
var addHomeClicks = 0;

var goneContentTable = ('<table id="restoredhomes" class="table"><thead><tr><th>Address</th><th>Sq. Ft.</th><th>Bedrooms</th><th>Baths</th><th>Price</th><th></th></tr></thead>')

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];

// var startingRow = $('#homes tbody').children().length;

//START FUNCTION
$(function() {
	
	// Updating the CSS
	var $cells = $('#homes thead tr').children(); //selecting the immediate children elements of the selected element - in this case (#home thead tr)
	$cells.eq(0).css('color','blue'); //returns the 0th thinge in the object selected - child of #home thead tr, so the individual th cells
	$cells.eq(4).css('color','green'); //
	$('#addHome').removeClass('btn-danger').addClass('btn-success');
	$('h1').addClass('text-center');

	// adding the restore button
	var restoreButton = $('<br><br><button id="restoreHome" class="btn btn-success">Restore Data - not working yet :( </button>')
	restoreButton.appendTo('body');

	// adding the zillow link
	var newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow</a>')
		// <br><br><a id="yahooLink">Visit Yahoo</a>
		// <br><br><a id="googleLink">Visit Google</a>
		// ')
	newLink.appendTo('body'); //equivalent of 
	// $('body').append(newLink);
	$('#zillowLink').attr("target","_blank");
	// $('#zillowLink').attr("href","https://www.google.com");
	// $('#yahooLink').attr("target","_blank").attr("href","https://www.yahoo.com")
	//	$('#googleLink').attr ({
	//	target: "_blank",
	//	href: "https://www.google.com"
	// });

	// adding the function that happens when Add Home button is clicked
	$('#addHome').on('click', function(event) {
		addHomeClicks += 1;
		var add = newHomes[$('#homes tbody').children().length-3].address;
		var sqf = newHomes[$('#homes tbody').children().length-3].sf;
		var br = newHomes[$('#homes tbody').children().length-3].bedrooms;
		var bth = newHomes[$('#homes tbody').children().length-3].baths;
		var pr = newHomes[$('#homes tbody').children().length-3].price;
		var newRow = ('<tr><td>'+add+'</td><td>'+sqf+'</td><td>'+br+'</td><td>'+bth+'</td><td>'+pr+'</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
		console.log('add home was clicked');
		//$('#homes tbody').children().eq(eval($('#homes tbody').children().length)).after(newRow);
		$('#homes tbody').append(newRow);
		console.log($('#homes tbody').children().length);
		if (newHomes.length<= addHomeClicks) {
			$('#addHome').prop("disabled",true);}
	});

	// adding the remove home button functionality
		function removeHome(){
	 	console.log(this);
	 	//$(this).parent().parent().remove(); // v1 - Act on button, remove parent of the parent of the button (essentially tr, the row element)
	 	$(this).parents('tr').fadeOut(1000, function(){ //v2 - this is acting on (#homes tbody button) that .on is acting on
	 		$(this).hide(); //this is acting on parents('tr') that the .fadeOut is acting on 
	 	});
	 };
		$('#homes tbody').on('click','button', removeHome);

	// adding the restore button functionality
		function restoreData(){
		$('#restoreHome').prop("disabled",true);
		console.log($('tr').find( ":hidden" ));
		// var goneContent2 =$('<tbody>' + goneContent + '</tbody></table>')
	 // 	$('body').append(goneContentTable).append(goneContent2.show());
	 };
		
		$('#restoreHome').on('click', restoreData);

	console.log("Everything is ready, let's go!");

});





