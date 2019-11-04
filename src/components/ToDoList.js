import React from 'react';


class ToDoList extends React.Component {
    completedRef = React.createRef();

    completeTask = (event) => {
        event.preventDefault();

        const task = {
            completedRef: this.completedRef.current.value
        };


        this.props.toggleComplete(task);
    }


    render() {
        const { name, status } = this.props.details;
        { console.log(status) }
        // console.log(name, status);

        // toggleComplete = (event) => {
        //     event.preventDefault();

        // const task = {
        //     completeRef: this.completeRef.current.value
        // };
        // this.props.toggleComplete(task)
        return (
            <form action="" onSubmit={this.toggleComplete}>

                <input type="radio" placeholder={name} name={this.props} id={this.key} />
                {name}
            </form>

        )
    };



}

export default ToDoList;