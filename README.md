
The ForeFlight development team would like to get a better picture of your coding and problem solving skills.  We've
designed the following exercise to be fairly lightweight but to also have enough breadth to get into some interesting
implementation details.  Please build a program that implements the specification below. Some guidelines to keep in mind:
 
* You may use any open source / public libraries that you like
* You may implement the solution with any language/platform you prefer (note our front-end stack is primarily React, but React is not required)
* Your future peers will be reviewing your submission so write it appropriately
* If you have any problems accessing the datasources or other questions please contact the hiring coordinator you've been in touch with to this point,
but you should consider the spec to be complete as is
 
 
 
Specification
 
Input:
 
  - One or more airport identifiers
 
Output:
 
 A web page with the following:
 
 - The airport identifier
 - The airport name
 - The available runways
 - The lat/long of the airport
 - A current weather report that contains the following
    - Temp (F)
    - Relative humidity (%)
    - Summary of cloud coverage (text string)
        - This is the greatest amount of coverage listed if any
    - Visibility (Statute Miles)
    - Wind Speed (MPH)
    - Wind Direction (cardinal directions to secondary-intercardinal precision)
 - A forecast report for the next two periods (the second and third conditions nodes in /report/forecast/conditions)
   that contains the following entries
    - The time offset from the start of the period (/report/forecast/period/dateStart) in hrs:min
    - Temp (F)
    - Wind Speed (MPH)
    - Wind Direction  (degrees true)
 
 
Data Sources:
 
    Conditions can be obtained via a foreflight api:  https://qa.foreflight.com/weather/report/KDAB
 
    Airport data can be obtained at: https://qa.foreflight.com/airports/kaus
 
    You can find valid airport identifiers at: https://www.airnav.com/airports
 
 
 
Finally
 
When finished please submit a zip file containing your solution that we can build and run. If the project is too large,
please share using a cloud service of your choice. With your submission, please include the following information:
 
How much time was spent developing it.
How to use any features of the app that are not obvious.
Ideas for improving your implementation to make the implementation “production ready”, if any.

Bonus Problem
 
Runways are named for direction they're pointing; when taking off Runway 36, a plane will be headed
360° -- north -- and headed 90° -- east -- after taking off from Runway 09.
 
Airplanes prefer to take off and land pointed as near into the wind as possible. So if the wind
blowing out of the northwest, from 330°, then pilots will usually prefer to use Runway 30 over Runway 12.
Provide some indication of the best runway for pilots to use at the selected airport.