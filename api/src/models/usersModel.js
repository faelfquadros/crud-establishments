const { Schema, model } = require('mongoose');

module.exports = () => {

    const usersSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        created_by: {
            type: String
        },
        updated_by: {
            type: String
        },
        active: {
            type: Boolean,
            required: true,
            default: true
        },
    }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

    return model('users', usersSchema);
};