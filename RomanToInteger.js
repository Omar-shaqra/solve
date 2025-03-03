

var romanToInt = function(s) {
    const Roman = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    
        let sum = 0;
        for(let i = 0; i < s.length; i++) {
            if(i+1 < s.length && Roman[s[i]] < Roman[s[i+1]]) {
                sum -= Roman[s[i]];
            } else {
                sum += Roman[s[i]];
            }
        }
    return sum;
};

console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))