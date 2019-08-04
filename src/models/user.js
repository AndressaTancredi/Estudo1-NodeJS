const mongoose = require('../database');
mongoose.set('useCreateIndex', true);
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false, //Quadno buscar varios usuarios essa info de senhas não venha no array
    },
    createdAt:{ //Vai anotar a data o registro que foi criado
        type: Date,
        default: Date.now,
    },
});

//Esse pre é uma função do mongoose que diz algo acontece antes de salvar
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
    //quando criar um usuário esse hash vai ser gerado automaticamente
})

const User = mongoose.model('User', UserSchema);

module.exports = User;