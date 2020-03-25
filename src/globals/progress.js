export let learningProgress = 0;
export let compP1 = false;
export let compP2 = false;
export let compP3 = false;
export let compP4 = false;

export function incrementProgress() {
    learningProgress = learningProgress + 25;
    console.log("Progress: " + learningProgress)
}

export function getProgress() {
    console.log("Get Progress: " + learningProgress)
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