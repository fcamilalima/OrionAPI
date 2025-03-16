$(document).ready(function () {
    $('#searchBtn').click(function () {
        var fone = $('#fone').val().trim();

        if (fone === "") {
            alert("Por favor, insira um número de telefone.");
            return;
        }

        clearSyncDetails();

        $.ajax({
            url: '/Home/Post',
            type: 'POST',
            data: { fone: fone },
            success: function (data) {
                if (data) {
                    // Existing code to populate form fields
                    $('#Acao').val(data.acao);
                    $('#DataViagem').val(data.dataViagem);
                    $('#Erro').val(data.erro);
                    $('#ExecutouOK').prop('checked', data.executouOK);
                    $('#Imei').val(data.imei);
                    $('#Manifestar').val(data.manifestar);
                    $('#NumeroFone').val(data.numeroFone);
                    $('#NumeroFoneMudou').prop('checked', data.numeroFoneMudou);
                    $('#NumeroViagem').val(data.numeroViagem);
                    $('#PlacaCarreta1').val(data.placaCarreta1);
                    $('#PlacaCarreta2').val(data.placaCarreta2);
                    $('#PlacaCavalo').val(data.placaCavalo);
                    $('#Plano').val(data.plano);
                    $('#PontoOperacional').val(data.pontoOperacional);
                    $('#Reset').prop('checked', data.reset);
                    $('#Rota').val(data.rota);
                    $('#Status').val(data.Status);
                    $('#TipoViagem').val(data.tipoViagem);
                    $('#Vazia').prop('checked', data.vazia);
                    $('.card:last').show();

                    if (data.fornecedores && data.fornecedores.length > 0) {
                        var fornecedoresHtml = "";
                        data.fornecedores.forEach(function (fornecedor) {
                            fornecedoresHtml += '<table class="fornecedor-table">';
                            fornecedoresHtml += '<tr><td><strong>Ordem Parada:</strong></td><td>' + fornecedor.ordemParada.trim() + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>CNPJ:</strong></td><td>' + fornecedor.cnpj.trim() + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Código Geral:</strong></td><td>' + fornecedor.codigoGeral.trim() + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Razão Social:</strong></td><td>' + fornecedor.razaoSocial.trim() + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Descricao Parada:</strong></td><td>' + fornecedor.descricaoParada.trim() + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Endereço:</strong></td><td>' + fornecedor.endereco.trim() + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Cut off:</strong></td><td>' + fornecedor.cutoff.trim() + '</td></tr>';
                            fornecedoresHtml += '</table>';
                            fornecedoresHtml += '<hr/>';
                        });
                        $('#fornecedoresLista').html(fornecedoresHtml);
                    } else {
                        $('#fornecedoresLista').html('<p>Nenhum fornecedor encontrado.</p>');
                    }

                    if (data.placas && data.placas.length > 0) {
                        var placasHtml = "";
                        data.placas.forEach(function (placa) {
                            placasHtml += '<table class="placas-table">';
                            placasHtml += '<tr><td><strong>Tipo:</strong></td><td>' + placa.tipo.trim() + '</td></tr>';
                            placasHtml += '<tr><td><strong>Placa:</strong></td><td>' + placa.placa.trim() + '</td></tr>';
                            placasHtml += '</table>';
                            placasHtml += '<hr/>';
                        });
                        $('#placasLista').html(placasHtml);
                    } else {
                        $('#placasLista').html('<p>Nenhuma placa encontrada.</p>');
                    }


                    if (data.plantas && data.plantas.length > 0) {
                        var plantasHtml = "";
                        data.plantas.forEach(function (planta) {
                            plantasHtml += '<table class="plantas-table">';
                            plantasHtml += '<tr><td><strong>Código:</strong></td><td>' + planta.codigo.trim() + '</td></tr>';
                            plantasHtml += '<tr><td><strong>CNPJ:</strong></td><td>' + planta.cnpj.trim() + '</td></tr>';
                            plantasHtml += '<tr><td><strong>Descrição:</strong></td><td>' + planta.descricao.trim() + '</td></tr>';
                            plantasHtml += '<tr><td><strong>Resp:</strong></td><td>' + planta.resp.trim() + '</td></tr>';
                            plantasHtml += '</table>';
                            plantasHtml += '<hr/>';
                        });
                        $('#plantasLista').html(plantasHtml);
                    } else {
                        $('#plantasLista').html('<p>Nenhuma planta encontrada.</p>');
                    }
                } else {
                    alert("Nenhum dado encontrado para este número de telefone.");
                }
            },
            error: function () {
                alert("Erro ao buscar os dados. Verifique se o número está correto e tente novamente.");
            }
        });
    });

    function clearSyncDetails() {
        $('#Acao').val('');
        $('#DataViagem').val('');
        $('#Erro').val('');
        $('#ExecutouOK').prop('checked', false);
        $('#Imei').val('');
        $('#Manifestar').val('');
        $('#NumeroFone').val('');
        $('#NumeroFoneMudou').prop('checked', false);
        $('#NumeroViagem').val('');
        $('#PlacaCarreta1').val('');
        $('#PlacaCarreta2').val('');
        $('#PlacaCavalo').val('');
        $('#Plano').val('');
        $('#PontoOperacional').val('');
        $('#Reset').prop('checked', false);
        $('#Rota').val('');
        $('#Status').val('');
        $('#TipoViagem').val('');
        $('#Vazia').prop('checked', false);
        $('#fornecedoresLista').html('');
        $('#placasLista').html('');
        $('#plantasLista').html('');
    }
});

