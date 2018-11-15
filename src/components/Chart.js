// import React, { Component } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";

// class Chart extends Component {
//   render() {
//     const percentDevelopment = array => {
//       let result = [0];
//       for (let i = 0; i < array.length - 1; i++) {
//         let number = (array[i + 1] / array[i]) * 100 - 100;
//         number = Number(number.toString().substring(0, 5));
//         result.push(number);
//       }
//       return result;
//     };

//     let zigaretten = {
//       labels: [
//         "1.11",
//         "2.11",
//         "3.11",
//         "4.11",
//         "5.11",
//         "6.11",
//         "7.11",
//         "8.11",
//         "9.11",
//         "10.11"
//       ],
//       datasets: [
//         {
//           label: "Zigaretten",
//           data: [22, 24, 20, 21, 16, 19, 18, 17, 23, 21],
//           backgroundColor: "rgba(255,99,132, 0.6)"
//         }
//       ]
//     };
//     let zigarettenProzentEntwicklung = {
//       labels: [
//         "1.11",
//         "2.11",
//         "3.11",
//         "4.11",
//         "5.11",
//         "6.11",
//         "7.11",
//         "8.11",
//         "9.11",
//         "10.11"
//       ],
//       datasets: [
//         {
//           label: "Prozentualle Entwicklung zum Vortag",
//           data: percentDevelopment(zigaretten.datasets[0].data),
//           backgroundColor: "rgba(255,99,132, 0.6)"
//         }
//       ]
//     };
//     let laufen = {
//       labels: [
//         "1.11",
//         "2.11",
//         "3.11",
//         "4.11",
//         "5.11",
//         "6.11",
//         "7.11",
//         "8.11",
//         "9.11",
//         "10.11"
//       ],
//       datasets: [
//         {
//           label: "Laufen",
//           data: [2.4, 2.5, 2.7, 3.5, 3.9, 3.2, 3.5, 4, 4.2, 4.3],
//           backgroundColor: "rgba(255,112, 34, 0.6)"
//         }
//       ]
//     };
//     let laufenProzentEntwicklung = {
//       labels: [
//         "1.11",
//         "2.11",
//         "3.11",
//         "4.11",
//         "5.11",
//         "6.11",
//         "7.11",
//         "8.11",
//         "9.11",
//         "10.11"
//       ],
//       datasets: [
//         {
//           label: "Prozentualle Entwicklung zum Vortag",
//           data: percentDevelopment(laufen.datasets[0].data),
//           backgroundColor: "rgba(255,112, 34, 0.6)"
//         }
//       ]
//     };

//     return (
//       <div className="chart">
//         <div>
//           <button onClick={() => console.log("history")}> why </button>

//           <Line
//             data={zigaretten}
//             options={{
//               maintainAspectRatio: false
//             }}
//           />
//         </div>
//         <div>
//           <Bar
//             data={zigarettenProzentEntwicklung}
//             //width={100}
//             //height={50}
//             options={{
//               maintainAspectRatio: false
//             }}
//           />
//         </div>
//         <div>
//           <Line
//             data={laufen}
//             //width={100}
//             //height={50}
//             options={{
//               maintainAspectRatio: false
//             }}
//           />
//         </div>
//         <Bar
//           data={laufenProzentEntwicklung}
//           //width={100}
//           height={150}
//           options={
//             {
//               //maintainAspectRatio: false
//             }
//           }
//         />
//       </div>
//     );
//   }
// }

// export default Chart;
