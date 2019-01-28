let express = require('express');

let router =express.Router();

let name ='vaibhav'
let ar=[`Bonjour Je m'appelle,  ${name} ` , `Hallo Ich heisse,  ${name} `,`Hola, mi nombre es,  ${name}`,`Salve. Nomen mihi est,  ${name} `,`Hyālō āmāra nāma hacchē,   ${name}`,`नमस्ते मेरा नाम है,  ${name}`,`hello my name is,  ${name}`]
let pos = Math.floor(Math.random()*ar.length);
console.log(pos)
router.get('/',(req,res)=>{
    res.render('index',{'person':ar[pos]});
})




module.exports = router