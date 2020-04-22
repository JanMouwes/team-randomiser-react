import React, {Component} from 'react';
import TeamRandomiser from "./TeamRandomiser";
import PropTypes from "prop-types";

class TeamRandomiserBlock extends Component {
    render() {
        const {style = {width: 400, height: "auto"}, className = "", ...otherProps} = this.props;

        return (
            <div className={"bg-light " + className} style={style} {...otherProps}>
                <h4 className="pt-2 px-2">Team Randomiser</h4>
                <hr/>
                <TeamRandomiser className="p-2"/>
            </div>
        );
    }
}

TeamRandomiserBlock.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export default TeamRandomiserBlock;