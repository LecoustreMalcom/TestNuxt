import EnigmeModel from "~/server/models/Enigme";

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event);
        const newEnigme = new EnigmeModel({
            title: body.title
        });

        const result = await newEnigme.save();
        return result
    } catch(err){
        console.error(err);
    }
});