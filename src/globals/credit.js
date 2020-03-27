credit.totalCredits = 0;
credit.achieve1 = false;
credit.achieve2 = false;
credit.achieve3 = false;


credit.addCredit = function addCredit(c) {
    credit.totalCredits = credit.totalCredits + c;
}

credit.getTotalCredit = function getTotalCredit() {
    return credit.totalCredits;
}

credit.completeAch1 = function completeAch1() {
    credit.achieve1 = true;
}

credit.completeAch2 = function completeAch2() {
    credit.achieve2 = true;
}

credit.completeAch3 = function completeAch3() {
    credit.achieve3 = true;
}

export default credit;