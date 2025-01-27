import * as Linking from 'expo-linking';

Linking.addEventListener('url', (url) => {
  // Handle the URL here
  if (url.url) {
    // Process deep link
    console.log('Deep link received:', url.url);
  } else {
    console.log('No deep link received');
  }
});

// Async function to check for initial URL, this is not really needed for this solution, but I am providing this for user understanding
async function getInitialURL() {
  let initialUrl = await Linking.getInitialURL();
  if(initialUrl){
      console.log('Initial URL from getInitialURL():', initialUrl);
  }else {
    console.log('Initial URL from getInitialURL() is null');
  }
}