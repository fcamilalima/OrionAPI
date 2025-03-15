using System.ComponentModel.DataAnnotations;

namespace OrionAPI.Models
{
    public class SincronizarResult
    {
        public string? Acao { get; set; }
        public string DataViagem { get; set; }
        public string Erro { get; set; }
        public bool ExecutouOK { get; set; }
        public List<Fornecedor> Fornecedores { get; set; }
        public string Imei { get; set; }
        public string Manifestar { get; set; }
        public string NumeroFone { get; set; }
        public bool NumeroFoneMudou { get; set; }
        public string NumeroViagem { get; set; }
        public string PlacaCarreta1 { get; set; }
        public string PlacaCarreta2 { get; set; }
        public string PlacaCavalo { get; set; }
        public List<Placa> Placas { get; set; }
        public string Plano { get; set; }
        public string PontoOperacional { get; set; }
        public bool Reset { get; set; }
        public string Rota { get; set; }
        public string Status { get; set; }
        public string TipoViagem { get; set; }
        public bool Vazia { get; set; }
        public Planta Plantas { get; set; }
    }

    public class Planta
    {
        public string cnpj { get; set; }
        public string codigo { get; set; }
        public string descricao { get; set; }
        public string resp { get; set; }
    }

    public class Placa
    {
        public string placa { get; set; }
        public string tipo { get; set; }
    }

    public class Fornecedor
    {
        public string cnpj { get; set; }
        public string razaoSocial { get; set; }
        public string codigoGeral { get; set; }
        public char cutoff { get; set; }
        public string descricaoParada { get; set; }
        public string endereco { get; set; }
        public string ordemParada { get; set; }
    }

    public class ApiResponse
    {
        public SincronizarResult SincronizarResult { get; set; }
    }
}
