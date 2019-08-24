import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Friend = new Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    expertise: {
        type: String
    },
    salary: {
        type: String
    },
    birthday: {
        type: String,
    }
});

export default mongoose.model('Friend', Friend);