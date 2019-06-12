import React, { Component } from 'react';
import './App.css';
import Card from './Card';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }
}
export default Board;