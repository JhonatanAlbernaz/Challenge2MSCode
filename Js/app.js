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

//============================================================================//

$(document).ready(function(){

    $(".counter").each(function() {
      var $this = $(this),
  
          countTo = $this.attr("data-count");
  
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
        duration: 4000,
        easing:"linear",
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
});

//============================================================================//

var menu_aberto_aberto = 0;

$("#jhonatan-tag-a").on("click", function(e){

	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$("#div-email").show(2500);
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$("#div-email").hide(2500);
	menu_aberto_aberto = 0;
}

//============================================================================//

var image_avatar = 0;

$("#button-bars").on("click", function(e){

	if(image_avatar == 0){
		abrirImagemAvatar();
	}else{
		fecharImagemAvatar();
	}
	
});

function abrirImagemAvatar(){
    $("#layoutSidenav_nav").css("transform", "translateX(-15rem");
	$("#layoutSidenav_content").css("margin-left", "-240px");
    $("#col-4-pl-40").css("padding-left", "75px");
    $("#col-4-pl-40").css("transition", "0.7s");
    $("#segunda-col-4-pl-40").css("padding-left", "75px");
    $("#segunda-col-4-pl-40").css("transition", "0.7s");
    $("#terceira-col-4-pl-40").css("padding-left", "75px");
    $("#terceira-col-4-pl-40").css("transition", "0.7s");
    $("#icone-tickets").css("margin-left", "115px");
    $("#icone-2-tickets").css("margin-left", "115px");
    $("#icone-3-tickets").css("margin-left", "115px");
    $("#div-icone").css("margin-left", "765px");
    $("#div-icone").css("transition", "0.7s");
    $("#div-icone-2").css("margin-left", "765px");
    $("#div-icone-2").css("transition", "0.7s");
    $("#div-icone-3").css("margin-left", "765px");
    $("#div-icone-3").css("transition", "0.7s");
    $("#div-icone-4").css("margin-left", "765px");
    $("#div-icone-4").css("transition", "0.7s");
    $("#div-icone-5").css("margin-left", "765px");
    $("#div-icone-5").css("transition", "0.7s");
    $("#div-icone-6").css("margin-left", "765px");
    $("#div-icone-6").css("transition", "0.7s");
    $("#cliente").css("margin-left", "390px");
    $("#cliente").css("transition", "0.7s");
    $("#administrador").css("margin-left", "365px");
    $("#administrador").css("transition", "0.7s");
    $("#cliente-2").css("margin-left", "390px");
    $("#cliente-2").css("transition", "0.7s");
    $("#cliente-3").css("margin-left", "390px");
    $("#cliente-3").css("transition", "0.7s");
    $("#cliente-4").css("margin-left", "390px");
    $("#cliente-4").css("transition", "0.7s");
    $("#cliente-5").css("margin-left", "390px");
    $("#cliente-5").css("transition", "0.7s");
    $("#descricao-email").css("margin-left", "65px");
    $("#descricao-email").css("transition", "0.7s");
    $("#form-widht-485").css("width", "485px");
    $("#form-widht-485").css("transition", "0.7s");
    $("#div-icones").css("margin-left", "785px");
    $("#div-icones").css("transition", "0.7s");
    $("#div-icones-2").css("margin-left", "785px");
    $("#div-icones-2").css("transition", "0.7s");
    $("#div-icones-3").css("margin-left", "785px");
    $("#div-icones-3").css("transition", "0.7s");
    $("#div-icones-4").css("margin-left", "785px");
    $("#div-icones-4").css("transition", "0.7s");
    $("#div-icones-5").css("margin-left", "785px");
    $("#div-icones-5").css("transition", "0.7s");
    $("#div-icones-6").css("margin-left", "785px");
    $("#div-icones-6").css("transition", "0.7s");
	image_avatar = 1;
}

function fecharImagemAvatar(){
    $("#layoutSidenav_nav").css("transform", "translateX(0rem");
	$("#layoutSidenav_content").css("margin-left", "0px");
    $("#col-4-pl-40").css("padding-left", "40px");
    $("#col-4-pl-40").css("transition", "0.7s");
    $("#segunda-col-4-pl-40").css("padding-left", "40px");
    $("#segunda-col-4-pl-40").css("transition", "0.7s");
    $("#terceira-col-4-pl-40").css("padding-left", "40px");
    $("#terceira-col-4-pl-40").css("transition", "0.7s");
    $("#icone-tickets").css("margin-left", "85px");
    $("#icone-2-tickets").css("margin-left", "85px");
    $("#icone-3-tickets").css("margin-left", "85px");
    $("#div-icone").css("margin-left", "610px");
    $("#div-icone").css("transition", "0.7s");
    $("#div-icone-2").css("margin-left", "610px");
    $("#div-icone-2").css("transition", "0.7s");
    $("#div-icone-3").css("margin-left", "610px");
    $("#div-icone-3").css("transition", "0.7s");
    $("#div-icone-4").css("margin-left", "610px");
    $("#div-icone-4").css("transition", "0.7s");
    $("#div-icone-5").css("margin-left", "610px");
    $("#div-icone-5").css("transition", "0.7s");
    $("#div-icone-6").css("margin-left", "610px");
    $("#div-icone-6").css("transition", "0.7s");
    $("#cliente").css("margin-left", "315px");
    $("#cliente").css("transition", "0.7s");
    $("#administrador").css("margin-left", "295px");
    $("#administrador").css("transition", "0.7s");
    $("#cliente-2").css("margin-left", "315px");
    $("#cliente-2").css("transition", "0.7s");
    $("#cliente-3").css("margin-left", "315px");
    $("#cliente-3").css("transition", "0.7s");
    $("#cliente-4").css("margin-left", "315px");
    $("#cliente-4").css("transition", "0.7s");
    $("#cliente-5").css("margin-left", "315px");
    $("#cliente-5").css("transition", "0.7s");
    $("#descricao-email").css("margin-left", "10px");
    $("#descricao-email").css("transition", "0.7s");
    $("#form-widht-485").css("width", "380px");
    $("#form-widht-485").css("transition", "0.7s");
    $("#div-icones").css("margin-left", "760px");
    $("#div-icones").css("transition", "0.7s");
    $("#div-icones-2").css("margin-left", "760px");
    $("#div-icones-2").css("transition", "0.7s");
    $("#div-icones-3").css("margin-left", "760px");
    $("#div-icones-3").css("transition", "0.7s");
    $("#div-icones-4").css("margin-left", "760px");
    $("#div-icones-4").css("transition", "0.7s");
    $("#div-icones-5").css("margin-left", "760px");
    $("#div-icones-5").css("transition", "0.7s");
    $("#div-icones-6").css("margin-left", "760px");
    $("#div-icones-6").css("transition", "0.7s");
	image_avatar = 0;
}

//============================================================================//

google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Day', 'Tickets abertos por dia'],
        ['16/11/2021',  300],
        ['17/11/2021',  480],
        ['18/11/2021',  440],
        ['19/11/2021',  528],
        ['20/11/2021',  710],
        
    ]);

    var options = {
        title: 'Gráfico mensal com tickets abertos por dia',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['300 tickets abertos',     7],
        ['480 tickets abertos',      9],
        ['440 tickets abertos',  8],
        ['528 tickets abertos', 10],
        ['710 tickets abertos',    18]
      ]);

      var options = {
        title: 'A % de Tickets finalizados X Tickets abertos',
        is3D: true,
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
      chart.draw(data, options);

}

