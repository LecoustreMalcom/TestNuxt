import UtilisateurModel from "~/server/models/Utilisateur";

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event);
        const newUser = new UtilisateurModel({
            username: body.username,
            email: body.email,
            motDePasse: body.motDePasse
        });

        const result = await newUser.save();
        return result
    } catch(err){
        console.error(err);
    }
});