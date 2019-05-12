import React from "react";
import PullSingleRepo from './PullSingleRepo';
// import { checkPropTypes } from "prop-types";

const Pull = props => (
    <div className="flex-parent">
        {props.results.length ? "Pull Requests:" : ""}
        <PullSingleRepo reposToList={props}/>
    </div>
);

export default Pull;