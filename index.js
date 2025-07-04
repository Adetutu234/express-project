const express = require("express")
const path = require("path")
const app = express()

const workingHours = require("./middleware/workingHours")
const userRoutes = require("./routes/userRoutes")

const PORT = 3000

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// // Custom middleware to allow only during working hours
app.use(workingHours);

// Routes
app.use("/", userRoutes)

// Start server
app.listen(PORT , ()=>{
    console.log(`Server is running on http//:localhost: ${PORT}`);
    
})