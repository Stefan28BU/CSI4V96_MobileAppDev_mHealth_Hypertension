
progress.learningProgress = 0;
progress.compP1 = false;
progress.compP2 = false;
progress.compP3 = false;
progress.compP4 = false;

progress.incrementProgress = function incrementProgress() {
    progress.learningProgress = progress.learningProgress + 25;
}

progress.getProgress = function getProgress() {
    return progress.learningProgress;
}

progress.completePart1 = function completePart1() {
    progress.compP1 = true;
}
progress.completePart2 = function completePart2() {
    progress.compP2 = true;
}
progress.completePart3 = function completePart3() {
    progress.compP3 = true;
}
progress.completePart4 = function completePart4() {
    progress.compP4 = true;
}

export default progress;