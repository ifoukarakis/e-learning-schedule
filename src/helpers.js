import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const zip = (a, b) => {
    if ( !a || !a instanceof Array ){ return };
    if ( !b || !b instanceof Array ){ return };
    
    return a.map((k, i) => [k, b[i]])
};

export const transpose = (m) => {
    if (m === undefined || m.length == 0) {
        return [];
    }

    return m[0].map((x,i) => m.map(x => x[i]));
}

export const currentTimeslot = (now, timeslots) => {
    const adjust_to_time = (time) => dayjs(now.format("YYYY-MM-DD " ) + time, "YYYY-MM-DD HH:mm")
    
    return timeslots.find((timeslot) => {
        const start = adjust_to_time(timeslot[0])
        const end = adjust_to_time(timeslot[1])

        return now.isBetween(start, end)
    });    
}