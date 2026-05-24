class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    // carFleet(target, position, speed) {
    //     let car = [];
    //     for(let i =0; i < position.length; i++){
    //         car[i] = [position[i], speed[i]];
    //     }

    //     car.sort((a,b) => b[0] - a[0]);

    //     let fleetCount = 0;
    //     let leaderTime = -Infinity;

    //     for(const [pos, spd] of car){
    //         let time  = (target - pos) / spd;
    //         if(time > leaderTime){
    //             fleetCount++
    //             leaderTime = time;
    //         }
    //     }
    //     return fleetCount;
    // }

    carFleet(target, position, speed){
        const cars = [];
        for(let i = 0; i < position.length; i++){
            cars[i] = [position[i], speed[i]]
        }

        cars.sort((a,b) => b[0] - a[0])

         const stack = []; // stores arrival times of fleet leaders

    for (const [pos, spd] of cars) {
        const time = (target - pos) / spd;

        // Only push if this car takes longer than the car ahead of it
        // (meaning it forms a new fleet, can never catch up)
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
        // If time <= stack top, this car catches up and joins that fleet, so we skip it
    }
        return stack.length
    }
}
