export const formatDate = (selectedDate) => {
    let finaldate = {
        date: '',
        time: ''
    };
    if (selectedDate.getDate() === new Date().getDate()) {
        finaldate.date = 'Today'
    }
    else if (selectedDate.getDate() === new Date().getDate() + 1) {
        finaldate.date = 'Tomorrow'
    } else {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        let dayName = days[selectedDate.getDay()];
        let date = selectedDate.getDate().toString();
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let mon = months[selectedDate.getMonth()];

        finaldate.date = dayName + ' ' + date + '/' + mon;
    }

    let hours = selectedDate.getHours().toString();
    let min = selectedDate.getMinutes().toString();
    finaldate.time = hours + ':' + min;

    return finaldate.date + ' ' + finaldate.time;
}