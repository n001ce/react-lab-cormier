import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 1,
    }

    constructor(){
        
    }

    handleIncrement(){
        console.log("Increment Clicked", this)

    }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                 onclick={this.handleIncrement} 
                 className="btn btn-secondary btn-sm"
                 >
                     Increment
                </button>
            </div>
        )
    }
}
 
export default Counter