import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    handleSubmit = (e) => {
        const { addTodo } = this.props;
        e.preventDefault();
        if (this.state.content === '') {
            alert('cannot add empty todo...');
        } else {
            addTodo(this.state.content);
            this.setState({
                content: ''
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">add new todo: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;