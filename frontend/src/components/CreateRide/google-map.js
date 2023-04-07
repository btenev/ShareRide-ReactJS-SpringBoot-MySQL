const mylatlng = { lat: 42.6977, lng: 23.3219 };
const mapOptions = {
    center: mylatlng,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

//create Map

const map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

//create a directions service object to use the route method and get a result for our request

const directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route

const directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map

directionsDisplay.setMap(map);

// function 

function calcRoute() {
    //request
    const request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING,  // other modes: WALKING, BYCYCLING AND TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }


    //pass the request to the route method

    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {

            //get distance and time

            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br/> To: " + document.getElementById("to").value + ". <br/> Driving distance:" + result.routes[0].legs[0].distance.text + ".</br> Duration: " + result.routes[0].legs[0].duration.text + ". </div>";

            //display routes
            directionsDisplay.setDirections(result);
        } else {
            //delete routes from map
            directionsDisplay.setDirections({ routes: [] });

            //center map - mylatlng
            map.setCenter(mylatlng);

            //output error message incase of invalid destination
            output.innerHTML = "<div class='alert-danger'> Could not retrieve driving distance. </div>";
        }
    });
}

//create autocomplete objects for all input

const options = {
    types: ['(cities)']
}

const input1 = document.getElementById("from");
const autocomplete1 = new google.maps.places.Autocomplete(input1, options)

const input2 = document.getElementById("to");
const autocomplete2 = new google.maps.places.Autocomplete(input2, options)