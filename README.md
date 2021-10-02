# SnAlps

The Open Data HUB provides an ever increasing amount of data that can be used to build apps and websites to improve life and tourism in Bozen. Unfortunately, the HUB currently lacks photos and videos resources, which are of paramount importance when building modern front-facing applications.

This is why we created SnAps, an innovative mobile web app that, by using gamification, incentives all residents and visitors of Bozen to acquire and share images and video with a CC-0 license. SnAps always shows a map of points of interests and updated events, retrieved from the Open Data HUB, to suggest users where they can take pictures.

Multiple interactions such as comments and “likes” allow to create a community of users, where everyone can share it’s sharing progress and show the emblems collected. This process guarantees high quality images, since users will be able to challenge themselves though dynamic ranking.

The implementation of this application requires a stand-alone server that will handle user registration, comments and the community aspects of the gamification, as well as a temporary media storage server that will archive and share the CC-0-licensed files. This last temporary server will be needed until it will be possible to store the media files directly in the Open Data HUB.


## How to run this prototype?

```bash
npm install
npm run
```

Alternatively, you can check it out [here](https://simonedegiacomi.github.io/snAlps). 
