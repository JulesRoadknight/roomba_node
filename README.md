# Download

- Fork or clone this project on Github

# Installation

- Navigate to this project in the command-line/terminal
- Run `npm install`

# Run

- Navigate to this project in the command-line/terminal
- Run `node app.js`

# Tests

- Tested with Jasmine and manual feature testing
- Test input files in spec folder
- Run tests in project directory with `jasmine`
- Linted with ESLint
- Run linter in project directory with `npx eslint ./lib/roomba.js`

# Summary

- This is a command-line/terminal application
- This program simulates the journey of a roomba in a room
- Input is taken from an input.txt file
- The program returns the final co-ordinates of the roomba, and how many piles of dirt it cleared up

# Brief

You will write a program that navigates an imaginary robotic hoover (much like a Roomba)
through an equally imaginary room based on:
- Room dimensions as X and Y coordinates, identifying the top right corner of the room
rectangle. This room is divided up in a grid based on these dimensions; a room that
has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover
positions. The bottom left corner is the point of origin for our coordinate system, so as
the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
- Locations of patches of dirt, also defined by X and Y coordinates identifying the
bottom left corner of those grid positions.
- An initial hoover position (X and Y coordinates like patches of dirt)
- Driving instructions (as cardinal directions) where e.g. N and E mean "go north" and
"go east" respectively).

# MVP

- Takes input from the input.txt file
- Gets starting position from input
- Gets dirt patch locations from input
- Gets driving instructions from input
- Follows directions where within bounds
- Keeps count of the times the roomba occupies the same space as a patch of dirt

# Current Version

- MVP achieved
- Takes input.txt as default argument, but others can be passed in for testing
- Comes with a default program in case of empty input
- Assumes the input.txt is valid

# In the Future

- Account for minor validity errors such as duplicate dirt piles
