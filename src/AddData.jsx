import React, { Component } from 'react'

export default class AddData extends Component {
  render() {
    return (
      <div className='add-data' >
        <h1>Balance:</h1>
          <form onSubmit={(e)=>this.props.addDataItem(e)}>
        <label>
            <p>Remarks</p>
             <input required onChange={(e)=>this.props.handleChange(e)}   name='remarks' type="text" />
        </label>
        <label>
            <p>Amount</p>
             <input required onChange={(e)=>this.props.handleChange(e)} name='amount' type="number" />
        </label>
        <label>
            <p>Type</p>
            <select onChange={(e)=>this.props.handleChange(e)} id="options" name="option">
            <option value="expense">Expenses</option>
            <option value="income">Incomes</option>
            </select>
        </label>
        <button type='submit'> Add</button>
        </form>
        </div>
    )
  }
}
