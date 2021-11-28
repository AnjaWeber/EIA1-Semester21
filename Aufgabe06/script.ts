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
    verbrauchanzeigen('Africa', africa2018, africaAnteilWelt2018, africaProzentualeVeraenderung, africaKilogrammVeraenderung);
}

function asia() {
    verbrauchanzeigen('Asia', asia2018, asiaAnteilWelt2018, asiaProzentualeVeraenderung, asiaKilogrammVeraenderung);

}
function australia() {
    verbrauchanzeigen('Australia', australia2018, australiaAnteilWelt2018, australiaProzentualeVeraenderung, australiaKilogrammVeraenderung);
}

function southAmerica() {
    verbrauchanzeigen('South America', southAmerica2018, southAmericaAnteilWelt2018, southAmericaProzentualeVeraenderung, southAmericaKilogrammVeraenderung);
}

function europe() {
    verbrauchanzeigen('Europe', europe2018, europeAnteilWelt2018, europeProzentualeVeraenderung, europeKilogrammVeraenderung);
}

function northAmerica() {
    verbrauchanzeigen('North America', northAmerica2018, northAmericaAnteilWelt2018, northAmericaProzentualeVeraenderung, northAmericaKilogrammVeraenderung);
}

function addClickListeners() {
    document.querySelector(".europe").addEventListener('click', europe);
    document.querySelector(".northamerica").addEventListener('click', northAmerica);
    document.querySelector(".southamerica").addEventListener('click', southAmerica);
    document.querySelector(".australia").addEventListener('click', australia);
    document.querySelector(".asia").addEventListener('click', asia)
    document.querySelector(".africa").addEventListener('click', africa);
}

window.addEventListener('load', addClickListeners)

function verbrauchanzeigen(kontinent: string, absoluterVerbrauch2018: number, relativerAnteil: number, prozentualeVeraenderung: number, kilogrammVeraenderung: number) {
    document.querySelector('#title').innerHTML = "Carbon Dioxide Emissions in " + kontinent;
    document.querySelector('#absolute').innerHTML = absoluterVerbrauch2018 + "";
    document.querySelector('#relative').innerHTML = relativerAnteil.toFixed(2) + "%";
    document.querySelector('#growthpercentage').innerHTML = prozentualeVeraenderung.toFixed(2) + "%";
    document.querySelector('#growthabsolute').innerHTML = kilogrammVeraenderung.toFixed(2) + "";
    document.querySelector('#absoluteSubtitle').innerHTML = "Emission absolute of " + kontinent + " in 2018";
    document.querySelector('.chart').setAttribute('style', 'height: ' + relativerAnteil + "%");

}

