import { h, render, Component } from 'preact';
/** @jsx h */

export class Matrix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: 3,
      columns: 3,
      matrix: []
    }
  }

  componentDidMount() {
    this.updateMatrix(this.state.rows, this.state.columns)
  }

  updateMatrix(rowCount, columnCount) {

    let rows = Array(rowCount).fill().map((row, rowIdx) => {
      return Array(columnCount).fill().map((unit, colIdx) => {
        let existingRow = this.state.matrix[rowIdx]
        let value
        if (existingRow && existingRow[colIdx]) {
          value = Object.assign({}, existingRow[colIdx])
        } else {
          value = { position: [rowIdx, colIdx], value: undefined }
        }
        return value
      })
    })

    this.setState({ matrix: rows })
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
                       position={unit.position}/>)
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
        </div>
        {matrixView}
      </div>
    )
  }

}
