# Project Overview

## Project Links
[Github repo](https://github.com/eloisebarrow/recycle-nyc)
<br>[View deployed site](https://recycle-nyc.surge.sh/)
<br>[Read about my process](https://medium.com/@eloiseressbarrow/newb-techie-saves-the-earth-with-nyc-recycling-app-b94e8143800b)

## Project Description

The Recycle-NYC app leverages NYC Open Data's Public Recycling Bin API to display public recycling bin options throughout the five boroughs.

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
| Establish each component | H | 30mins| 30mins | 30mins |
| Put router in place | H | 2hrs | 40mins | 40mins |
| Pull data into each Filter component ('near you' and 'by borough') | H | 2hrs | 30mins | 30mins |
| Code logic for retrieving 'by borough' data & render it | H | 4hrs | 4hrs | 4hrs |
| Research geolocation API data | H | 1hr | 1hr | 1hr |
| Pull data into 'near you' using geolocation API | H | 2hrs | 35mins | 35mins |
| Render data for 'near you' | H | 2hrs | 4hrs | 4hrs |
| Style header | H | 1hr | 2hrs | 2hrs |
| Style main | M | 2hrs | 1hr | 1hr |
| Style footer | M | 30mins | 30mins | 30mins |
| Style ByBorough component | M | 1hr | 2hrs | 2hrs |
| Migrate inline styles to one style file | L | 1hr | 1hr | 1hr |
| Total |  | 25hrs |  | 24hrs |

## Additional Libraries
 From the start of the project, I am planning to use axios and react router dom. Axios will allow me to efficiently call the API and react router dom will allow my site to be efficient in its content delivery. Also react-map-gl for geolocation.

## Code Snippet

One challenge I came up against in this project was an inconsistency in the data; for some of the locations, the park site name and address had the same text which, when rendered, didn't look right. For example, it might have listed "Highline Park @ Highline Park". To resolve this, I added a conditional statement when rendering data in my By Borough component - now the component displays only the address if the name and address are the same (alternatively it will display both the name and address).

Initially, rendering the By Borough data had caused me some trouble so being able to refactor it fairly quickly to accommodate this change was very satisfying.

```
const boroughData = props.apiData
  .filter((d) => d.borough === borough)
  .map((d, i) => {
    if (d.park_site_name !== d.address) {
      return (
        <div key={i} className="borough-data-styles">
          <p className="borough-content">{d.park_site_name} <br/><span className="borough-category">@</span> {d.address}</p>
        </div>
      )
    } else if (d.park_site_name === d.address ) {
        return (
          <div key={i} className="borough-data-styles">
            <p className="borough-content">{d.address}</p>
          </div>
        )
      }
    })
```

## Issues and Resolutions

**ERROR**: I can't return individual borough data in the ByBorough component - tried looping through using .filter and .forEach, neither updated the DOM. Also tried looping through all data in Main's async function and distributing borough data to state but that only returned 1 object each time instead of all borough data.
<br/>**RESOLUTION**: My code in .forEach was correct but despite including a return statement forEach will not return any data. I changed it to a .filter method to filter by borough and then mapped through the .filter to return a list of all bins in a given borough.

**ERROR**: I can't get my mapbox to render in the NearYou component.
<br/>**RESOLUTION**: My MapboxAccessToken environment variable in my .env file needed REACT_APP_ in front of it & I had to restart my react server.

**ERROR**: Map would not render when passing it user location info via userLat and userLong in state.
<br/>**RESOLUTION**: I had to update the viewport lat/long directly and conditionally render the map so it would only render once it received lat/long coordinates (due to the geolocator taking longer to return data than the map initially took to render).

**ERROR**: Map marker would not render on mapbox.
<br/>**RESOLUTION**: It was physically there but had no styles so I added those.

**ERROR**: When mapping through API data in the NearYou component and trying to generate a marker for each data point, the markers can only be generated with hard-coded data - I cannot generate them with my element parameter. Getting the following error: viewport-mercator-project: assertion failed
<br/>**RESOLUTION**: parseInt applied to the lat/long had converted lat/long to integers when I needed floats (replaced with parseFloat); too many data points caused the app to crash (now mapping through a filtered version of data which decreases the radius of data points the map will render); added a boolean stateful variable 'located' which is now the first condition when I conditionally render the ReactMapGL component - 'located' will set to 'true' on componentDidMount & will prevent the ReactMapGL component from rendering as soon as it receives a latitude.
