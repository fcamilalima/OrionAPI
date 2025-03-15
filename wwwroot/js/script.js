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
                    if (data.acao) {
                        $('#Acao').val(data.acao);
                    } else {
                        $('#Acao').val("(vazio)");
                    }

                    $('#DataViagem').val(data.dataViagem);
                    if (data.erro) {
                        $('#Erro').val(data.erro);
                    } else {
                        $('#Erro').val("(vazio)");
                    }
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
                    $('#Status').val(data.status);
                    $('#TipoViagem').val(data.tipoViagem);
                    $('#Vazia').prop('checked', data.vazia);
                    $('.card:last').show();

                    if (data.fornecedores && data.fornecedores.length > 0) {
                        var fornecedoresHtml = "<h4>Fornecedores</h4>";
                        data.fornecedores.forEach(function (fornecedor) {
                            fornecedoresHtml += '<table>';
                            fornecedoresHtml += '<tr><td><strong>CNPJ:</strong></td><td>' + fornecedor.cnpj + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Razão Social:</strong></td><td>' + fornecedor.razaoSocial + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Código Geral:</strong></td><td>' + fornecedor.codigoGeral + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Cut off:</strong></td><td>' + fornecedor.cutoff + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Descricao Parada:</strong></td><td>' + fornecedor.descricaoParada + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Endereço:</strong></td><td>' + fornecedor.endereco + '</td></tr>';
                            fornecedoresHtml += '<tr><td><strong>Ordem Parada:</strong></td><td>' + fornecedor.ordemParada + '</td></tr>';
                            fornecedoresHtml += '</table>';
                            fornecedoresHtml += '<hr/>';
                        });
                        $('#fornecedoresLista').html(fornecedoresHtml);
                    } else {
                        $('#fornecedoresLista').html('<p>Nenhum fornecedor encontrado.</p>');
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
    }
});
