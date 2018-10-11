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

