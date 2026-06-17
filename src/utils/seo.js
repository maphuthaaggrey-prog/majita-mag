const MONTHS = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

export const SITE_URL = 'https://www.majitamag.co.za';


export function toISODate(dateStr) {
    if (!dateStr) return undefined;
    const match = /^([A-Za-z]{3})\s+(\d{1,2})\s+(\d{4})$/.exec(dateStr.trim());
    if (match) {
        const [, mon, day, year] = match;
        const monthIndex = MONTHS[mon];
        if (monthIndex !== undefined) {
            const d = new Date(Number(year), monthIndex, Number(day));
            if (!isNaN(d)) return d.toISOString().split('T')[0];
        }
    }
    const fallback = new Date(dateStr);
    return isNaN(fallback) ? undefined : fallback.toISOString().split('T')[0];
}


export function getFullImageUrl(image) {
    if (!image) return `${SITE_URL}/frame.png`;
    if (image.startsWith('http')) return image;
    return `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;
}