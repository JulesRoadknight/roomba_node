var fs = require('fs');

const X = 0; // X is the first coordinate in each array
const Y = 1; // Y is the second
const MINROOMX = 0;
const MINROOMY = 0;
const FIRSTDIRTPILEPOSITION = 4;
const DISTANCEBETWEENPILES = 2;
const NONNUMBERS = 2;
const DEFAULTPROGRAM = ['1', '1', '0', '0', 'NESW', ''];

// Turns the input file into the final result
exports.Roomba = function(inputFile = 'input.txt') {
  // Saves data from 'input.txt', and then splits the data by spaces and new lines
  const input = exports.readInput(inputFile);
  finalResult = roombaGo(input);
  console.log(finalResult);
};

exports.readInput = function(inputFile) {
  result = fs.readFileSync(inputFile, 'utf8').split(/[\s|\\n]/);
  defaultProgramIfEmpty(result);
  return result;
};

function defaultProgramIfEmpty(contentsOfInput) {
  if (result[0] === '') result = DEFAULTPROGRAM;
}

function roombaGo(input) {
// Handles functions related to moving the roomba
  var directions = input[input.length-2]; // Extracts NESW directions from input
  var dirtPilesCleanedCount = 0;
  var dirtPilesPositions = extractDirtPilePositions(input);
  // The first 4 numbers of input are room dimensions and starting position
  const MAXROOMDIMENSIONS = [Number(input[X]), Number(input[Y])];
  var currentPosition = [Number(input[2]), Number(input[3])];

  // Follows the instructions: Clean, move, repeat
  for (var directionsIterator = 0; directionsIterator < directions.length; directionsIterator++) {
    var dirtPileToClean = findDirtPile(currentPosition, dirtPilesPositions);
    if (dirtPileToClean >= 0) {
      dirtPilesPositions.splice(dirtPileToClean, 1);
      dirtPilesCleanedCount++;
    }
    moveCoordinate(directions, directionsIterator, currentPosition, MAXROOMDIMENSIONS);
  }
  return `Final Position: ${currentPosition}. Cleaned ${dirtPilesCleanedCount} dirt pile(s)`;
}

function extractDirtPilePositions(input) {
// Adds numbers to list of dirt pile positions, stops at the NESW instructions
  var positions = [];
  for (var i = FIRSTDIRTPILEPOSITION; i < input.length - NONNUMBERS; i+= DISTANCEBETWEENPILES) {
    positions.push([Number(input[i]), Number(input[i + 1])]);
  }
  return positions;
}

function moveCoordinate(directions, iterator, position, MAXROOMDIMENSIONS) {
// Makes a move if valid, returns coordinates of result
  switch (directions[iterator]) {
    case 'N': // Increments Y-Coordinate
      if (position[Y] + 1 <= MAXROOMDIMENSIONS[Y]) position[Y]++;
      return position;
    case 'E': // Increments X-Coordinate
      if (position[X] + 1 <= MAXROOMDIMENSIONS[X]) position[X]++;
      return position;
    case 'S': // Decrements Y-Coordinate
      if (position[Y] - 1 >= MINROOMY) position[Y]--;
      return position;
    case 'W': // Decrements X-Coordinate
      if (position[X] - 1 >= MINROOMX) position[X]--;
      return position;
  }
}

function findDirtPile(currentPosition, dirtPilesPositions) {
// Returns the index of a dirt pile, if exists at current position
  var indexOfDirtPile = checkForDirt(currentPosition, dirtPilesPositions);
  if (indexOfDirtPile >= 0) {
    return indexOfDirtPile;
  }
}

function checkForDirt(currentPosition, dirtPilesPositions) {
// Compares current position to that of dirt piles
  dirtPilesPositions;
  for (var l = 0; l < dirtPilesPositions.length; l++) {
    if (JSON.stringify(dirtPilesPositions[l]) === JSON.stringify(currentPosition)) {
      return l;
    }
  }
  return -1;
}
