const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const particles = document.getElementById('particles-js');
const social = document.querySelectorAll('.social i');
const homebutton = document.querySelector('.intro button')
const  navbar = document.querySelector('.navbar')
const about = document.querySelector('.about-section-class');



const hone = document.querySelector('h1')
const hthree = document.querySelector('h3')

toggle.addEventListener('click',function(){
  if (this.classList.contains('fa-sun')){
      this.classList.remove('fa-sun');
      this.classList.add('fa-moon');
      particles.style.background = 'white';
      hone.classList.add('light');
      hthree.classList.add('light');

      for (var i = 0; i < social.length; ++i){
        social[i].classList.add('light');
      }
      homebutton.style.color = "black";
      homebutton.borderColor = "blue";
      navbar.style.opacity = 0.8;
      about.style.background = "rgba(0, 0, 0, 0.1)";
      about.style.color = "black";


      window.pJSDom[0].pJS.particles.number.value = 90;
      window.pJSDom[0].pJS.particles.color.value = '#000000';
      window.pJSDom[0].pJS.particles.line_linked.color = '#000000';
      window.pJSDom[0].pJS.particles.shape.color = '#ffffff';


      window.pJSDom[0].pJS.fn.particlesRefresh();
  } else{
      this.classList.remove('fa-moon');
      this.classList.add('fa-sun');    

      particles.style.background = 'black';
      hone.classList.remove('light');
      hthree.classList.remove('light');

      for (var i = 0; i < social.length; ++i){
        social[i].classList.remove('light');
      }
      homebutton.style.color = "white";
      navbar.style.opacity = 0.7;
      about.style.background = "black";
      about.style.color = "white";

      window.pJSDom[0].pJS.particles.number.value = 80;
      window.pJSDom[0].pJS.particles.color.value = '#ffffff';
      window.pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
      window.pJSDom[0].pJS.particles.shape.color = '#000000';
      window.pJSDom[0].pJS.fn.particlesRefresh();

  }

})


particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": ["circle","triangle"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 25,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);