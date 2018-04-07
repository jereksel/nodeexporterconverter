import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NodeExporterConverter from './NodeExporterConverter';

interface State {
  source: string;
}

class App extends React.Component<object, State> {

  constructor(props: object) {
    super(props)
    this.state = { source: "" }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event: any) {
      this.setState({source: event.target.value})
  }

  render() {

    let disabled = this.state.source == ""

    let targetText: string

    if (disabled) {
      targetText = "Enter your config to first box"
    } else {
      targetText = NodeExporterConverter.convert(this.state.source)
    }

    return (
      <div className="container">
        <h1>Node exporter converter</h1>
        <p>This page will convert metrics from node exporter metric in your Grafana config to 0.16 compatible metrics.
           This application is client only so no data is sent to me.</p>

        <div className="row">
          <div className="col">
            <textarea onChange={this.handleChange} className="form-control" rows={10} />
          </div>
          <div className="col">
            <textarea disabled={disabled} className="form-control" rows={10} value={targetText}></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
