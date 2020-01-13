# Common library for Typescript 

[![Build Status](https://travis-ci.org/OpenCIAg/ts-commons.svg?branch=master)](https://travis-ci.org/OpenCIAg/ts-commons)
[![Maintainability](https://api.codeclimate.com/v1/badges/b695f928499a34e1f7ae/maintainability)](https://codeclimate.com/github/OpenCIAg/ts-commons/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b695f928499a34e1f7ae/test_coverage)](https://codeclimate.com/github/OpenCIAg/ts-commons/test_coverage)
[![npm version](https://badge.fury.io/js/%40ciag%2Fcommons.svg)](https://badge.fury.io/js/%40ciag%2Fcommons)


## Object Utils
### [API](API.md)
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
| round           |

