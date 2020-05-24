
var app = angular.module('agendaApp', []);
app.controller("miController", function($scope) {
    $scope.nombreCompleto = "Vilma";
    $scope.edad = 12;
    $scope.tramites = ['Tramite1', 'Tramite2', 'Tramite3',"Tramite4","Tramite5"];
    $scope.tramite="";
});
$(document).ready(function() {
    var valor;
    $('select#tram').on('change',function(){
        
        valor = $(this).val();
        
    });
$("#Enviar").click(function(){
    if($("#edad").val()<18){
        $("#menordeedad").text("Usuario menor de edad");
    }
    else{
        $("#menordeedad").text("");
    }
    $("#notificacion").text("Estimado"+$("#nombreCompleto").val()+",usted se agendó para el trámite"+valor+ " para el proximo dia "+$("#fecha").val());
});
});