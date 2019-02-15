"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_eosjs=_interopRequireDefault(require("eosjs")),symEosClient=Symbol("sym::EosClient"),symGetIdentity=Symbol("sym::GetIdentity"),EOSProvider=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a)}return(0,_createClass2.default)(a,[{key:"getIdentity",/**
     * getIdentity of cur scatter user
     * @return {Promise<{Identity}>}
     */value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!this[symGetIdentity]){a.next=4;break}return a.abrupt("return",symGetIdentity());case 4:throw new Error("method not yet implemented: this interface should be implement by the specific class.");case 5:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()/**
     * get auth structure from identity
     * @return {Object} - { authorization : [ 'name@authority' ] }
     */},{key:"getAuth",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){var b;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.getIdentity();case 2:return b=a.sent,a.abrupt("return",{authorization:["".concat(b.name,"@").concat(b.authority)]});case 4:case"end":return a.stop();}},a,this)}));return function b(){return a.apply(this,arguments)}}()},{key:"initFromConf",value:function c(a,b){if(a){var d=(0,_eosjs.default)(a);this[symEosClient]=function(){return d}}b&&(this[symGetIdentity]=b)}},{key:"eosClient",/**
     * get or create scatter
     * @return {eosAPI}
     */get:function a(){if(this[symEosClient])return symEosClient();throw new Error("method not yet implemented: this interface should be implement by the specific class.")}}]),a}();exports.default=EOSProvider;