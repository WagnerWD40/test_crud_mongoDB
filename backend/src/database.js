import mongoose from 'mongoose';

class Database {
    constructor() {
        this.init();
    }

    init() {
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
        this.connection = mongoose.connection;

        this.connection.on('error', console.error.bind(console, 'connection error:'));
        this.connection.once('open', () => {
            console.log('Database connection successfull');
        });
    }
}

export default new Database();