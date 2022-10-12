const { devloper, team } = require('../model/model');
const { sucess, errorHendeler } = require('../helper/responsHeandeler')
const bcrypt = require('bcryptjs')

module.exports.CreateDevloper = async function (req, res) {
    try {
        console.log(req.file);
        console.log(req.body);
        let name = req.body.name
        let email = req.body.email
        // let gen = bcrypt.genSaltSync(10)  :  hashsync alter native
        let password = bcrypt.hashSync(req.body.password, 10)
        if (req.file) {
            imgPath = req.file.path;
        }
        else {
            imgPath = null;
        }
        // let imgPath = req.body.imgPath;
        let team_id = req.body.team_id;
        let dob = req.body.dob;
        let isActive = req.body.isActive;


        let savePlayer = await devloper.build({
            email, password, name, imgPath, team_id, dob, isActive
        })
        await savePlayer.save()
        // let data = {
        //     name: name,
        //     email: email,
        //     password: password
        // }
        // let authtoken = await jwt.sign(data, "njkbkbvsjd")
        // res.json({ authtoken })'
        res.status(200).json(sucess(savePlayer, "data is add"))
    } catch (error) {
        res.json(errorHendeler(error.message))
    }
}
module.exports.CreateTeam = async function (req, res) {
    console.log(req.body);
    try {
        let name = req.body.name
        let savePlayer = await team.build({
            name
        })
        await savePlayer.save()

        res.status(200).json(sucess("data", "DATA ADD"))
    } catch (error) {
        res.json(errorHendeler(error.message))
    }
}
module.exports.ViewTeam = async function (req, res) {
    try {
        let allData = await team.findAll({
            include: [
                {
                    model: devloper,
                },
            ]
        });
        res.status(200).json(sucess(allData, "data"))
    } catch (error) {
        res.json(errorHendeler(error.message))
    }
}
module.exports.ViewDevloper = async function (req, res) {
    try {
        let allData = await devloper.findAll({
            include: [
                {
                    model: team,
                },
            ]
        });
        res.status(200).json(sucess(allData, "data"))
    } catch (error) {
        res.json(errorHendeler(error.message))
    }
}



Create New Database : Table(2) : Add (Multer , jwt , bcrypt , table join)
R&D Soketio