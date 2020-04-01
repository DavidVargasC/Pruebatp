const extra_hours = require('../../models/extra_hours.models');

exports.save = async (req, res) => {
    const { document,name,lastname,date_init,date_end, start_time, end_time, extra} = req.body;
    const newextrahours = new extra_hours({
        document,
        name,
        lastname,
        date_init,
        date_end,
        start_time,
        end_time,
        extra
    });
    res.send(await newextrahours.save());
}

exports.getExtra = async (req, res) => {
    try {
        let extras = await extra_hours.find();
        res.json({extras});
    } catch (error) {
        res.send("Error en conexion");
    }
}