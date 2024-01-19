$(document).ready(function () {

    $("form").on("submit", function(e){
        e.preventDefault();

        const addTarefa = $('#desc-tarefa').val();    

        const listaTarefas = $(`<li class="risco_texto">${addTarefa}</li>`);

        $(listaTarefas).appendTo("ul");
        $('#desc-tarefa').val("");  

      });
         

        $("ul").on("click", "li", function () {
            $(this).toggleClass("ind-feito");
          });        
    
        
  });

