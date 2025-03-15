using Microsoft.Extensions.Options;
using OrionAPI.Models;
using System.Net.Http.Headers;
using System.Text.Json;

namespace OrionAPI.Repositories
{
    public class ViagemDetalhesRepository : IViagemDetalhesRepository
    {
        private readonly HttpClient _httpClient;
        private readonly ApiSettings _apiSettings;

        public ViagemDetalhesRepository(HttpClient httpClient, IOptions<ApiSettings> apiSettings)
        {
            _httpClient = httpClient;
            _apiSettings = apiSettings.Value;
        }


        public async Task<SincronizarResult> PostDetalhesByFone(string fone)
        {
            try
            {
                var request = new HttpRequestMessage(HttpMethod.Post, _apiSettings.Endpoint);
                request.Headers.Add("Cookie", _apiSettings.Cookie);
                request.Headers.Add("fone", fone);
                request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = await _httpClient.SendAsync(request);

                if (!response.IsSuccessStatusCode)
                {
                    Console.WriteLine($"Erro na requisição: {response.StatusCode} - {response.ReasonPhrase}");
                    return new SincronizarResult();
                }

                var responseBody = await response.Content.ReadAsStringAsync();

                if (!response.Content.Headers.ContentType.MediaType.Contains("application/json"))
                {
                    Console.WriteLine("A resposta da API não está no formato JSON.");
                    return new SincronizarResult();
                }

                var result = JsonSerializer.Deserialize<ApiResponse>(responseBody) ?? new ApiResponse();
                return result.SincronizarResult;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao buscar dados da API: {ex.Message}");
                return new SincronizarResult();
            }
        }

    }
}
