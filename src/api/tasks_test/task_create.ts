import Tasks_Tests_Services from "../../services/Tasks_Test/TasksTestServices";
import ApiResponseHandler from "../ApiResponseHandler"

export default async(req :any,res: any,next:any)=>{
    try {

       const payload = await new Tasks_Tests_Services(req).create(req.body.data); 

       await ApiResponseHandler.success(res,res,payload);
    } catch (error) {

        await ApiResponseHandler.error(req,res,error);
        
    }
}