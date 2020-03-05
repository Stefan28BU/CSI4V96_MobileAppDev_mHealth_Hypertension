function Ding(name) {
    this.name = name;
    this.fullness = 50;
    this.fitness = 50;
    this.cleanliness = 50;
}

Ding.MAX_FULL = 100;
Ding.MAX_FITNESS = 100;
Ding.MAX_CLEAN = 100;
Ding.DEAD_FULL = 0;
Ding.DEAD_FITNESS = 0;
Ding.DEAD_CLEAN = 0;

Ding.prototype.dayPass = function dayPass() {
    if (!this.isAlive()) {
        throw new Error('Sorry, your pet has died!');
    } else {
        this.fullness -= 10;
        this.fitness -= 10;
        this.cleanliness -= 5;
    }
};

Ding.prototype.play = function play() {
    if (!this.isAlive()) {
        throw new Error('Sorry, your pet has died!');
    } else {
        this.fitness += 20;
        if (this.fitness > Ding.MAX_FITNESS) {
            this.fitness = Ding.MAX_FITNESS;
        }
    }
};

Ding.prototype.feed = function feed() {
    if (!this.isAlive()) {
        throw new Error('Sorry, your pet has died!');
    } else {
        this.fullness += 20;
        this.cleanliness -= 5;
        this.fitness -= 5;
        if (this.fullness > Ding.MAX_FULL) {
            this.fullness = Ding.MAX_FULL;
        }
    }
};

Ding.prototype.clean = function clean() {
    if (!this.isAlive()) {
        throw new Error('Sorry, your pet has died!');
    } else {
        this.cleanliness += 20;
        if(this.cleanliness > Ding.MAX_CLEAN) {
            this.cleanliness = Ding.MAX_CLEAN;
        }
    }
};

export default Ding;