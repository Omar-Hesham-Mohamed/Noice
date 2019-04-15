import React, {Component} from 'react';
import axios from 'axios';
import Select from 'react-select'

/******     PLEASE READ:  ***********/
// The Events model, controller and routes are completely missing
// The commented axios part can be removed only when events are added
export default class Event extends Component {

    constructor(props) {
        super(props);

        this.onChangeAttribute = this.onChangeAttribute.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    
        this.state = { 
            attribute: '',
            value: '',
            foundEvents: []
        }
    }

    onChangeAttribute(e) {
        this.setState({
            attribute: e.value
        });
        // console.log("Selected: " + this.state.attribute)
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        });
        // console.log("Value typed: " + this.state.value + ", For attribute: " + this.state.attribute)
    }

    
    onSubmit(e) { // CHANGE THIS
        e.preventDefault();
        // console.log("You pressed submit")
        const body = {
            attribute : this.state.attribute,
            value : this.state.value
        }
        console.log(body)

        // ************* Uncomment this if events is added to the repo ************//
        // axios.post('http://localhost:5000/api/events/search', body)
        // .then(res => this.setState({foundEvents : res.data.data}))
        
       
    }

    render() {
        return (
            <div>
                <h3>Filter Events</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Filter by: </label>
                     <Select
                        options={ options }
                        onChange= {(value) => {this.onChangeAttribute(value)}}
                        />
                    </div>


                    <div className="form-group">
                        <label>Enter value: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ID}
                                onChange={this.onChangeValue}
                                />
                    </div>
                    
             
                    
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
                </form>
                
                {this.state.foundEvents.map(foundEvent =>{
                
                return(
                    <div>
                    <pre>Name: {foundEvent.Name}</pre>
                    <pre>Owner: {foundEvent.Owner}</pre>
                    <pre>Type: {foundEvent.Type}</pre>
                    <pre>Location: {foundEvent.Location}</pre>
                    <pre>Participants: {foundEvent.Participants}</pre>
                    <pre>Start Date: {JSON.stringify(foundEvent.startDate)}</pre>
                    <pre>End Date: {JSON.stringify(foundEvent.endDate)}</pre>
                    <pre>Tags: {JSON.stringify(foundEvent.tags)}</pre>
                    <pre>Description: {foundEvent.Description}</pre>
                    <pre>Joined Members: {JSON.stringify(foundEvent.joinedMembers)}</pre>

                    <hr />
                    </div>
                )})}
                
                
                
            </div> 

        ) // rendering ends here
    }

}


const options = [
    { label: "Name", value: "Name" },
    { label: "Owner", value: "Owner" },
    { label: "Type", value: "Type" },
    { label: "Location", value: "Location" },
    { label: "Participants", value: "Participants" },
    { label: "Start Date", value: "startDate" },
    { label: "End Date", value: "endDate" },
    { label: "Tags", value: "tags" },
  ]