var spreadsheet = "https://docs.google.com/spreadsheets/d/1U96rriFYdKYyGwalw9LwHHMpw-rPoJb4Uu9zDRInJFQ/edit#gid=1904977568";

$(document).ready(function(){
  $('#pitchers').sheetrock({
    url: spreadsheet, 
    query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T",
    callback: function draw(error, options, response) {
if (error) {
console.log('fail');
}
else{
console.log(response.html);
}
}
});
setTimeout(function(){

$("table").tablesorter({
theme : "bootstrap",

widthFixed: true,

// widget code contained in the jquery.tablesorter.widgets.js file
// use the zebra stripe widget if you plan on hiding any rows (filter widget)
// the uitheme widget is NOT REQUIRED!
widgets : [ "filter", "columns", "zebra" ],

widgetOptions : {
  // using the default zebra striping class name, so it actually isn't included in the theme variable above
  // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
  zebra : ["even", "odd"],

  // class names added to columns when sorted
  columns: [ "primary", "secondary", "tertiary" ],

  // reset filters button
  filter_reset : ".reset",

  // extra css class name (string or array) added to the filter element (input or select)
  filter_cssFilter: [
    'form-control',
    'form-control',
    'form-control', 
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control',
    'form-control'
  ]

}
});
}, 500); 
$("table").trigger("update");
console.log()
});
    
    