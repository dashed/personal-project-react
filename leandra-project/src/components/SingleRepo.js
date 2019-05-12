import React from "react";
// import SingleRepo from './SingleRepo';
// import { checkPropTypes } from "prop-types";

const SingleRepo = (props) => (
    <ul>
        {/* {console.log(props.reposToList.results.map(repo => repo.payload.action))} */}

        {/* {console.log(props.reposToList.results.map(repo => repo.payload.pull_request.html_url))} */}

        {props.reposToList.results.map(repo => <li key={repo.id}><a href={`https:/github.com/${repo.repo.name}`} target="_blank" rel="noopener noreferrer">{repo.repo.name}</a></li>)}
    </ul>
);


export default SingleRepo;