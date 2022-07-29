

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.match(/.{1,10}/g);

    for(var i = 0; i < expr.length; i++)
    {
        expr[i] = expr[i].replace (/11/g, '-');
        expr[i] = expr[i].replace(/10/g, '.');
        expr[i] = expr[i].replace('**********', ' ');
        expr[i] = expr[i].replace(/0/g, '');
    }

    expr.forEach(function(item, index, array) {
        array[index] = MORSE_TABLE[item];
      });
    expr = String(expr).replace(/,,/g, ' ') 
    expr = expr.replace(/,/g, '') 
    return expr
}

module.exports = {
    decode
}

