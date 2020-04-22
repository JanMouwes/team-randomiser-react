import React, {Component} from 'react';
import TeamRandomiser from "./TeamRandomiser";
import PropTypes from "prop-types";

class TeamRandomiserCard extends Component {
    render() {
        const {style = {width: 400, height: "auto"}, className = "", ...otherProps} = this.props;

        return (
            <div className={"card " + className} style={style} {...otherProps}>
                <h4 className="card-header">Team Randomiser</h4>

                <TeamRandomiser className="p-2"/>
            </div>
        );
    }
}

TeamRandomiserCard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export default TeamRandomiserCard;