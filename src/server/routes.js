//var Portfolio = require('./models/portfolio');
var navigation = require('./data/navigation');
var portfolioList = require('./data/portfolio/list');
var portfolioDetail = require('./data/portfolio/detail');
var stormpath = require('express-stormpath');
var Posts = require('./models/posts');

module.exports = function(app) {

    // server routes ===========================================================
    // api calls
    app.get('/api/navigation', function(req, res) {
        res.json(201, navigation.items);
    });

    app.get('/api/portfolio', function(req, res) {
        res.json(201, portfolioList);
    });

    app.get('/api/portfolio/preview/:base/:title', function(req, res) {
        var base = req.params.base;
        var urlTitle = req.params.title;
        var items = portfolioList;
        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.urlBase == base && item.urlTitle == urlTitle) {
                res.json(201, item);
            }
        }        
    });

    app.get('/api/portfolio/:base/:title', function(req, res) {
        var base = req.params.base;
        var urlTitle = req.params.title;
        var items = portfolioDetail;
        for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if(item.urlBase == base && item.urlTitle == urlTitle) {
                res.json(201, item.item);
            }
        }
    });

    app.get('/api/posts', function(req, res) {
        // use mongoose to get all posts in the database
        Posts.find(function(err, posts) {
            if (err) {
                res.send(err);
            }
            res.json(posts); // return all posts in JSON format
        });
    });

    app.post('/api/posts', function(req, res) {
        var post = new Posts({
            name: req.body.name
        });

        console.log('post: ' + post);
        console.log('req.body.name: ' + req.body.name);
        // use mongoose to add a new post in the database
        post.save(function(err, posts) {
            if(err) {
                res.send(err);
            }
            res.json(201, posts);
        });
    });

    // authentication routes
    app.get('/auth/user', stormpath.loginRequired, function (req, res) {
      if (!req.user || req.user.status !== 'ENABLED') {
        return res.redirect('/login');
      }
      res.json(201, req.user);
    });


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.render('index', function(err, html) {
            res.send(html);
        });
    });

};