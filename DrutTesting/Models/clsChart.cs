using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrutTesting.Models
{
    public class clsChart
    {
        public string data { get; set; }
    }

    public interface IChart
    {
        List<Dictionary<string, string>> GetChartData(string ChartId);
    }

    public class ChartRepository : IChart
    {
        DataLayer.DLChart dLChart = new DataLayer.DLChart();

        public List<Dictionary<string, string>> GetChartData(string ChartId)
        {
            return dLChart.GetChartData(ChartId);
        }
    }
}
