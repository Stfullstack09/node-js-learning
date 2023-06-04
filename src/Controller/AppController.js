const AppServices = require("../Services/AppServices")

class AppController {

    async WelcomeHome(req, res) {

        try {

            const data = await AppServices.WelcomeHome(req.query.search)

            res.status(200).json(data)
            
        } catch (error) {
            console.log(error)
        }

    }


    async TestEjs(req, res) {

        const data = [
            {
                name: 'ts'
            },
            {
                name: 'ls'
            }
        ]
        
        res.render('index.ejs', {
            data: data
        })
    }
    
}

/* Tang hieu nang, Tang trai nghiem */

/* 
    class tuong tu Obj dac biet => Obj dac biet obj => Obj.key 
*/

module.exports = new AppController /* Dut */