const { Schema, model } = require('mongoose');

const extrahoursSchema = Schema ({ 
    document: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    date_init: { type:Date, required: true },
    date_end : { type:Date, required: true },
    start_time: { type:Date, required: true },
    end_time: { type:Date, required: true },
    extra: { type:String, required: true }
});

module.exports = model('extra_hours', extrahoursSchema);