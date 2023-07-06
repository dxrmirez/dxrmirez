const d = document;

export default function darkTheme(btn) {
  d.addEventListener('click', e => {
    if (e.target.matches(btn)) {
      const $img = d.querySelector('.img-lamp');
      const $gif = d.querySelector('#gif-theme');
      const $divLeft = document.querySelector('[data-left]');
      const $divRight = document.querySelector('[data-right]');
      const $divFloor = document.querySelector('[data-floor]');
      const $divHero = document.querySelector('[data-hero]');
      let timeout1;
      let timeout2;

      if ($img.getAttribute('src') === './assets/hero-gif/lamp-off.png') {
        $img.setAttribute('src', './assets/hero-gif/lamp-on.png')
      }
      else {
        $img.setAttribute('src', './assets/hero-gif/lamp-off.png')
      }

      const darkModeDivLeft = () => $divLeft.classList.add('dark-mode-left');
      const lightModeDivLeft = () => $divLeft.classList.remove('dark-mode-left');
      const darkModeDivRight = () => $divRight.classList.add('dark-mode-right');
      const lightModeDivRight = () => $divRight.classList.remove('dark-mode-right');
      const darkModeDivFloor = () => $divFloor.classList.add('dark-mode-floor');
      const lightModeDivFloor = () => $divFloor.classList.remove('dark-mode-floor');
      const darkModeDivHero = () => $divHero.classList.add('dark-mode-hero');
      const lightModeDivHero = () => $divHero.classList.remove('dark-mode-hero');

      function gifPromise() {
        return new Promise((resolve, reject) => {
          timeout1 = setTimeout(() => {
            resolve($gif.setAttribute('src', './assets/hero-gif/transition-day.gif'));
          }, 900)
        })
      }
      const transitionNight = async () => {
        try {
          await gifPromise();

          await new Promise(resolve => setTimeout(resolve, 902));
          $gif.setAttribute('src', './assets/hero-gif/night.gif');
          clearTimeout(timeout2);
          darkModeDivLeft();
          darkModeDivRight();
          darkModeDivFloor();
          darkModeDivHero();
        } catch (error) { }
      }

      function gifPromise2() {
        return new Promise((resolve, reject) => {
          timeout2 = setTimeout(() => {
            resolve($gif.setAttribute('src', './assets/hero-gif/transition-night.gif'));
          }, 900)
        })
      }

      const transitionDay = async () => {
        try {
          await gifPromise2();

          await new Promise(resolve => setTimeout(resolve, 902));
          $gif.setAttribute('src', './assets/hero-gif/day.gif');
          clearTimeout(timeout1);
          lightModeDivLeft();
          lightModeDivRight();
          lightModeDivFloor();
          lightModeDivHero();
        } catch (error) { }
      }


      if ($gif.getAttribute('src') === './assets/hero-gif/day.gif') {
        transitionNight();
      }
      else { transitionDay(); }


    }
  })
}