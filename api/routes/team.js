const TeamMember = require('../../models/teammember')

module.exports = function(router) {
    router.get('/team', function (req, res) {
        TeamMember.find()
            .sort({ 'name': 1 })
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: "Error finding team members",
                error: err
            }));
    })

    // POST: Create new TeamMember
    router.post('/team', function (req, res) {
        let member = new TeamMember(req.body)
        member.save(function (err, member) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(mem)
        })
    })
}