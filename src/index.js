module.exports = function solveEquation(equation) {

    const elements = equation.split(' ');
    
    const a = +elements[0];
    const b = +(elements[3] + elements[4]);
    const c = +(elements[7] + elements[8]);
    const d = Math.pow(b,2) - 4*a*c;
    
  
        
    const diskr = Math.sqrt(d);
    const x1 = Math.round(-(b + diskr)/(2*a));
    const x2 = Math.round(-(b - diskr)/(2*a));
    return x1 > x2 ? [x2, x1] : [x1, x2];
    
    
    
}
