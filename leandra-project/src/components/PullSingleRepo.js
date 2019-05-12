import React from "react";
// import SingleRepo from './SingleRepo';
// import { checkPropTypes } from "prop-types";

const mergeStatus = (status, merge) =>{
    if (status === 'opened' && !merge){
        return 'Open'
    }else if (status === 'opened' && merge){
        return 'Merged'
    } else if (status === 'closed' && !merge){
        return 'Closed'
    }else if (status === 'closed' && merge){
        return 'Merged'
    }
}

const PullSingleRepo = (props) => (
    <ul>

        {props.reposToList.map(repo => <li key={repo.id}><a href={repo.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer">{repo.payload.pull_request.title}</a>
            {mergeStatus(repo.payload.action, repo.payload.pull_request.merged)}

        </li>)}
    </ul>
);

export default PullSingleRepo;