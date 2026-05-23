class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let car = [];
        for(let i =0; i < position.length; i++){
            car[i] = [position[i], speed[i]];
        }

        car.sort((a,b) => b[0] - a[0]);

        let fleetCount = 0;
        let leaderTime = -Infinity;

        for(const [pos, spd] of car){
            let time  = (target - pos) / spd;
            if(time > leaderTime){
                fleetCount++
                leaderTime = time;
            }
        }
        return fleetCount;
    }
}
