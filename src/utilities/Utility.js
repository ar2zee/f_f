// Checking for existing 3rd node in forecast
export const testPeriod = (parent) => {
    if (parent) {
      return  parent.period.dateStart
    } else {
      return ''
    }
  }

  export const testWindSpeed = (parent) => {
    if (parent) {
      return  (parent.wind.speedKts * 1.15077945).toFixed(3)
    } else {
      return ''
    }
  }

  export const testWindDirection = (parent) => {
    if (parent) {
      return  parent.wind.direction
    } else {
      return ''
    }
  }
///  

// getting the biggest altitudeFt among objects
  export const cloudLayersArray = (parent) => parent
  .map(element => element)
  .reduce((prev, current) => (prev.altitudeFt > current.altitudeFt)
        ? prev : current);

  // wind direction https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words
  export const windDirection = (parent) => {
      const direction = Math.floor((parent.direction / 22.5) + 0.5);
      const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
      return directions[(direction % 16)];
  }
