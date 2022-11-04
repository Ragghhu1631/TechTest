# Mobile tech test

## Getting started

This is a React Native project.

Building on iOS requires a macOS development environment.

If you do not own a MacBook that is completely fine. However, this means that you will only be able to build on android. Please let us know - we will ensure to only review your test using an android simulator.

If you have not set up a React Native development environment before on your machine, please follow the instructions for 'React Native Cli Quickstart': https://reactnative.dev/docs/environment-setup

Note: Xcode is a 12.6 GB download, and Android Studio is 1 GB, so this may take a while to install.

We recommend using Ruby 3.0.1 and JDK 11, or newer.

### Running this project

Download and install all necessary packages:

    npm install

Install pods:

    npm postinstall

Start the server:

    npm start

Build on your open iOS simulator:

    npm run ios

Build on your open android simulator:

    npm run android

### Testing and linting

Check your code with eslint:

    npm run lint

Autoformat your code using prettier:

    npm run format

Run your jest tests:

    npm run test

&nbsp;

## The exercise

**Goal:** Build a magazine home page.

**Duration:** 1-2hr (after set up is complete)

**Description:** The screen must have the title "Magazine issues". We would like you to display the data contained in data.json. Between the title and the data, you should create 4 toggles which filter based on cover name. The default is that all 4 are switched on. Switching off a toggle should hide all instances of that issue type. Switching it back on should bring them back. We would like you to include a footnote at the bottom "The full archive is available to Which? members". The whole screen should be scrollable, not just the data.

**Constraints:** You should consider mobile portrait, mobile landscape and tablet devices. Mobile portrait will have one item per row. Mobile landscape will have 2 items per row. Tablet will have 3 items per row with the content centered. The content should not touch the edge of the screen. You should take care to account for phone notches.

You do not need to use any additional libraries but if you do, you should be able to explain the reasons for your choices in this Readme file.

We are not expecting you to include navigation elements as part of this test.

We would like you to use typescript if possible and update the unit tests to reflect your changes.

**Criteria for assessment:**

-   Project layout/structure
-   Coding style, i.e. your approach not whether you use semicolons or not ;)
-   Your approach to unit testing/TDD
-   Maintainability and extensibility
-   Use of responsive design
-   Accessibility
-   Naming conventions used
-   Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.

Please update this Readme with justfications for any key decisions on your approach and style.
