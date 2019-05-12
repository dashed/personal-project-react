import React from "react";
import SingleRepo from './SingleRepo';

const Forked = props => (
    <div className="flex-parent">
    {props.results.length ? "Forked Repos:" : ""}
        <SingleRepo reposToList={props}/>
    </div>
);

export default Forked;