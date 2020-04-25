/** @param {string[]}members
 * @param {number}amountOfTeams
 */
export default function randomiseMembers(members, amountOfTeams) {

    /**
     * @param {number} max
     * @returns {number}
     */
    const randomInt = (max) => {
        return Math.round(Math.random() * max);
    }

    /**
     *
     * @param {*[]} array
     * @returns {*[]}
     */
    const randomiseArray = (array) => {
        // Clone array
        let returnArray = [...array];

        /**
         *
         * @param {*[]} swapArray
         * @returns {function(number, number)}
         */
        const createSwap = (swapArray) => (index1, index2) => {
            const temp = swapArray[index1];
            swapArray[index1] = swapArray[index2];
            swapArray[index2] = temp;
        }

        const swap = createSwap(returnArray);

        // Swap each item in the array with a random other item
        array.forEach((item, index) => {
            const swapIndex = randomInt(array.length - 1);
            swap(index, swapIndex);
        });
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
            if (i === membersRandomOrder.length) {
                break;
            }

            const randomMember = membersRandomOrder[i];
            team.push(randomMember);
            i++;
        }
    }

    return teams;
}