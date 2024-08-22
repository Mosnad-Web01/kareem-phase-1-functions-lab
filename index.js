// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const headquartersBlock = 42;

  const distanceInBlocks = Math.abs(someValue - headquartersBlock);

  return distanceInBlocks;
}



function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);

  const feet = blocks * 264;

  return feet;
}

function distanceTravelledInFeet(start, destination) {

  const blocksTraveled = Math.abs(destination - start);

  const feet = blocksTraveled * 264;

  return feet;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet > 2500) {
    return "cannot travel that far";
  }

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else {
    return 25;
  }
}
