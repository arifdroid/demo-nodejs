import { any } from "sequelize/types/lib/operators";

const db = require('../models');


db.sequelize.sync({force:true}).then(()=>{

}).catch((e:any)=>{
    
})