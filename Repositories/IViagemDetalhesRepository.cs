using OrionAPI.Models;

namespace OrionAPI.Repositories
{
    public interface IViagemDetalhesRepository
    {
        Task<SincronizarResult> PostDetalhesByFone(string fone);
    }
}
