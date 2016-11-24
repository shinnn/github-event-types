# github-event-types

[![NPM version](https://img.shields.io/npm/v/github-event-types.svg)](https://www.npmjs.com/package/github-event-types)
[![Bower version](https://img.shields.io/bower/v/github-event-types.svg)](https://github.com/shinnn/github-event-types/releases)
[![Build Status](https://travis-ci.org/shinnn/github-event-types.svg?branch=master)](https://travis-ci.org/shinnn/github-event-types)
[![devDependencies Status](https://david-dm.org/shinnn/github-event-types/dev-status.svg)](https://david-dm.org/shinnn/github-event-types?type=dev)

All [Event](https://developer.github.com/v3/activity/events/types/) types of [the Github API](https://developer.github.com/v3/)

```javascript
[
  'CommitCommentEvent',
  'CreateEvent',
  'DeleteEvent',
  'DeploymentEvent',
  'DeploymentStatusEvent',
  'DownloadEvent',
  'FollowEvent',
  'ForkEvent',
  // ...
  'WatchEvent'
]
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install github-event-types
```

#### [Yarn](https://yarnpkg.com/)

```
yarn add github-event-types
```

#### [Bower](https://bower.io/)

```
bower install github-event-types
```

### Standalone

[Download the JSON file directly.](https://raw.githubusercontent.com/shinnn/github-event-types/master/index.json)

## API

```javascript
import githubEventTypes from 'github-event-types';
```

### githubEventTypes

Type: `Array` of `String`

```javascript
githubEventTypes.includes('PushEvent'); //=> true
githubEventTypes.includes('foo'); //=> false
```

## License

[The Unlicense](./LICENSE).
