export function isQuick(t1: string, t2: string) {
    return Number.parseFloat(t2) - Number.parseFloat(t1) < 3.0;
};
