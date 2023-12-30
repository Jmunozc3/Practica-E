import { ApolloServer } from "npm:@apollo/server@^4.9.5";
import { startStandaloneServer } from "npm:@apollo/server@^4.9.5/standalone";

import mongoose from "npm:mongoose@8.0.3";


    const MONGO_URL = "mongodb+srv://alananconaortiz:12345@practicaoptional.8u5fio9.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(MONGO_URL);
    console.info("MongoDB connected");


    
    console.log(`Server ready at ${url}`);
