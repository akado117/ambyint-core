!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Ambyint",[],e):"object"==typeof exports?exports.Ambyint=e():t.Ambyint=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=c(r(1)),a=c(r(2)),u=r(3);function c(t){return t&&t.__esModule?t:{default:t}}var s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.characters,n=e.locations,i=e.gridSize;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.reset({characters:r,locations:n,gridSize:i})}return i(t,[{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.characters,r=void 0===e?[]:e,i=t.locations,c=void 0===i?[]:i,s=t.gridSize,f=n(void 0===s?[]:s,2),l=f[0],d=f[1];this._grid=new o.default(l,d);var h=this._grid.getGrid(),v=h[0].length,y=h.length;for(var _ in this._characters=[],r){var g=c[_]||[(0,u.getRandomInt)(y),(0,u.getRandomInt)(v)],b=new a.default({character:r[_],startPoint:g});this._characters.push(b),this._grid.setObjectAtLocation(b,g)}}},{key:"report",value:function(t){return void 0!==t?this._characters[t]:this._characters}},{key:"turnLeft",value:function(t){return void 0!==t?this._characters[t].turnLeft():this._characters[0].turnLeft()}},{key:"turnRight",value:function(t){return void 0!==t?this._characters[t].turnRight():this._characters[0].turnRight()}},{key:"moveForward",value:function(t,e){var r=this._characters[e]||this._characters[0];return r.moveForward(t),!!this._grid.checkIfCoordsAreValid(r.getPosition())||(r.undueMove(),!1)}}]),t}();e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var o=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._grid=e&&r?this._buildGrid(e,r):this._buildGrid(100,100)}return i(t,[{key:"_buildGrid",value:function(t,e){for(var r=new Array(t),n=0;n<t;n++)r[n]=new Array(e);return r}},{key:"getGrid",value:function(){return this._grid}},{key:"setObjectAtLocation",value:function(t,e){var r=n(e,2),i=r[0],o=r[1];return!this._grid[i][o]&&(this._grid[i][o]=t,!0)}},{key:"removeObjectFromLocation",value:function(t){var e=n(t,2),r=e[0],i=e[1],o=this._grid[r][i];return this._grid[r][i]=void 0,o}},{key:"checkIfCoordsAreValid",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n(t,2),r=e[0],i=e[1],o=this._grid.length,a=this._grid[0].length;return!(r<0||r>=o)&&!(i<0||i>=a)}}]),t}();e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var i=["north","east","south","west"],o=i.length-1,a={north:[0,1],east:[1,0],south:[0,-1],west:[-1,0]},u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.startPoint,n=e.direction,o=e.character;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._loc=r||[],this._prevLoc=[0,0],"string"==typeof n?(this._dir=n.toLowerCase(),this._dirIdx=i.indexOf(n.toLowerCase())):(this._dirIdx=Math.floor(4*Math.random()),this._dir=i[this._dirIdx]),this._character=o}return n(t,[{key:"getPosition",value:function(){return this._loc}},{key:"getDirection",value:function(){return this._dir}},{key:"getCharacter",value:function(){return this._character}},{key:"turnLeft",value:function(){0===this._dirIdx?this._dirIdx=o:this._dirIdx-=1,this._dir=i[this._dirIdx]}},{key:"turnRight",value:function(){this._dirIdx===o?this._dirIdx=0:this._dirIdx+=1,this._dir=i[this._dirIdx]}},{key:"moveForward",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._prevLoc=this._loc;for(var e=[],r=a[this._dir],n=0;n<2;n++)e[n]=this._loc[n]+r[n]*t;this._loc=e}},{key:"undueMove",value:function(){this._loc=this._prevLoc}}]),t}();e.default=u},function(t,e,r){"use strict";function n(t){return Math.floor(Math.random()*t)}Object.defineProperty(e,"__esModule",{value:!0}),e.getRandomInt=n,e.default=n}])});