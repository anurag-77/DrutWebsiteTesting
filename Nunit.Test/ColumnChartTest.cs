using System;
using System.Collections.Generic;
using System.Text;
using DrutTesting.Models;
using NUnit.Framework;
using Newtonsoft.Json;

namespace Nunit.Demo.Test
{
    [TestFixture]
    class ColumnChartTest
    {
        [Test]
        public void Test_ColumnChart_With_Null_ChartId()
        {
            var chart = new ChartRepository();
            List<Dictionary<string, string>> ChartData = chart.GetChartData(null);
            Console.WriteLine((string.IsNullOrEmpty(JsonConvert.SerializeObject(ChartData))) ? "Test Case Passed" : "Test Case Failed");
            Assert.IsEmpty(ChartData);
        }

        [Test]
        public void Test_ColumnChart_With_Valid_ChartId()
        {
            var chart = new ChartRepository();
            List<Dictionary<string, string>> ChartData = chart.GetChartData("ChartId");
            Console.WriteLine((!string.IsNullOrEmpty(JsonConvert.SerializeObject(ChartData))) ? "Test Case Passed" : "Test Case Failed");
            Assert.IsNotEmpty(ChartData);
        }
    }
}
