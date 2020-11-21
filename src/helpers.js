import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);


export const zip = (a, b) => a.map((k, i) => [k, b[i]]);
export const transpose = m => m[0].map((x,i) => m.map(x => x[i]));

export const withinTimeslot = (day, timeslot) => {
    const now = dayjs()
    
    const adjust_to_time = (time) => dayjs(now.format("YYYY-MM-DD " ) + time, "YYYY-MM-DD HH:mm")
    
    const start = adjust_to_time(timeslot[0])
    const end = adjust_to_time(timeslot[1])

    return (now.day() === day) && now.isBetween(start, end)
}


export const currentTimeslot = (now, timeslots) => {
    const adjust_to_time = (time) => dayjs(now.format("YYYY-MM-DD " ) + time, "YYYY-MM-DD HH:mm")
    
    return timeslots.find((timeslot) => {
        const start = adjust_to_time(timeslot[0])
        const end = adjust_to_time(timeslot[1])

        return now.isBetween(start, end)
    });    
}