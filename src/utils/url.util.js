
export const getLatLon = (coords) => {
  const regex = /^@(?<lat>\d*.\d*),(?<lon>\d*.\d*)/;
  const found = coords.match(regex);
  return {
    geometry: {
      type: 'Point',
      coordinates: [found.groups.lon, found.groups.lat]
    }
  }
};