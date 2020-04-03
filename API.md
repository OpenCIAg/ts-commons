<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [ts-commons](#ts-commons)
  - [Index](#index)
    - [Classes](#classes)
- [Classes](#classes-1)
  - [Class: ObjectUtils](#class-objectutils)
    - [Hierarchy](#hierarchy)
    - [Index](#index-1)
    - [Methods](#methods)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="globalsmd"></a>

[ts-commons](README.md) › [Globals](#globalsmd)

# ts-commons

## Index

### Classes

* [ObjectUtils](#classesobjectutilsmd)

# Classes


<a name="classesobjectutilsmd"></a>

[ts-commons](../README.md) › [Globals](#globalsmd) › [ObjectUtils](#classesobjectutilsmd)

## Class: ObjectUtils

### Hierarchy

* **ObjectUtils**

### Index

#### Methods

* [copy](#static-copy)
* [firstNonEmpty](#static-firstnonempty)
* [firstNonNull](#static-firstnonnull)
* [format](#static-format)
* [getattr](#static-getattr)
* [isCallable](#static-iscallable)
* [isEmpty](#static-isempty)
* [isString](#static-isstring)
* [recursiveAssign](#static-recursiveassign)
* [round](#static-round)
* [setattr](#static-setattr)
* [strToBoolOrStr](#static-strtoboolorstr)
* [zipToObject](#static-ziptoobject)

### Methods

#### `Static` copy

▸ **copy**(`obj`: any): *any*

*Defined in [object-utils.ts:114](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L114)*

Function used to copy an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | An any variable |

**Returns:** *any*

a copy of the object

___

#### `Static` firstNonEmpty

▸ **firstNonEmpty**(...`obj`: Array‹any›): *any*

*Defined in [object-utils.ts:96](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L96)*

Function used to get first things not empty.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...obj` | Array‹any› | An array of any |

**Returns:** *any*

first not empty

___

#### `Static` firstNonNull

▸ **firstNonNull**(...`obj`: Array‹any›): *any*

*Defined in [object-utils.ts:87](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L87)*

Function used to get first things not null.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...obj` | Array‹any› | An array of any |

**Returns:** *any*

first not null

___

#### `Static` format

▸ **format**(`message`: string, `data`: any): *string*

*Defined in [object-utils.ts:197](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L197)*

Function used to format an string.
Example:
  message = It's {value}
  data = { value: "works" }
  return It's works

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | A string |
`data` | any | An any |

**Returns:** *string*

formated message

___

#### `Static` getattr

▸ **getattr**(`obj`: any, `name`: string | null | Array‹string›, `defaultValue`: any): *any*

*Defined in [object-utils.ts:39](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L39)*

Function used to get an attr inside an object.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`obj` | any | - | An any |
`name` | string &#124; null &#124; Array‹string› | null | An string or an Array<string> |
`defaultValue` | any | null | An any |

**Returns:** *any*

if the values is null return the defaultValue, if not return found value

___

#### `Static` isCallable

▸ **isCallable**(`obj`: any): *Boolean*

*Defined in [object-utils.ts:105](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L105)*

Function used to check if something is calleble.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | An any variable |

**Returns:** *Boolean*

true or false depends of the obj

___

#### `Static` isEmpty

▸ **isEmpty**(`obj`: any): *boolean*

*Defined in [object-utils.ts:168](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L168)*

Function used to check if something is empty.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | An any variable |

**Returns:** *boolean*

boolean

___

#### `Static` isString

▸ **isString**(`obj`: any): *boolean*

*Defined in [object-utils.ts:159](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L159)*

Function used to check if a variable is string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | An any variable |

**Returns:** *boolean*

boolean

___

#### `Static` recursiveAssign

▸ **recursiveAssign**(...`obj`: Array‹any›): *any*

*Defined in [object-utils.ts:7](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L7)*

Function used to assign recursively objects at target.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...obj` | Array‹any› | An Array<any> |

**Returns:** *any*

target object with values of the sources objects

___

#### `Static` round

▸ **round**(`num`: number, `len?`: number): *number*

*Defined in [object-utils.ts:229](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L229)*

Function used to rounds a number

**`example`** <caption>Example usage of round without len.</caption>
```typescript
// returns 3.59
ObjectUtils.round(3.5892222);
```

**`example`** <caption>Example usage of round with len.</caption>
```typescript
// returns 3.589
ObjectUtils.round(3.5892222,3);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`num` | number | A number |
`len?` | number | Number of characters after the comma |

**Returns:** *number*

Formated number

___

#### `Static` setattr

▸ **setattr**(`obj`: any, `name`: string | Array‹string›, `value`: any): *boolean*

*Defined in [object-utils.ts:67](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L67)*

Function used to set an attr inside an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`obj` | any | An any |
`name` | string &#124; Array‹string› | An string or an Array<string> |
`value` | any | An any |

**Returns:** *boolean*

false if obj is null or undefined

___

#### `Static` strToBoolOrStr

▸ **strToBoolOrStr**(`str`: any): *Boolean | string*

*Defined in [object-utils.ts:123](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L123)*

Function used to check if an string is bool or is just a string.

**Parameters:**

Name | Type |
------ | ------ |
`str` | any |

**Returns:** *Boolean | string*

Boolean or string

___

#### `Static` zipToObject

▸ **zipToObject**(`keys`: Array‹string›, `values`: Array‹any›): *any*

*Defined in [object-utils.ts:143](https://github.com/Carlos-Benedetti/ts-commons/blob/bfd95d1/src/object-utils.ts#L143)*

Function used to mount an object with two arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keys` | Array‹string› | Array of string. |
`values` | Array‹any› | Array of any. |

**Returns:** *any*

An object
