const numeral = require("numeral");

export const formatNumber = (NUMBER, { point = true } = {}) => {
  if (typeof NUMBER === "string") {
    NUMBER = Number(NUMBER);
  }
  NUMBER = Math.floor(NUMBER * 100) / 100;
  if (point) {
    return numeral(NUMBER).format("0,0.00");
  } else {
    return numeral(NUMBER).format("0,0");
  }
};
