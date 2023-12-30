import { ApolloServer } from "npm:@apollo/server@^4.9.5";
import { startStandaloneServer } from "npm:@apollo/server@^4.9.5/standalone";
import { Mutation } from "./resolvers/mutation.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "npm:mongoose@8.0.3";
import { Query } from "./resolvers/query.ts";

    const MONGO_URL = "mongodb+srv://alananconaortiz:12345@practicaoptional.8u5fio9.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(MONGO_URL);
    console.info("MongoDB connected");


    const server = new ApolloServer({
        typeDefs,
        resolvers: {
            Mutation,
            Query,
        },
    });

    const { url } = await startStandaloneServer(server);
    console.log(🚀 Server ready at ${url});