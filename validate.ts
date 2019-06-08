const HtmlValidate = require("html-validate").HtmlValidate;
const formatter = require("html-validate/build/formatters/stylish");

const htmlvalidate = new HtmlValidate();
const report = htmlvalidate.validateFile("files/invalid.md");
console.log(formatter(report.results));
