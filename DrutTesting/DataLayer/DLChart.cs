using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrutTesting.DataLayer
{
    public class DLChart
    {
        public List<Dictionary<string, string>> GetChartData(string ChartId)
        {
            List<Dictionary<string, string>> data = new List<Dictionary<string, string>>();
            if(!string.IsNullOrEmpty(ChartId))
            {
                List<string> keyslist = new List<string>();
                keyslist.Add("Category_Name");
                keyslist.Add("Dept_Sale_Value");
                keyslist.Add("Top_Available");
                keyslist.Add("Sales_MID");
                Random random = new Random();

                for (int i = 0; i < 30; i++)
                {
                    Dictionary<string, string> dictionary = new Dictionary<string, string>();

                    dictionary.Add(keyslist[0], $"Category{i}");
                    dictionary.Add(keyslist[1], $"{random.Next(10, 40)}");
                    dictionary.Add(keyslist[2], $"{random.Next(30, 60)}");
                    dictionary.Add(keyslist[3], $"{random.Next(60, 90)}");

                    data.Add(dictionary);
                }
            }

            data = null;

            return data;
        }
    }
}
