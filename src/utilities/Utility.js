// Checking for existion 3rd & 2nd node in forecast with child dateStart
export const testPeriod = (parent) => {
    if (parent) {
      return  parent.period.dateStart
    } else {
      return ''
    }
  }

  // Checking for existion tempC in API response
  export const testTemp = (parent) => {
    if (parent) {
      return  (parent * 9/5) + 32
    } else {
      return ''
    }
  }
  // Checking for existion relativeHumidity & visibilitys in API response 
  export const testConditions = (parent) => {
    if (parent) {
      return  parent
    } else {
      return ''
    }
  }
// Checking for existion windspeed in nodes 2nd and 3rd in API response 
  export const testWindSpeed = (parent) => {
    if (parent) {
      return  (parent.wind.speedKts * 1.15077945).toFixed(3)
    } else {
      return ''
    }
  }

// Checking for existion windspeed in conditions in API response 
  export const testWindSpeedForCondition = (parent) => {
    if (parent) {
      return  (parent.speedKts * 1.15077945).toFixed(3)
    } else {
      return ''
    }
  }
// Checking for existion wind direction
  export const testWindDirection = (parent) => {
    if (parent) {
      return  parent.wind.direction
    } else {
      return ''
    }
  }
///  

// getting the biggest altitudeFt among objects (This is the greatest amount of coverage listed if any)
  export const cloudLayersArray = (parent) => {
    if(parent) {
      return parent.map(element => element)
      .reduce((prev, current) => (prev.altitudeFt > current.altitudeFt)
        ? prev : current);
    } else {
      return ''
    }
  }


  // wind direction https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words
  export const windDirection = (parent) => {
    if(parent) {
      const WindDirectionFromApi = Math.floor((parent.direction / 22.5) + 0.5);
      const Winddirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
      return Winddirections[(WindDirectionFromApi % 16)];
    } else {
      return ''
    }
  }
      
  
