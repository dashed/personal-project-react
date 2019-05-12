import React from "react";
import PullSingleRepo from './PullSingleRepo';

const Pull = props => (
    <div className="flex-parent">
        {props.pullRepos.length ? "Pull Requests:" : ""}
        <PullSingleRepo reposToList={props.pullRepos}/>
    </div>
);

export default Pull;