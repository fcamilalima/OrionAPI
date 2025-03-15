using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using OrionAPI.Models;
using OrionAPI.Services;

namespace OrionAPI.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IViagemDetalhadaService _viagens;

    public HomeController(ILogger<HomeController> logger, IViagemDetalhadaService viagens)
    {
        _logger = logger;
        _viagens = viagens;
    }

    [HttpGet]
    public async Task<IActionResult> Index()
    {
        return View();
    }

    [HttpPost]
    public async Task<JsonResult> Post(string fone)
    {
        var dados = await _viagens.PostDetalhesByFone(fone);
        return Json(dados);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
