const assert = require('assert');
const { encode, binaryToDecimal, scrambleBits, characterToBinary, decimalToBinary, padBinary } =  require("../index");

describe.skip("Encoding examples", () => {
    it("returns the correct decimal value for 'A'", () => {
        const input = "A";
        const output = 16777217;

        const encoded = encode(input);

        assert.ok(encoded === output);
    })

    it("returns the correct decimal value for 'FRED'", () => {
        const input = "FRED";
        const output = 251792692;

        const encoded = encode(input);

        assert.ok(encoded === output);
    })

    it("returns the correct decimal value for ' :^)'", () => {
        const input = " :^)";
        const output = 79094888;

        const encoded = encode(input);

        assert.ok(encoded === output);
    })
})

describe("binaryToDecimal", () => {
    it("converts 0 from binary to decimal", () => {
        const binary = [0]
        const decimal = 0
        
        assert.ok(binaryToDecimal(binary) === decimal);
    });

    it("converts 1 from binary to decimal", () => {
        const binary = [1]
        const decimal = 1
        
        assert.ok(binaryToDecimal(binary) === decimal);
    });

    it("converts 2 from binary to decimal", () => {
        const binary = [1, 0]
        const decimal = 2
        
        assert.ok(binaryToDecimal(binary) === decimal);
    });

    it("converts 16777217 from binary to decimal", () => {
        const binary = [
           0, 0, 0, 0, 0, 0, 0, 1,
           0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 0,
           0, 0, 0, 0, 0, 0, 0, 1,       
        ]

        const decimal = 16777217

        const convertedBinary = binaryToDecimal(binary);

        assert.ok(convertedBinary === decimal);
    })
})

describe("scrambleBits", () => {
    it("should scramble the bits from example #1 correctly", () => {
        const inputBinary = [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 0, 0, 0, 0, 0, 1
        ]
    
        const outputBinary = [
            0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1
        ]
    
        const result = scrambleBits(inputBinary)
    
        assert.deepEqual(result, outputBinary)
    })
    
    it("should scramble the bits from example #2 correctly", () => {
        const inputBinary = [
            0, 1, 0, 0, 0, 1, 0, 0,
            0, 1, 0, 0, 0, 1, 0, 1,
            0, 1, 0, 1, 0, 0, 1, 0,
            0, 1, 0, 0, 0, 1, 1, 0
        ]
    
        const outputBinary = [
            0, 0, 0, 0, 1, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 1, 0,
            0, 0, 0, 0, 1, 1, 0, 1,
            0, 0, 1, 1, 0, 1, 0, 0
        ]
    
        const result = scrambleBits(inputBinary)
    
        assert.deepEqual(result, outputBinary)
    })  
})

describe("characterToBinary", () => {
    it("should encode 'A' in binary", () => {
        const input = 'A'
        const output = [0, 1, 0, 0, 0, 0, 0, 1]
        const result = characterToBinary(input)
        assert.deepEqual(result, output)
    })
})

describe("decimalToBinary", () => {
    it("should encode 0 to binary", () => {
        const input = 0
        const output = [0, 0, 0, 0, 0, 0, 0, 0]
        const result = decimalToBinary(input)
        assert.deepEqual(result, output)
    })

    it("should encode 1 to binary", () => {
        const input = 1
        const output = [0, 0, 0, 0, 0, 0, 0, 1]
        const result = decimalToBinary(input)
        assert.deepEqual(result, output)
    })
})

describe("padBinary", () => {
    it("should not pad a full binary number", () => {
        const input = [0, 0]
        const result = padBinary(input, 2)
        assert.deepEqual(result, input)
    })

    it("should pad a 1 position number to 2", () => {
        const input = [0]
        const output = [0, 0]
        const result = padBinary(input, 2)
        assert.deepEqual(result, output)
    })

    it("should pad a 1 position number to 8", () => {
        const input = [0]
        const output = [0, 0, 0, 0, 0, 0, 0, 0]
        const result = padBinary(input, 8)
        assert.deepEqual(result, output)
    })
})