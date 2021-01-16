import "@babel/polyfill";
import { createServer } from "http";
import app from "./app";
import connectDatabase from "./database";
import { port } from './config';

(async () => {
    try {
        await connectDatabase();
    } catch (error) {
        console.log("Could not connect to database", { error });
        throw error;
    }

    const server = createServer(app.callback());

    server.listen(port, () => {
        return console.log(
            `SERVER ON: http://localhost:${process.env.PORT || 5001}`
        );
    });
})();