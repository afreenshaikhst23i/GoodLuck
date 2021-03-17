 
 
 //owl crousal
$('.owl-carousel').owlCarousel({
    loop:true,
	autoplay:true,
	autoplaySpeed:2000,
	slideSpeed : 7000,
    autoplayHoverPause:true,
    //margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})



//to disable inspect element
// document.onkeydown = function(e) {
  // if(event.keyCode == 123) {
     // return false;
  // }
  // if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     // return false;
  // }
  // if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     // return false;
  // }
  // if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     // return false;
  // }
  // if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     // return false;
  // }
// }


//album showcase
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//portfolio images showcase
$(document).ready(function(){
  $(".homeGallery").click(function(){
	 $('#portfolioModal').modal('show');
  });
});

