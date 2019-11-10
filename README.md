# LIRI Bot

### Overview

This app is a command line node app that takes in parameters and gives you back data using various Node.JS API libraries.

### Installation

LIRI requires [Node.js](https://nodejs.org/) v6+ to run.

```sh
# clone this repository
$ git clone git@github.com:purpetrator/Liri-Node-App.git
# install the dependencies
$ npm install
```

### How to Use

LIRI can take the following commands:

```sh
$ concert-this <band name>
```

This returns the data from the API and displays a response with all upcoming events for the entered band name.

```sh
$ spotify-this-song <song title>
```

This returns the data from the API and displays a response with album/artist info and a preview link for the entered song title.

```sh
$ movie-this <movie name>
```

This returns the data from the API and displays a response with movie production details and a plot for the entered movie name.

```sh
$ do-what-it-says
```

This accesses the random.txt file and runs a random command with a random title and displays the result.

### Technologies Used

- Node.js
- JavaScript

##### Packages used:

- Node-Spotify-API
- Axios
- Moment
- DotEnv

##### APIs used:

- Spotify
- Bands in Town
- OMDB
