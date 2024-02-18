

function formatDate (time, returnYear = false) {
    const date = new Date(time)

    const month = date.toLocaleString('default', { month: '2-digit' })
    const day = date.toLocaleString('default', { day: '2-digit' })

    const hour = date.toLocaleString('default', { hour: '2-digit' })
    const minutes = date.toLocaleString('default', { minute: '2-digit' })


    if (returnYear) {
        const year = date.toLocaleString('default', { year: '2-digit' })
        return `${hour}:${minutes} ${day}/${month}/${year}`
    }

    return `${hour}:${minutes} ${day}/${month}`
}

function hoursDiff (dateToCompare = new Date()) {
    const now = new Date()
    const otherDate = new Date(dateToCompare)

    const difTime = now.getTime() - otherDate.getTime()

    const hoursSinceLastRun = difTime / (1000 * 60 * 60)

    return hoursSinceLastRun
}



export default {
    formatDate,
    hoursDiff
}