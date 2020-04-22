import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import randomiseTeams from "./randomise-teams";

class TeamRandomiser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            members: [],
            errors: [],
            amountOfTeams: 3
        }
    }

    /**
     *
     * @param {Event}event
     */
    onFormSubmit(event) {
        event.preventDefault()
        const {amountOfTeams} = this.state;
        const members = this.textArea.value.split(",").map(item => item.trim());

        if (!this.textArea.value) {
            this.setState({
                members: [],
                teams: [],
                errors: ["Must enter team members"]
            })
            return;
        }

        const teams = randomiseTeams(members, amountOfTeams);

        this.setState({teams: teams, members: members})
    }

    /**
     *
     * @param {InputEvent<HTMLInputElement>} event
     */
    onTeamCountChange(event) {
        event.preventDefault()

        if (event.target.value) {
            this.setState({amountOfTeams: Number(event.target.value)})
        }
    }

    render() {
        const {teams = [], errors: previousErrors = []} = this.state;
        const {width = 400} = this.props;

        // Consume errors
        const errors = [];
        while (previousErrors.length > 0) {
            errors.push(previousErrors.pop())
        }

        const TeamRenderer = ({teams, ...otherProps}) => {
            const TeamItem = ({members, number}) => <div>Team {number}: {members.join(", ")}</div>;
            const teamsElement = teams.filter(team => team.length > 0).map((team, index) => (
                <TeamItem key={index} members={team.sort()} number={index + 1}/>))

            return <div {...otherProps}>
                {teamsElement}
            </div>
        }

        /**
         *
         * @param {string[]}errors
         * @param {string} className
         * @param {any} otherProps
         * @constructor
         */
        const ErrorRenderer = ({errors, className = "", ...otherProps}) => {
            return <span className={"text-danger " + className} {...otherProps}>{errors.join(", ")}</span>
        }

        return (
            <div className={"p-2 bg-light " + this.props.className || ""} style={{width: width, height: "auto"}}>
                <h4 className="App-header">Team Randomiser</h4>
                <hr/>

                <form className="p-1" onSubmit={(event) => this.onFormSubmit(event)}>
                    <div className="d-flex justify-content-between mb-2">
                        <h6 className="mb-0 align-self-center">Number of teams</h6>
                        <input
                            onInput={event => this.onTeamCountChange(event)}
                            className="w-25 form-control"
                            min={1}
                            type="number"
                            defaultValue={3}
                        />
                    </div>

                    <h6>Team members:</h6>

                    <textarea
                        ref={(element) => (this.textArea = element)}
                        className="form-control d-block mb-2"
                        placeholder="John Smith, Jane Smith"
                        style={{resize: "none"}}
                    />
                    <input type="submit" className="btn btn-success" value="Randomise!"/>
                    <ErrorRenderer errors={errors} className="my-2 d-block"/>
                    <TeamRenderer teams={teams} className="pt-2"/>
                </form>
            </div>
        );
    }
}

export default TeamRandomiser;
