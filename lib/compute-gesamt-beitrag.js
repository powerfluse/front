export function computeGesamtBeitrag(amount, frequency) {
    if (frequency === 'Vierteljährlich') {
        return amount * 4
    }
    if (frequency === 'Halbjährlich') {
        return amount * 2
    } else {
        return amount
    }
}