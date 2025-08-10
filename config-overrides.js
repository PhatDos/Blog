//file cau hinh web-pack without eject

const { override, useBabelRc } = require("customize-cra");

module.exports = override(useBabelRc());
