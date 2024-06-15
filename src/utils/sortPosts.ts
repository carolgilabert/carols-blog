export const descendingByDateWithFallback = (a, b) => {
    if (a.data.date.getTime() === b.data.date.getTime()) {
        // compare by title if dates are the same
        return -(a.data.title.localeCompare(b.data.title));
    }

    return b.data.date.getTime() - a.data.date.getTime();
}