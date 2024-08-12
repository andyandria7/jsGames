document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.header button');
  const responseInput = document.getElementById('response');
  const indice = document.querySelector('#indice');
  const alphabetButtons = document.querySelectorAll('.touches button:not(#ok)');
  const validateButton = document.getElementById('ok');
  const effacer = document.getElementById('effacer');
  let selectedWord;
  const reloaded = this.getElementById('reload');
  const word = {
    sport: [
      'basket', 'football', 'tennis', 'rugby', 'golf'
    ],
    sakafo: ['pizza', 'hamburger', 'poisson', 'sushi', 'taco',
      'salade', 'fruit', 'vegetable'],
    animal: ['lion', 'elephant', 'zebre', 'singe',
      'chien', 'chat', 'oiseaux', 'poisson'],
    country: ['France', 'Espagne', 'Angleterre', 'Allemagne',
      'Italie', 'Portugal', 'Belgique', 'Roumanie']
  }
  let essaie = 3;
  const header = document.querySelector('header, victoire');

  playButton.addEventListener('click', startGame);
  validateButton.addEventListener('click', validation);
  effacer.addEventListener('click', reset);
  reloaded.addEventListener('click', () => {
    location.reload();
  });

  alphabetButtons.forEach(button => {
    button.addEventListener('click', () => {
      responseInput.value += button.textContent;
    });
  });

  function startGame() {

    // console.log(Object.keys(word));
    const obj = Object.keys(word);
    const randobj = Math.floor(Math.random() * obj.length);
    const tabobj = obj[randobj];


    const mot = word[tabobj]
    const randomIndex = Math.floor(Math.random() * mot.length);
    selectedWord = mot[randomIndex];

    console.log(tabobj);
    indice.value = `${tabobj} avec ${selectedWord.length} syllabes`;
    console.log('Le mot choisi est :', selectedWord);
  }

  function validation() {
    const userResponse = responseInput.value.trim().toLowerCase();
  
    if (userResponse === selectedWord) {
      header.style.display = 'block';
      console.log('Bravo ! Vous avez deviné le bon mot.');
      
    } else {
      essaie--;
      if (essaie > 0) {
        responseInput.value = '';
        responseInput.style.backgroundColor = 'red';
        responseInput.setAttribute('placeholder',`Il vous reste ${essaie} essais.`);
        console.log(`Il vous reste ${essaie} essais.`);
      } else {
        console.log('Désolé, la réponse est incorrecte. Essayez à nouveau.');
        alert(`Désolé, vous avez épuisé tous vos essais. Le mot était : ${selectedWord}`);
        responseInput.value = '';
      }
    }
  }

  function reset() {
    responseInput.value = '';
  }
});
