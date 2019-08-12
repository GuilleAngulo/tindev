const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        //Parametros de la URL /
        const { devId } = req.params;
        //Cabecera sustituyendo autenticacion
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        console.log(`User ${loggedDev.user} disliked ${targetDev.user}.`);

        return res.json(loggedDev);
    }
};