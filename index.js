// Code your solution in this file!
function distanceFromHqInBlocks(streetNo) {
  const hqStreetNo = 42;
  let blocks = 0;
  if (hqStreetNo < streetNo ) {
    blocks = streetNo - hqStreetNo;
  } else {
    blocks = hqStreetNo - streetNo;
  }
  return blocks;
}

function distanceFromHqInFeet(streetNo){
  const blockDistance = 264;
  let blocks = distanceFromHqInBlocks(streetNo);
  return blocks*blockDistance;
}
