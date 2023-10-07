document.addEventListener('DOMContentLoaded', function () {
    const tripForm = document.getElementById('trip-form');

    tripForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;

        
        const trip = {
            destination,
            date
        };

        
        const trips = JSON.parse(localStorage.getItem('trips')) || [];

        
        trips.push(trip);

        
        localStorage.setItem('trips', JSON.stringify(trips));

        
        window.location.href = 'trips.html';
    });
});
