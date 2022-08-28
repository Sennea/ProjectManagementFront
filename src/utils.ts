export function convertArrayToObject(array: Array<any>, key: string) {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  }

  export function orderObjectByKeys(object: {[key: string]: any}){
      return Object.keys(object).sort().reduce(
        (obj: any, key: string) => { 
        obj[key] = object[key]; 
        return obj;
        }, 
    {}
  )
}