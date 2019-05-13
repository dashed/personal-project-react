import React, { Component } from "react";
import PullSingleRepo from './PullSingleRepo';

class Pull extends React.Component {

    render(){
        return (
            <div className="flex-parent">
                {this.props.results.length ? "Pull Requests:" : ""}
                <PullSingleRepo reposToList={this.props.results} />
            </div>
        )
    }

};



export default Pull;