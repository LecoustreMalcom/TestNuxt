import UserModel from "~/server/models/User";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username,email, motDePasse } = body;

    try {
        const newUser = new UserModel({ username,email, motDePasse });
        await newUser.save();
        return { success: true, message: "User registered successfully" };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Error registering user" };
    }
});