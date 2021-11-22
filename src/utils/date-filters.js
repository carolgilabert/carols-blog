const { DateTime } = require("luxon");

module.exports = {
    isoDateFilter: (value) => {
        return new Date(value).toISOString();
    },
    readableDateFilter: (dateStr, formatStr = "dd LLL yyyy") => {
        const dateObj = new Date(dateStr);
        return DateTime.fromISO(dateObj.toISOString()).toFormat(formatStr);
    },
    readableDateAndTimeFilter: (dateStr, formatStr = "dd LLL yyyy 'at' hh:mma") => {
        return DateTime.fromISO(dateStr).toFormat(formatStr);
    }
}