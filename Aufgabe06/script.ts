// “Die Emission von Europa ist: XXXXX kg CO2” “Relativ zur Gesamtemission der Welt verursacht Europa damit XX%” “Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert” “2018 im Vergleich zu 2008 sind das XXXX kg CO2”

var africa2008: number = 1028;
var southAmerica2008: number = 1132.6;
var europe2008: number = 4965.7;
var northAmerica2008: number = 6600.4;
var asia2008: number = 12954.7;
var australia2008: number = 1993;
var africa2018: number = 1235.5;
var southAmerica2018: number = 1261.5;
var europe2018: number = 4209.3;
var northAmerica2018: number = 6035.6;
var asia2018: number = 16274.1;
var australia2018: number = 2100.5;

var world2018: number = africa2018 + southAmerica2018 + europe2018 + northAmerica2018 + asia2018 + australia2018;
var africaAnteilWelt2018: number = africa2018 / world2018 * 100;
var asiaAnteilWelt2018: number = asia2018 / world2018 * 100;
var australiaAnteilWelt2018: number = australia2018 / world2018 * 100;
var southAmericaAnteilWelt2018: number = southAmerica2018 / world2018 * 100;
var europeAnteilWelt2018: number = europe2018 / world2018 * 100;
var northAmericaAnteilWelt2018: number = northAmerica2018 / world2018 * 100;

var africaProzentualeVeraenderung: number = africa2018 * 100 / africa2008 - 100;
var asiaProzentualeVeraenderung: number = asia2018 * 100 / asia2008 - 100;
var australiaProzentualeVeraenderung: number = australia2018 * 100 / australia2008 - 100;
var southAmericaProzentualeVeraenderung: number = southAmerica2018 * 100 / southAmerica2008 - 100;
var europeProzentualeVeraenderung: number = europe2018 * 100 / europe2008 - 100;
var northAmericaProzentualeVeraenderung: number = northAmerica2018 * 100 / northAmerica2008 - 100;

var africaKilogrammVeraenderung: number = africa2018 - africa2008;
var asiaKilogrammVeraenderung: number = asia2018 - asia2008;
var australiaKilogrammVeraenderung: number = australia2018 - australia2008;
var southAmericaKilogrammVeraenderung: number = southAmerica2018 - southAmerica2008;
var europeKilogrammVeraenderung: number = europe2018 - europe2008;
var northAmericaKilogrammVeraenderung: number = northAmerica2018 - northAmerica2008;

function africa() {
    console.log('Die Emission von Afrika ist: ' + africa2018 + ' kg CO2');
    console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + africaAnteilWelt2018.toFixed(2) + '%')
    console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + africaProzentualeVeraenderung.toFixed(2) + '% verändert')
    console.log('2018 im Vergleich zu 2008 sind das ' + africaKilogrammVeraenderung.toFixed(2) + ' kg CO2')
    document.querySelector('#absolute').innerHTML = africa2018 + "";
    document.querySelector('#relative').innerHTML = africaAnteilWelt2018.toFixed(2) + "%";
    document.querySelector('#growthpercentage').innerHTML = africaProzentualeVeraenderung.toFixed(2) + "%";
    document.querySelector('#growthabsolute').innerHTML = africaKilogrammVeraenderung.toFixed(2) + "";
    document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector('#absoluteSubtitle').innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector('.chart').setAttribute('style', 'height: '+africaAnteilWelt2018 + "%");
}

