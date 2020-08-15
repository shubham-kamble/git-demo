import React, { Component } from 'react'
import MyData from './MyData'

class AddEmployee extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            job:'',
            empData:[
                {name:'John',job:'Programmer' }
            ]
        }

        this.clickHandler.bind(this)
        //this.dataDeleter.bind(this)
    }

    clickHandler = (event) => {
        this.setState({
            empData: this.state.empData.concat({name:this.state.name,job :this.state.job})
          })
    }

    nameChanger = (event) => {
        this.setState({
            name:event.target.value
        })
    }

    jobChanger = (event) => {
        this.setState({
            job:event.target.value
        })
    }

    // dataDeleter(index){
    //     console.log(this.state.empData)
    //     console.log(index)
    //     var tempData = [this.state.people]; // make a separate copy of the array
    //     if (index !== -1) {
    //         tempData.splice(index, 1);
    //         this.setState({empData: tempData});
    //     }
    // }
    
    render(){
        return (
            <div>
                <table class="table">
                    <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                    </tr>
                    <MyData empData = {this.state.empData}/>
                </table>
                <h1>Add New Employee</h1><br/>
                <h4>Name</h4><br/>
                <input id='name' value={this.state.name} onChange={this.nameChanger}/><br/>
                <h4>Job</h4><br/>
                <input id='job' value={this.state.job} onChange={this.jobChanger}/><br/>
                <input id='submit' type='submit' value='Submit' onClick={this.clickHandler}/><br/>
            </div>
        )
    }
}

// export const deleteData = (index) =>{
    
// }

export default AddEmployee