import { connect } from "react-redux";
import Charts from "../components/Charts";
import Chart from "../components/Chart";

const mapStateToProps = state => ({
  habits: state.habits,
  history: state.history
});

export default connect(mapStateToProps)(Charts, Chart);
