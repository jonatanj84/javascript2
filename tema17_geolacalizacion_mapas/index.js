let marker, map;

function initMap() {
    const posicion = {
        lat: 6.423754,
        lng:  -66.58973
    }

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: posicion
    });

    const marker = new google.maps.Marker({
      position: posicion,
      map: map,
    });
     
      const nuvoMarker1 = new google.maps.Marker({
        position: {
          lat: 6.4612962,
          lng: -75.5561504,
        },
        map,
        title: "colombia",
      })
    
      const nuvoMarker2 = new google.maps.Marker({
        position: {
          lat:  56.130366,
          lng:  -106.346771,
        },
        map,
        title: "colombia",
      })
   
}
