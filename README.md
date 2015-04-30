# InputDate-Datepicker-Plugin
Plugin to add booking widget with input date type and a fallback as Datepicker plugin - Requires jquery and Jquery UI (Datepicker) plugin

Set to accept two options :
#dateSplit
#dateFormat

Default values are : 
#dateSplit - '/'
#dateFormat - 'US'

Example Usage :
 $('div').inputdate({
   dateSplit:"-",
   dateFormat:"US"	
 });
 
 # Works as a datepicker for non touch devices
 # Works as a custom input date type for supported mobile/tablet devices, falls back to datepicker for the rest
