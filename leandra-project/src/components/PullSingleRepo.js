import React from "react";
import PullRequestStatus from './PullRequestStatus';


const PullSingleRepo = (props) => (
    <ul>

        {props.reposToList.map(repo => <li key={repo.id}><a href={repo.payload.pull_request.html_url} target="_blank" rel="noopener noreferrer">{repo.payload.pull_request.title}</a>
        <PullRequestStatus status={repo.payload.action} merged={repo.payload.pull_request.merged} />
        </li>)}
    </ul>
);

export default PullSingleRepo;