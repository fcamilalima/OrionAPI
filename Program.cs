using OrionAPI.Repositories;
using OrionAPI.Services;
using OrionAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddHttpClient();
builder.Services.Configure<ApiSettings>(builder.Configuration.GetSection("Header"));
builder.Services.AddHttpClient<IViagemDetalhesRepository, ViagemDetalhesRepository>(client =>
{
    client.BaseAddress = new Uri("https://qa3orionbr-preprod.cevalogistics.com/WCFOrionMobilityMilkRun/Servicos/SincronizarService.svc/Sincronizar");
});

builder.Services.AddSingleton<IViagemDetalhadaService, ViagemDetalhadaService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
