var formEl = document.querySelector('#user-form');
var cityInputEl = document.querySelectorAll('#button');
var liContainerEl = document.querySelector('#city-container');
var searchedCityEl = document.querySelector('#searchedCities');
//listning event for imput and fetch response for city provided


var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getCityInfo(cityName);

        liContainerEl.textContent = '';
        cityInputEl = '';
    } else {
        alert("Please provide the name of the city who's weather you wish to inquire about");
    }
};
 console.log('1');
var getCityInfo = function (city) { 
   
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=laredo&appid=8522788feb48b4797ad60e7823e7392b";
    console.log('3');
    // 'https://api.github.com/users/' + user + '/repos';
    // "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=8522788feb48b4797ad60e7823e7392b";
    
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        displayCityInfo(data, city);
                    });
            } else {
                alert('Error:' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to complet request at this time, try again in a few seconts');
        })
};
console.log('4');

var displayCityInfo = function (info, searchTerm) {
    if (info.length === 0) {
        liContainerEl.textContent = 'No information found.';
        return;
    }

    console.log('5');
    searchedCityEl.textContent = searchTerm;

    for (var i = 0; i < info.length; i++) {
        var cityNameEl = info[i].something.something + '/' + info[i].something;

        var cityEl = document.createElement('div');
        cityElement.classList = 'list-item flex-frow justify-space-between alight-left';

        var cityEl2 = document.createElement('span');
        cityEl2.textContent = cityNameEl;

        cityEl.appendChild(cityEl2);

        console.log('6');

        var statusEl = document.createElement('span');
        statusEl.classList = 'flex-row align-center';

        if (info[i].open_issues_count > 0) {
            statusEl.innerHTML =
                "<i class='fas fa-times status-icon icon-danger'></i>" + info[i].open_issues_count + ' issue(s)';
        } else {
            statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }

        cityEl.appendChild(statusEl);

        liContainerEl.appendChild(cityEl);
    }
console.log('7');
    // display current information on site in given areas
};console.log('8');
//creat li and enter on list



//display weather for city after search inlucing icon

//UV provide correct indext color




//present 5 day forcast 



// searccity by list or by entry


formEl.addEventListener('sumbit', formSubmitHandler);


