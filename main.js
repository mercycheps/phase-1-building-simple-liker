
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMessage = document.getElementById ("modal") 



  const heart = document.querySelector(".like-glyph");
  const errorModal = document.getElementById("error-modal");
  
  
  errorMessage.className = "hidden";

  heart.addEventListener("click", () => {
      if (heart.classList.contains("activated-heart")) {
         
          heart.textContent = "♡";
          heart.classList.remove("activated-heart");
      } else {
          
          mimicServerCall()
              .then(() => {
                  heart.textContent = "♥"; 
                  heart.classList.add("activated-heart"); 
              })
              .catch((error) => {
                
                  errorMessage.textContent = error;
                  errorModal.classList.remove("hidden");

                  
                  setTimeout(() => {
                      errorModal.classList.add("hidden");
                  }, 3000);
              });
      }
  });












//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
