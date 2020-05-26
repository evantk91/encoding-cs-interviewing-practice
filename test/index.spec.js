const assert = require('assert');
const { encode, binaryToDecimal } =  require("../index");

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