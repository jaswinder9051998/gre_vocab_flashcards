var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
var colors = [ "black","#f6f9fd"];
var colorIndex = 0;
function ChangeColor()   
{  
    var col = document.getElementById("body");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++; 
    setTimeout("ChangeColor2()", 2000);  
} 
// var definitionList = $('.cardHolder.card.front');

// definitionList.on('init', function(){
//   $('.slick-current', this).addClass('flip');
// })

// definitionList.slick({
//   centerMode: true,
//   arrows: false,
//   centerPadding: '20px',
//   slidesToShow: 3,
//   responsive: [{
//       breakpoint: 950,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: '10px'
//       }
//   }]
// });

// definitionList.on('beforeChange',function(){
//   $('.slick-slide', this).removeClass('flip')
// });

// definitionList.on('click', '.slick-current', function(){
//   $(this).toggleClass('flip')
// });

    cards.forEach(function(card){
      card.classList.add("hidden");
    });
    cards[0].classList.remove("hidden");

    document.querySelector(".nextBtn").addEventListener("click", function(){
      cards.forEach(function(card){
        for(i = 0; i < card.childNodes.length; i++){
          card.childNodes[i].classList.remove("animate");
          card.childNodes[i].classList.remove("animateReverse");
            
          }
      });
      for(var i = 0; i < cards.length; i++){
        var card = cards[i];
        if(!card.classList.contains("hidden")){
            if(cards.indexOf(card) + 1 < cards.length){
              card.classList.add("hidden");
              cards[cards.indexOf(card) + 1].classList.remove("hidden");
              break;
            }else{
              cards[cards.length - 1].classList.add("hidden");
              cards[0].classList.remove("hidden");
            }
        }
      }
    });

    document.querySelector(".prevBtn").addEventListener("click", function(){
      cards.forEach(function(card){
        for(i = 0; i < card.childNodes.length; i++){
          card.childNodes[i].classList.remove("animate");
          card.childNodes[i].classList.remove("animateReverse");
            
          }
      });
      for(var i = cards.length - 1; i >= 0; i--){
        var card = cards[i];
        if(!card.classList.contains("hidden")){
            if(cards.indexOf(card) - 1 >= 0){
              card.classList.add("hidden");
              cards[cards.indexOf(card) - 1].classList.remove("hidden");
              break;
            }else{
              cards[0].classList.add("hidden");
              cards[cards.length - 1].classList.remove("hidden");
            }
        }
      }
    });

    document.querySelector(".shuffleBtn").addEventListener("click", function(){
      cards.forEach(function(card){
        for(i = 0; i < card.childNodes.length; i++){
          card.childNodes[i].classList.remove("animate");
          card.childNodes[i].classList.remove("animateReverse");
            
          }
      });
      shuffle(cards);
    });

    document.querySelector(".switchBtn").addEventListener("click", function(){
      cards.forEach(function(card){
        for(i = 0; i < card.childNodes.length; i++){
          card.childNodes[i].classList.remove("animate");
          card.childNodes[i].classList.remove("animateReverse");
            
          }
      });
      cards.forEach(function(card){
          card.childNodes.forEach(function(div){
            if(!div.classList.contains("switched")){
                if(div.classList.contains('front')){
                  div.classList.remove('front');
                  div.classList.add('back');
                  div.classList.add('switched');
                }else if(div.classList.contains('back')){
                  div.classList.remove('back');
                  div.classList.add('front');
                  div.classList.add('switched');
                }
            }else{
                if(div.classList.contains('front')){
                    div.classList.remove('front');
                    div.classList.add('back');
                    div.classList.remove('switched');
                }else if(div.classList.contains('back')){
                    div.classList.remove('back');
                    div.classList.add('front');
                    div.classList.remove('switched');
                }
            }
            
          });
        });
    });
    
    cards.forEach(function(card){
      card.addEventListener("click",function(){
        if(!card.childNodes[0].classList.contains("animate")){
          for(var i = 0; i < card.childNodes.length; i++){
            card.childNodes[i].classList.remove("animateReverse");
            card.childNodes[i].classList.add("animate");
            
          }
        }else{
          for(var i = 0; i < card.childNodes.length; i++){
            card.childNodes[i].classList.remove("animate");
            card.childNodes[i].classList.add("animateReverse");
          }
        }
      });
        
    });

    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      a.forEach(function(card){
        card.classList.add("hidden");
      });
      a[0].classList.remove('hidden');
      return a;
  }


  
// selecting random color
//var random_color = colors[Math.floor(
//        Math.random() * colors.length)];
//  
//var x = document.getElementById(".card,.front");
//x.style.color = random_color;