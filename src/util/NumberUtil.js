export function kFormatter(num) {
    if (Math.abs(num) > 999999999) {
        return Math.sign(num) * ((Math.abs(num) / Math.pow(10, 9)).toFixed(1)) + 'B';
    } else if (Math.abs(num) > 999999) {
        return Math.sign(num) * ((Math.abs(num) / Math.pow(10, 6)).toFixed(1)) + 'M'
    } else if (Math.abs(num) > 999) {
        return Math.sign(num)*((Math.abs(num) / Math.pow(10, 3)).toFixed(1)) + 'K';
    } else {
        return Math.sign(num)*Math.abs(num);
    }
}