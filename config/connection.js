const { MongoClient } = require("mongodb");
// const bcrypt = require("bcrypt");     // <-- ADD THIS
require('dotenv').config();

const dbURI = process.env.ATLASDB_URL;
let client = null;
if (dbURI) {
    client = new MongoClient(dbURI);
} else {
    console.warn('Warning: ATLASDB_URL is not set. Database connection will be skipped.');
}

let db;

// ------------------------------
// Create default admin function
// ------------------------------
async function createDefaultAdmin(db) {
    const adminCollection = db.collection("admin");

    const existingAdmin = await adminCollection.findOne({ email: "admin@gmail.com" });

    if (!existingAdmin) {
       // const hashedPassword = await bcrypt.hash("admin123", 10);

        await adminCollection.insertOne({
            fullName: "Default Admin",
            email: "admin@example.com",
            password: "admin123",
            mobile: "0000000000",
            userRole: "admin",
            address: "System Generated",
            otp: ""
        });

        console.log("✅ Default admin user created.");
    } else {
        console.log("ℹ️ Default admin already exists.");
    }
}

// ------------------------------
// DB connection
// ------------------------------
async function connectToDatabase() {
    if (db) return db;

    if (!client) {
        console.warn('connectToDatabase called but no MongoDB client configured.');
        return null;
    }

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        db = client.db("HomeAssist");

        // CREATE DEFAULT ADMIN HERE 👇
      //  await createDefaultAdmin(db);

        return db;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw new Error("Database connection failed");
    }
}

module.exports = connectToDatabase;
