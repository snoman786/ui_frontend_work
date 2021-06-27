import React,{Component} from 'react';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            userName: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        console.log("Adding the user for body :::: >>>" + {userName: this.state.userName, firstName: this.state.firstName, 
            lastName: this.state.lastName, age: this.state.age, salary: this.state.salary});
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userName: this.state.userName, firstName: this.state.firstName, 
                lastName: this.state.lastName, age: this.state.age, salary: this.state.salary})
        };
       fetch('/users', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ message : 'User added successfully.'}));
        
         this.props.history.push('/users');
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render(){
        return(<div>
            <h2 className="text-center">Add User</h2>
            <form>
            <div className="form-group">
                <label>User Name:</label>
                <input type="text" placeholder="userName" name="userName" className="form-control" value={this.state.userName} onChange={this.onChange}/>
            </div>
            <div className="form-group">
                <label>First Name:</label>
                <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>Last Name:</label>
                <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>Age:</label>
                <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <label>Salary:</label>
                <input type="number" placeholder="salary" name="salary" className="form-control" value={this.state.salary} onChange={this.onChange}/>
            </div>

            <button className="btn btn-success" onClick={this.saveUser}>Save</button>
        </form>
    </div>);
    }

}

export default AddUserComponent;