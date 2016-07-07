/*
 * LocalCookie.js
 * https://github.com/Wildtyto/LocalCookie.js
 *
 * Copyright (c) 2016 Wildtyto
 * Licensed under the MIT licenses.
 */

(function () {

    "use strict";

    var _self;
    var _localCookie;
    var _invalidKey = "=;expires=" + (new Date(1000)).toGMTString();

    (function () {

        LocalCookie.prototype = new Cookie();
        _localCookie = window.localCookie = new LocalCookie();

    }());

    function LocalCookie() {

        _self = this;
        _updateCookieDict();
        setInterval(_updateMissProperties, 900);

    }

    function Cookie() {

        this.getItem = _getItem;
        this.setItem = _setItem;
        this.removeItem = _removeItem;
        this.clear = _clear;
        Object.defineProperty(this, "length", {
                get: function () {
                        return document.cookie.split("; ").length;
                    }
            });

    }

    function _updateCookieDict() {

        var _cookieSplit = document.cookie.split("; ");
        var _numOfCookie = _cookieSplit.length;
        var _tempCookie;
        var _indexOfSymbol;
        while ( _numOfCookie-- ) {
            _tempCookie = _cookieSplit[_numOfCookie];
            _indexOfSymbol = _tempCookie.indexOf("=");
            _self[_tempCookie.slice(0, _indexOfSymbol)] = _tempCookie.slice(++_indexOfSymbol, _tempCookie.length);
        }

    }

    function _updateMissProperties() {

        Object.keys(_localCookie).forEach(_onForEach);
        _updateCookieDict();

        function _onForEach(_key) {
            _setItem(_key, _localCookie[_key]);
        }

    }

    function _getItem(_key) {

        var _split = ("; "+document.cookie).split("; "+_key+"=");
        if ( _split.length === 2 ) return _split.pop().split(";").shift();

    }

    function _setItem(_key, _value) {

        if ( _value === null || _value === undefined ) return;
        document.cookie = _key + "=" + _value;
        _localCookie[_key] = _value;

    }

    function _removeItem(_key) {

        document.cookie = _key + _invalidKey;
        delete _localCookie[_key];

    }

    function _clear() {
        
        Object.keys(_localCookie).forEach(_removeItem);

    }

}());