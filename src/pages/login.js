import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this,handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState(state => {
            userName: e.target.value.userName;
            password: e.target.value.password;
        });
    }

    handleSubmit(e) {
        this.setState(state => {
            userName: e.detail.value
        });
    }
}