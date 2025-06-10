import express from "express";
import {sql} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";
import dotenv from "dotenv";
import job from "./config/cron.js";

dotenv.config();
const app = express();

if(process.env.NODE_ENV !== "production") job.start();

//middleware
// app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;


async function initDB() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions
        (
            id
            SERIAL
            PRIMARY
            KEY,
            user_id
            VARCHAR
                  (
            255
                  ) NOT NULL,
            title VARCHAR
                  (
                      255
                  ) NOT NULL,
            amount DECIMAL
                  (
                      10,
                      2
                  )
            NOT NULL,
            category VARCHAR
                  (
                      255
                  ) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
            )`;
        console.log("Database initialized successfully");
    } catch (error) {
        console.log("Error initializing database:", error);
        process.exit(1);

    }
}





//////////////////////

app.use("/api/transactions",transactionsRoute);
// app.use("/api/products",transactionsRoute);
initDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
});
// app.listen(5001, () => {
//     console.log("Server running on port 5001");
//     console.log("http://localhost:5001");
// })
