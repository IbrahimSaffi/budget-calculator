import React, { Component } from 'react'
import AddData from './AddData'
import Expenses from './Expenses'
import Incomes from './Incomes'
import "./App.css"
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      budget:0,
      expenses:[],
      incomes:[],
      option:"expense",
    }
  }
  addDataItem=(e)=>{
    e.preventDefault()
      if(this.state.option==="expense"){
       let tempArr =  this.state.expenses.map(ele=>
        {
          return {...ele}
        }
        )
        tempArr.push({type:this.state.option,remarks:this.state.remarks,amount:this.state.amount})
        this.setState({
          expenses: tempArr
        })
      }
      else{
        let tempArr =  this.state.incomes.map(ele=>
          {
            return {...ele}
          }
          )
          tempArr.push({type:this.state.option,remarks:this.state.remarks,amount:this.state.amount})    
            this.setState({
            incomes: tempArr
          })
        
      }
     e.target.reset()
     this.state.option="expense"
}
handleChange=(e)=>{
 const target =e.target;
 const value = target.value;
 const name =  target.name;
 this.setState({
  [name]:value
 })
}

  render() {
    return (
      <div className='main' >
        <AddData handleChange={this.handleChange} addDataItem = {this.addDataItem} />
        <Expenses expenses ={this.state.expenses} />
        <Incomes incomes={this.state.incomes} />
      </div>
    )
  }
}
