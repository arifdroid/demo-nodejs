import SequelizeRepository from "../../database/repositories/sequelizeRepositories";
import TasksTest_Repositories from "../../database/repositories/TasksTest_Repositories";

export default class Tasks_Tests_Services {
    options;
    constructor(options: any) {
        this.options = options;
    }

    /**
     * @param {*} data
     */

    async create(data: any) {

        const transaction = await SequelizeRepository.createTransaction(this.options.database);

        try {

            const record = await TasksTest_Repositories.create_repo(data, {
                ...this.options, transaction
            })

            await SequelizeRepository.commitTransaction(
                transaction,
            );

            return record;

        } catch (error) {
            await SequelizeRepository.rollbackTransaction(
                transaction,
              );
            throw error;
        }

    }

    /**
     * @param {*} 
     */

    async getAll() {

        const transaction = await SequelizeRepository.createTransaction(this.options.database);

        try {

            const record = await TasksTest_Repositories.getAll_repo({ ...this.options, transaction });
            
            await SequelizeRepository.commitTransaction(
                transaction,
            );

            return record;

        } catch (error) {
            await SequelizeRepository.rollbackTransaction(
                transaction,
              );
            throw error;
        }

    }


}