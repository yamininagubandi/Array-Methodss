var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();

request.onload = function() {
    let countryData = JSON.parse(this.response);


    let countriesFromAsia = countryData.filter((x) => x.region == 'Asia');
    console.log(countriesFromAsia);

    let countriesPopulation = countryData.filter((x) => x.population < 200000);
    console.log(countriesPopulation);

    countryData.forEach(element => {
        console.log(`${element.flag}`);


    });

    let totalPopulation = countryData.reduce((sum, currentValue) => sum + currentValue.population, 0);
    console.log(`Total population : ${totalPopulation}`);

    let countriesUsingUSDollars = countryData.filter((x) => {
        for (let curr in x.currencies) {
            if (x.currencies[curr].code == 'USD') {
                return true;
            }
        }

    }).map(x => console.log(x.name));
}
