const members=['Q','A','L']

function getWeekNumber() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    // 计算一年的第一天是星期几，注意 getDay() 返回值 0 代表周日，1 - 6 代表周一到周六
    const firstDayOfYear = startOfYear.getDay();
    // 计算一年的第一天到当前日期的天数
    const diffInTime = now - startOfYear;
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    // 计算当前周数
    return Math.ceil((diffInDays + firstDayOfYear) / 7);
}


const currentWeekNumber = getWeekNumber();

document.querySelector("#id_host").innerHTML=members[currentWeekNumber%members.length];