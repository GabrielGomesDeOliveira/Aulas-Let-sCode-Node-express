// Mongoose ira ajudar a criar a modelagem
const mongoose = require("mongoose");

// criando o schema de vehicle
// schema: vai ser a tabela do banco de dados
const vehicleSchema = mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    licensePlate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    // Gravar a data que foi criado
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("Vehicle", vehicleSchema);