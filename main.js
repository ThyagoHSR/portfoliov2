'use strict';   /* Máquina de Escrever */

           function typeWriter(el){
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';

            textArray.forEach((letter, i) => {
              setTimeout(() => (el.innerHTML += letter), 95 * i);
              
            });
            setInterval(() => typeWriter(el), 5000);
           }
           typeWriter(elementEl);



           window.onscroll = function() {scrollFunction()};  /*Scroll-to-top*/

           function scrollFunction() {
             if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
               document.getElementById("btn-scroll-top").style.display = "block";
             } else {
               document.getElementById("btn-scroll-top").style.display = "none";
             }
           }
             document.getElementById("btn-scroll-top").addEventListener("click", function(){
             window.scrollTo({
             top: 0,
             behavior: 'smooth'
});
});


AOS.init();   /*Inicializador AOS Animation Javascript*/