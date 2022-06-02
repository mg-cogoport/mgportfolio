var bar = document.getElementById('bar');
var bar1 = document.getElementById('bar1');
var hrf = document.getElementById('hrf11');
var hrf2 = document.getElementById('hrf12');
var hrf8 = document.getElementById('hrf8');
var hrf9 = document.getElementById('hrf9');
var m1 = document.getElementById('m1');
var m12c = document.getElementById('m12c');
var m1c = document.getElementById('m1c');
var m13c = document.getElementById('m13c');
var m14c = document.getElementById('m14c');
var soc = document.getElementById('soc');
var soc1 = document.getElementById('soc1');
var soc2 = document.getElementById('soc2');
var acc = document.getElementsByClassName("p1");
var i;
function fun8() {
    console.log(hrf2.style.width);
    hrf9.style.width='30px';
    hrf8.style.border= '1px solid #b9a25f';
    hrf9.style.border= '1px solid #b9a25f';
}
function fun9() {
    console.log(hrf2.style.width);
    console.log('hover1');
    hrf9.style.width='15px';
    hrf8.style.border= '1px solid black' ;
    hrf9.style.border= '1px solid black';
}
function fun1() {
    console.log(hrf2.style.width);
    hrf2.style.width='30px';
    hrf.style.border= '1px solid #b9a25f';
    hrf2.style.border= '1px solid #b9a25f';
}
function fun2() {
    console.log(hrf2.style.width);
    console.log('hover1');
    hrf2.style.width='15px';
    hrf.style.border= '1px solid #fff' ;
    hrf2.style.border= '1px solid #fff';
}
function funm1() {
    m1c.style.display = 'block';
    // m1c.style.top = '0'
}
function funm2() {
    m1c.style.display = 'none';
}
function funm12() {
    m12c.style.display = 'block';
    // m1c.style.top = '0'
}
function funm22() {
    m12c.style.display = 'none';
}
function funm14() {
    m13c.style.display = 'block';
    // m1c.style.top = '0'
}
function funm24() {
    m13c.style.display = 'none';
}

function funm15() {
    m14c.style.display = 'block';
    // m1c.style.top = '0'
}
function funm25() {
    m14c.style.display = 'none';
}
function social2() {
    soc.style.display = 'none';
    soc.style.visibility = '0s';
    soc.style.opacity = '0';
}
function social1() {
    soc.style.display = 'block';
    soc.style.visibility = 'visible';
    soc.style.opacity = '1';
}
function social21() {
    soc1.style.display = 'none';
}
function social11() {
    soc1.style.display = 'block';
}
function social22() {
    soc2.style.display = 'none';
}
function social12() {
    soc2.style.display = 'block';
}



for (i = 0; i < acc.length; i++) {
    // var panel = this.nextElementSibling;
    // console.log(panel.style.maxHeight);
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      console.log(panel.style.maxHeight);
      console.log('jee');
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = '100px';
      } 
    });
  }





  var mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  var nav = document.getElementById('nav');
  var pro = document.getElementById('pro');
  var pro1 = document.getElementById('pro1');
  var pro2 = document.getElementById('pro2');
  var pro3 = document.getElementById('pro3');
  var item = document.getElementsByClassName('item');
  var number = document.getElementById('number');
// When the user scrolls down 20px from the top of the document, show the button
    var logo = document.getElementById('logo');
    var alogo = document.getElementById('alogo');
    var home = document.getElementById('m1');
    var calling = document.getElementById('calling');
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // nav.classList.add('fixNav');     
        pro.style.color = 'black';
        pro1.style.color = 'black';
        pro2.style.color = 'black';
        pro3.style.color = 'black';
        number.style.color = 'black';
        mybutton.style.display = "block";
        logo.style.display = 'none';
        alogo.style.display = 'block';
        // alogo.style.marginLeft = '150px'
        // alogo.style.marginRight = '90px'
        hrf2.style.borderColor = 'black';
        hrf.style.borderColor = 'black';
        calling.style.fontSize = '40px';
        number.style.fontSize = '16px';
        number.classList.add('number1');
        number.classList.remove('number');
  } else {
        alogo.style.display = 'none';
        logo.style.display = 'block';
        mybutton.style.display = "none";
        nav.classList.remove('fixNav');  
        pro.style.color = 'white';
        pro1.style.color = 'white';
        pro2.style.color = 'white';
        pro3.style.color = 'white'; 
        number.style.color = 'white';
        hrf2.style.borderColor = 'white';
        hrf.style.borderColor = 'white';
        calling.style.fontSize = '60px';
        number.style.fontSize = '22px';
        number.classList.add('number1');
        number.classList.remove('number');
  }
}
            // let slideIndex = 0;
            // showSlides();

            // function showSlides() {
            // let i;
            // let slides = document.getElementsByClassName("mySlides");
            // let dots = document.getElementsByClassName("dot");
            // for (i = 0; i < slides.length; i++) {
            //     slides[i].style.display = "none";  
            // }
            // slideIndex++;
            // if (slideIndex > slides.length) {slideIndex = 1}    
            // for (i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" active", "");
            // }
            // slides[slideIndex-1].style.display = "block";  
            // dots[slideIndex-1].className += " active";
            // setTimeout(showSlides, 2000); // Change image every 2 seconds
            // }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({'overflow':'visible'});
  })