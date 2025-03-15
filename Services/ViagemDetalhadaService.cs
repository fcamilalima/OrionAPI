using OrionAPI.Models;
using OrionAPI.Repositories;

namespace OrionAPI.Services
{
    public class ViagemDetalhadaService:IViagemDetalhadaService
    {
        private readonly IViagemDetalhesRepository _viagens;
        public ViagemDetalhadaService(IViagemDetalhesRepository viagens)
        {
            _viagens = viagens;
        }
        public async Task<SincronizarResult> PostDetalhesByFone(string fone)
        {
            var rotas = await _viagens.PostDetalhesByFone(fone);
            return rotas;
        }
    }
}
