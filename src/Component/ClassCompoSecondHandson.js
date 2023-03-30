import React, { Component } from 'react'
import "./ClassCompo.css"
export class ClassCompoSecondHandson extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    data: []
  }
  handleOnchange = (e) => {

    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const objData = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    }
    const arr = this.state.data;
    arr.push(objData)
    this.setState({ [this.state.data]: arr })
    console.log(this.state.name)
    console.log(this.state.department)
    console.log(this.state.rating)
    console.log(this.state.data)


  }
  render() {
    return (

      <>
        <div className='container'>
          <div className="eff">EMPLOYEE FEEDBACK FORM</div>


          <label>Name:</label>
          <input name="name" onChange={this.handleOnchange} className="nametxt" />

          <br />
          <label>Department:</label>
          <input name="department" className="nametxt" onChange={this.handleOnchange} />
          <br />
          <label>Rating:</label>
          <input name="rating" className="nametxt" onChange={this.handleOnchange} />
          <br />
          <button className="button" onClick={this.handleSubmit}>Submit</button>

        </div>
        <div className='flexcontainer'>
        {this.state.data.map((item, index) => {
          return (
            <div key={index}>              

             <div className='itemdisp'>{item.name} | {item.department} | {item.rating}</div>
                </div>
            
          )
        })}
        </div>
      </>
    )
  }
}

export default ClassCompoSecondHandson