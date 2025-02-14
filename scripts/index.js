const members = ['Q', 'A', 'L']

function getWeekNumber() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const firstDayOfYear = startOfYear.getDay();
    const diffInTime = now - startOfYear;
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    return Math.ceil((diffInDays + firstDayOfYear) / 7);
}


const currentWeekNumber = getWeekNumber();

document.querySelector("#id_host").innerHTML = members[currentWeekNumber % members.length];