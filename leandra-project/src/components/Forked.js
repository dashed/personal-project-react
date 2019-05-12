import React from "react";
import SingleRepo from './SingleRepo';
// import { checkPropTypes } from "prop-types";

//TODO: create list component & pass title as prop
const Forked = props => (
    <div className="flex-parent">
    {props.results.length ? "Forked Repos:" : ""}
        <SingleRepo reposToList={props}/>
    </div>
);

export default Forked;