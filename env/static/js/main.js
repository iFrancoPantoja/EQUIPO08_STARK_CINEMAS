const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

$('.input-cart-number').on('keyup change', function(){
	$t = $(this);
	
	if ($t.val().length > 3) {
	  $t.next().focus();
	}
	
	var card_number = '';
	$('.input-cart-number').each(function(){
	  card_number += $(this).val() + ' ';
	  if ($(this).val().length == 4) {
		$(this).next().focus();
	  }
	})
	
	$('.credit-card-box .number').html(card_number);
  });
  
  $('#card-holder').on('keyup change', function(){
	$t = $(this);
	$('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-holder').on('keyup change', function(){
	$t = $(this);
	$('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-expiration-month, #card-expiration-year').change(function(){
	m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
	m = (m < 10) ? '0' + m : m;
	y = $('#card-expiration-year').val().substr(2,2);
	$('.card-expiration-date div').html(m + '/' + y);
  })
  
  $('#card-ccv').on('focus', function(){
	$('.credit-card-box').addClass('hover');
  }).on('blur', function(){
	$('.credit-card-box').removeClass('hover');
  }).on('keyup change', function(){
	$('.ccv div').html($(this).val());
  });
  
  
  /*--------------------
  tarjeta 
  --------------------*/
  setTimeout(function(){
	$('#card-ccv').focus().delay(1000).queue(function(){
	  $(this).blur().dequeue();
	});
  }, 500); 
  
  $('#card-number').change(function(){
	console.log(getCreditCardType($(this).val()));
  })

  /* JAVASCRIPT DEL LOGIN */

  console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});
