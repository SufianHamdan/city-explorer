# Project Name

**Author**: Sufian Hamdan
**Version**: 1.0.0

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

---

### Lab 06

Parter: Aseel Hamamreh.

Name of feature: Search for a city based on the latitude and longitude of that location then display a map of that city.

Estimate of time needed to complete: 2 hours

Start time: 4:00

Finish time: 9:00

Actual time needed to complete: 5 hours

Inputs for the location data:

1- GET Request: URL
2- Key: API key
3- queue: data

Inputs for the static map data:

1. GET Request: URL
2. Key: API key
3. lat: data
4. lon: data

Outline functions:

1. Function that get the data from the user based on the location name then we pass the location name inside the url.

2. Function that target the value that the user entered then pass it to the functiom that sends the GET Request URL.

![WRRC](/assets/lab06.png)

### Lab 07

Parter: Abeer Alrafati.

Name of feature: Display the weather info for the city that was searched for

Estimate of time needed to complete: 2 hours

Start time: 4:00

Finish time: 9:00

Actual time needed to complete: 5 hours

Inputs for the weather info:

1. GET Request: URL
2. Key: API key
3. City name: request query

Outline functions:

1. Function that get the data from the user based on the location name then we pass the location name inside the url.

![WRRC](/assets/lab07draw.png)

### Lab 08

Parter: Yousef Salem.

Name of feature: Display the weather live info and the movies related to the city name for the city that was searched for

Estimate of time needed to complete: 3 hours

Start time: 4:00

Finish time: 10:00

Actual time needed to complete: 6 hours

Inputs for the weather info:

1. GET Request: URL
2. Key: API key
3. City name: request query

Outline functions:

1. Function that get the weather info from the user based on the location name then we pass the location name inside the url then request the city name from the server api url.

2. Function that get the movies from the user based on the location name then we pass the location name inside the url then request the city name from the server api url.

![WRRC](/assets/lab08draw.png)
