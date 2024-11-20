import mongoose from 'mongoose';
import 'dotenv/config'; 

const connectDB = async () => {
    try {
        const mongoURI = process.env.URL_MONGO;

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (error) {
        console.error('Error al conectarse a la DB:', error);
        process.exit(1);
    }
};

export default connectDB; 
 