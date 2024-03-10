
function hoursDiff (dateToCompare = new Date()) {
    const now = new Date()
    const otherDate = new Date(dateToCompare)

    const difTime = now.getTime() - otherDate.getTime()

    const hoursSinceLastRun = difTime / (1000 * 60 * 60)

    return hoursSinceLastRun
}



export default {
    hoursDiff
}