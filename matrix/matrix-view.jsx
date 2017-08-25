import { h, render, Component } from 'preact';
import { createMatrix, transpose, MatrixContainer } from './matrix'
/** @jsx h */

export class MatrixView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: 3,
      columns: 3,
      matrix: []
    }
  }

  componentDidMount() {
    this.setState({
      matrix: createMatrix(this.state.rows, this.state.columns)
    })
  }

  transpose() {
    this.setState({
      matrix: transpose(this.state.matrix)
    })
  }

  updateMatrix(rowCount, columnCount) {
    let newMatrix = createMatrix(rowCount, columnCount, this.state.matrix)
    this.setState({ matrix: newMatrix })
  }

  updateValue(position) {
    return (e) => {
      this.state.matrix[position[0]][position[1]].value = e.currentTarget.value
      this.setState({matrix: this.state.matrix})
    }
  }

  createListener(vector, count) {
    return (e) => {
      this.setState({[vector]: this.state[vector] + count})
      this.updateMatrix(this.state.rows, this.state.columns)
    }
  }

  render() {

    let matrixView = this.state.matrix.map((row) => {

      let units = row.map((unit) => {
        return (<input type="text"
                       className="unit"
                       value={unit.value}
                       onChange={this.updateValue(unit.position)}
                       position={unit.position} />)
      })

      return <div className={'flex'}>{units}</div>
    })

    return (
      <div className="matrix-wrapper">
        <div className={'flex'}>
          <button onClick={this.createListener('rows', 1)}>Add Row</button>
          <button onClick={this.createListener('columns', 1)}>Add Column</button>
          <button onClick={this.createListener('rows', -1)}>Delete Row</button>
          <button onClick={this.createListener('columns', -1)}>Delete Column</button>
          <button onClick={this.transpose.bind(this)}>Transpose</button>
        </div>
        {matrixView}
      </div>
    )
  }

}
