export const getDateTimeString = (date: Date | string): string => {
    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    }).format(new Date(date));
}

export const getDateString = (date: Date | string): string => {
    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}