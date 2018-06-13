# Common library for Typescript|ES6 projects

[![NPM](https://nodei.co/npm/ciag-commons.png)](https://nodei.co/npm/ciag-commons/)

## Install

`$ npm install ciag-commons --save`

## Object Utils

### Usage

```javascript
import { ObjectUtils } from 'ciag-commons';

function getCurrentDate(datetime) {
  if(ObjectUtils.isCallable(datetime)) { 
    return datetime();
  }
  return moment(datetime);
}

```

| Methods         |
| --------------- |
| recursiveAssign |
| prepareName     |
| getattr         |
| setattr         |
| firstNonNull    |
| firstNonEmpty   |
| isCallable      |
| copy            |
| strToBoolOrStr  |
| zipToObject     |
| isString        |
| isEmpty         |
| format          |
