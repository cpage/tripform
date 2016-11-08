module.exports = function (userRepo) {
    var repo = userRepo;
    var getAll = function (req, res) {
        repo.getAll()
            .then(function(users) {
                res.json(users);
            });
    };

    return {
        getAll: getAll
    };
};