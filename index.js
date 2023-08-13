$(document).ready(function() {
    $('.project-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });

  
  // document.addEventListener("DOMContentLoaded", function () {
  //   const aboutButton = document.getElementById("about-toggle");
  //   const typedContent = document.querySelector(".typed-content");
  
  //   aboutButton.addEventListener("click", function () {
  //     aboutButton.style.display = "none"; // Hide the button
  
  //     // Hide the existing content in typedContent
  //    // typedContent.style.display = "none";
  //     typedContent.style.display = "block";
      
  //     // Initialize Typed.js
  //     new Typed(".typed-content", {
  //       strings: [
  //         "Hi there! I'm Archi Sen, a passionate software developer with a strong proficiency in HTML, CSS, and JavaScript. With over 1 year of experience as a JavaScript instructor, I've had the privilege of sharing my knowledge and helping others unlock their coding potential.",
  //         "My journey into the world of programming started with a deep curiosity and a desire to create meaningful digital experiences. Throughout my career, I've worked on a variety of projects, honing my skills in both front-end and back-end development. My toolkit also includes React.js, a library I use to build responsive and dynamic web applications.",
  //         "When I'm not coding, you can find me exploring the latest advancements in the tech world, experimenting with new coding techniques, and enjoying the thrill of solving complex problems. I believe that coding is not just a job for me; it's my creative outlet and a way to contribute positively to the ever-evolving digital landscape."
  //       ],
  //       typeSpeed: 10, // Speed of typing in milliseconds
  //       showCursor: false, // Hide the typing cursor
  //       loop: false,
  //       smartBackspace: false,
  //       contentType: 'html',
  //       onComplete: function (self) {
  //         self.options.cursorChar = ''; // Hide the cursor after completion
  //       }
  //     });
  //   });
  // });
  
  
  

  // document.addEventListener("DOMContentLoaded", function () {
  //   const aboutButton = document.getElementById("about-toggle");
  //   const typedText = document.getElementById("typed-text");
  
  //   const sentences = [
  //     "Hello, I'm a software developer.",
  //     "I specialize in HTML, CSS, JavaScript, and React.",
  //     "With a year of experience as a JavaScript instructor.",
  //     "Passionate about creating meaningful web experiences."
  //   ];
  
  //   aboutButton.addEventListener("click", function () {
  //     aboutButton.style.display = "none"; // Hide the button
  //     typedText.style.display = "block"; // Show the typed content
  
  //     let currentSentenceIndex = 0;
  //     let currentCharacterIndex = 0;
  
  //     function typeNextCharacter() {
  //       if (currentCharacterIndex < sentences[currentSentenceIndex].length) {
  //         typedText.innerHTML += sentences[currentSentenceIndex][currentCharacterIndex];
  //         currentCharacterIndex++;
  //         setTimeout(typeNextCharacter, 50);
  //       } else {
  //         currentSentenceIndex++;
  //         if (currentSentenceIndex < sentences.length) {
  //           typedText.innerHTML += "<br>"; // Add line break between sentences
  //           currentCharacterIndex = 0;
  //           setTimeout(typeNextCharacter, 500); // Delay between sentences
  //         }
  //       }
  //     }
  
  //     typeNextCharacter();
  //   });
  // });



  document.addEventListener("DOMContentLoaded", function () {
    const aboutButton = document.getElementById("about-toggle");
    const typedText = document.getElementById("typed-text");
    
    const sentences = [
      "Hello, I'm Archi Sen, a dedicated software developer with a knack for turning ideas into reality through code. ",
      "With expertise in HTML, CSS, and JavaScript, I'm driven by a passion for creating seamless web experiences. ",
      "Having also taught JavaScript for a year, I'm committed to sharing knowledge and empowering fellow learners. ",
      "React.js is my go-to for crafting dynamic interfaces. When not coding, I'm exploring tech trends and channeling creativity into digital art."
    ];
    
    aboutButton.addEventListener("click", function () {
      aboutButton.style.display = "none"; // Hide the button
      typedText.style.display = "block"; // Show the typed content
    
      let currentSentenceIndex = 0;
      let currentCharacterIndex = 0;
      let interval;
    
      function typeNextCharacter() {
        if (currentCharacterIndex < sentences[currentSentenceIndex].length) {
          typedText.textContent += sentences[currentSentenceIndex][currentCharacterIndex];
          currentCharacterIndex++;
        } else {
          currentSentenceIndex++;
          if (currentSentenceIndex < sentences.length) {
            typedText.innerHTML += "<br>"; // Add line break between sentences
            currentCharacterIndex = 0;
          } else {
            clearInterval(interval); // Clear the interval when all sentences are typed
          }
        }
      }
    
      interval = setInterval(typeNextCharacter, 30);
    });
  });
  
  