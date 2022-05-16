// === Adding a comment in Blog Page ===
// had help from Adam Marostica

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const formElement = document.querySelector('form');
const newCommentSection = document.querySelector('.postedComments');


formElement.addEventListener('submit', function(e){
   // prevent default browser refresh
   e.preventDefault();
   
   // grab the user's input and format it into HTML elements (name, date, time, comment)
   const userNameInput = document.querySelector('input[type=text]');
   const name = userNameInput.value;
   
   const userEmailInput = document.querySelector('input[type=email]');
   
   const userCommentInput = document.querySelector('textarea');
   const comment = userCommentInput.value;
   
   const date = new Date();

   // createElement for all existing comment section elements
   const commentContainerDiv = document.createElement('div');
   commentContainerDiv.classList.add('commentCard');

   const photoDiv = document.createElement('div');
   photoDiv.classList.add('peopleImg');
   const img = document.createElement('img');
   img.src = './assets/comment-image-1.jpg';

   const commentDiv = document.createElement('div');
   commentDiv.classList.add('commentContent');

   const userNameAndDate = document.createElement('h4');
   userNameAndDate.textContent = `${daysOfTheWeek[date.getDay()]}
   ${monthsOfTheYear[date.getMonth()]}
   ${date.getDate()},
   ${date.getFullYear()}
   by ${name}`;

   const userComment = document.createElement('p');
   userComment.textContent = comment;

   commentDiv.append(userNameAndDate, userComment);
   
 
   photoDiv.append(img);

   commentContainerDiv.append(photoDiv, commentDiv);
   
   // append the HTML to the page
   newCommentSection.append(commentContainerDiv);

   // clear the input fields once submitted 
   userNameInput.value = '';
   userEmailInput.value = '';
   userCommentInput.value = '';


});