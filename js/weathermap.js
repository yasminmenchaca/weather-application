"use strict";

// // mapbox

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ymenchaca2/ck5frnjrz0u3t1ipoj0uki3j8",
  center: [-98.491142, 29.424349],
  zoom: 10,
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");

map.scrollZoom.disable();

var marker = new mapboxgl.Marker({
  draggable: true,
})
  .setLngLat([-98.491142, 29.424349])
  .addTo(map);

/////////////////////////////////////////////////////////////////////// card information  ///////////////////////////////////////////////////////////////////////

const cardData = function (data) {
  // // Converting Time
  var dateObject = new Date(data.daily.data[0].time * 1000);

  var dateTomorrow = new Date(data.daily.data[1].time * 1000);

  var dateDayAfter = new Date(data.daily.data[2].time * 1000);

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var todayDay = weekday[dateObject.getDay()];

  var tomorrowDay = weekday[dateTomorrow.getDay()];

  var afterDay = weekday[dateDayAfter.getDay()];

  $("#mainDiv").html(
    '<div class="card-body text-center">' +
      '<h1 class="card-title">' +
      "<strong>Right Now</strong>" +
      "<hr>" +
      data.currently.temperature.toFixed() +
      "&#176F" +
      "</h1>" +
      '<div id="icon">' +
      "</div>" +
      "<strong> Feels Like: </strong>" +
      data.currently.apparentTemperature.toFixed() +
      "&#176F" +
      "<br>" +
      "<strong> Conditions: </strong>" +
      data.currently.summary +
      "<br>" +
      "<strong>Humidity: </strong>" +
      (data.currently.humidity * 100).toFixed() +
      "%" +
      "<br>" +
      "<strong>Wind: </strong>" +
      Math.floor(data.currently.windSpeed) +
      " MPH" +
      "<br>" +
      "<strong>Pressure: </strong>" +
      data.currently.pressure.toFixed() +
      "</div>"
  );

  if (data.currently.icon === "cloudy") {
    $("#icon").html('<img src="icons/wi-cloudy.svg">');
  } else if (data.currently.icon === "clear-day") {
    $("#icon").html('<img src="icons/wi-day-sunny.svg">');
  } else if (data.currently.icon === "clear-night") {
    $("#icon").html('<img src="icons/wi-night-clear.svg">');
  } else if (data.currently.icon === "rain") {
    $("#icon").html('<img src="icons/wi-rain.svg">');
  } else if (data.currently.icon === "snow") {
    $("#icon").html('<img src="icons/wi-snow.svg">');
  } else if (data.currently.icon === "sleet") {
    $("#icon").html('<img src="icons/wi-sleet.svg">');
  } else if (data.currently.icon === "wind") {
    $("#icon").html('<img src="icons/wi-windy.svg">');
  } else if (data.currently.icon === "fog") {
    $("#icon").html('<img src="icons/wi-fog.svg">');
  } else if (data.currently.icon === "partly-cloudy-day") {
    $("#icon").html('<img src="icons/wi-day-sunny-overcast.svg">');
  } else if (data.currently.icon === "partly-cloudy-night") {
    $("#icon").html('<img src="icons/wi-night-partly-cloudy.svg">');
  } else {
    $("#icon").html('<img src="icons/wi-na.svg">');
  }

  $("#todayDiv").html(
    '<div class="card-body text-center">' +
      '<h1 class="card-title">' +
      "<strong> Today </strong>" +
      "<hr>" +
      "High: " +
      Math.floor(data.daily.data[0].temperatureHigh) +
      "&#176F" +
      "<br>" +
      "Low: " +
      Math.floor(data.daily.data[0].temperatureLow) +
      "&#176F" +
      "</h1>" +
      '<div id="currentIcon">' +
      "</div>" +
      "<strong>Forecast: </strong>" +
      data.daily.data[0].summary +
      "<br>" +
      "<strong>Humidity: </strong>" +
      (data.daily.data[0].humidity * 100).toFixed() +
      "%" +
      "<br>" +
      "<strong>Wind: </strong>" +
      Math.floor(data.daily.data[0].windSpeed) +
      " MPH" +
      "<br>" +
      "<strong>Pressure: </strong>" +
      data.daily.data[0].pressure.toFixed() +
      "</div>"
  );

  if (data.daily.data[0].icon === "cloudy") {
    $("#currentIcon").html('<img src="icons/wi-cloudy.svg">');
  } else if (data.daily.data[0].icon === "clear-day") {
    $("#currentIcon").html('<img src="icons/wi-day-sunny.svg">');
  } else if (data.daily.data[0].icon === "clear-night") {
    $("#currentIcon").html('<img src="icons/wi-night-clear.svg">');
  } else if (data.daily.data[0].icon === "rain") {
    $("#currentIcon").html('<img src="icons/wi-rain.svg">');
  } else if (data.daily.data[0].icon === "snow") {
    $("#currentIcon").html('<img src="icons/wi-snow.svg">');
  } else if (data.daily.data[0].icon === "sleet") {
    $("#currentIcon").html('<img src="icons/wi-sleet.svg">');
  } else if (data.daily.data[0].icon === "wind") {
    $("#currentIcon").html('<img src="icons/wi-windy.svg">');
  } else if (data.daily.data[0].icon === "fog") {
    $("#currentIcon").html('<img src="icons/wi-fog.svg">');
  } else if (data.daily.data[0].icon === "partly-cloudy-day") {
    $("#currentIcon").html('<img src="icons/wi-day-sunny-overcast.svg">');
  } else if (data.daily.data[0].icon === "partly-cloudy-night") {
    $("#currentIcon").html('<img src="icons/wi-night-partly-cloudy.svg">');
  } else {
    $("#currentIcon").html('<img src="icons/wi-na.svg">');
  }

  $("#mainDiv2").html(
    '<div class="card-body text-center">' +
      '<h1 class="card-title">' +
      "<strong>" +
      tomorrowDay +
      "</strong>" +
      "<hr>" +
      "High: " +
      Math.floor(data.daily.data[1].temperatureHigh) +
      "&#176F" +
      "<br>" +
      "Low: " +
      Math.floor(data.daily.data[1].temperatureLow) +
      "&#176F" +
      "</h1>" +
      '<div id="icon2">' +
      "</div>" +
      "<strong>Forecast: </strong>" +
      data.daily.data[1].summary +
      "<br>" +
      "<strong>Humidity: </strong>" +
      (data.daily.data[1].humidity * 100).toFixed() +
      "%" +
      "<br>" +
      "<strong>Wind: </strong>" +
      Math.floor(data.daily.data[1].windSpeed) +
      " MPH" +
      "<br>" +
      "<strong>Pressure: </strong>" +
      data.daily.data[1].pressure.toFixed() +
      "</div>"
  );

  if (data.daily.data[1].icon === "cloudy") {
    $("#icon2").html('<img src="icons/wi-cloudy.svg">');
  } else if (data.daily.data[1].icon === "clear-day") {
    $("#icon2").html('<img src="icons/wi-day-sunny.svg">');
  } else if (data.daily.data[1].icon === "clear-night") {
    $("#icon2").html('<img src="icons/wi-night-clear.svg">');
  } else if (data.daily.data[1].icon === "rain") {
    $("#icon2").html('<img src="icons/wi-rain.svg">');
  } else if (data.daily.data[1].icon === "snow") {
    $("#icon2").html('<img src="icons/wi-snow.svg">');
  } else if (data.daily.data[1].icon === "sleet") {
    $("#icon2").html('<img src="icons/wi-sleet.svg">');
  } else if (data.daily.data[1].icon === "wind") {
    $("#icon2").html('<img src="icons/wi-windy.svg">');
  } else if (data.daily.data[1].icon === "fog") {
    $("#icon2").html('<img src="icons/wi-fog.svg">');
  } else if (data.daily.data[1].icon === "partly-cloudy-day") {
    $("#icon2").html('<img src="icons/wi-day-sunny-overcast.svg">');
  } else if (data.daily.data[1].icon === "partly-cloudy-night") {
    $("#icon2").html('<img src="icons/wi-night-partly-cloudy.svg">');
  } else {
    $("#icon2").html('<img src="icons/wi-na.svg">');
  }

  $("#mainDiv3").html(
    '<div class="card-body text-center">' +
      '<h1 class="card-title">' +
      "<strong>" +
      afterDay +
      "</strong>" +
      "<hr>" +
      "High: " +
      Math.floor(data.daily.data[2].temperatureHigh) +
      "&#176F" +
      "<br>" +
      "Low: " +
      Math.floor(data.daily.data[2].temperatureLow) +
      "&#176F" +
      "</h1>" +
      '<div id="icon3">' +
      "</div>" +
      "<strong>Forecast: </strong>" +
      data.daily.data[2].summary +
      "<br>" +
      "<strong>Humidity: </strong>" +
      (data.daily.data[2].humidity * 100).toFixed() +
      "%" +
      "<br>" +
      "<strong>Wind: </strong>" +
      Math.floor(data.daily.data[2].windSpeed) +
      " MPH" +
      "<br>" +
      "<strong>Pressure: </strong>" +
      data.daily.data[2].pressure.toFixed() +
      "</div>"
  );

  if (data.daily.data[2].icon === "cloudy") {
    $("#icon3").html('<img src="icons/wi-cloudy.svg">');
  } else if (data.daily.data[2].icon === "clear-day") {
    $("#icon3").html('<img src="icons/wi-day-sunny.svg">');
  } else if (data.daily.data[2].icon === "clear-night") {
    $("#icon3").html('<img src="icons/wi-night-clear.svg">');
  } else if (data.daily.data[2].icon === "rain") {
    $("#icon3").html('<img src="icons/wi-rain.svg">');
  } else if (data.daily.data[2].icon === "snow") {
    $("#icon3").html('<img src="icons/wi-snow.svg">');
  } else if (data.daily.data[2].icon === "sleet") {
    $("#icon3").html('<img src="icons/wi-sleet.svg">');
  } else if (data.daily.data[2].icon === "wind") {
    $("#icon3").html('<img src="icons/wi-windy.svg">');
  } else if (data.daily.data[2].icon === "fog") {
    $("#icon3").html('<img src="icons/wi-fog.svg">');
  } else if (data.daily.data[2].icon === "partly-cloudy-day") {
    $("#icon3").html('<img src="icons/wi-day-sunny-overcast.svg">');
  } else if (data.daily.data[2].icon === "partly-cloudy-night") {
    $("#icon3").html('<img src="icons/wi-night-partly-cloudy.svg">');
  } else {
    $("#icon3").html('<img src="icons/wi-na.svg">');
  }
};

