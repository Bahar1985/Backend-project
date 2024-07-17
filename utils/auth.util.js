const { genSaltSync, hashSync, compare, compareSync } = require("bcrypt");

const jwt=require("jsonwebtoken")

const secret="6f9b9af3cd6e8a73c2cdced37fe9f59226e27d"



function hashPassword(password){
    const salt=genSaltSync(10);
    return hashSync(password,salt)
}


function comparePassword(password,hashed) {
 
  return compareSync(password,hashed);
}

function signToken(payload){
    return jwt.sign(payload,secret)
}
function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports={
    hashPassword,comparePassword,verifyToken,signToken
}