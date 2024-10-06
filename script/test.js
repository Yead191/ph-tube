
// const time = getTimeString(5400)
function getTimeString(time) {
    // get hour and rest sec
    const hour = parseInt(time / 3600)
    let remainingSecond = parseInt(time % 3600)
    const min = parseInt(remainingSecond / 60)
    remainingSecond = remainingSecond % 60

    return `${hour} hour ${min} min ago`


}

console.log(getTimeString(545));
