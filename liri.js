//====================
//Global Variables
//====================
var fs = require('fs');
var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var userInput = process.argv[2];
var value = process.argv[3];
//====================
//Commands
//====================
function checkUserInput(userInput, value) {
    switch (userInput) {
        case "my-tweets":
            twitter();
            break;
        case "spotify-this-song":
            spotify();
            break;
        case "movie-this":
            movie();
            break;
        case "do-what-it-says":
            whatItSays();
            break;
    };
};
//====================
//Twitter
//====================
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret,
});

function twitter() {
    var params = { screen_name: '@nicolepolakk', count: '20' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        };
    });

};
checkUserInput(userInput, value);
//====================
//Spotify
//====================
function spotify() {
    //do something
}
//====================
//Movie
//====================
function movie() {
    //do something
    request('http://www.omdbapi.com/?t=the+notebook&y=&plot=short&r=json', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var json = JSON.parse(body);
            console.log("imbd rating: " + json.imdbRating)
        }
    })

}
//====================
//whatItSays
//====================
function whatItSays() {
    //do something

}
