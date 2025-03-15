using OrionAPI.Models;

namespace OrionAPI.Services
{
    public interface IViagemDetalhadaService
    {
        Task<SincronizarResult> PostDetalhesByFone(string fone);
    }
}
