mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuZ3RvciIsImEiOiJjbGN2N2VueHowd2xuM3JwNWUwYmppYTg4In0.wS0qJyacGyqRQkNoP7fnmw'; //Add default public map token from your Mapbox account 

const map = new mapboxgl.Map({
    container: 'map1', // Add div container ID for your map
    style: 'mapbox://styles/mapbox/streets-v12', // Add link to style URL
    center: [-79.3, 43.6], // starting position [longitude, latitude]
    zoom: 11, // starting zoom
});
//The part above is adding a map



map.on('load', () => {
    /*ADDING A SOURCE FROM A GEOJSON FILE*/
    map.addSource('uoft', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    })
    map.addLayer({
        'id': 'uoft-buildings',
        'type': 'circle',
        'source': 'uoft',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }

    });
    //this is the second point to load on the map
    map.addSource('uoft', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -78.39865237301687,
                            42.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    })
    map.addLayer({
        'id': 'uoft-building',
        'type': 'circle',
        'source': 'uoft',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }

    });

});

  
// /*ADDING A SOURCE FROM A MAPBOX TILESET - DATA YOU UPLOADED TO MAPBOX STUDIO*/
//   map.addSource('torontoct-69pfto', { //Your source ID
//     'type': 'vector',
//     'url': 'https://studio.mapbox.com/tilesets/dengtor.ct7pem2w/#10/43.9158/-79.5711' //Your tileset link from mapbox
// });

// map.addLayer({
//     'id': 'dengtor.ct7pem2w',
//     'type': 'fill',
//     'source': 'torontoct-69pfto', //must match source ID from addSource method
//     'paint': {
//         'fill-color': '#888888',
//         'fill-opacity': 0.4,
//         'fill-outline-color': 'black'
//     },
//     'source-layer': 'torontoct-69pfto' //name of layer. Get this from mapbox tileset page
// },
//      'uoft-buildings' //Drawing order - place below points
// );
