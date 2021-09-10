/** @format */

// /** @format */

// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import { numberWithCommas } from "../../utils/format";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   CashIcon,
//   TrashIcon,
//   ChevronRightIcon,
//   PencilAltIcon,
// } from "@heroicons/react/outline";

// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const DoughnutChart = () => {
//   const transactionList = useSelector((state) => state.transactionList);
//   const { transactions } = transactionList;
//   return (
//     <>
//       <div className='header'>
//         <h1 className='title'>Pie Chart</h1>
//         <div className='links'>
//           {transactions.map((transaction) => (
//             <li key={transaction.id}>
//               <a
//                 href={transaction.href}
//                 className='block px-4 py-4 bg-white hover:bg-gray-50'>
//                 <span className='flex items-center space-x-4'>
//                   <span className='flex flex-1 space-x-2 truncate'>
//                     <CashIcon
//                       className='flex-shrink-0 w-5 h-5 text-gray-400'
//                       aria-hidden='true'
//                     />
//                     <span className='flex flex-col text-sm text-gray-500 truncate'>
//                       <span className='truncate'>{transaction.name}</span>
//                       <span>
//                         <span className='font-medium text-gray-900'>
//                           {numberWithCommas(transaction.amount)}
//                         </span>{" "}
//                         {transaction.currency}
//                       </span>
//                       <time dateTime={transaction.datetime}>
//                         {transaction.date}
//                       </time>
//                     </span>
//                   </span>
//                   <ChevronRightIcon
//                     className='flex-shrink-0 w-5 h-5 text-gray-400'
//                     aria-hidden='true'
//                   />
//                 </span>
//               </a>
//             </li>
//           ))}
//           <a
//             className='btn btn-gh'
//             href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js'>
//             Github Source
//           </a>
//         </div>
//       </div>
//       <div className='w-1/2 lg:w-1/4'>
//         <Doughnut data={data} options={{}} />
//       </div>
//     </>
//   );
// };

// export default DoughnutChart;
