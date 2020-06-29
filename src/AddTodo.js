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
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input style={{
                                    borderBottom: '1px solid #2196F3',
                                    boxShadow: '0 1px 0 0 #2196F3'
                                }} placeholder="add new todo" className="validate" id="todo" type="text" onChange={this.handleChange} value={this.state.content} />
                            </div>
                        </div>
                        <button style={{ width: '100%', borderRadius: "50px" }} className="btn waves-effect waves-light blue">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTodo;