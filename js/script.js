'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const switcher = document.querySelector('[data-switcher]');
  const titlePage = document.querySelector('title');

  switcher.onchange = (e) => {
    return getTranslateText(e.target.value);
  };

  async function getTranslateText(url) {
    let response = await fetch(`/lang/${url}.json`);
    let translation = await response.json();
    return translate(translation);
  }

  function translate(data) {
    titlePage.innerHTML = data.unit;

    for (let key in data) {
      if (data[key] != data.unit) {
        document.querySelector(`[data-key='${key}']`)
          .innerHTML = data[key];
      }
    }
  }

});

