
import './styles.css';
import templateCountry from './templates/templateCountry.hbs';
import templateCountries from './templates/templateCountriesList.hbs';
import API from './scripts/fetchCountries'
import { onError } from './scripts/pnotify.js'
const debounce = require('lodash.debounce');



const divContainer = document.querySelector('.container');
const searchCountry = document.querySelector('#searchCountry')




searchCountry.addEventListener("input", debounce(onSearch, 500))

function onSearch(e) {
 e.preventDefault();

   const search = searchCountry.value;
  console.log(search);
  

  API.fetchCountries(search)
    .then(renderCountryCard)
    .catch(onErrorSearch)
    .finally(() => form.reset());
}

    
  

function renderCountryCard(countries) {
  if (countries.length === 1) {
    const countryCard = templateCountry(countries[0]);
    divContainer.innerHTML = '';
    divContainer.insertAdjacentHTML('beforeend', countryCard);
    
  }
  if (countries.length > 1) {
    const listCountries = templateCountries(countries);
    divContainer.innerHTML = '';
    divContainer.insertAdjacentHTML('beforeend', listCountries);
  } 

  if (countries.length >= 10) {
    divContainer.innerHTML = '';
    onError('Необходимо сделать запрос более специфичным')
  }  
  
};
    
function onErrorSearch(error) {
divContainer.innerHTML = '';
  onError('Что-то пошло не так')
}
  
  



