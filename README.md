### <div align="center"><img src="https://github.com/chilucdiep/Spacestagram/blob/main/src/images/LogoLight.svg" width="60%"></div>


# About

Spacestagram is a web app where users can browse through NASA’s pictures, read about their context and information and save their favorites. 

#### 👉 [Try it out here](https://chilucdiep.github.io/Spacestagram/)
#### 👉 [Figma design here](https://www.figma.com/file/dkV2MEJPPmGWdl1vvfaPs4/Spacestagram?node-id=0%3A1)

# Table of Contents

1. [Technologies Used](#technologies)
2. [App Features](#features)
3. [Future Improvements](#improvements)
4. [About the Developer](#about-me)
5. [Deployment](#deployment)


## <a name="technologies"></a>Technologies Used
- React
- TypeScript
- HTML
- SCSS
- [NASA's APOD API](https://api.nasa.gov/#apod/)
- [React Router](https://reactrouter.com/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
- [React Testing Library](https://github.com/testing-library/react-testing-library)

## <a name="features"></a>App Features

- Users can browser through all the [NASA's astronomy pictures](https://api.nasa.gov/#apod/) on the feed page and give a "like" to as many as they want.
- Liked pictures will appear the in "Pictures you've liked" section of the feed page. The "unlike" action from the user will remove the picture from the section.
- A user can read more information about a specific picture (such as the picture's date, context, copyright, etc..) by going on the picture's details page.
- Each picture has a details page with a designated url that can be shared. All links created using [React Router](https://reactrouter.com/). 
- The design of the app is responsive and can be viewed on all devices.
- The feed page loads additional pictures as the user scrolls down (infinite scroll implemented with [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)).
- A user's liked pictures to local storage so results will persist even if they leave the page.

## <a name="improvements"></a>Future Improvements

- Add a UI skeleton loading animation while user wait for NASA’s API to return data.

## <a name="about-me"></a>About The Developer

Hi! 👋 I'm Chi-Luc, a Frontend Developer currently working as a UX Designer in the Usage Analytics team at Coveo. I love to build accessible and easy to use UI's to solve real world problems.

## <a name="deployment"></a>Deployment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
