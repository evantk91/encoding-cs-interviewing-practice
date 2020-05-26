module.exports = {
    encode,
    binaryToDecimal,
}

function encode() {
    return 16777217
}

function binaryToDecimal(binary) {
    return binary.reverse().reduce((sum, bit, index) => {
        return (bit)
            ? sum + Math.pow(2, index)
            : sum
        return sum;
    }, 0)
}