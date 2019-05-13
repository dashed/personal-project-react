import React from "react";

const PullRequestStatus = (props)=> {

        const pullReqStatus = (merge, status) => {
            if (merge) {
                return 'merged'
            } else if (!merge && status === 'closed') {
                return 'closed'
            } else {
                return 'open'
            }
        }

        return (
            <p className="flex-parent">
                {props ? pullReqStatus(props.merged, props.status): ""}
            </p>
        )

};

export default PullRequestStatus;