// Creating a open street Map

const mymap = L.map('mapid').setView([51.505, -0.09], 5);
const mapAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tilesLayer = L.tileLayer(tileUrl, { mapAttribution });
tilesLayer.addTo(mymap);





// Creating the Marker 

const ISSIcon = L.icon({
    iconUrl: '../AdvanceJavaScript/Assets/images/ISSS.png',
    iconSize: [150, 120],
    iconAnchor: [65, 65]
});
const marker = L.marker([51.505, -0.09], { icon: ISSIcon })
    .addTo(mymap);
const circle = L.circle([51.505, -0.09], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 565000.0
    })
    .addTo(mymap);


//Current Location Of International SpaceStation
const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544';
let firstTime = true;
async function getISSDetails() {
    let res = await fetch(apiURL);
    let data = await res.json();
    marker.setLatLng([data.latitude, data.longitude]);
    circle.setLatLng([data.latitude, data.longitude]);
    if (firstTime) {
        mymap.setView([data.latitude, data.longitude], 5);
        firstTime = false;
    }
    console.log(data);
}
setInterval(() => {
    getISSDetails();
}, 1000);