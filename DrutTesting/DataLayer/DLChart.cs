using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DrutTesting.DataLayer
{
    public class DLChart
    {
        public List<Dictionary<string, string>> GetChartData(string ChartId)
        {
            List<string> lstCategoryList = new List<string> { "Expenditure", "Labour", "Salary" };

            List<List<int>> lstYaxisList = new List<List<int>>();

            List<int> Yaxis1 = new List<int> { 278, 948, 902 };

            List<int> Yaxis2 = new List<int> { 373, 736, 544 };

            List<int> Yaxis3 = new List<int> { 238, 833, 654 };

            lstYaxisList.Add(Yaxis1);
            lstYaxisList.Add(Yaxis2);
            lstYaxisList.Add(Yaxis3);

            Random random = new Random();

            List<Dictionary<string, string>> data = new List<Dictionary<string, string>>();
            if(!string.IsNullOrEmpty(ChartId))
            {
                List<string> keyslist = new List<string>();
                keyslist.Add("Category_Name");
                keyslist.Add("Dept_Sale_Value");
                keyslist.Add("Top_Available");
                keyslist.Add("Sales_MID");

                for (int i = 0; i < 3; i++)
                {
                    Dictionary<string, string> dictionary = new Dictionary<string, string>();

                    //dictionary.Add(keyslist[0], $"{lstCategoryList[i]}");
                    //dictionary.Add(keyslist[1], $"{lstYaxisList[i][0]}");
                    //dictionary.Add(keyslist[2], $"{lstYaxisList[i][1]}");
                    //dictionary.Add(keyslist[3], $"{lstYaxisList[i][2]}");

                    dictionary.Add(keyslist[0], $"{lstCategoryList[i]}");
                    dictionary.Add(keyslist[1], $"{random.Next(20,50)}");
                    dictionary.Add(keyslist[2], $"{random.Next(30, 50)}");
                    dictionary.Add(keyslist[3], $"{random.Next(40, 60)}");

                    data.Add(dictionary);
                }
            }



            string str = JsonConvert.SerializeObject(data);
            return data;
        }
    }
}
