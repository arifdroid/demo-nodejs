
import yenv from 'yenv';
import api from "./api";

const env = yenv('env.yaml', { env: 'development' });


api.listen(env.PORT,()=>{
    console.log(`\n\nlistening on : ${env.PORT}`)
});


