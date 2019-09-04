const Standup = require('../../models/standup')

module.exports = function(router) {
    router.get('/standup', function (req, res) {
        Standup.find()
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: "Error finding standup meeting notes"
            }));
    });

    // POST: Create new standup
    router.post('/standup', function (req, res) {
        let note = new Standup(req.body)
        note.save(function (err, note) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
}