'use strict';


const parseHeader = function (buffer) {
  const view = buffer.slice(0, 100);
  return {
    length: view.readInt32BE(6 << 2) << 1,
    version: view.readInt32LE(7 << 2),
    shpCode: view.readInt32LE(8 << 2),
    bbox: [
      view.readDoubleLE(9 << 2),
      view.readDoubleLE(11 << 2),
      view.readDoubleLE(13 << 2),
      view.readDoubleLE(13 << 2)
    ]
  };
};


module.exports = parseHeader;