/////////////////////////////////////////////////////////////////////// default marker  ///////////////////////////////////////////////////////////////////////

var darkSkyInfo = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/29.424349,-98.491142`;

function pullData() {
  $.get(darkSkyInfo).done(function (data) {
    cardData(data);
  });
}

pullData();

/////////////////////////////////////////////////////////////////////// draggable marker  ///////////////////////////////////////////////////////////////////////

function onDragEnd() {
  var lngLat = marker.getLngLat();

  var darkSkyInfo = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${lngLat.lat},${lngLat.lng}`;

  // // Pulling Weather
  $.get(darkSkyInfo).done(function (data) {
    cardData(data);
  });
  var mapCity = reverseGeocodeMarker(lngLat, mapboxToken);
  mapCity.then(function (result) {
    $(".span-location").html(result);
  });
}

marker.on("dragend", onDragEnd);

/////////////////////////////////////////////////////////////////////// search bar ///////////////////////////////////////////////////////////////////////

$("#submit").click(function () {
  var location = $(userInput).val();

  geocode(location, mapboxToken).then(function (result) {
    var latitude = result[1].toString();
    var longitude = result[0].toString();

    var coordinates = { lat: latitude, lng: longitude };

    $.get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${latitude},${longitude}`
    ).done(function (data) {
      cardData(data);
    });

    map.flyTo({ center: result, zoom: 10 });

    marker.setLngLat([longitude, latitude]);
    var mapCity = reverseGeocode(coordinates, mapboxToken);
    mapCity.then(function (result) {
      $(".span-location").html(result);
    });
  });
});
