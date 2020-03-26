const PET_STATUS = {
    normal: 'normalState',
    happy: 'happy',
    eating: 'eating',
    playing: 'play',
    sleeping: 'sleep',
    talking: 'talking',
    sick: 'sick',
    sad: 'sad',
    dead: 'dead',
}

const PET_CONSTANTS = {
    MAX_FULL: 100,
    MAX_FITNESS: 100,
    MAX_CLEAN: 100,
    DEAD_FULL: 0,
    DEAD_FITNESS: 0,
    DEAD_CLEAN: 0,

}

class Pet {
    constructor(name) {
        this.name = name;
        this.fullness = 50;
        this.fitness = 50;
        this.cleanliness = 50;
        this.isAlive = true;

        console.log("wow")
    }

    updatePetStatus() {
        if (this.fullness <= PET_CONSTANTS.DEAD_FULL &&
            this.cleanliness <= PET_CONSTANTS.DEAD_CLEAN &&
            this.fitness <= PET_CONSTANTS.DEAD_FITNESS) {
            this.isAlive = false;
    
            return PET_STATUS.dead;
        } else {
            this.isAlive = true;
    
            if (this.fullness >= 80 && this.fitness >= 80 && this.cleanliness >= 80) {
                return PET_STATUS.happy;
            }
        }
        
        return PET_STATUS.normal;
    }

    dayPass() {
        if (!this.isAlive) {
            throw new Error('Sorry, your pet has died!');
        } else {
            this.fullness -= 10;
            this.fitness -= 10;
            this.cleanliness -= 5;
        }
    };

    play() {
        if (!this.isAlive) {
            throw new Error('Sorry, your pet has died!');
        } else {
            this.fitness += 20;
            if (this.fitness > PET_CONSTANTS.MAX_FITNESS) {
                this.fitness = PET_CONSTANTS.MAX_FITNESS;
            }
        }
    };

    feed() {
        if (!this.isAlive) {
            throw new Error('Sorry, your pet has died!');
        } else {
            this.fullness += 20;
            this.cleanliness -= 5;
            this.fitness -= 5;
            if (this.fullness > PET_CONSTANTS.MAX_FULL) {
                this.fullness = PET_CONSTANTS.MAX_FULL;
            }
        }
    
    };

    clean() {
        if (!this.isAlive) {
            throw new Error('Sorry, your pet has died!');
        } else {
            this.cleanliness += 20;
            if (this.cleanliness > PET_CONSTANTS.MAX_CLEAN) {
                this.cleanliness = PET_CONSTANTS.MAX_CLEAN;
            }
        }
    };
}

export default Pet;
