/**
 * Abstracts some basic Sequelize operations.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */

export default class SequelizeRepository {

    /**
  * Creates a database transaction.
  */
    static async createTransaction(database: any) {
        return database.sequelize.transaction();
    }

    /**
   * Returns the transaction if it exists on the options.
   *
   * @param {object} options
   */
    static getTransaction(options: any) {
        return (options && options.transaction) || undefined;
    }
    /**
   * Commits a database transaction.
   */
    static async commitTransaction(transaction: any) {
        return transaction.commit();
    }

    /**
     * Rolls back a database transaction.
     */
    static async rollbackTransaction(transaction: any) {
        return transaction.rollback();
    }


}