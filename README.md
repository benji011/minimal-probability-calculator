# General overview

A minimal web app that captures probability data from a user. The project is structured as a minimal front + backend that does the following:

## Frontend

Built with vuex. One of the easiest ways we can capture probability data and calculate it is by taking advantage of the Redux like state management framework built into the library. Initially all probability data is set to 0 until interaction on the slider components have been triggered. Depending on the page the user is on (e.g. CombinedWith to calculate `a` \* `b`) their respective action methods are called.

These action methods call the calculation logic done on the mutation side that updates the value of their states. Then we are done and the initial getter will just display what the new values are after an update. As for logging, this is handled in a similar manner but this time we use `axios` to send a POST request to the backend for logging.

## Backend

This service is kept to a bare minimum and is responsible for writing data into the file system, specifically log files. In general, you don't want the frontend to do this since it poses some security risk. While it is possible to use the [FileSystem API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) it is less tedius when comparing to Flask running as the backend.

## How to run

Please refer to the below READMEs for more info on running this app locally.
※ This app is was designed to be minimal and contains the bare minimum number of tests. With that said it's not mean't to be used in production.

- How to run the [frontend](./frontend/README.md)
- How to run the [backend](./backend/README.md)
