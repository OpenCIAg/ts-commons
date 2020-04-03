export class ObjectUtils {
    /**
     * Function used to assign recursively objects at target.
     * @param obj An Array<any>
     * @returns target object with values of the sources objects
    */
    static recursiveAssign(...obj: Array<any>) {
      return obj.reduce((a, b) => ObjectUtils._recursiveAssign(a, b));
    }
  
    private static _recursiveAssign(target: any, source: any): any {
      target = target || {};
      source = source || {};
      for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) || !(targetValue instanceof Object) || !(sourceValue instanceof Object)) {
          target[key] = source[key] || null;
          continue;
        }

        ObjectUtils._recursiveAssign(targetValue, sourceValue);
      }
      return target;
    }
  
    protected static prepareName(name: string | Array<string>): Array<string> {
      if (Array.isArray(name)) {
        return name;
      }
      return name.split(".");
    }
  
    /**
     * Function used to get an attr inside an object.
     * @param obj An any
     * @param name An string or an Array<string>
     * @param defaultValue An any
     * @returns if the values is null return the defaultValue, if not return found value
    */
    static getattr(
      obj: any,
      name: string | null | Array<string> = null,
      defaultValue: any = null
    ): any {
      let value: any = obj;
      if (name === null || name.length === 0) {
        return obj;
      }
      for (const key of ObjectUtils.prepareName(name)) {
        if (value === undefined || value === null) {
          return defaultValue;
        }
        value = value[key];
      }
      if (value === undefined) {
        return defaultValue;
      }
      return value;
    }
  
    /**
     * Function used to set an attr inside an object.
     * @param obj An any
     * @param name An string or an Array<string>
     * @param value An any
     * @returns false if obj is null or undefined
    */
    static setattr(obj: any, name: string | Array<string>, value: any) {
      const preparedName = ObjectUtils.prepareName(name);
      let target: any = obj;
      if (target === undefined || target === null) {
        return false;
      }
      for (const key of preparedName.slice(0, -1)) {
        if (!(key in target)) {
          target[key] = {};
        }
        target = target[key];
      }
      target[preparedName.slice(-1)[0]] = value;
    }
  
    /**
     * Function used to get first things not null.
     * @param obj An array of any
     * @returns first not null
    */
    static firstNonNull(...obj: Array<any>) {
      return obj.find(it => it != null);
    }
  
     /**
     * Function used to get first things not empty.
     * @param obj An array of any
     * @returns first not empty
    */
    static firstNonEmpty(...obj: Array<any>) {
      return obj.find(it => !ObjectUtils.isEmpty(it));
    }
  
    /**
     * Function used to check if something is calleble.
     * @param obj An any variable
     * @returns true or false depends of the obj
    */
    static isCallable(obj: any): Boolean {
      return obj instanceof Function;
    }
  
    /**
     * Function used to copy an object.
     * @param obj An any variable
     * @returns a copy of the object
    */
    static copy(obj: any): any {
      return JSON.parse(JSON.stringify(obj));
    }
  
    /**
     * Function used to check if an string is bool or is just a string.
     * @param obj An any variable
     * @returns Boolean or string
    */
    static strToBoolOrStr(str: any): Boolean | string {
      if ([true, false].indexOf(str) !== -1) {
        return str;
      }
      const lower = str.toLowerCase();
      if (lower === "true") {
        return true;
      }
      if (lower === "false") {
        return false;
      }
      return str;
    }
  
    /**
     * Function used to mount an object with two arrays.
     * @param keys Array of string.
     * @param values Array of any.
     * @returns An object
    */
    static zipToObject(keys: Array<string>, values: Array<any>): any {
      const obj: any = {};
      if (keys.length !== values.length) {
        throw Error();
      }
      for (let i = 0; i < keys.length; i += 1) {
        obj[keys[i]] = values[i];
      }
      return obj;
    }
  
    /**
     * Function used to check if a variable is string.
     * @param obj An any variable
     * @returns boolean
    */
    static isString(obj: any): boolean {
      return typeof obj === 'string';
    }
  
    /**
     * Function used to check if something is empty.
     * @param obj An any variable
     * @returns boolean
    */
    static isEmpty(obj: any): boolean {
      if (obj === null || obj === undefined) {
        return true;
      }
      if (obj.length !== undefined && obj.length > 0) {
        return false;
      }
      if (obj.length !== undefined && obj.length === 0) {
        return true;
      }
      if (obj === 0) {
        return true;
      }
      if (Object.keys(obj).length === 0) {
        return true;
      }
      return false;
    }

    /**
     * Function used to format an string.
     * Example: 
     *   message = It's {value}
     *   data = { value: "works" }
     *   return It's works
     * @param message A string
     * @param data An any
     * @returns formated message
    */
    static format(message : string, data : any) {
      let formatedMessage = message;
      let paramRegex = new RegExp("{([\\w\.\\(\\),]+)}", 'g');
      let result: any = null;
      while(true) {
        result = paramRegex.exec(message);
        if(!result) { break; }
        let value = ObjectUtils.getattr(data, result[1]);
        if(value === undefined) { continue; }
        formatedMessage = formatedMessage.replace(result[0],eval("data." + result[1]));
      }
      return formatedMessage;
    }

    /**
     * Function used to rounds a number
     *
     * @example  <caption>Example usage of round without len.</caption>
     * ```typescript
     * // returns 3.59
     * ObjectUtils.round(3.5892222);
     * ```
     *
     * @example  <caption>Example usage of round with len.</caption>
     * ```typescript
     * // returns 3.589
     * ObjectUtils.round(3.5892222,3);
     * ```
     * @param {number} num A number
     * @param {number} len Number of characters after the comma
     * @returns {number} Formated number
    */
    static round(num: number, len?: number): number {
      len = len || 2;
      return Number(Math.round(Number(num + 'e' + len)) + 'e-' + len);
    }
}
