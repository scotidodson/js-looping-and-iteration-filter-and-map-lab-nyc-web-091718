// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(drivers) {
    return drivers.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let matchingDrivers = driversWithRevenueOver(drivers, revenue);
  return matchingDrivers.map(function(drivers) {
    return drivers.name;
  });
}

function exactMatch(drivers, object) {
  return drivers.filter(function(drivers) {
    return drivers[Object.keys(object)] === object[Object.keys(object)];
  });
}

function exactMatchToList(drivers, object) {
  let matches = exactMatch(drivers, object);
  return matches.map (function (drivers) {
    return drivers.name;
  });
}
