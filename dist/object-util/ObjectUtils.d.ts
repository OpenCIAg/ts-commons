export declare class ObjectUtils {
    static recursiveAssign(...obj: Array<any>): any;
    private static _recursiveAssign(target, source);
    protected static prepareName(name: string | Array<string>): Array<string>;
    static getattr(obj: any, name?: string | null | Array<string>, defaultValue?: any): any;
    static setattr(obj: any, name: string | Array<string>, value: any): void;
    static firstNonNull(...obj: Array<any>): any;
    static firstNonEmpty(...obj: Array<any>): any;
    static isCallable(obj: any): Boolean;
    static copy(obj: any): any;
    static strToBoolOrStr(str: any): Boolean | string;
    static zipToObject(keys: Array<string>, values: Array<any>): any;
    static isString(obj: any): boolean;
    static isEmpty(obj: any): boolean;
    static format(message: string, data: any): string;
}
