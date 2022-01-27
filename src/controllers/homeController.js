import db from '../models/index';

let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        console.log("-----------------------------")
        console.log(data)
        console.log("-----------------------------")
    }catch(e){
        console.log(e);
    }
    return res.render("homepage.ejs", {
        data: JSON.stringify(data)
    })
}

module.exports = {
    getHomePage : getHomePage,
}