import React, {Component} from 'react';
import './App.css';
import "./index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.canvas = <canvas ref="canvas" width="400" height="200"></canvas>;
    }

    componentDidMount() {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.font = `20px Comic Sans MS`;
        ctx.fillText("You only see this in development", 50, 100);
    }

    render() {
        return (
            <div className="App">
                {this.canvas}
            </div>
        );
    }
}

export default App;
