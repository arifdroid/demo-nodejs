import SequelizeRepository from "./sequelizeRepositories";


import lodash from 'lodash';

export default class TasksTest_Repositories {

    static async create_repo(data : any, options: any){

        const transaction = SequelizeRepository.getTransaction(options);



        const record = await options.database.tasks_test.create({
            ...lodash.pick(data,[
                'tasks_name'
            ])
        },{
            transaction
        })
        
        return record;
    }


    static async getAll_repo(options:any){

        const transaction = SequelizeRepository.getTransaction(options);

        const record = options.database.tasks_test.findAll();

        return record

    }
}