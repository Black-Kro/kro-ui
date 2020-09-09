global.window = {};
global.localStorage = {
    getItem() {}
};

const fs = require('fs');
const path = require('path');
const { Metadata } = require('../dist/index.common');

const tags = {};
const attributes = {};

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

/**
 * Generate Tags
 */
for (let component of Object.keys(Metadata)) {
    tags[toSnakeCase(Metadata[component].title)] = {
        attributes: Metadata[component].props ? Metadata[component].props.map(obj => obj.name) : [],
        description: Metadata[component].description,
    }

    if (Metadata[component].props) {
        for (let prop of Metadata[component].props) {
            attributes[`${toSnakeCase(Metadata[component].title)}/${prop.name}`] = {
                description: prop.description,
                type: prop.type
            }
        }
    }
}

fs.mkdirSync(path.resolve(__dirname, '../dist/vetur'));
fs.writeFileSync(path.resolve(__dirname, '../dist/vetur/attributes.json'), JSON.stringify(attributes));
fs.writeFileSync(path.resolve(__dirname, '../dist/vetur/tags.json'), JSON.stringify(tags));
