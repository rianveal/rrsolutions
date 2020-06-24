
$(document).ready(function() {
	
	var iconMenu = $('.icon-menu--content')
  var overlay = $('.overlay-menu')
  var width = window.innerWidth
  var navig = $('nav.menu-options')

  // Acción para abrir menu de opciones en mobiles
  $(iconMenu).on('click', function(e) {
    e.preventDefault()
    var el = $(this)
    if( width < 1024 ){
       if ($(overlay).is(':hidden')){
        el.addClass('icon-menu--active')
        $(overlay).fadeIn('slow')
       }else{
        el.removeClass('icon-menu--active')
        $(overlay).fadeOut('slow')
       }
    }
  })

  // Transformando el menu de opciones -- mobile - Desktop
  $(window).resize(function(){
    var w = $(window).width()
    if(w >= 1024 && $(overlay).is(':hidden')){
      $(overlay).css('display','block')
      $(overlay).removeAttr('style')
    }else if( w <= 1185){
      if($('.tooltip').is('hidden')){
        $('.tooltip').css('display','none')
      }else{
        $('.tooltip').css('display','none')
      }
    }
  })

  // Agregando evento hover sobre el logo para que muestre el tooltip
  $('.header-logo img').hover(function () {
    var w = $(window).width()
    if( w < 1185){
    }else if( w >= 1185){
      var w = $(window).width()
      if( w < 1185){
      }else if( w >= 1185){
        $(this).removeClass('animated pulse infinite')
        $('.tooltip').fadeIn('slow')
        $('.tooltip-btn--close').fadeIn('slow')
      }
    }
  })

  // Evento para cerrar el tooltip
  $('.tooltip-btn--close').on('click', function (e) {
    e.preventDefault()
    $('.tooltip').fadeOut('slow')
  })

  // Eventos del tooltips del logo
  $('.tooltip-content').on('click', function(e) {
  	e.preventDefault()
  	$('.overlay-we').fadeIn('slow')
  	$('body').css('overflow-y','hidden')
    $('.tooltip-btn--close').fadeOut('slow')
    $('.tooltip').css('display','none')
  })

  // Evento de cerrar el modal de Quienes somos
  $('.button-close').on('click', function (e) {
  	e.preventDefault()
  	$(this).parent().parent().fadeOut('slow')
  	$('body').css('overflow-y','visible')
  })

  // Evento que abre el modal del mapa
  $('#map').on('click', function (e) {
    e.preventDefault()
    $('.overlay-map').fadeIn()
    $('body').css('overflow-y','hidden')
  })

  // Evento para cerrar el modal del mapa
  $('.overlay-map--button a').on('click', function (e) {
    e.preventDefault()
    $(this).parent().parent().parent().fadeOut('slow')
    $('body').css('overflow-y','visible')
  })

  // Slide principal
	$('.slide').slick({
  	dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed: 3000,
    arrows:false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

	// Slide de clientes
  $('.slider-clients').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    variableWidth: false,
    arrows: 'false',
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: 'false'
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: 'false'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]  
    /*dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 2,
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: 'false',
    pauseOnHover: false*/
  });

  // Aperura del modal de proyectos
  $('.project-box a').on('click', function (e) {
  	e.preventDefault()
  	var el = $(this)
  	$('.overlay-projects').fadeIn('slow')
  	$('.overlay-projects').css('overflow-y','auto')
  	$('body').css('overflow-y','hidden')
  	if (el.attr('id') == 'EC'){
  		$('#'+el.attr('id')+'Content').css('display','block')	
  		$('#'+el.attr('id')+'Content').siblings('div').css('display','none')
  	}else if (el.attr('id') == 'PT'){
  		$('#'+el.attr('id')+'Content').css('display','block')	
  		$('#'+el.attr('id')+'Content').siblings('div').css('display','none')
  	}
  })

  // Botón para cerrar el modal de Proyectos
  $('.overlay-projects--button').on('click', function (e) {
  	e.preventDefault()
  	$(this).parent().parent().fadeOut('slow')
  	$('body').css('overflow-y','visible')
  })

  // Evento del botón enviar el formulario de contacto
  $('#btnSend').on('click', function () {
  	if($('#names').val() == ''){
  		visualMessage('names')
      return false; 
  	}else if($('#email').val() == ''){
  		visualMessage('email')
      return false; 
  	}else if($('#phone').val() == ''){
			visualMessage('phone')
      return false; 
  	}else if($('#message').val() == ''){
			visualMessage('message')
      return false; 
  	}else{
  		return true;
  	}
  })

  // Verificación de los campos del formulario, manejo del modal
  // mensaje error
  function visualMessage(field) {
  	if(field == 'names'){
  		$('.message-error p').text('Digite su nombre');
  	}else if(field == 'email'){
  		$('.message-error p').text('Digite correo eletrónico');
  	}else if(field == 'phone'){
  		$('.message-error p').text('Digite Teléfono(s)');
  	}else if(field == 'message'){
  		$('.message-error p').text('Digite su mensaje');
  	}

  	setTimeout(function() {
  		$('.message-error').css({'display':'block'})
  		$('.message-error').addClass('animated shake')
      $('.message-error').fadeOut(2700);
    },300);
    $('#'+field).focus();
    return false;
  }

  // Eventos que cierra el modal de menu, al seleccionar una de las 
  // opciones del mismo (Solo para versiones moviles)
  $('.item-menu').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    var width = window.innerWidth
    var navig = $('nav.menu-opt')
    if( width < 1024 ){
    	$(iconMenu).removeClass('icon-menu--active')
      $(overlay).fadeOut('slow')	
    }else if( width >= 1024 ){}
  })

  // Función para setear los campos del formulario y así ponerlos
  // en blanco
  function clearField() {
  	$('#names').val('')
  	$('#email').val('')
  	$('#phone').val('')
  	$('#message').val('')
  }

  // Scroll button top
  $(window).scroll(function(){
    if( width < 1024 ){
      if( $(this).scrollTop() > 300 ){
        $('.button-up').css('bottom','5%')
      }else{
        $('.button-up').css('bottom','-20%')
      }
    }else if( width >= 1024 ){
      if( $(this).scrollTop() > 300 ){
        $('.button-up').css('bottom','5%')
      }else{
        $('.button-up').css('bottom','-20%')
      }
    }
  })

  // Efecto del botón de descar en PDF
  // auhor: http://jsfiddle.net/ctwheels/bgut7411/9/
  var numItems = $(".download-point").length;
  var myHeight, myWidth;
  for (i = 0; i < numItems; i++) {
      myWidth = $(".download-point>a:eq(" + i + ")").width();
      myHeight = $(".download-point>a:eq(" + i + ")").height();
      if (myWidth > myHeight) {
          $(".download-point>a:eq(" + i + ")").css({
              height: myWidth + "px"
          });
      }
      if (myWidth < myHeight) {
          $(".download-point:eq(" + i + ")>a").css({
              width: myHeight + "px"
          });
      }
      $(".icon-point:eq(" + i + ")").css({
          "line-height": myWidth - parseInt($(".download-point>a:eq(" + i + ")").css("padding"), 10) + "px"
      });
  }

  // Efecto de scroll en el body cuando se escoge una opción de usuario.
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset - 100}, 900);
        return false;
      }
    }
  });

  // Método para el manejo de link en nueva pestaña
  $('.external-link').click(function() {
    url = $(this).attr("href");
    window.open(url, '_blank');
    return false;
  });

})