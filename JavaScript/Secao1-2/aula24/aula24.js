let varA = 'A';
let varB = 'B';
let varC = 'C';
let varV = varA;
console.log(varA, varB, varC);

varA = varB;
varB = varC;
varC = varV;


console.log(varA, varB, varC);
                    // 1      2     3
[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC);

