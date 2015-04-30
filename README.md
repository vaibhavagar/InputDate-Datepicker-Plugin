# InputDate-Datepicker-Plugin
Plugin to add booking widget with input date type and a fallback as Datepicker plugin - Requires jquery and Jquery UI (Datepicker) plugin

<p>Set to accept two options :<br/>
#dateSplit<br/>
#dateFormat
</p>

<p>Default values are : <br/>
#dateSplit - '/', available options : '/','-'<br/>
#dateFormat - 'US', available options : 'US','UK'
</p>

<p>Example Usage :<br/>
 $('div').inputdate({
   dateSplit:"-",
   dateFormat:"US"	
 });
 </p>
 
<p> # Works as a datepicker for non touch devices</p>
<p> # Works as a custom input date type for supported mobile/tablet devices, falls back to datepicker for the rest</p>
