#  Platform API

* node with babel
* expressjs
* airbnb eslint rules

Procfile for Heroku included
Settings for render.com:
* build command:  `npm install && npm run build`
* run command:  `npm run prod`

[https://notes-app-api-vtyb.onrender.com](https://notes-app-api-vtyb.onrender.com)

## What Worked Well
Everything works correctly. I like how you're able to separate the posts from each other using an API key even though it's not really how a real API key works. I also like how the array of tags make the tags look more like what you see on other media.

## What Didn't
When a user first navigates to the site, it can be slightly laggy (it takes a couple milliseconds from the clicking of the submit button to the home screen)

## Extra Credit
Implemented API key and tags as an array. Had to change both the API and the frontend to make the tag array work. I took the post.tags out into a separate function and used the mapping function to iterate through the tags array. I also error checked to make sure that none of the items in the array were empty so that empty gray bubbles wouldn't appear if the user entered too many spaces, etc.

## Screenshots
<img width="1300" alt="image" src="https://github.com/dartmouth-cs52-23s/platform-api-ashleyliangg/assets/102703391/a804be3e-ed74-4982-b311-ac90be5c8ad8">


