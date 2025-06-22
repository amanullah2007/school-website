document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/JS/events.json")
    .then(response => response.json())
    .then(data => {
        // var filter_data = data.filter(item => item.id >=1 && item.id <=8)
        var container = document.getElementById("card-container");
        data.forEach(element => {
            container.innerHTML += `
            <div class="card">
              <img src="${element.image}" alt="event-image">
              <div class="card-content">
                <h2>${element.eventtitle}</h2>
                <p>${element.description}</p>
              </div>
            </div>
            `;
        });
    })
    .catch(error => console.error('Error fetching the Event Cards:', error));
});