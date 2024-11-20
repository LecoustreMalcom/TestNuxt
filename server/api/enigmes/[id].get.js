import EnigmeModel from "~/server/models/Enigme";

export default defineEventHandler(async (event) =>{
    try{
        const { id } = event.context.params
        const user = await EnigmeModel.findById(id);
        return user
    } catch(err){
        console.error(err)
    }
});