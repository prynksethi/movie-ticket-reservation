$(function() {

	var selectedSeatsArray = [];

	$('#submit-button').on('click', function(e) {
		$("#seatSelection").show();
		$('html, body').animate({scrollTop:$(document).height()}, 'slow');
    	return false; 

	});  

    
	$('#confirm-button').on('click', function(e) {
		$("#detailsDisplay").show(); 
		$('html, body').animate({scrollTop:$(document).height()}, 'slow');
    	return false;     
	
	}); 
	

  	$(".box").click(function() {
  		var personName = ($("#name").val());
  		var seatsCount = ($("#seats").val());
  		var rowElement = $(this).parent();
		var seatNumber = rowElement.find('.box').index(this) + 1;
		var rowLetter = rowElement.find("p").text();

	  	if (!$(this).hasClass("red")) {
	  		/**/
			if(seatsCount <= ($(".green").length)){
				if ($(this).hasClass("green")) {
					$(this).removeClass("green");
					removeElementFromArray(selectedSeatsArray, rowLetter + seatNumber);
				}
			} else {
				if ($(this).hasClass("green")) {
					$(this).removeClass("green");
					removeElementFromArray(selectedSeatsArray, rowLetter + seatNumber);
				} else{
					$(this).addClass("green");
					selectedSeatsArray.push(rowLetter + seatNumber);
				}
			}
			
		}

		$(".seat-numbers").text(selectedSeatsArray.join(","));
		$(".person-name").text(personName);
		$(".seats-count").text(seatsCount);
	     
  	});

  	function removeElementFromArray (array, element) {
  		var index = array.indexOf(element);

		if (index > -1) {
		    array.splice(index, 1);
		}
  	}
});