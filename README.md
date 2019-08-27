# Project Overview

## Project Links
Github repo: https://github.com/eloisebarrow/recycle-nyc
Deployment: TBD

## Project Description

The Recycle-NYC app leverages NYC Open Data's Public Recycling Bin API to display public recycling bin options by borough. This app also uses the geolocation API to display the 5 closest recycling bins to a given user.

## Wireframes

Below are images of the proposed React architecture and wireframes.

React architecture:

https://res.cloudinary.com/eloise/image/upload/v1566593076/sei_project_2/project_2_architecture.jpg

Wireframe:

https://res.cloudinary.com/eloise/image/upload/v1566593076/sei_project_2/project_2_wireframe.heic

## API Description

The 'Public Recycling Bins' API is a dataset that offers latitude/longitude coordinates for public recycling bins throughout the five boroughs. The data is fairly straightforward: in addition to lat/long coordinates, it provides the borough name, address, park site name and site type.

Here is a sample of what the data looks like when returned: https://res.cloudinary.com/eloise/image/upload/v1566523488/recycle-nyc-dataset.png

## API Documentation from Socrata / NYC Open Data
https://dev.socrata.com/consumers/getting-started.html<br/>
https://data.cityofnewyork.us/Environment/Public-Recycling-Bins/sxx4-xhzg<br/>
https://dev.socrata.com/foundry/data.cityofnewyork.us/sxx4-xhzg

## MVP (Minimum Viable Product)

- Pull data from NYC's Open Data API 'Public Recycling Bins'
- Build a function that will pull 5 closest recycling bins based on gelocation and display the results on the same page
- Build a second function that will pull recycling bins by borough when a borough is selected from dropdown menu

## PostMVP

- Include a map to visualize the locations of the recycling bins

## React Component Hierarchy

My app starts in the App component, with children components of Header, Main and Footer.

The Header will have the app's title as well as a navigation subheader, which will have links to the following child components: 'home', 'about', 'near you', 'by borough' and 'resources'. 'Home' will redirect the user to the Main component, 'about' will link to a simple page with a brief statement about the app, itself, and 'resources' will have a few links to learn more about recycling in NYC. 'Near you' and 'by borough' will render data by geolocation or borough, respectively. All data results will display the park_site_name and address.


The Main component will render an invite to search for public recycling bins.

The footer component will contain a simple copyright logo and a link to go to the top of the page.

## Components

| Component | Description |
| --- | :---: |  
| App | This will contain the primary components (Header, Main and Footer) & include Routes |
| Header | This will render the header including the nav |
| Main | Renders the prompt and nav tabs when clicked ('near you', 'by borough' and Resources) |
| NearYou | Renders clickable 'near you' & corresponding data |
| ByBorough | Renders title, borough dropdown menu and borough data |
| Resources | Displays names of organizations and links to more info on recycling & sustainability |
| About | Renders small blurb on App |
| Footer | Renders footer |


## Time-Priority Matrix

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Design site, architecture & wireframe | H | 4hrs| 6hrs | 6hrs |
| Establish each component | H | 30mins| 30mins | TBA |
| Put router in place | H | 2hrs | 40mins | TBA |
| Pull data into each Filter component ('near you' and 'by borough') | H | 2hrs | 30mins | TBA |
| Pseudocode logic for retrieving data from 'by borough' | H | 2hrs | TBA | TBA |
| Code logic for retrieving 'by borough' data & render it | H | 4hrs | 3hrs 40mins | TBA |
| Research geolocation API data | H | 1hr | 1hr | TBA |
| Pull data into 'near you' using geolocation API | H | 2hrs | 35mins | TBA |
| Pseudocode logic for retrieving data from 'near you' | H | 2hrs | TBA | TBA |
| Render data for 'near you' | H | 2hrs | 3.5hrs | TBA |
| Style header | H | 1hr | 10mins | TBA |
| Style main | M | 2hrs | TBA | TBA |
| Style footer | M | 30mins | 15mins | TBA |
| Style ByBorough component | M | 1hr | 2hrs | TBA |
| Migrate inline styles to one style file | L | 1hr | 1hr | TBA |
| Total |  | 25hrs |  |  |

## Additional Libraries
 From the start of the project, I am planning to use axios and react router dom. Axios will allow me to efficiently call the API and react router dom will allow my site to be efficient in its content delivery. Also react-map-gl for geolocation.

## Code Snippet

Here I'll include a brief code snippet (not longer than 10 lines) and description of functionality that I'm proud of.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Here I'll list all major issues encountered and their resolution.

**ERROR**: I can't return individual borough data in the ByBorough component - tried looping through using .filter and .forEach, neither updated the DOM. Also tried looping through all data in Main's async function and distributing borough data to state but that only returned 1 object each time instead of all borough data.

**RESOLUTION**: My code in .forEach was correct but despite including a return statement forEach will not return any data. I changed it to a .filter method to filter by borough and then mapped through the .filter to return a list of all bins in a given borough.

-

**ERROR**: I can't get my mapbox to render in the NearYou component.

**RESOLUTION**: My MapboxAccessToken environment variable in my .env file needed REACT_APP_ in front of it & I had to restart my react server.

-

**ERROR**: Map would not render when passing it user info via userLat and userLong in state.

**RESOLUTION**: I had to update the viewport lat/long directly and conditionally render the map so it would only render once it received lat/long coordinates (due to the geolocator taking longer to return data than the map initially took to render).

-

**ERROR**: Map marker would not render on mapbox.

**RESOLUTION**: It was physically there but had no styles so I added those.

-

**ERROR**: When mapping through API data in the NearYou component and trying to generate a marker for each data point, the markers can only be generated with hard-coded data - I cannot generate them with my element parameter. Getting the following error: viewport-mercator-project: assertion failed

**RESOLUTION**: parseInt applied to the lat/long converted lat/long to integers when I needed floats (replaced with parseFloat); too many data points caused the app to crash (now mapping through a filtered version of data which decreases the radius of data points the map will render); added a boolean stateful variable 'located' which is now the first condition when I conditionally render the ReactMapGL component - 'located' will set to 'true' on componentDidMount & will prevent the ReactMapGL component from rendering as soon as it receives a latitude.
