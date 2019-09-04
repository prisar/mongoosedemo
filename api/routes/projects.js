
const Project = require('../../models/project')

module.exports = function(router) {

    const qry = {
        isActive: { $eq: true }
    }
    router.get('/projects', function (req, res) {

        Project.find(qry)
            .sort({ 'name': 1 })
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({
                message: "Error finding active projects",
                error: err
            }));
    })
}