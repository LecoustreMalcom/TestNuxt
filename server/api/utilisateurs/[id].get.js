import UtilisateurModel from "~/server/models/Utilisateur"

export default defineEventHandler(async (event) =>{
    try{
        const { id } = event.context.params
        const user = await UtilisateurModel.findById(id);
        return user
    } catch(err){
        console.error(err)
    }
});