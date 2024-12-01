// my events array
var myEvents = [];
    
//$(document).ready(function () {
 document.addEventListener('DOMContentLoaded', function() {
		// creating variables
    var eventTitle = 0;
    var startDate = 0;
    var startEnd = 0;

    // creating loop on events collection list item
    $('.ec-col-item').each(function(){ 
		// collect data from html
    var eventTitle = $(this).find('.title').text();
    var startDate = $(this).find('.start-date').text().replace(/-/g, '-');
    var startEnd = $(this).find('.end-date').text().replace(/-/g, '-');
 
		// logging results
    console.log(eventTitle)
    console.log(startDate)
    console.log(startEnd)
  
    // pushing results onto calender
    myEvents.push({
     //   title: eventTitle,
        title: 'booked',
        start: new Date(startDate) ,
        end: new Date(startEnd),
        allDay: true,
        overlap: false,
        display: 'background'
    })
 });
 
 // create a date map for calender
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
  // intialize calendar
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
  
     headerToolbar: {
           start: 'title', 
 	   center: '',
  	   end: 'today prev,next' 
        },
        buttonText: {
            today: 'Today'
        },
       buttonIcons: {
  		prev: 'chevron-left',
  		next: 'chevron-right',
		},
       
        //height: 'auto',
	height: 500,
        selectable: false,
        initialDate: date,
        events: myEvents
  });

  calendar.render();
});
