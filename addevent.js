
var xhr = new XMLHttpRequest();
const addButton = document.getElementById('publish-button');
addButton.addEventListener('click', (e) => {
    const title = document.getElementById('name').value;
    const desc = document.getElementById('desc').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const duration = document.getElementById('duration').value;
    const venueId = document.getElementById('venue').value;
    let venue;
    if (venueId === 1) venue = 'Google Meet'
    else if (venueId === 2) venue = 'Zoom'
    else venue = 'Discord'
    const participants = document.getElementById('participants').value;

    const obj = {
        title,
        desc,
        date,
        time,
        venue,
        duration,
        participants,
    }
    try {
        xhr.open("POST", "http://localhost:8800/events/add", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            title: title,
            desc: desc,
            date: date,
            time: time,
            venue: venue,
            duration: duration,
            noOfParticipants: participants,
        }));
    } catch (err) {
        console.log(err);
    }
})

