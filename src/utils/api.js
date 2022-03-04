/** @format */
/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://alpha-vantage.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    "x-rapidapi-key": "267254c439msh2de2a4f20e34018p127169jsn2d3c662440d9",
  },
});

// const exchangeApi = axios.create({
//   baseURL: "https://yahoofinance-stocks1.p.rapidapi.com",
//   params: { ExchangeCode: "NMS" },
//   headers: {
//     "x-rapidapi-host": "yahoofinance-stocks1.p.rapidapi.com",
//     "x-rapidapi-key": "267254c439msh2de2a4f20e34018p127169jsn2d3c662440d9",
//   },
// });

export default {
  stockTimeSeries: (symbol) =>
    instance({
      method: "GET",
      url: "/query",
      params: {
        outputsize: "compact",
        datatype: "json",
        function: "TIME_SERIES_MONTHLY_ADJUSTED",
        symbol: symbol.toUpperCase(),
      },
      transformResponse: [
        function (data) {
          // Do whatever you want to transform the data
          console.log("Transforming data...");

          const json = JSON.parse(data);

          const dates = Object.keys(
            json["Monthly Adjusted Time Series"]
          ).reverse();

          // Construct response data for chart input
          const closePrices = dates.map(
            (date) =>
              (date = {
                date,
                close: Number(
                  json["Monthly Adjusted Time Series"][date]["4. close"]
                ),
              })
          );

          const symbol = json["Meta Data"]["2. Symbol"];
          const refreshed = json["Meta Data"]["3. Last Refreshed"];

          data = {
            symbol,
            refreshed,
            closePrices,
          };

          return data;
        },
      ],
    }),

  // listNasdaq: () =>
  //   exchangeApi({
  //     method: "GET",
  //     url: "/companies/list-by-exchange",

  //     transformResponse: [
  //       function (data) {
  //         // Do whatever you want to transform the data
  //         console.log("Transforming Nasdaq Data...");

  //         const json = JSON.parse(data);

  //         const stocks = Object.keys(json["results"]);

  //         const stockNames = stocks.map(
  //           (stock) =>
  //             (stock = {
  //               stock,
  //               stockName: String(json["results"][stock]["companyName"]),
  //               symbol: String(json["results"][stock]["symbol"]),
  //               industry: String(json["results"][stock]["industryOrCategory"]),
  //             })
  //         );

  //         data = {
  //           stockNames,
  //         };

  //         return data;
  //       },
  //     ],
  //   }),
};
