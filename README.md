# Project Overview


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
| Establish each component | H | 30mins| TBA | TBA |
| Put router in place | H | 2hrs | TBA | TBA |
| Pull data into each Filter component ('near you' and 'by borough') | H | 2hrs | TBA | TBA |
| Pseudocode logic for retrieving data from 'by borough' | H | 2hrs | TBA | TBA |
| Code logic for retrieving 'by borough' data | H | 2hrs | TBA | TBA |
| Render data for 'by borough' | H | 2hrs | TBA | TBA |
| Research geolocation API data | H | 1hr | TBA | TBA |
| Pull data into 'near you' using geolocation API | H | 2hrs | TBA | TBA |
| Pseudocode logic for retrieving data from 'near you' | H | 2hrs | TBA | TBA |
| Render data for 'near you' | H | 2hrs | TBA | TBA |
| Style header | H | 1hr | TBA | TBA |
| Style main | M | 2hrs | TBA | TBA |
| Style footer | M | 30mins | TBA | TBA |
| Total | 21hrs | |  |  |

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

**ERROR**: (sample) app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: (sample) Missing comma after first object in sources {} object
