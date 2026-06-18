$(document).ready(function(){

    $("#pesquisar").click(function(){

        let cep = $("#cep").val();

        $.ajax({

            url: "https://viacep.com.br/ws/" + cep + "/json/",
            method: "GET",

            success: function(dados){

                $("#resultado").html(
                    `
                    <h3>Endereço:</h3>
                    <p>Rua: ${dados.logradouro}</p>
                    <p>Bairro: ${dados.bairro}</p>
                    <p>Cidade: ${dados.localidade}</p>
                    <p>Estado: ${dados.uf}</p>
                    `
                );

            },

            error: function(){

                $("#resultado").html(
                    "Erro ao buscar CEP"
                );

            }

        });

    });

});