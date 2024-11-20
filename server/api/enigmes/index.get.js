import EnigmeModel from "~/server/models/Enigme";

export default defineEventHandler(async () =>{
    try{
        const result = await EnigmeModel.find()
        return result
    } catch(err){
        console.error(err)
    }
})