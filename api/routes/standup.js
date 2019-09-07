const Standup = require('../../models/standup')
const mongoose = require('mongoose')

module.exports = function(router) {

    // GET: the standup meeting notes
    router.get('/standup', function (req, res) {
        Standup.find()
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: "Error finding standup meeting notes"
            }));
    });

    // GET: by team member id
    router.get('/standup/:teamMemberId', function (req, res) {
        const qry = {
            _teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId)
        }

        Standup.find(qry)
        .sort({ 'createdOn': 1 })
        .exec()
        .then(docs => res.status(200)
            .json(docs))
        .catch(err => res.status(500)
            .json({
                message: 'Error finding standup notes for team member Id',
                error: err
            }))
    })

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