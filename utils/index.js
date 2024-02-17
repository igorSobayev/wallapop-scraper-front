

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

export default {
    formatDate
}