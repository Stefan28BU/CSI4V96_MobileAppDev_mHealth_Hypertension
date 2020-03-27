export const PET_STATUS = {
    neutral: 'neutral',
    happy: 'happy',
    eating: 'eating',
    playing: 'playing',
    sleeping: 'sleeping',
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
        this.status = PET_STATUS.neutral;
        this.newStatus = PET_STATUS.neutral;
    }

    reset() {
        if (this.fitness > PET_CONSTANTS.MAX_FITNESS) {
            this.fitness = PET_CONSTANTS.MAX_FITNESS;
        }

        if (this.fitness < PET_CONSTANTS.DEAD_FITNESS) {
            this.fitness = PET_CONSTANTS.DEAD_FITNESS;
        }

        if (this.fullness > PET_CONSTANTS.MAX_FULL) {
            this.fullness = PET_CONSTANTS.MAX_FULL;
        }
        if (this.fullness < PET_CONSTANTS.DEAD_FULL) {
            this.fullness = PET_CONSTANTS.DEAD_FULL;
        }

        if (this.cleanliness > PET_CONSTANTS.MAX_CLEAN) {
            this.cleanliness = PET_CONSTANTS.MAX_CLEAN;
        }

        if (this.cleanliness < PET_CONSTANTS.DEAD_CLEAN) {
            this.cleanliness = PET_CONSTANTS.DEAD_CLEAN;
        }
    }

    isAlive() {
        return this.isAlive;
    }

    revive() {
        this.fullness = 50;
        this.fitness = 50;
        this.cleanliness = 50;
    }

    kill_ThisIsOnlyForTexting() {
        this.fullness = PET_STATUS.DEAD_FULL;
        this.fitness = PET_STATUS.DEAD_FITNESS;
        this.cleanliness = PET_STATUS.DEAD_CLEAN;
        this.isAlive = false;
    }

    getCurrentStatus() {
        if (this.fullness <= PET_CONSTANTS.DEAD_FULL &&
            this.cleanliness <= PET_CONSTANTS.DEAD_CLEAN &&
            this.fitness <= PET_CONSTANTS.DEAD_FITNESS) {
            this.isAlive = false;

            return PET_STATUS.dead;
        } else {
            this.isAlive = true;

            if (this.fullness >= 75 && this.fitness >= 75 && this.cleanliness >= 75) {

                return PET_STATUS.happy;
            } else if (this.fullness < 50 && this.fitness < 50 && this.cleanliness < 50) {
                return PET_STATUS.sad;
            } else if (this.cleanliness <= 35) {
                return PET_STATUS.sick;
            } 
        }

        return PET_STATUS.neutral;
    }

    updatePetStatus() {
        if (this.fullness <= PET_CONSTANTS.DEAD_FULL &&
            this.cleanliness <= PET_CONSTANTS.DEAD_CLEAN &&
            this.fitness <= PET_CONSTANTS.DEAD_FITNESS) {
            this.isAlive = false;

            this.newStatus = PET_STATUS.dead;
        } else {
            this.isAlive = true;

            if (this.fullness >= 75 && this.fitness >= 75 && this.cleanliness >= 75) {
                this.newStatus = PET_STATUS.happy;
            } else if (this.fullness < 50 && this.fitness < 50 && this.cleanliness < 50) {
                this.newStatus = PET_STATUS.sad;
            } else if (this.cleanliness <= 35) {
                this.newStatus = PET_STATUS.sick;
            } else {
                this.newStatus = PET_STATUS.neutral;
            }
        }

        console.log("should be " + this.newStatus)
    }

    dayPass() {
        if (this.isAlive) {
            this.fullness -= 3;
            this.fitness -= 1;
            this.cleanliness -= 2;
        } else {

        }

        this.reset()
    };

    play() {
        if (this.isAlive) {
            this.fitness += 20;
            this.fullness -= 5;
            this.cleanliness -= 5;

            this.status = PET_STATUS.playing

        } else {

        }

        this.reset()

    };

    feed() {
        if (this.isAlive) {
            this.fullness += 20;
            this.cleanliness -= 5;
            this.fitness -= 5;

            this.status = PET_STATUS.eating;

        } else {

        }

        this.reset()


    };

    clean() {
        if (this.isAlive) {
            this.cleanliness += 20;

            this.status = PET_STATUS.talking;


        } else {


        }

        this.reset()

    };
}

export default Pet;
