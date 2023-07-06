const d = document;

export default function darkTheme (btn) {
d.addEventListener('click', e => {
    if(e.target.matches(btn)){
       const $img = d.querySelector('.img-lamp');
       const $gif = d.querySelector('#gif-theme')
        
       if($img.getAttribute('src') === './assets/hero-gif/lamp-off.png'){
        $img.setAttribute('src', './assets/hero-gif/lamp-on.png')
       }
       else{
        $img.setAttribute('src', './assets/hero-gif/lamp-off.png')
       }

       if($gif.getAttribute('src') === 'assets/hero-gif/day.gif'){
        $gif.setAttribute('src', '/assets/hero-gif/transition-day.gif');
        setTimeout(() => {
            $gif.setAttribute('src', '/assets/hero-gif/night.gif');
        },900);
    } else{
        $gif.setAttribute('src', '/assets/hero-gif/transition-night.gif');
        setTimeout(() => {
            $gif.setAttribute('src', '/assets/hero-gif/day.gif');
        },900);
        
       }
    
    }
})
}