export function formatDebitCardNumber(cardNumber: (number | undefined)): (string | undefined) {
    const cardNumberStr = cardNumber?.toString();
    return cardNumberStr?.replace(/(\d{4})(?=\d)/g, '$1 ');
}