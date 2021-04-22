const dotenv = require('dotenv') ;

//config dotenv
dotenv.config({path : './config/config.env'});
//JWT Secret KE
console.log( `JWT Secret key : ${process.env.JWT_SECRET_KEY}`);
//UAT Server URL

console.log(`UAT Server URL : ${process.env.UAT_SERVER_UR}`);