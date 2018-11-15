import React, { Component } from "react";
import { css } from "emotion";
import styled from "react-emotion";
import Footer from "./Footer";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class Charts extends Component {
  render() {
    const { history, habits } = this.props;

    const newHistory = { ...history };
    const keysOfHistory = Object.keys(newHistory);

    const getDataFromHistory = keyword => {
      return keysOfHistory.map(key => {
        return newHistory[key][keyword];
      });
    };
    const resultLiters = getDataFromHistory("dsic2xo");
    const resultLaufen = getDataFromHistory("t7tssg6");
    const resultCigarettes = getDataFromHistory("xacq5id");

    const percentDevelopment = array => {
      let result = [0];
      for (let i = 0; i < array.length - 1; i++) {
        let number = (array[i + 1] / array[i]) * 100 - 100;
        number = Number(number.toString().substring(0, 5));
        result.push(number);
      }
      return result;
    };
    const keysForDisplay = keysOfHistory.map(key => key.substring(0, 5));

    let zigaretten = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Zigaretten",
          data: resultCigarettes,
          backgroundColor: "rgba(255,99,132, 0.6)"
        }
      ]
    };
    let zigarettenProzentEntwicklung = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Prozentualle Entwicklung zum Vortag",
          data: percentDevelopment(zigaretten.datasets[0].data),
          backgroundColor: "rgba(255,99,132, 0.6)"
        }
      ]
    };
    let laufen = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Laufen",
          data: resultLaufen,
          backgroundColor: "rgba(255,112, 34, 0.6)"
        }
      ]
    };
    let laufenProzentEntwicklung = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Prozentualle Entwicklung zum Vortag",
          data: percentDevelopment(laufen.datasets[0].data),
          backgroundColor: "rgba(255,112, 34, 0.6)"
        }
      ]
    };

    let newArray = Object.keys(history).map(e =>
      e.replace(".", "").replace(".", "")
    );
    const Scroller = styled("div")`
      overflow-y: scroll;
      padding: 20px;
    `;

    const Grid = styled("section")`
      display: grid;
      grid-template-rows: 91px auto 91px;
      height: 100vh;
    `;

    const Header = styled("header")`
      background-image: url(/static/media/header.0575ac55.svg);
      background-size: cover;
    `;

    return (
      <Grid>
        <Header />
        <Scroller>
          {/* <button onClick={() => console.log(newHistory)}> why </button>
          <button onClick={() => console.log(keysOfHistory)}> why </button>
          <button onClick={() => console.log(keysForDisplay)}> why </button> */}
          <div className="chart">
            <div>
              <Line
                data={zigaretten}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
            <div>
              <Bar
                data={zigarettenProzentEntwicklung}
                //width={100}
                //height={50}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
            <div>
              <Line
                data={laufen}
                //width={100}
                //height={50}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
            <Bar
              data={laufenProzentEntwicklung}
              //width={100}
              height={150}
              options={
                {
                  //maintainAspectRatio: false
                }
              }
            />
          </div>{" "}
        </Scroller>
        <Footer />
      </Grid>
    );
  }
}
