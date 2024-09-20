// Smooth scrolling behavior
// document.querySelectorAll('.navbar a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href');
//         const targetSection = document.querySelector(targetId);

//         window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//         });
//     });
// });



// open close navbar function
$(document).ready(function(){

    $('#linesicon').click(function(){
        $('#hidenav').slideDown();
        $('#crossicon').css('display' , 'block');
        $('#linesicon').css('display' , 'none');
    });
    
    $('#crossicon').click(function(){
        $('#hidenav').slideUp();
        $('#linesicon').css('display' , 'block');
        $('#crossicon').css('display' , 'none');
    });
    
    // navbar color cng
    
    });
    // open close navbar function end
    
    
    // navbar sticky function bg blur 
    window.addEventListener("scroll" , function(){
          var header = document.querySelector("header");
          var secnavbar = document.querySelector("#navbar2row");
          header.classList.toggle("sticky" , window.scrollY > 0 );
          secnavbar.classList.toggle("blur" , window.scrollY > 0 );
    });
    // navbar sticky function bg blur end
    
    
    // navigation scroll 
    let sections = document.querySelectorAll("section");  
    let navbarlinks = document.querySelectorAll('header #firstnavrow nav a');
    let secnavlinks = document.querySelectorAll('header #hidenav a');
    
    window.onscroll = () => {
      sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 95;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
          navbarlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header #firstnavrow nav a[href*=' + id + ']').classList.add('active');
        });
        secnavlinks.forEach(seclinks => {
            seclinks.classList.remove('active');
        document.querySelector('header #hidenav a[href*=' + id + ']').classList.add('active');
        });
        };
      });
    };
    
    // navigation scroll end
    









    // feedback
    const stars = document.querySelectorAll('.rating-stars i');
        let selectedRating = 0;

        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = star.getAttribute('data-value');
                updateStars(selectedRating);
            });
        });

        function updateStars(rating) {
            stars.forEach(star => {
                if (star.getAttribute('data-value') <= rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        // Form Submission Logic (Optional: add validation or send to backend)
        document.getElementById('submit-feedback').addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('feedback').value;

            if (name && email && feedback && selectedRating) {
                alert(`Thank you, ${name}! Your feedback has been submitted with a rating of ${selectedRating} stars.`);
                // You can handle form submission here (e.g., send data to backend)
            } else {
                alert('Please fill out all fields and select a rating.');
            }
        });
let currentSlide = 0;
        const slides = document.querySelectorAll(".slide");
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        }
        
        function moveSlide(direction) {
            currentSlide += direction;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            } else if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }
        
        document.addEventListener("DOMContentLoaded", () => {
            showSlide(currentSlide);
        });