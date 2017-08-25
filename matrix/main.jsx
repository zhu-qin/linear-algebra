import { h, render, Component } from 'preact';
import { MatrixView } from './matrix-view';
import { multiplyMatrix } from './multiply-matrix'
import { reduxStore, reduxActions } from '../redux-store/store'

/** @jsx h */

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matrices: {}
    }
  }

  componentDidMount() {
    this.unsubscribe = reduxStore.subscribe(() => this.setState( { matrices: reduxStore.getState() }))
    reduxActions.createMatrix(3, 3)
    reduxActions.createMatrix(3, 3)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  multiplyMatrix(e) {
    let matrices = Array(this.state.matrixCount)
                      .fill()
                      .map((matrix, idx) => this[`matrix${idx}`].state.matrix)
    multiplyMatrix(...matrices)
  }

  render() {

    let matrices = Object.keys(this.state.matrices).map((matrixKey) => {
      return <MatrixView key={`matrix${matrixKey}`}
                         matrixContainer={this.state.matrices[matrixKey]} />
    })

    return (
      <div>
        <div className="flex">
          {matrices}
        </div>
        <div className="flex">
          <button onClick={this.multiplyMatrix.bind(this)}>Multiply</button>
        </div>
      </div>
    )
  }

}
