import React from "react";
import { connect } from "react-redux";
import { pullStatus } from "../store/action";

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
                {props ? props.pullStatus(props.status) : ""}
                {props ? pullReqStatus(props.merged, props.stateReq): ""}
            </p>
        )

};

const mapStateToProps = state => ({
    pullStat: state.pullStat,
    merged: state.merged,
    stateReq: state.stateReq
});

const mapDispatchToProps = {
    pullStatus,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PullRequestStatus);