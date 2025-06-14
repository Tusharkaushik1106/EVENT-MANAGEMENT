document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var duration = document.getElementById('duration').value;
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;
    var image = document.getElementById('image').files[0];

    var eventDetails = document.getElementById('event-details');

    eventDetails.innerHTML = '<h2>Name: ' + name + '</h2>';
    eventDetails.innerHTML += '<p>Duration: ' + duration + '</p>';
    eventDetails.innerHTML += '<p>Start Date: ' + startDate + '</p>';
    eventDetails.innerHTML += '<p>End Date: ' + endDate + '</p>';

    
});