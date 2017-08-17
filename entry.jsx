import { h, render, Component } from 'preact';
import { Matrix } from './matrix/matrix';
/** @jsx h */


class Entry extends Component {
  constructor(props) {
    super(props)
  }

  multiplyMatrix(e) {

  }

  render() {
    return (
      <div>
        <div className="flex">
          {[ <Matrix ref={(first) => this.first = first}/>, <Matrix /> ]}
        </div>
        <button onClick={this.multiplyMatrix.bind(this)}>Multiply</button>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded',
  () => render(<Entry/>, document.getElementById('root')))
