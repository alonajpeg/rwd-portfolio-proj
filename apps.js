function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let list = document.querySelectorAll('.places-list, .chapter-list');
  let placeContent = document.querySelectorAll('.place-content-img, .chapter-content-img');
  
  for(let i=0; i<list.length; i++){
    list[i].addEventListener('click', function(){
      for(let j=0; j<list.length; j++){
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');
      
      for(let k=0; k<placeContent.length; k++){
        placeContent[k].classList.remove('active');
        placeContent[k].classList.add('hide');

        if(placeContent[k].getAttribute('data-item')==dataFilter || dataFilter=="all"){
          placeContent[k].classList.remove('hide');
          placeContent[k].classList.add('active');
        }
      }

    })
  }