window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener('click', africa);
})
function asia() {
    console.log('Die Emission von Asien ist: ' + asia2018 + ' kg CO2')
    console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + asiaAnteilWelt2018.toFixed(3) + '%')
    console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + asiaProzentualeVeraenderung.toFixed(2) + '% verändert')
    console.log('2018 im Vergleich zu 2008 sind das ' + asiaKilogrammVeraenderung.toFixed(2) + ' kg CO2')
    document.querySelector('#absolute').innerHTML = asia2018 + "";
    document.querySelector('#relative').innerHTML = asiaAnteilWelt2018.toFixed(2) + "%";
    document.querySelector('#growthpercentage').innerHTML = asiaProzentualeVeraenderung.toFixed(2) + "%";
    document.querySelector('#growthabsolute').innerHTML = asiaKilogrammVeraenderung.toFixed(2) + "";
    document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector('#absoluteSubtitle').innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector('.chart').setAttribute('style', 'height: '+asiaAnteilWelt2018 + "%");

}
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener('click', asia);
})
function australia() {
    console.log('Die Emission von Australien ist: ' + australia2018 + ' kg CO2')
    console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + australiaAnteilWelt2018.toFixed(2) + '%')
    console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + australiaProzentualeVeraenderung.toFixed(2) + '% verändert')
    console.log('2018 im Vergleich zu 2008 sind das ' + australiaKilogrammVeraenderung.toFixed(2) + ' kg CO2')
    document.querySelector('#absolute').innerHTML = australia2018 + "";
    document.querySelector('#relative').innerHTML = australiaAnteilWelt2018.toFixed(2) + "%";
    document.querySelector('#growthpercentage').innerHTML = australiaProzentualeVeraenderung.toFixed(2) + "%";
    document.querySelector('#growthabsolute').innerHTML = australiaKilogrammVeraenderung.toFixed(2) + "";
    document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector('#absoluteSubtitle').innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector('.chart').setAttribute('style', 'height: '+australiaAnteilWelt2018 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener('click', australia);
})
function southAmerica() {
    console.log('Die Emission von Südamerika ist: ' + southAmerica2018 + ' kg CO2')
    console.log('Relativ zur Gesamtemission der Welt verursacht Südamerika damit ' + southAmericaAnteilWelt2018.toFixed(2) + '%')
    console.log('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + southAmericaProzentualeVeraenderung.toFixed(2) + '% verändert')
    console.log('2018 im Vergleich zu 2008 sind das ' + southAmericaKilogrammVeraenderung.toFixed(2) + ' kg CO2')
    document.querySelector('#absolute').innerHTML = southAmerica2018 + "";
    document.querySelector('#relative').innerHTML = southAmericaAnteilWelt2018.toFixed(2) + "%";
    document.querySelector('#growthpercentage').innerHTML = southAmericaProzentualeVeraenderung.toFixed(2) + "%";
    document.querySelector('#growthabsolute').innerHTML = southAmericaKilogrammVeraenderung.toFixed(2) + "";
    document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector('#absoluteSubtitle').innerHTML = "Emission absolute of South America in 2018";
    document.querySelector('.chart').setAttribute('style', 'height: '+southAmericaAnteilWelt2018 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener('click', southAmerica);
})
function europe() {
    console.log('Die Emission von Europa ist: ' + europe2018 + ' kg CO2')
    console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + europeAnteilWelt2018.toFixed(2) + '%')
    console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + europeProzentualeVeraenderung.toFixed(2) + '% verändert')
    console.log('2018 im Vergleich zu 2008 sind das ' + europeKilogrammVeraenderung.toFixed(2) + ' kg CO2')
    document.querySelector('#absolute').innerHTML = europe2018 + "";
    document.querySelector('#relative').innerHTML = europeAnteilWelt2018.toFixed(2) + "%";
    document.querySelector('#growthpercentage').innerHTML = europeProzentualeVeraenderung.toFixed(2) + "%";
    document.querySelector('#growthabsolute').innerHTML = europeKilogrammVeraenderung.toFixed(2) + "";
    document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector('#absoluteSubtitle').innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector('.chart').setAttribute('style', 'height: '+europeAnteilWelt2018 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', europe);
})
function northAmerica() {
    console.log('Die Emission von Nordamerika ist: ' + northAmerica2018 + ' kg CO2')
    console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + northAmericaAnteilWelt2018.toFixed(2) + '%')
    console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + northAmericaProzentualeVeraenderung.toFixed(2) + '% verändert')
    console.log('2018 im Vergleich zu 2008 sind das ' + northAmericaKilogrammVeraenderung.toFixed(2) + ' kg CO2')
    document.querySelector('#absolute').innerHTML = northAmerica2018 + "";
    document.querySelector('#relative').innerHTML = northAmericaAnteilWelt2018.toFixed(2) + "%";
    document.querySelector('#growthpercentage').innerHTML = northAmericaProzentualeVeraenderung.toFixed(2) + "%";
    document.querySelector('#growthabsolute').innerHTML = northAmericaKilogrammVeraenderung.toFixed(2) + "";
    document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector('#absoluteSubtitle').innerHTML = "Emission absolute of North America in 2018";
    document.querySelector('.chart').setAttribute('style', 'height: '+northAmericaAnteilWelt2018 + "%");
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener('click', northAmerica);
})

