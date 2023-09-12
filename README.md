# Nookpedia

- Welcome to nookpedia! This is a side project I'm working on to learn anr practice a lot of stuff! So there is a huge chance of seeing some weird stuff, and refactors here and there. I build it, test it, and if it passes the test of time and quality, it stays, if not, let's try in some other way!

## Roadmap

### Server

- [ ] images deployment

### CSS

- [ ] z-index layers
- [ ] centralize css colors
- [ ] more granular animations controls and tests

### Development

- [ ] storybook
- [ ] unit tests
- [ ] test coverage of at least 50% (we gotta start somewhere)
- [ ] better state management
- [ ] bring api parser to here, with the `yarn dev` first parsing the api and generating the output

### Features

- [ ] Fossils page
- [ ] Sea creatures page
- [ ] Fish Page
- [ ] Critter Page
- [ ] Art Page
- [ ] Villagers Page
- [ ] Villagers Planner
- [ ] Flowers Page
- [ ] KK Songs Page
- [ ] Events Page

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn generate-component`

Runs a script to:

- Create a new React component
  - Location folder can be set
  - Component name can me set
  - Can separate the component in logic/view
  - Can include a Storybook file to it
  - Can include a Skeleton Loader
- Add `tests` folder and file to existing React component
  - Location can be set
  - The test name can also be set (but should be the same as the component)
- Add a Storybook story to an existing React component
  - Location can be set
  - The test name can also be set (but should be the same as the component)
