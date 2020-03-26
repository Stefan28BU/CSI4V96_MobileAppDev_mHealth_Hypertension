export let learningProgress = 0;
export let compP1 = false;
export let compP2 = false;
export let compP3 = false;
export let compP4 = false;

export function incrementProgress() {
    learningProgress = learningProgress + 25;
}

export function getProgress() {
    return learningProgress;
}

export function completePart1() {
    compP1 = true;
}
export function completePart2() {
    compP2 = true;
}
export function completePart3() {
    compP3 = true;
}
export function completePart4() {
    compP4 = true;
}

export let totalCredits = 0;
export let achieve1 = false;
export let achieve2 = false;
export let achieve3 = false;


export function addCredit(credit) {
    totalCredits = totalCredits + credit;
}

export function getTotalCredit() {
    return totalCredits;
}

export function completeAch1() {
    achieve1 = true;
}

export function completeAch2() {
    achieve2 = true;
}

export function completeAch3() {
    achieve3 = true;
}