function appearAll() {
    let btnAll = document.getElementById('all');
    let btnAffiches = document.getElementById('Affiches');
    let btnValider = document.getElementById('btnValider');

    btnAll.classList.add('active');
    btnAffiches.classList.remove('active');
    btnValider.classList.remove('active');

    let Supp2 = document.getElementById('Supp2');
    Supp2.style.display = "inline-block";

    let sectionAll = document.getElementById('sectionAll');
    let sectionAffiches = document.getElementById('sectionAffiches');
    let sectionValider = document.getElementById('sectionValider');

    sectionAll.style.display = "flex";
    sectionAffiches.style.display = "none";
    sectionValider.style.display = "none";
}

function appearAffiches() {
    let btnAll = document.getElementById('all');
    let btnAffiches = document.getElementById('Affiches');
    let btnValider = document.getElementById('btnValider');

    btnAffiches.classList.add('active');
    btnAll.classList.remove('active');
    btnValider.classList.remove('active');

    let Supp2 = document.getElementById('Supp2');
    Supp2.style.display = "inline-block";

    let sectionAll = document.getElementById('sectionAll');
    let sectionAffiches = document.getElementById('sectionAffiches');
    let sectionValider = document.getElementById('sectionValider');

    sectionAffiches.style.display = "flex";
    sectionAll.style.display = "none";
    sectionValider.style.display = "none";
}

function appearValider() {
    let btnValider = document.getElementById('all');
    let btnAffiches = document.getElementById('Affiches');
    let btnAll = document.getElementById('btnValider');

    btnAll.classList.add('active');
    btnAffiches.classList.remove('active');
    btnValider.classList.remove('active');

    let Supp2 = document.getElementById('Supp2');
    Supp2.style.display = "none";

    let sectionAll = document.getElementById('sectionAll');
    let sectionAffiches = document.getElementById('sectionAffiches');
    let  = document.getElementById('sectionValider');

    sectionValider.style.display = "flex";
    sectionAffiches.style.display = "none";
    sectionAll.style.display = "none";

    var checkboxes = document.getElementsByClassName('checkbox');

  // Loop through the checkboxes and change their display style to flex
  for(var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].style.display = 'block';
  }
}



function afficherSupp(){
  var checkboxes = document.getElementsByClassName('checkbox');

  // Loop through the checkboxes and change their display style to flex
  for(var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].style.display = 'block';
  }
}