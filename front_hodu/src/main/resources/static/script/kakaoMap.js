const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(33.4423472, 126.5719122), // 지도 중심좌표
    level: 3
};
let map = new kakao.maps.Map(container, options);           // 지도 생성

// 일반-스카이뷰 전환 컨트롤 생성 및 추가
let mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 확대 축소 컨트롤 생성 및 추가
let zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커
let markerPosition  = new kakao.maps.LatLng(33.4423472, 126.5719122);
let marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);

// 축적
map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);