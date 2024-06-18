import express from "experess";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res)=>{
    try{
        res.render("index.ejs");
    }catch(error){
        console.error("Error rendering index.ejs:", error);
        res.status(500).send("An error occurred while rendering the page. Please try again later.");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});