export class ObjectUtils {
    static recursiveAssign(...obj) {
        return obj.reduce((a, b) => ObjectUtils._recursiveAssign(a, b));
    }
    static _recursiveAssign(target, source) {
        target = target || {};
        source = source || {};
        for (const key in source) {
            const value = target[key];
            if (Array.isArray(value) || !(value instanceof Object)) {
                target[key] = source[key] || null;
            }
            else {
                ObjectUtils._recursiveAssign(target[key], source[key]);
            }
        }
        return target;
    }
    static prepareName(name) {
        if (Array.isArray(name)) {
            return name;
        }
        return name.split(".");
    }
    static getattr(obj, name = null, defaultValue = null) {
        let value = obj;
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
    static setattr(obj, name, value) {
        const preparedName = ObjectUtils.prepareName(name);
        let target = obj;
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
    static firstNonNull(...obj) {
        return obj.find(it => it != null);
    }
    static firstNonEmpty(...obj) {
        return obj.find(it => !ObjectUtils.isEmpty(it));
    }
    static isCallable(obj) {
        return obj instanceof Function;
    }
    static copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static strToBoolOrStr(str) {
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
    static zipToObject(keys, values) {
        const obj = {};
        if (keys.length !== values.length) {
            throw Error("errou parça");
        }
        for (let i = 0; i < keys.length; i += 1) {
            obj[keys[i]] = values[i];
        }
        return obj;
    }
    static isString(obj) {
        return typeof obj === 'string';
    }
    static isEmpty(obj) {
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
    static format(message, data) {
        let formatedMessage = message;
        let paramRegex = new RegExp("{([\\w\.\\(\\),]+)}", 'g');
        let result = null;
        while (true) {
            result = paramRegex.exec(message);
            if (!result) {
                break;
            }
            if (!(result[1] in data)) {
                continue;
            }
            formatedMessage = formatedMessage.replace(result[0], eval("data." + result[1]));
        }
        return formatedMessage;
    }
}
//# sourceMappingURL=ObjectUtils.js.map