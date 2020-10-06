
export default (app :any)=>{
    app.post(`/tasks-test`, require('./task_create').default);
    app.get(`/tasks`, require('./task_list').default);
}