import UtilisateurModel from "~/server/models/Utilisateur";

export default defineEventHandler(async () =>{
    try{
        const result = await UtilisateurModel.find()
        return result
    } catch(err){
        console.error(err)
    }
});