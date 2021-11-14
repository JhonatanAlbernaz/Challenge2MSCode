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

var menu_aberto = 0;

$("#botao-menu-bobile").on("click", function(e) {

    if(menu_aberto == 0) {
        menuAberto();
    }else {
        menuFechado();
    }

});

function menuAberto() {
    $("#link-menu-mobile").show("2500");
    menu_aberto = 1;
}

function menuFechado() {
    $("#link-menu-mobile").hide("2500");
    menu_aberto = 0;
}

$("#enviar").on("click", function(e) {

    var valor_input_nome = $("#nome").val();
    var valor_input_email = $("#email").val();
    var valor_input_telefone = $("#telefone").val();
    var valor_input_mensagem = $("#mensagem").val();

    if(valor_input_nome == "") {

        nomeVazio();

    }

    if(valor_input_email == "") {

        emailVazio();

    }
    
    if(valor_input_nome != "" && valor_input_email != "") {
    
        emailVazio();
        var vereificar_email_valido = emailVerificado(valor_input_email);

        if(vereificar_email_valido == true) {

            carregandoEnvio();
            emailPreenchido();

            setTimeout(function() {

                emailValido();
                $("#nome").val("");
                $("#email").val("");
                $("#telefone").val("");
                $("#mensagem").val("");

            }, 2000);
            
        }

    }

});

$("#nome").on("focus", function(e) {
    $("#nome").removeClass("border border-danger");
    $("#nome").removeClass("border border-success");
    $("#erro2").addClass("d-none");
    $("#sucesso").addClass("d-none");
});

$("#email").on("focus", function(e) {
    $("#email").removeClass("border border-danger");
    $("#email").removeClass("border border-success");
    $("#erro").addClass("d-none");
    $("#sucesso").addClass("d-none");
});

$("#telefone").on("focus", function(e) {
    $("#telefone").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

$("#mensagem").on("focus", function(e) {
    $("#mensagem").removeClass("border border-success");
    $("#sucesso").addClass("d-none");
});

function nomeVazio() {
    $("#nome").addClass("border border-danger");
    $("#erro2").removeClass("d-none");
};

function emailVazio() {
    $("#email").addClass("border border-danger");
    $("#erro").removeClass("d-none");
};

function emailPreenchido() {
    $("#email").removeClass("border border-danger");
    $("#erro").addClass("d-none");
};

function emailValido() {
    $("#nome").addClass("border border-success");
    $("#email").addClass("border border-success");
    $("#telefone").addClass("border border-success");
    $("#mensagem").addClass("border border-success");
    $("#sucesso").removeClass("d-none");
    $("#enviar").removeClass("d-none");
    $("#carregando").addClass("d-none");
}

function carregandoEnvio() {
    $("#enviar").addClass("d-none");
    $("#carregando").removeClass("d-none");
}

function emailVerificado(valor_input_email) {
    if(valor_input_email.includes ("@") == true && valor_input_email.includes (".") == true) {
        return true;
    }else {
        return false;
    }
}