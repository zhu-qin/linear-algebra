import { h, render, Component } from 'preact';
import { MatrixView } from './matrix-view';
import { multiplyMatrix } from './multiply-matrix'
/** @jsx h */

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matrixCount: 2
    }
  }

  multiplyMatrix(e) {
    let matrices = Array(this.state.matrixCount)
                      .fill()
                      .map((matrix, idx) => this[`matrix${idx}`].state.matrix)
    multiplyMatrix(...matrices)
  }

  render() {
    let matrices = Array(this.state.matrixCount)
                      .fill()
                      .map((el, idx) => <MatrixView ref={(matrix) => this[`matrix${idx}`] = matrix}/>)
    return (
      <div>
        <div className="flex">
          {matrices}
        </div>
        <div className="flex">
          <button onClick={this.multiplyMatrix.bind(this)}>Multiply</button>
        </div>
        <div className="flex">
          <MatrixView ref={(matrix) => this[`matrixResult`] = matrix}/>
        </div>
      </div>
    )
  }

}
