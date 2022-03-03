// import React from 'react'
// import { Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
//   import { Bar } from 'react-chartjs-2';


//   ChartJS.register(
//       CategoryScale,
//       LinearScale,
//       BarElement,
//       Title,
//       Tooltip,
//       Legend
//   );

//   export const options = {
//       responsive: true,
//       plugins: {
//           legend: {
//               position: 'top' as const,
//           },
//           title: {
//               display: true,
//               text: 'Next 12 Hours'
//           },
//       },
//   };

//   const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

//   export const data = {
//       labels,
//       datasets: {
//           label: 
//       }
//   }

// export default function HourlyWeather({hourlyData, max, min}) {

//     let chartMax= max.toFixed(0);
//     let chartMin= min.toFixed(0);
//   return (
//     <div>
//         <p>{chartMax}</p>
//         <p>{chartMin}</p>
//         {hourlyData.slice(0, 12).map((hourly, i) =>{
//             return(
//                 <div key={i}>
//                     <p>{i}</p>
//                     <p>{new Date(hourly.dt * 1000).toLocaleTimeString('en-us')}</p>
//                     <p>{hourly.temp.toFixed(0)}&deg;F</p>
//                 </div>
//             )
//         })}
//         <div>
//             <canvas id='hourChart'>

//             </canvas>
//         </div>
//     </div>
//   )
// }
