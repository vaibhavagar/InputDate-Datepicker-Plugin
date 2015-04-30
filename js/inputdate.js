/* input date type/datepicker 
Plugin to add booking widget with input date type and a fallback as Datepicker plugin - Requires jquery and Jquery UI (Datepicker) plugin
https://github.com/vaibhavagar/InputDate-Datepicker-Plugin
*/

/* Global Variables */
var dateFormat='';
var dateSplit='';
var options='';

(function($){
    $.fn.inputdate = function( options ){      
      /* starts*/
    var today = new Date();
    var tomorrow = new Date();

  var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  var dayNames = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

  var currentDay = new Date( today.getFullYear(), today.getMonth(), today.getDate() ).getDay();
  var currentDay2 = new Date( today.getFullYear(), today.getMonth(), today.getDate()+1 ).getDay();


	$('#arrival .date').html("<span class=\"booking-date\">"+today.getDate()+"</span>" + " " + months[today.getMonth()]+"<span class=\"year\">"+today.getFullYear()+"</span>");
	$('#arrival .left').html("<div class=\"day\">"+dayNames[currentDay]+"</div>");
	$('#departure .date').html("<span class=\"booking-date\">"+(today.getDate()+1)+"</span>" + " " + months[today.getMonth()]+"<span class=\"year\">"+today.getFullYear()+"</span>");
	$('#departure .left').html("<div class=\"day\">"+dayNames[currentDay2]+"</div>");

      /* Get and Set variables */
      var opts = $.extend( {}, $.fn.inputdate.defaults, options );
      dateFormat = opts.dateFormat;
      dateSplit = opts.dateSplit;
      
		$('#arrivalFrom').change(function() {
      
      if(dateFormat == 'UK'){
        if(dateSplit == '-'){
        var currentVal = $(this).val();
        var currentValSplit = currentVal.split('-');
        var currentValDay = parseInt(currentValSplit [0]);
        var currentValMonth = parseInt(currentValSplit [1]);
        var currentValYear = parseInt(currentValSplit [2]); 
        }
        else{
        var currentVal = $(this).val();
        var currentValSplit = currentVal.split('/');
        var currentValDay = parseInt(currentValSplit [0]);
        var currentValMonth = parseInt(currentValSplit [1]);
        var currentValYear = parseInt(currentValSplit [2]);
        }     
      }
      else{
        if(dateSplit == '-'){
 			var currentVal = $(this).val();
			var currentValSplit = currentVal.split('-');
			var currentValDay = parseInt(currentValSplit [2]);
			var currentValMonth = parseInt(currentValSplit [1]);
			var currentValYear = parseInt(currentValSplit [0]);
        }
        else{
  		var currentVal = $(this).val();
			var currentValSplit = currentVal.split('/');
			var currentValDay = parseInt(currentValSplit [2]);
			var currentValMonth = parseInt(currentValSplit [1]);
			var currentValYear = parseInt(currentValSplit [0]);
        }
			}
      
			var dateDay = new Date( currentValYear, currentValMonth-1, currentValDay ).getDay();
			var dateDay2 = new Date( currentValYear, currentValMonth-1, currentValDay+1 ).getDay();

			$('#arrival .date').html("<span class=\"booking-date\">"+currentValDay+"</span>" + " " + months[currentValMonth - 1]+"<span class=\"year\">"+currentValYear+"</span>");
			$('#arrival .left').html("<div class=\"day\">"+dayNames[dateDay]+"</div>");
			$('#departure .date').html("<span class=\"booking-date\">"+(currentValDay+1)+"</span>" + " " + months[currentValMonth - 1]+"<span class=\"year\">"+ currentValYear+"</span>");
			$('#departure .left').html("<div class=\"day\">"+dayNames[dateDay2]+"</div>");
		});

		$('#departureFrom').change(function() {
			var currentVal = $(this).val();
			var currentValSplit = currentVal.split('-');
			var currentValDay = parseInt(currentValSplit [2]);
			var currentValMonth = parseInt(currentValSplit [1]);
			var currentValYear = parseInt(currentValSplit [0]);

			var dateDay = new Date( currentValYear, currentValMonth-1, currentValDay ).getDay();

			$('#departure .date').html("<span class=\"booking-date\">"+currentValDay+"</span>" + " " + months[currentValMonth - 1]+"<span class=\"year\">"+ currentValYear+"</span>");
			$('#departure .left').html("<div class=\"day\">"+dayNames[dateDay]+"</div>");
		});


	if(!Modernizr.inputtypes.date || !Modernizr.touch) {
	        console.log("The 'date' input type is not supported, so using JQueryUI datepicker instead.");

	    $( "#arrivalFrom" ).datepicker({
	      defaultDate: "+1w",
	      changeMonth: true,
	      numberOfMonths: 1,
	      dateFormat: 'yy-mm-dd',
	      onClose: function( selectedDate ) {
	        $( "#departureFrom" ).datepicker( "option", "minDate", selectedDate );
	      }
	    });
	    $( "#departureFrom" ).datepicker({
	      defaultDate: "+1w",
	      changeMonth: true,
	      numberOfMonths: 1,
	      dateFormat: 'yy-mm-dd',
	      onClose: function( selectedDate ) {
	        $( "#arrivalFrom" ).datepicker( "option", "maxDate", selectedDate );
	      }
	    });
	}
      
      /* Courtesy - Liam's code */
$('.spinner').each(function () {

    $(this).find('.increment').click(function () {
        var spinner = $(this).parents('.spinner');
        var input = spinner.find('input');

        var minVal = spinner.attr('data-min');
        var maxVal = spinner.attr('data-max');
        var currentVal = parseInt(input.val());

        var section_value = spinner.find('.section_value');

        if (currentVal + 1 <= maxVal) {
            input.val(currentVal + 1);
            section_value.html(input.val());
        }
    });
    $(this).find('.decrement').click(function () {
        var spinner = $(this).parents('.spinner');
        var input = spinner.find('input');

        var minVal = spinner.attr('data-min');
        var maxVal = spinner.attr('data-max');
        var currentVal = parseInt(input.val());

        var section_value = spinner.find('.section_value');

        if (currentVal - 1 >= minVal) {
            input.val(currentVal - 1);
            section_value.html(input.val());
        }
    });
});
      
};
  $.fn.inputdate.defaults = {
    dateFormat: "US",
    dateSplit: "/"
  };
}( jQuery ));


