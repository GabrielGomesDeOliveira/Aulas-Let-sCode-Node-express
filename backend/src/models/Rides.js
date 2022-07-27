// Mongoose ira ajudar a criar a modelagem
const mongoose = require("mongoose");

const rideSchema = mongoose.Schema({
    // vinculando o usuário atravéz do objeto User
    // o vinculo deve ser um objeto, pois user e vehicle são objetos
    user: {
        type: Object,
        required: true
    },
    // vincular o veiculo atravéz do objeto vehicle
    vehicle: {
        type: Object,
        required: true
    },
    startPlace: {
        type: String,
        required: true
    },
    finishPlace: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: false
    },
    finishTime: {
        type: Date,
        required: false
    },
    // Gravar a data que foi criado
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// após criar todo o schema, modelamos ele no banco de dados(Enviamos ele para o banco)
mongoose.model("Ride", rideSchema);