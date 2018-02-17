
/*
 * GET likeThis
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('likeThis', data);
};

exports.viewFromArtist = function(req, res) {
    var fromName = req.params.name;

    var likeData = JSON.parse(JSON.stringify(data));

    //remove 'from artist' from like this data
    for(var i = 0; i < likeData.artists.length; i++) {
        var obj = likeData.artists[i];

        if(obj.name == fromName) {
            likeData.artists.splice(i, 1);
            break;
        }
    }

    res.render('likeThis', likeData);
};
