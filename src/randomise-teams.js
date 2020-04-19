/** @param {string[]}members
 * @param {number}amountOfTeams
 */
export default function randomiseMembers(members, amountOfTeams) {
    const randomiseArray = (array) => {
        let returnArray = [];
        for (const member of array) {
            // 50% chance
            if (Math.random() > .5) {
                returnArray.push(member)
            } else {
                returnArray.unshift(member)
            }
        }
        return returnArray;
    }

    // Create teams
    const teams = [];
    for (let i = 0; i < amountOfTeams; i++) {
        teams[i] = []
    }

    // Shuffle members
    const membersRandomOrder = randomiseArray(members);

    // Round-robin random member to team
    for (let i = 0; i < membersRandomOrder.length;) {
        for (const team of teams) {
            if (i === membersRandomOrder.length) { break; }

            const randomMember = membersRandomOrder[i];
            team.push(randomMember);
            i++;
        }
    }

    return teams;
}