const header = document.querySelector(".header")
const btnHamburger = document.querySelectorAll("#btnHamburger")
const fadeElems = document.querySelector('.has-fade')
const haveFade = document.querySelector('.have-fade')
const dropbtn = document.querySelectorAll('.dropbtn')

btnHamburger.forEach(function(icon){

    icon.addEventListener('click', function(){

        if(header.classList.contains("open")){ //close icon
            header.classList.remove("open")
            fadeElems.classList.add('fade-left')
            fadeElems.classList.remove('fade-right')
            haveFade.classList.add('fade-out')
            haveFade.classList.remove('fade-in')
        }
        else{ //open icon
            header.classList.add("open")
            fadeElems.classList.remove('fade-left')
            fadeElems.classList.add('fade-right')
            haveFade.classList.remove('fade-out')
            haveFade.classList.add('fade-in')
        }
    })
})

function myFunction(element) {
    element.nextSibling.nextSibling.classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }