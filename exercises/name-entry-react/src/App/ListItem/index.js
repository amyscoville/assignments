import React, { Component } from 'react'

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
        return (
            <li>{this.name}</li>
        )
    }
}

export default ListItem;
