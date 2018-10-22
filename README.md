#Boilerplate for a React app using Redux and Storybook

##React
Bootstraped with Create React App, see docs in README_CRA.md

##Redux
Very component-centric structure, using duck pattern and gathering all relevant code per component folder.

Components are split between presentational and connected containers.

##Anatomy of a component

###AppComponent.js
The main presentational component. Should be pure to be testable.

###AppContainer.js
The main connected component that uses AppComponent for presentation. The container is connected to Redux state and uses mapStateToProps for sending state to the presentational component and madDispatchToProps for callbacks from the presentational component.

###duck/actions
Using Reduxsauce for less boilerplate. exporting Creators and Types.

###duck/index
Bringing it all together.

###duck/initialState
Initial state for the component state

###duck/operations
Basically helper files for i/o operations, i.e. async ajax requests

###duck/reducers
Using createReducer from Reduxsauce for less boilerplate, also big reducer functions can easily be extracted.

###duck/selectors
Selectors for all forms of state getters. (Not using memoized selectors to avoid premature optimization)

###App.css
Css related to the component. TODO: Css modules

###App.test.js
Simple jest test

###logo.svg
Any static files that can be included by js should be.

##Storybook
Start storybook by running `yarn run storybook`. Any presentational component should have a storybook setup, see `Button.stories.js`. Possibly excluding pure layout components.
 
