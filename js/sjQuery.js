var url = 'https://restcountries.eu/rest/v2/name/';
var $table = $('table tbody');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  $table.empty();

  var record = '';

  resp.forEach(function(item) {
    record += '<tr> \
        <td><img src="'+item.flag+'"></td> \
        <td>' + item.name + '</td> \
        <td>' + item.capital + '</td> \
        <td>' + item.population + '</td> \
        <td>' + item.area + "km²" + '</td> \
        <td>' + item.languages[0].name + '</td> \
      </tr>';   	
  });

  $table.append(record);
}