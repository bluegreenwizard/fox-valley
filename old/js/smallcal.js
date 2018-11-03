$(document).ready(function() {

  $cal = $("#smallcal");

  $cal.fullCalendar({
    googleCalendarApiKey: 'AIzaSyB7VipGPekfqFzHQ3P62_CE8nol9LIy9C4',
    defaultView: 'listMonth',
    eventSources: [
      {
        //Fond du Lac
        googleCalendarId: '26nd8v9ts6sse6skk5p328j47s@group.calendar.google.com',
        color: '#4f7ed0'
      },
      {
        //Oshkosh
        googleCalendarId: 'ncrmchu7qbd9l2rpd03260ur58@group.calendar.google.com',
        color: '#83d858'
      },
      {
        //WI-16 Cluster Events
        googleCalendarId: '4gfp5fsabj6hel7qovkln762hk@group.calendar.google.com',
        color: '#888'
      },
      {
        //Appleton Events
        googleCalendarId: '4r7jhn3bepqpd7b3u0j7078964@group.calendar.google.com',
        color: '#BF211E'
      }
    ]
  });

});
