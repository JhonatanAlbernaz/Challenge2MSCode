const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

//============================================================================//

$("#image-animation").on("mouseover", function(e) {
	$("#image-animation").css("max-width", "100%");
	$("#image-animation").css("-moz-transition", "all 0.3s");
	$("#image-animation").css("-webkit-transition", "all 0.3s");
	$("#image-animation").css("transition", "all 0.3s");
	$("#image-animation").css("-moz-transform", "scale(1.1)");
	$("#image-animation").css("-webkit-transform", "scale(1.1)");
	$("#transform").css("border-radius", "scale(2.5.2.5)");
});
  
$("#image-animation").on("mouseleave", function(e) {
	$("#image-animation").css("-moz-transform", "");
	$("#image-animation").css("-webkit-transform", "");
	$("#transform").css("border-radius", "");
});

//============================================================================//

function myFunction(x) {
    x.classList.toggle("change");
}

//============================================================================//

var menu_aberto_aberto = 0;

$("#menu-responsivo").on("click", function(e){

	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$("#row-responsivo").show(2500);
    $('#row-responsivo').animate({left: '70px'});
    $("#menu-responsivo").css("position", "fixed");
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$("#row-responsivo").hide(2500);
    $("#menu-responsivo").css("position", "absolute");
	menu_aberto_aberto = 0;
}

//============================================================================//

function getPassword() {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
	var passwordLength = 16;
	var password = "";

	for (var i = 0; i < passwordLength; i++) {
	  var randomNumber = Math.floor(Math.random() * chars.length);
	  password += chars.substring(randomNumber, randomNumber + 1);
	}
	document.getElementById('password').value = password
}

//============================================================================//