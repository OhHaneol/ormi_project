const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(33.442347233910816, 126.57191223611196),
    level: 3
};
var map = new kakao.maps.Map(container, options);