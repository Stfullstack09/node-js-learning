
const data = [
    {
        name: 'ts'
    },{
        name: 'ls'
    }
]

class AppService {
    WelcomeHome(search) {

        return new Promise(async function(resolve, reject) {
            try {

                // logic  
                const dataRes = await data.find(item => item.name === search)
                
               return  resolve({
                    errCode: 0,
                    msg:"Services Ok",
                    data: dataRes
                })
                
            } catch (error) {
                reject(error)
            }
        })
        
    }
}

module.exports = new AppService()