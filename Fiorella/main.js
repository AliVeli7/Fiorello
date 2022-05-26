
var $cardbox = $('.cardbox').isotope({
    itemSelector: '.flower_item',
    layoutMode: 'fitRows'
  });


  //  her bir  ul  elementin nin icindeki li ni for each le secir 
let filterBtns = document.querySelectorAll("li a");
[...filterBtns].forEach(function (btn) {
  btn.onclick  = function (e) {
    console.log(this);
    console.log(this.getAttribute("data-filter"));
    $cardbox.isotope({ filter: this.getAttribute("data-filter") });
  }
})

