// Declare Variables for Strength Levels
let heroStrength = 95;  
let villainStrength = 90; 

// Compare Strength Levels and Determine the Outcome
if (heroStrength > villainStrength + 10) {
    console.log(`Valiant triumphs decisively! Malakor is utterly outmatched!`);
} else if (villainStrength > heroStrength + 10) {
    console.log(`Malakor's power is overwhelming! Valiant is soundly defeated!`);
} else if (heroStrength === villainStrength) {
    console.log(`It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.`);
} else if (heroStrength > villainStrength) {
    console.log(`Valiant barely edges out! A close call victory against Malakor!`);
} else {
    console.log(`Malakor narrowly prevails! A hard-fought win over Valiant!`);
}
