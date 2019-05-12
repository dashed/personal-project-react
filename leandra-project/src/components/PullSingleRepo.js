import React from "react";

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
        {props.reposToList.results.map(repo => <li key={repo.id}><a href={repo.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer">{repo.payload.pull_request.title}</a>
            {mergeStatus(repo.payload.action, repo.payload.pull_request.merged)}
        </li>)}
    </ul>
);

export default PullSingleRepo;