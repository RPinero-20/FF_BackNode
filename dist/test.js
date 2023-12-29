"use strict";
function renameKeys(obj, keyMap) {
    const renamedObj = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (keyMap.hasOwnProperty(key)) {
                renamedObj[keyMap[key]] = obj[key];
            }
            else {
                renamedObj[key] = obj[key];
            }
        }
    }
    return renamedObj;
}
const firstObject = {
    id: 2,
    name: 'Herramientas Eléctricas',
    imageUrl: 'https://picsum.photos/1440/900',
};
const keyMap = {
    id: 'sectionId',
    name: 'sectionName',
    imageUrl: 'sectionImageUrl',
};
const renamedObject = renameKeys(firstObject, keyMap);
console.log(renamedObject);
//# sourceMappingURL=test.js.map