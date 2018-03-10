/*
 *
 */

// @flow

const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer');

const noop = () => {};

const setup =
  process.env.NODE_ENV === 'production'
    ? noop
    : () => {
        installExtension(REACT_DEVELOPER_TOOLS)
          .then(name => console.log(`Added Extension: ${name}`))
          .catch(err => console.log('An error occurred: ', err));

        installExtension(REDUX_DEVTOOLS)
          .then(name => console.log(`Added Extension: ${name}`))
          .catch(err => console.log('An error occurred: ', err));
      };

module.exports = {
  setup 
};

