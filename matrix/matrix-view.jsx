import { h, render, Component } from 'preact';
import { createMatrix, transpose, MatrixContainer } from './matrix'
import { reduxActions } from '../redux-store/store'
/** @jsx h */

export class MatrixView extends Component {
  constructor(props) {
    super(props)
  }

  transpose() {
    reduxActions.transpose(this.props.matrixContainer.id)
  }

  updateValue(position) {
    return (e) => {
      reduxActions.updateMatrixValue(
        position,
        e.currentTarget.value,
        this.props.matrixContainer.id
      )
    }
  }

  createListener(vector, count) {
    return (e) => {
      let container = this.props.matrixContainer
      let rows = vector === 'rows' ?
        container.rows + count : container.rows
      let columns = vector === 'columns' ?
        container.columns + count : container.columns
      reduxActions.updateMatrixSize(rows, columns, container.id)
    }
  }

  render() {

    if (!this.props.matrixContainer) {
      return
    }

    let matrixView = this.props.matrixContainer.matrix.map((row) => {
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
