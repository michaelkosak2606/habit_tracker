import React, { Component } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import Footer from "./Footer";
import { Bar, Line } from "react-chartjs-2";

export default class Charts extends Component {
  state = {
    selection: "zigaretten"
  }
  handleSelectChange = (event) => {
    event.preventDefault()
    this.setState({ selection: event.target.value },
      () => console.log(this.state.selection)
    );
  }


  render() {
    const Chart = css`
      margin-top: 45px;
      `
    const Selection = css`
      margin-top: 11px;
      text-transform: uppercase;  
      width: 200px;
      height: 30px;

    `
    const { history } = this.props;
    const newHistory = { ...history };
    const keysOfHistory = Object.keys(newHistory);

    const getDataFromHistory = keyword => {
      return keysOfHistory.map(key => {
        return newHistory[key][keyword];
      });
    };
    const resultLiters = getDataFromHistory("f3rqdoi");
    const resultLaufen = getDataFromHistory("mdde485");
    const resultCigarettes = getDataFromHistory("ek20nba");


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

    let wasser = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Wasser getrunken in Liter",
          data: resultLiters,
          backgroundColor: "rgba(255,99,132, 0.6)"
        }
      ]
    };
    let wasserProzentEntwicklung = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Prozentualle Entwicklung zum Vortag",
          data: percentDevelopment(wasser.datasets[0].data),
          backgroundColor: "rgba(255,99,132, 0.6)"
        }
      ]
    };
    let zigaretten = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Zigaretten Geraucht",
          data: resultCigarettes,
          backgroundColor: "rgba(0,0,0, 0.4)"
        }
      ]
    };
    let zigarettenProzentEntwicklung = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Prozentualle Entwicklung zum Vortag",
          data: percentDevelopment(zigaretten.datasets[0].data),
          backgroundColor: "rgba(0,0,0, 0.4)"
        }
      ]
    };
    let laufen = {
      labels: keysForDisplay,
      datasets: [
        {
          label: "Laufen in km",
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
      background-image: url(/static/media/header.8d8137e7.svg);
      background-size: cover;
    `;
    const selection =
      <form className={Selection}>
        <label>
          PICK YOUR STATISTICS:
     <select className={Selection} value={this.state.selection} onChange={this.handleSelectChange}>
            <option value="wasser">WASSER CHARTS</option>
            <option value="zigaretten">ZIGARETTEN CHARTS</option>
            <option value="laufen">LAUFEN CHARTS</option>
          </select>
        </label>
      </form>


    const showChatrs =
      this.state.selection === "zigaretten" ?
        <div>
          <div className={Chart}>
            <Line
              data={zigaretten}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
          <div className={Chart}>
            <Bar
              data={zigarettenProzentEntwicklung}
              //width={100}
              //height={50}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>
        : this.state.selection === "laufen" ?
          <div >
            <div className={Chart}>
              <Line
                data={laufen}
                //width={100}
                //height={50}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </div>
            <div className={Chart}>
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
            </div>
          </div>
          : this.state.selection === "wasser" ?
            <div>
              <div className={Chart}>
                <Line
                  data={wasser}
                  //width={100}
                  //height={50}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </div>
              <div className={Chart}>
                <Bar
                  data={wasserProzentEntwicklung}
                  //width={100}
                  height={150}
                  options={
                    {
                      //maintainAspectRatio: false
                    }
                  }
                />
              </div>
            </div> : null
    return (
      <Grid>
        <Header />
        <Scroller>
          {/* <button onClick={() => console.log(newHistory)}> show logs </button> */}
          {selection}
          <div className="chart" >
            {showChatrs}
          </div>
        </Scroller>
        <Footer />
      </Grid>
    );
  }
}
