module.exports = {
    encode,
    binaryToDecimal,
    scrambleBits,
    characterToBinary,
    decimalToBinary,
    padBinary
}

function encode() {
    return 16777217
}

function characterToBinary(char) {
    const ascii = char.charCodeAt(0)
    return decimalToBinary(ascii)
}

function decimalToBinary(decimal) {
   if (decimal === 0) {
       return [0, 0, 0, 0, 0, 0, 0, 0]
   }

   const binary = []
   while (decimal) {
       const remainder = decimal % 2
       binary.push(remainder)
       decimal = Math.floor(decimal / 2)
   }

   return padBinary(binary, 8)
}

function binaryToDecimal(binary) {
    return binary.reverse().reduce((sum, bit, index) => {
        return (bit)
            ? sum + Math.pow(2, index)
            : sum
        return sum;
    }, 0)
}

function scrambleBits(inputBinary) {
    const mapping = {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 1,
        9: 5,
        10: 9,
        11: 13,
        12: 17,
        13: 21,
        14: 25,
        15: 29,
        16: 2,
        17: 6,
        18: 10,
        19: 14,
        20: 18,
        21: 22,
        22: 26,
        23: 30,
        24: 3,
        25: 7,
        26: 11,
        27: 15,
        28: 19,
        29: 23,
        30: 27,
        31: 31, 
    }

    const outputBinary = []
    for (let i = 0; i < inputBinary.length; i++) {
        outputBinary[mapping[i]] = inputBinary[i]
    }

    return outputBinary
}

function padBinary(binary, size) {
    if(binary.length == size) {
        return binary
    }

    const length = binary.length
    while(length < size) {
        binary.unshift(0)
        size--    
    }

    return binary
}