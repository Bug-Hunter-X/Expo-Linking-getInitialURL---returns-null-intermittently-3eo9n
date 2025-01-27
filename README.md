# Expo Linking.getInitialURL() Intermittent Null Return

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where it inconsistently returns `null` even when the app is opened via a deep link.  This causes unpredictable application behavior.

## Bug Reproduction

The `bug.js` file contains code that attempts to retrieve the initial URL using `Linking.getInitialURL()`.  Under certain conditions (which seem difficult to reliably reproduce), this method returns `null`, even if the app was opened with a deep link.

## Solution

The `bugSolution.js` file demonstrates a possible workaround involving using `Linking.addEventListener` to listen for URL changes. This approach provides a more robust way to handle deep links.