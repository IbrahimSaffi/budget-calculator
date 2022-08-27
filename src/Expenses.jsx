import React, { Component } from 'react'

export default class Expenses extends Component {
    render() {
        return (
            <div className='expenses'>
                <h1>
                    Expenses
                </h1>
                <div className='container'>
                    {this.props.expenses.map(ele => {
                      return <div className="exp-card card">
                            <p>{ele.remarks} </p>
                            <p>${ele.amount}</p>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
