export const formatDate = date => {

    let day = '' + date.getDate()
    let month = '' + (date.getMonth() + 1)
    let year = date.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [day, month, year].join('-')
}

export const formatTime = date => {

    let minutes = '' + date.getMinutes()
    let hours = '' + date.getHours()

    if (hours.length < 2) hours = '0' + hours
    if (minutes.length < 2) minutes = '0' + minutes

    return [hours, minutes].join(':')
}