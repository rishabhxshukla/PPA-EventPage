
const eventVar = {}
exports.addEvent = async (req, res) => {
    eventVar.title = req.body.title,
    eventVar.desc = req.body.desc,
    eventVar.date = req.body.date,
    eventVar.time = req.body.time,
    eventVar.duration = req.body.duration,
    eventVar.venue = req.body.venue,
    eventVar.noOfParticipants = req.body.noOfParticipants;
    console.log(eventVar);
    console.log("The message has been successfully loaded !");
}

