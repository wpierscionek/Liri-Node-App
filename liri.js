var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'ooOeVRJvY33357CxhdoV9v5sC',
    consumer_secret: 'P5NJCq0UXIVQ3gGMLfzdOPjKPHMzr2cAz8j5XRoa3mAqAPXUg6',
    access_token_key: '707597378677817344-3BciQIbdpHsCKMDuL8df2ZAn5xhuiFg',
    access_token_secret: 'Ul4jDMB8qHfJKya0GRztjzhi8tG7LQ1F5Rio5oJit8M2h'
});
var count = 0;
	util = require('util');
client.stream('statuses/filter', {track: 'love'}, function(stream) {
  stream.on('data', function(data) {
    console.log(util.inspect(data));
        // stream.destroy();
        // process.exit(0);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
