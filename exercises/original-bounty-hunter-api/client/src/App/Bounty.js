import React, { Component } from 'react'

class Bounty extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, living, bountyAmt, type } = props;
        this.state = {
            isEditing: false,
            inputs: {
                firstName: firstName || '',
                lastName: lastName || '',
                living: living || '',
                bountyAmt: bountyAmt || '',
                type: type || '',
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let updatedBounty = this.state.inputs
        let id = this.props._id;
        this.props.editBounty(id, updatedBounty);
        this.toggleEdit();
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        let { firstName, lastName, living, bountyAmt, type } = this.state.inputs;
        let { removeBounty, _id } = this.props;
        return (
            this.state.isEditing ?
                <div>
                    <form action="">
                        <input type="text" onChange={this.handleChange} name='firstName' value={firstName} />
                        <input type="text" onChange={this.handleChange} name='lastName' value={lastName} />
                        <input type="text" onChange={this.handleChange} name='living' value={living} />
                        <input type="text" onChange={this.handleChange} name='bountyAmt' value={bountyAmt} />
                        <input type="text" onChange={this.handleChange} name='type' value={type} />
                        <button onClick={this.toggleEdit}>cancel</button><button onClick={this.handleSubmit}>submit</button>
                    </form>
                </div>
                :
                <div>
                    <h2>{`${firstName} ${lastName}`}</h2>
                    <h3>Living: {living}</h3>
                    <h3>Price: ${bountyAmt}.00</h3>
                    <h3>{type}</h3>
                    <button onClick={this.toggleEdit}>edit</button>
                    <button onClick={() => { removeBounty(_id) }}>x</button>
                </div>
        )
    }
}

export default Bounty;
