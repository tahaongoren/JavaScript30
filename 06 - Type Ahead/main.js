const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');
cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
console.log(cities);

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

const displayMatches = () => {
  const matchArray = findMatches(input.value, cities);
  const html = matchArray
    .map((place) => {
        const regex = new RegExp(input.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="hl">${input.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${input.value}</span>`);    
      return `
    <li>
    <span class="name"> ${cityName}, ${stateName} </span>
    <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join('');
  suggestion.innerHTML = html;
};

input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);
