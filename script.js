function validatePhoneNumber(str) {
    let redExp=/^[(][0-9]{2}[)]-[(][0][0-9]{9}[)]$/;
    return redExp.test(str);
}
let str1="(84)-(0978489648)";
console.log(validatePhoneNumber(str1));
let str2=" (a8)-(22222222)";
console.log(validatePhoneNumber(str2));