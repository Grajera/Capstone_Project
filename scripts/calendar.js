document.addEventListener('DOMContentLoaded', function draw(data) {
  
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2022-10-29',
    headerToolbar: {
      right: 'prev,next today',
      center: 'title',
      left: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events:
    [
      {
        title: 'All Day Event',
        start: '2022-10-01'
      }
    ]
    
  });

  calendar.render();
});