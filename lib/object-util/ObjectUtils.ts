export class ObjectUtils {
    static recursiveAssign(...obj: Array<any>) {
      return obj.reduce((a, b) => ObjectUtils._recursiveAssign(a, b));
    }
  
    private static _recursiveAssign(target: any, source: any): any {
      target = target || {};
      source = source || {};
      for (const key in source) {
        const value = target[key];
        if (Array.isArray(value) || !(value instanceof Object)) {
          target[key] = source[key] || null;
        } else {
          ObjectUtils._recursiveAssign(target[key], source[key]);
        }
      }
      return target;
    }
  
    protected static prepareName(name: string | Array<string>): Array<string> {
      if (Array.isArray(name)) {
        return name;
      }
      return name.split(".");
    }
  
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
  
    static setattr(obj: any, name: string | Array<string>, value: any) {
      const preparedName = ObjectUtils.prepareName(name);
      let target: any = obj;
      for (const key of preparedName.slice(0, -1)) {
        if (target === undefined || target === null) {
          return;
        }
        if (!(key in target)) {
          target[key] = {};
        }
        target = target[key];
      }
      target[preparedName.slice(-1)[0]] = value;
    }
  
    static firstNonNull(...obj: Array<any>) {
      return obj.find(it => it != null);
    }
  
    static firstNonEmpty(...obj: Array<any>) {
      return obj.find(it => !ObjectUtils.isEmpty(it));
    }
  
    static isCallable(obj: any): Boolean {
      return obj instanceof Function;
    }
  
    static copy(obj: any): any {
      return JSON.parse(JSON.stringify(obj));
    }
  
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
  
    static zipToObject(keys: Array<string>, values: Array<any>): any {
      const obj: any = {};
      if (keys.length !== values.length) {
        throw Error("errou parça");
      }
      for (let i = 0; i < keys.length; i += 1) {
        obj[keys[i]] = values[i];
      }
      return obj;
    }
  
    static isString(obj: any): boolean {
      return typeof obj === 'string';
    }
  
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
      if (Object.keys(obj).length > 0) {
        return false;
      }
      return false;
    }
  
    static format(message : string, data : any) {
      let formatedMessage = message;
      let paramRegex = new RegExp("{([\\w\.\\(\\),]+)}", 'g');
      let result: any = null;
      while(true) {
        result = paramRegex.exec(message);
        if(!result) { break; }
        if(!(result[1] in data)) { continue; }
        formatedMessage = formatedMessage.replace(result[0],eval("data." + result[1]));
      }
      return formatedMessage;
    }
  }
  