require("dotenv").config();

var userCommand = process.argv[2];

// Here i'm writing a switch statement that will call certain functions based on userCommand
switch (userCommand) {
  case "concert-this":
    concertThis(null);
    break;

  case "spotify-this-song":
    spotifyThis(null);
    break;

  case "movie-this":
    movieThis(null);
    break;

  case "do-what-it-says":
    doWhat();
    break;

  default:
    console.log("\n Try again, dummy \n");
    return;
}

function concertThis(userConcert) {
  var axios = require("axios");
  var moment = require("moment");

  if (userConcert === null) {
    var nodeArgs1 = process.argv;
    var bandName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs1.length; i++) {
      if (i > 3 && i < nodeArgs1.length) {
        bandName = bandName + "+" + nodeArgs1[i];
      } else {
        bandName += nodeArgs1[i];
      }
      var queryUrl =
        "https://rest.bandsintown.com/artists/" +
        bandName +
        "/events?app_id=codingbootcamp";

      axios
        .get(queryUrl)
        .then(function(response) {
          // Display name of venue, venue location, and the date of the event
          // Format the date of the event to be MM/DD/YYYY (look at the moment node package documentation!)
          for (var i = 0; i < response.data.length; i++) {
            var eventDate = response.data[i].datetime;
            var formattedDate = moment(eventDate).format("MM/DD/YYYY");
            console.log("Date: " + formattedDate);

            console.log("Venue: " + response.data[i].venue.name);

            console.log(
              "Location: " +
                response.data[i].venue.city +
                ", " +
                response.data[i].venue.country
            );

            console.log("\n ----- \n");
          }
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  } else {
    var newConcert = userConcert.split(" ");
    bandName = newConcert[0];
    console.log("userConcert: " + userConcert);

    for (var i = 1; i < newConcert.length; i++) {
      if (i > 0 && i < newConcert.length) {
        bandName = bandName + "+" + newConcert[i];
      } else {
        bandName += newConcert[i];
      }

      var queryUrl =
        "https://rest.bandsintown.com/artists/" +
        bandName +
        "/events?app_id=codingbootcamp";

      axios
        .get(queryUrl)
        .then(function(response) {
          // Display name of venue, venue location, and the date of the event
          // Format the date of the event to be MM/DD/YYYY (look at the moment node package documentation!)
          for (var i = 0; i < response.data.length; i++) {
            var eventDate = response.data[i].datetime;
            var formattedDate = moment(eventDate).format("MM/DD/YYYY");
            console.log("Date: " + formattedDate);

            console.log("Venue: " + response.data[i].venue.name);

            console.log(
              "Location: " +
                response.data[i].venue.city +
                ", " +
                response.data[i].venue.country
            );

            console.log("\n ----- \n");
          }
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }
  }
}

function spotifyThis(songName) {
  var keys = require("./keys.js");
  var Spotify = require("node-spotify-api");
  var spotify = new Spotify(keys.spotify);

  if (songName === null) {
    var nodeArgs1 = process.argv;
    var userQuery = "";

    if (nodeArgs1.length < 4) {
      userQuery = "the+sign";
      console.log("less than 4");
    } else {
      // Loop through all the words in the node argument
      // And do a little for-loop magic to handle the inclusion of "+"s
      for (var i = 3; i < nodeArgs1.length; i++) {
        if (i > 3 && i < nodeArgs1.length) {
          userQuery = userQuery + "+" + nodeArgs1[i];
        } else {
          userQuery += nodeArgs1[i];
        }
      }
    }

    spotify.search({ type: "track", query: userQuery }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }

      // console.log(data.tracks.items[0]);

      // Artist(s)
      console.log(
        "Artists: " +
          JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)
      );

      // The song's name
      console.log("Track Name: " + JSON.stringify(data.tracks.items[0].name));

      // The album that the song is from
      console.log(
        "Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2)
      );

      // A preview link of the song from Spotify
      console.log("Link: " + JSON.stringify(data.tracks.items[0].preview_url));
    });
  } else {
    spotify.search({ type: "track", query: songName }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }

      // Artist(s)
      console.log(
        "Artists: " +
          JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)
      );

      // The song's name
      console.log("Track Name: " + JSON.stringify(data.tracks.items[0].name));

      // The album that the song is from
      console.log(
        "Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2)
      );

      // A preview link of the song from Spotify
      console.log("Link: " + JSON.stringify(data.tracks.items[0].preview_url));
    });
  }
}

function movieThis(userMovie) {
  var axios = require("axios");

  if (userMovie === null) {
    var nodeArgs = process.argv;
    var movieName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {
      if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
      } else {
        movieName += nodeArgs[i];
      }
    }

    var queryUrl =
      "http://www.omdbapi.com/?t=" +
      movieName +
      "&y=&plot=short&apikey=trilogy";

    axios
      .get(queryUrl)
      .then(function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log(
          "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value
        );
        console.log("Produced In: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  } else {
    var queryUrl =
      "http://www.omdbapi.com/?t=" +
      userMovie +
      "&y=&plot=short&apikey=trilogy";

    axios
      .get(queryUrl)
      .then(function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log(
          "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value
        );
        console.log("Produced In: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }
}

function doWhat() {
  var fs = require("fs");

  // The code will store the contents of the reading inside the variable "data"
  fs.readFile("random.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    // We will then re-display the content as an array for later use.
    console.log(dataArr);
    console.log("0: " + dataArr[0]);

    // The command will be whatever is before the comma. The search term will be whatever is after the comma.
    // Make the corresponding API call depending on what the command is.
    switch (dataArr[0]) {
      case "concert-this":
        concertThis(dataArr[1]);
        break;

      case "spotify-this-song":
        spotifyThis(dataArr[1]);
        break;

      case "movie-this":
        movieThis(dataArr[1]);
        break;

      default:
        return;
    }
  });
}
