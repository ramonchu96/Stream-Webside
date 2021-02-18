<<<<<<< HEAD

  // Call carousel manually
  $('#myCarouselCustom').carousel();

  // Go to the previous item
  $("#prevBtn").click(function(){
      $("#myCarouselCustom").carousel("prev");
  });
  // Go to the previous item
  $("#nextBtn").click(function(){
      $("#myCarouselCustom").carousel("next");
  });


  $('.carousel').carousel({
    interval: 8000,
    pause:true,
    wrap:false
});

$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!

 //Barra de progresos
 
 var progreso = 0;
  var idIterval = setInterval(function(){
    // Aumento en 10 el progeso
    progreso +=10;
    $('#htmlG1').css('width', progreso + '%');
    String = progreso + "%";
    //Si llegó a 100 elimino el interval
    if(progreso == 100){
      clearInterval(idIterval);
    }
  },1000);

  var progreso2 = 0;
  var idIterval2 = setInterval(function(){
    // Aumento en 10 el progeso
    progreso2 +=10;
    $('#cssG').css('width', progreso + '%');
    String = progreso2 + "%";
    //Si llegó a 100 elimino el interval
    if(progreso2 == 90){
      clearInterval(idIterval2);
    }
  },1000);

  var progreso3 = 0;
  var idIterval3 = setInterval(function(){
    // Aumento en 10 el progeso
    progreso3 +=10;
    $('#js').css('width', progreso + '%');
    String = progreso3 + "%";
    //Si llegó a 100 elimino el interval
    if(progreso3 == 80){
      clearInterval(idIterval3);
    }
  },1000);
=======

  // Call carousel manually
  $('#myCarouselCustom').carousel();

  // Go to the previous item
  $("#prevBtn").click(function(){
      $("#myCarouselCustom").carousel("prev");
  });
  // Go to the previous item
  $("#nextBtn").click(function(){
      $("#myCarouselCustom").carousel("next");
  });


  $('.carousel').carousel({
    interval: 8000,
    pause:true,
    wrap:false
});

$('#myCarousel').on('slid.bs.carousel', function (e) {
  $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

$('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
$('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!

 //Barra de progresos
 
 var progreso = 0;
  var idIterval = setInterval(function(){
    // Aumento en 10 el progeso
    progreso +=10;
    $('#htmlG1').css('width', progreso + '%');
    String = progreso + "%";
    //Si llegó a 100 elimino el interval
    if(progreso == 100){
      clearInterval(idIterval);
    }
  },1000);

  var progreso2 = 0;
  var idIterval2 = setInterval(function(){
    // Aumento en 10 el progeso
    progreso2 +=10;
    $('#cssG').css('width', progreso + '%');
    String = progreso2 + "%";
    //Si llegó a 100 elimino el interval
    if(progreso2 == 90){
      clearInterval(idIterval2);
    }
  },1000);

  var progreso3 = 0;
  var idIterval3 = setInterval(function(){
    // Aumento en 10 el progeso
    progreso3 +=10;
    $('#js').css('width', progreso + '%');
    String = progreso3 + "%";
    //Si llegó a 100 elimino el interval
    if(progreso3 == 80){
      clearInterval(idIterval3);
    }
  },1000);
>>>>>>> 0c60aa6e9923496e666647d167a0316a171e698a
