## Google Maps ##
Some links with good examples and also the capatibility to change all the colors:

- http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html

- https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple?hl=es

- Oficial editor by google:
https://mapsengine.google.com

Access to the Location:
- Web: 

```
<script>
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
</script>
```

- Cordova: Adding the plugin: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
```
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}
```

![enter image description here](https://raw.githubusercontent.com/ctwhome/lab/master/google-maps/map.png)

