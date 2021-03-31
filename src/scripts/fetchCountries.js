const basicUrl = 'https://restcountries.eu/rest/v2';
 function fetchCountries(countryName) { 
    return fetch(`${basicUrl}/name/${countryName}`)
  
    .then(response => {
      if (!response.ok) {
        throw new Error("Что-то пошло не так");
      }
      return response.json();
    })
  }
export default { fetchCountries};
