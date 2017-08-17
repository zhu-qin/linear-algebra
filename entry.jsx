import { h, render, Component } from 'preact';
import { Matrix } from './matrix/matrix';
/** @jsx h */


class Entry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matrixCount: 2
    }
  }

  multiplyMatrix(e) {
    debugger
  }

  render() {
    let matrices = Array(this.state.matrixCount).fill().map((el, idx) => {
      return <Matrix ref={(matrix) => this[`matrix${idx}`] = matrix}/>
    })

    return (
      <div>
        <div className="flex">
          {matrices}
        </div>
        <div className="flex">
          <button onClick={this.multiplyMatrix.bind(this)}>Multiply</button>
        </div>
        <div className="flex">
          <Matrix ref={(matrix) => this[`matrixResult`] = matrix}/>
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded',
  () => render(<Entry/>, document.getElementById('root')))
