export default function convertNumberToMoney(value) {

    if (value <= 0 || !value) {
        return 'R$ 0,00';
    }

    const valueToString = value.toFixed(0);
    const lastTwoDigits = valueToString.substring(valueToString.length - 2);
    const firstDigits = valueToString.substring(0, valueToString.length - 2);

    return `R$ ${firstDigits},${lastTwoDigits}`;
}