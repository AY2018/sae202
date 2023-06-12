/* Page Messages  */
function closeForm(){
  let formSection = document.getElementById('formSection');
  formSection.style.display = "none";
}

function openForm(){
  let formSection = document.getElementById('formSection');
  formSection.style.display = "flex";
}





/* Jeu */


document.getElementById('heartBtn').addEventListener('click', function () {
// Change icon
this.classList.toggle('fa-solid');
});

document.getElementById('bookMark').addEventListener('click', function () {
// Change icon
this.classList.toggle('fa-solid');
});



