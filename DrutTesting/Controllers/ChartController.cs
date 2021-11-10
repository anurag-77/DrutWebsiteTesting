using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DrutTesting.Models;
using Newtonsoft.Json;

namespace DrutGithub.Controllers
{
    public class ChartController : Controller
    {
        private readonly IChart _iChart;

        public ChartController(IChart iChart)
        {
            _iChart = iChart;
        }

        public IActionResult ColumnChart()
        {
            clsChart Chart = new clsChart();
            Chart.data = JsonConvert.SerializeObject(_iChart.GetChartData("ChartId"));
            return View(Chart);
        }
    }
}
