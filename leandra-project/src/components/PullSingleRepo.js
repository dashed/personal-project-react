import React from "react";
// import SingleRepo from './SingleRepo';
// import { checkPropTypes } from "prop-types";

const mergeStatus = (status, merge) =>{
    // return status === "closed" ? (merge ? "merged" : "closed") : "open";
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
        {/* {console.log(props.reposToList.results.map(repo => repo.payload.action))}

        {console.log(props.reposToList.results.map(repo => repo.payload.pull_request.merged))} */}
        {console.log(props.reposToList.results.map(repo => repo.payload.pull_request.url))}

        {/* {console.log(props.reposToList.results.map(repo => repo.payload.pull_request.html_url))} */}

        {props.reposToList.results.map(repo => <li key={repo.id}><a href={repo.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer">{repo.payload.pull_request.title}</a>
            {mergeStatus(repo.payload.action, repo.payload.pull_request.merged)}
        {/* {repo.payload.action === 'closed' && repo.payload.pull_request.merged ? 'merged' : 'closed'} */}
        </li>)}
    </ul>
);

export default PullSingleRepo;