//============================================================================//

var closebtns = document.getElementsByClassName("close");
var i;

/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}

//============================================================================//

var menu_aberto = 0;

$("#botao-bars").on("click", function(e){

	if(menu_aberto== 0){
		abrirDivLogin();
	}else{
		fecharDivLogin();
	}
	
});

function abrirDivLogin(){
	$("#layoutSidenav_nav_responsivo").show(2500);
	menu_aberto = 1;
}

function fecharDivLogin(){
	$("#layoutSidenav_nav_responsivo").hide(2500);
	menu_aberto = 0;
}

//============================================================================//

function mostrarOcultarSenha() {
    var senha=document.getElementById("senha");
    if(senha.type=="password") {
        senha.type="text";
    }else {
        senha.type="password";
    }
}

//============================================================================//

function mostrarOcultarSenhaInput() {
    var senha=document.getElementById("input-senha");
    if(senha.type=="password") {
        senha.type="text";
    }else {
        senha.type="password";
    }
}

//============================================================================//


function mostrarOcultarSenhaInput2() {
    var senha=document.getElementById("input-senha-1");
    if(senha.type=="password") {
        senha.type="text";
    }else {
        senha.type="password";
    }
}

//============================================================================//

function iniciarModal(modalID) {
    var modal = document.getElementById(modalID);
    modal.classList.add("mostrar");
    modal.addEventListener("click", (e) => {
        if(e.target.id == modalID || e.target.className == "fechar") {
            modal.classList.remove("mostrar");
        }
    });
}

var logo = document.querySelector(".action_btn");
logo.addEventListener("click", () => iniciarModal("modal-editar"));

//============================================================================//

function iniciarModalNovoTicket(modalTicket) {
    const divModal = document.getElementById(modalTicket);
    divModal.classList.add("mostrar-modal");
    divModal.addEventListener("click", (e) => {
        if(e.target.id == modalTicket || e.target.className == "modal-fechar") {
            divModal.classList.remove("mostrar-modal");
        }
    });
}

const plus = document.querySelector(".action_btn_plus");
plus.addEventListener("click", () => iniciarModalNovoTicket("modal-abrir-ticket"));

//============================================================================//

function modalEditarTicket(editarTicket) {
    const editTicket = document.getElementById(editarTicket);
    editTicket.classList.add("mostrar-modal-editar");
    editTicket.addEventListener("click", (e) => {
        if(e.target.id == editarTicket || e.target.className == "fechar-modal") {
            editTicket.classList.remove("mostrar-modal-editar")
        }
    });
}

const editar = document.querySelector(".icone-editar-ticket");
editar.addEventListener("click", () => modalEditarTicket("modal-editar-ticket"));

//============================================================================//

function modalObservacoes(observacoes) {
    const ticketObservacoes = document.getElementById(observacoes);
    ticketObservacoes.classList.add("mostrar-modal-observacoes");
    ticketObservacoes.addEventListener("click", (e) => {
        if(e.target.id == observacoes || e.target.className == "fechar-modal-observacoes") {
            ticketObservacoes.classList.remove("mostrar-modal-observacoes")
        }
    });
}

const obs = document.querySelector(".action-pen");
obs.addEventListener("click", () => modalObservacoes("modal-observacoes-ticket"));

//============================================================================//