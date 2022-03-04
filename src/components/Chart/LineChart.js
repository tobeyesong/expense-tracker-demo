/** @format */

// /** @format */

import React, { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { LineChart, XAxis, Line, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

const LineChartSection = () => {
  // Create state variables
  let [responseData, setResponseData] = React.useState("");
  let [ticker, setTicker] = React.useState("");
  let [message, setMessage] = React.useState("");
  //Axios for Nasdaq Local Json
  const [stocks, setStocks] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const loadStocks = async () => {
      const res = await axios("nasdaq.json");
      setStocks(res.data);
      console.log(res.data);
    };
    loadStocks();
  }, []);
  const onSuggestHandler = (text) => {
    setText(text);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = stocks.filter((stock) => {
        const regex = new RegExp(`^${text}`, "gi");
        return stock.Name.match(regex) || stock.Symbol.match(regex);
      });
    }

    if (text.length === 0) {
      matches = [];
    }

    console.log(matches, "matches");
    setSuggestions(matches);
    setText(text);
  };

  // fetches stock data based on parameters
  const fetchData = (e) => {
    e.preventDefault();

    setMessage("Loading...");

    api
      .stockTimeSeries(text)
      .then((response) => {
        setResponseData(response.data);
        setMessage("");
        console.log(response);
      })
      .catch((error) => {
        setMessage("Error");
        console.log(error);
      });
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='text-white custom-tooltip'>
          <p className='flex justify-center p-2 m-2 text-xs border-2 border-white rounded-md w-28 label text-slate-100 '>{`${label}`}</p>
          <p className='p-1 m-2 text-lg md:text-2xl lg:text-3xl text-emerald-500'>{`$${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };
  const CustomLabel = (label) => {
    return (
      <g>
        <text fill='#111' dy={20} dx={30}>
          <p className='label'>{`${label}`}</p>
        </text>
      </g>
    );
  };

  return (
    <div className='relative max-w-6xl px-4 mx-auto mt-8 sm:px-6 lg:px-8'>
      <h2 className='max-w-6xl text-lg font-medium leading-6 text-gray-900 '>
        Investments
      </h2>
      <form onSubmit={fetchData} className='relative mt-1'>
        <fieldset>
          <legend className='block text-sm font-medium text-gray-700'>
            Search Stock Market
          </legend>
          <label htmlFor='ticker'>
            <input
              className='w-full py-2 pl-3 pr-10 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'
              required
              name='ticker'
              id='ticker'
              type='text'
              placeholder=''
              value={text}
              onChange={(e) => setTimeout(onChangeHandler(e.target.value), 400)}
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([]);
                }, 300);
              }}
            />{" "}
            <button
              type='submit'
              className='inline-flex items-center px-3 py-2 my-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50'>
              Submit
            </button>
          </label>

          {suggestions &&
            suggestions.slice(0, 5).map((suggestion, i) => (
              <div
                key={i}
                className='z-10 w-full p-2 text-base bg-white rounded-sm shadow-lg hover:text-gray-100 hover:bg-sky-600 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                onClick={() => onSuggestHandler(suggestion.Symbol)}>
                <div className='flex items-center '>
                  <div className='p-1 text-gray-800 border-2 rounded-md r bg-slate-100 border-slate-200'>
                    {suggestion.Symbol}
                  </div>

                  <div className='p-1'>{suggestion.Name}</div>
                </div>
              </div>
            ))}
        </fieldset>
      </form>

      {/* <small>Last Refresh: {responseData ? responseData.refreshed : ""}</small> */}
      <div className='my-1 bg-gray-900 rounded-md '>
        <div className='flex items-center justify-between p-4 leading-3 text-white'>
          <div className='p-3'>{responseData ? responseData.symbol : ""}</div>
          <div className='p-2 leading-3 text-gray-900 bg-white rounded-md '>
            <p>Monthly Time Series</p>
          </div>
          <p className='p-2 leading-3 text-gray-900 rounded-lg bg-rose-400 animate-pulse'>
            {message}
          </p>
        </div>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={responseData.closePrices}>
            <Tooltip position={{ y: -10, x: 10 }} content={<CustomTooltip />} />
            <Line
              type='monotone'
              dataKey='close'
              dot={false}
              stroke='#ff7300'
              label={CustomLabel}
            />
            <XAxis dataKey='date' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartSection;
