import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    motDePasse: { type: String, required: true },
    progresEnigmes: [{
        titre: { type: String },
        niveauDifficulte: { type: Number},
        nombreEssais: { type: Number },
        Etat: { type: String}
    }],
    equipe: {
        nomEquipe: { type: String },
        membres: { type: [String], default: [] }
    },
    statistiques: {
        enigmesResolues: { type: Number },
        tempsMoyenResolution: { type: Number },
        Niveau: { type: Number, default: 1 }
    }
});

const UserModel = mongoose.model('User', userSchema, 'Utilisateur');

export default UserModel;