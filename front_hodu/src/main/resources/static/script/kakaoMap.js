const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(33.421332, 126.6719281),
    level: 3
};
var map = new kakao.maps.Map(container, options);