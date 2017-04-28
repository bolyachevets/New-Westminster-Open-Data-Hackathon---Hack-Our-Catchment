// Set initial map location
var initLocation = {
    center: {
        lat: 49.2064,
        lng: -122.91092
    },
    zoom: 13
};

var map;

// initialize map
function initMap() {
    //write script to insert API key into HTML code
    map = new google.maps.Map(document.getElementById('map'), {
        center: initLocation.center,
        zoom: initLocation.zoom
    });

    // bounds object to fit screen to the bounds of the window
    var bounds = new google.maps.LatLngBounds();

    // layer for kml catchment data

}


$('form').submit(function() {
    var checkedValue = $(':checked');

    // assign updateTotal function to onclick property of each checkbox
    if (checkedValue.length !== 0) {

        for(var i=0; i < checkedValue.length; i++) {


        if (checkedValue[i].value ==="url1")
        {var layer1 = new google.maps.KmlLayer({
          url: "https://raw.githubusercontent.com/b3v9a/HackOurCatchment/master/data/kml/catchment.kml?token=AV6KVUYBolpjB_PEzAsx1QW1UtZmVSCXks5YvE3wwA%3D%3D",
          map: map
        });
        google.maps.event.addListenerOnce(layer1, 'mouseover', function () {
                layer1.polystyle.setOptions({Color: "#FFFF00"});
        });
        }

        if(checkedValue[i].value === "url2") {
          var layer2 = new google.maps.KmlLayer({
          url: "https://raw.githubusercontent.com/b3v9a/HackOurCatchment/master/data/kml/french_early_immersion.kml?token=AV6KVakG_D9wEU9jp7AGAg_99ddHXvQjks5YvE4awA%3D%3D",
          map: map
         }); 
        }

        if(checkedValue[i].value === "url3") {
          var layer3 = new google.maps.KmlLayer({
          url: "https://raw.githubusercontent.com/b3v9a/HackOurCatchment/master/data/kml/french_late_immersion.kml?token=AV6KVRF4SFrG7w1_yrPMxI9v3VSe6APjks5YvGDcwA%3D%3D",
          map: map
         }); 
        }
        

        if(checkedValue[i].value === "url4") {
         var layer4 = new google.maps.KmlLayer({
          url: "https://raw.githubusercontent.com/b3v9a/HackOurCatchment/master/data/kml/montessori.kml?token=AV6KVUR1lU2n6vyYUb5LTu8GeXCx4G12ks5YvE5OwA%3D%3D",
          map: map
         }); 
        }

        }
    return false;
    }
});

function clearSelection(){

$('input[type="checkbox"]:checked').prop('checked',false);

var checkedValue = $(':checked');
map = new google.maps.Map(document.getElementById('map'), {
        center: initLocation.center,
        zoom: initLocation.zoom
    });

    // bounds object to fit screen to the bounds of the window
    var bounds = new google.maps.LatLngBounds();

    // layer for kml catchment data


}




