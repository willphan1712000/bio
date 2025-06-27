"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const w_1 = require("@willphan1712000/w");
const react_1 = require("react");
const options = [
    { label: 'Nodejs', value: 'Nodejs' },
    { label: 'Prisma', value: 'Prisma' },
    { label: 'React', value: 'React' },
];
const SingleSelect = () => {
    const [value, setValue] = (0, react_1.useState)([]);
    return (0, jsx_runtime_1.jsx)(w_1.Select, { options: options, type: 'single', change: setValue, value: value, size: '20' });
};
exports.default = SingleSelect;
