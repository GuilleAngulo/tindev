const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        //Parametros de la URL /
        const { devId } = req.params;
        //Cabecera sustituyendo autenticacion
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        let targetDev = null

		try {
		  targetDev = await Dev.findById(devId);
		} catch (error) {
		  return res.status(400).json({ error: 'Dev not exists' });
		}

        console.log(`User ${loggedDev.user} liked ${targetDev.user}.`);

        if(targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];
			
            console.log(`It´s a MATCH between ${targetDev.user} and ${loggedDev.user} `);
            
            if(loggedSocket) {
                req.io.to(loggedSocket).emit('match', targetDev);
            }
            
            if(targetSocket) {
                req.io.to(targetSocket).emit('match', loggedDev);
            }
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};