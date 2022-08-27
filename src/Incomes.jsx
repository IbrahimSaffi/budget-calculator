import React, { Component } from 'react'

export default class Incomes extends Component {
  render() {
    return (
      <div className='incomes'>
        <h1>Incomes</h1>
        <div className='container'>
          {this.props.incomes.map(ele => {
           return <div className="inc-card card">
              <p>{ele.remarks} </p>
              <p>${ele.amount}</p>
            </div>
          })}
        </div>
      </div>
    )
  }
}
