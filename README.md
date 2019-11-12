# LIRI Bot

### Overview

> Demo: [Watch Here](https://drive.google.com/file/d/1_i7304_8i62Nr0HTL_JeD4ps7L1OBXXz/view)

> Repository: [See Here](https://github.com/purpetrator/Liri-Node-App)

This app is a command line node app that takes in parameters and gives you back data using various Node.JS API libraries.


### Installation

LIRI requires [Node.js](https://nodejs.org/) v6+ to run.

```sh
# clone this repository
$ git clone git@github.com:purpetrator/Liri-Node-App.git
# install the dependencies
$ npm install
```

The Spotify API requires an authentication token to work. Sign up for a Spotify Developer account [here](https://developer.spotify.com/my-applications/#!/login) (it's free!). Then navigate [here](https://developer.spotify.com/my-applications/) to create an app and get your Spotify keys.

After you get your keys, you will create a .env file in the root folder of this directory. Please enter your Spotify keys in the .env file as shown below.

```sh
# Spotify API keys. Replace the x's with your keys.
SPOTIFY_ID=xxxxxxxxxxxxxxx
SPOTIFY_SECRET=xxxxxxxxxxxxxxx
```

### How to Use

LIRI can take the following commands:

```sh
$ concert-this <band name>
```

This returns the data from the API and displays a response with all upcoming events for the entered band name.

![](https://i.imgur.com/sM2xhfS.png)

```sh
$ spotify-this-song <song title>
```

This returns the data from the API and displays a response with album/artist info and a preview link for the entered song title.

![](https://i.imgur.com/BQLq0ij.png)

```sh
$ movie-this <movie name>
```

This returns the data from the API and displays a response with movie production details and a plot for the entered movie name.

![](https://i.imgur.com/Kohdga3.png)

```sh
$ do-what-it-says
```

This accesses the random.txt file and runs a random command with a random title and displays the result.

![](https://i.imgur.com/DuB5dRc.png)

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

### Author:

Ana Chernov - Full Stack Web Developer - https://github.com/purpetrator
