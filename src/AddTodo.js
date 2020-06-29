import React, { Component } from 'react'
import styled from 'styled-components';

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
                    <div className="row">
                        <label>
                            add new todo:
                            <input className="validate" id="todo" type="text" onChange={this.handleChange} value={this.state.content} />
                        </label>
                    </div>
                    <div className="row">
                        <button className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;