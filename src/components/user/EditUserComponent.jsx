import React,{Component} from 'react';

class EditUserComponent extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            userName: '',
            lastName: '',
            age: '',
            salary: '',
        }
        this.saveUser = this.saveUser.bind(this);
    }

   async componentDidMount() {
        let response = await fetch('/users/'+window.localStorage.getItem("userId"));
        let result = await response.json();
        this.setState({
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            userName:result.userName,
            age: result.age,
            salary: result.salary
            })
    }

   
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
            e.preventDefault();
            let requestBody = {id: this.state.id,firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary,userName:this.state.userName};
            console.log(requestBody);
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            };
           fetch('/users/'+this.state.id, requestOptions)
                .then(response => response.json())
                .then(data => this.setState({ message : 'User Updated successfully.'}));
            
             this.props.history.push('/users');
        }

    render(){
        return(
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="userName" name="userName" className="form-control" readonly="true" defaultValue={this.state.userName}/>
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
            </div>
        );
    }



}
export default EditUserComponent;