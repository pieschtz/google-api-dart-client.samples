function Isolate() {}
init();

var $$ = {};
var $ = Isolate.$isolateProperties;
$$.DurationImplementation = {"":
 ["inMilliseconds?"],
 super: "Object",
 toString$0: function() {
  var t1 = new $.Closure47();
  var t2 = new $.Closure48();
  var t3 = this.inMilliseconds;
  if ($.ltB(t3, 0)) return '-' + $.S($.DurationImplementation$5(0, 0, 0, 0, $.neg(t3)));
  var twoDigitMinutes = t2.$call$1($.remainder(this.get$inMinutes(), 60));
  var twoDigitSeconds = t2.$call$1($.remainder(this.get$inSeconds(), 60));
  var threeDigitMs = t1.$call$1($.remainder(t3, 1000));
  return $.S(this.get$inHours()) + ':' + $.S(twoDigitMinutes) + ':' + $.S(twoDigitSeconds) + '.' + $.S(threeDigitMs);
 },
 compareTo$1: function(other) {
  return $.compareTo(this.inMilliseconds, other.get$inMilliseconds());
 },
 hashCode$0: function() {
  return $.hashCode(this.inMilliseconds);
 },
 operator$eq$1: function(other) {
  if (!((typeof other === 'object') && !!other.is$Duration)) return false;
  return $.eq(this.inMilliseconds, other.get$inMilliseconds());
 },
 get$inSeconds: function() {
  return $.tdiv(this.inMilliseconds, 1000);
 },
 get$inMinutes: function() {
  return $.tdiv(this.inMilliseconds, 60000);
 },
 get$inHours: function() {
  return $.tdiv(this.inMilliseconds, 3600000);
 },
 is$Duration: true
};

$$.ExceptionImplementation = {"":
 ["_msg"],
 super: "Object",
 toString$0: function() {
  var t1 = this._msg;
  return t1 === (void 0) ? 'Exception' : 'Exception: ' + $.S(t1);
 },
 is$Exception: true
};

$$.FutureImpl = {"":
 ["_completionListeners", "_exceptionHandlers", "_successListeners", "_exceptionHandled", "_stackTrace", "_exception", "_value", "_isComplete"],
 super: "Object",
 chain$1: function(transformation) {
  var t1 = ({});
  t1.transformation_10 = transformation;
  var completer = $.CompleterImpl$0();
  this.handleException$1(new $.Closure29(completer));
  this.then$1(new $.Closure30(completer, t1));
  return completer.get$future();
 },
 transform$1: function(transformation) {
  var t1 = ({});
  t1.transformation_1 = transformation;
  var completer = $.CompleterImpl$0();
  this.handleException$1(new $.Closure10(completer));
  this.then$1(new $.Closure11(completer, t1));
  return completer.get$future();
 },
 _setException$2: function(exception, stackTrace) {
  if (exception === (void 0)) throw $.captureStackTrace($.IllegalArgumentException$1((void 0)));
  if (this._isComplete === true) throw $.captureStackTrace($.FutureAlreadyCompleteException$0());
  this._exception = exception;
  this._stackTrace = stackTrace;
  this._complete$0();
 },
 _setValue$1: function(value) {
  if (this._isComplete === true) throw $.captureStackTrace($.FutureAlreadyCompleteException$0());
  this._value = value;
  this._complete$0();
 },
 _complete$0: function() {
  this._isComplete = true;
  try {
    if (!(this._exception === (void 0))) {
      for (var t1 = $.iterator(this._exceptionHandlers); t1.hasNext$0() === true; ) {
        var handler = t1.next$0();
        if ($.eqB(handler.$call$1(this._exception), true)) {
          this._exceptionHandled = true;
          break;
        }
      }
    }
    if (this.get$hasValue() === true) {
      for (t1 = $.iterator(this._successListeners); t1.hasNext$0() === true; ) {
        var listener = t1.next$0();
        listener.$call$1(this.get$value());
      }
    } else {
      if (this._exceptionHandled !== true && $.gtB($.get$length(this._successListeners), 0)) throw $.captureStackTrace(this._exception);
    }
  } finally {
    for (t1 = $.iterator(this._completionListeners); t1.hasNext$0() === true; ) {
      var listener0 = t1.next$0();
      try {
        listener0.$call$1(this);
      } catch (exception) {
        $.unwrapException(exception);
      }
    }
  }
 },
 onComplete$1: function(complete) {
  if (this._isComplete === true) {
    try {
      complete.$call$1(this);
    } catch (exception) {
      $.unwrapException(exception);
    }
  } else $.add$1(this._completionListeners, complete);
 },
 handleException$1: function(onException) {
  if (this._exceptionHandled === true) return;
  if (this._isComplete === true) {
    if (!$.eqNullB(this._exception)) this._exceptionHandled = onException.$call$1(this._exception);
  } else $.add$1(this._exceptionHandlers, onException);
 },
 then$1: function(onSuccess) {
  if (this.get$hasValue() === true) onSuccess.$call$1(this.get$value());
  else {
    if (this.get$isComplete() !== true) $.add$1(this._successListeners, onSuccess);
    else {
      if (this._exceptionHandled !== true) throw $.captureStackTrace(this._exception);
    }
  }
 },
 get$hasValue: function() {
  return this.get$isComplete() === true && this._exception === (void 0);
 },
 get$isComplete: function() {
  return this._isComplete;
 },
 get$exception: function() {
  if (this.get$isComplete() !== true) throw $.captureStackTrace($.FutureNotCompleteException$0());
  return this._exception;
 },
 get$value: function() {
  if (this.get$isComplete() !== true) throw $.captureStackTrace($.FutureNotCompleteException$0());
  var t1 = this._exception;
  if (!(t1 === (void 0))) throw $.captureStackTrace(t1);
  return this._value;
 }
};

$$.CompleterImpl = {"":
 ["_futureImpl"],
 super: "Object",
 completeException$2: function(exception, stackTrace) {
  this._futureImpl._setException$2(exception, stackTrace);
 },
 completeException$1: function(exception) {
  return this.completeException$2(exception,(void 0))
},
 complete$1: function(value) {
  this._futureImpl._setValue$1(value);
 },
 get$future: function() {
  return this._futureImpl;
 }
};

$$.HashMapImplementation = {"":
 ["_numberOfDeleted", "_numberOfEntries", "_loadLimit", "_values", "_keys?"],
 super: "Object",
 toString$0: function() {
  return $.mapToString(this);
 },
 containsKey$1: function(key) {
  return !$.eqB(this._probeForLookup$1(key), -1);
 },
 forEach$1: function(f) {
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number') return this.forEach$1$bailout(1, f, length$);
  for (var i = 0; i < length$; ++i) {
    var key = $.index(this._keys, i);
    !(key === (void 0)) && !(key === $.CTC6) && f.$call$2(key, $.index(this._values, i));
  }
 },
 forEach$1$bailout: function(state, f, length$) {
  for (var i = 0; $.ltB(i, length$); ++i) {
    var key = $.index(this._keys, i);
    !(key === (void 0)) && !(key === $.CTC6) && f.$call$2(key, $.index(this._values, i));
  }
 },
 get$length: function() {
  return this._numberOfEntries;
 },
 isEmpty$0: function() {
  return $.eq(this._numberOfEntries, 0);
 },
 remove$1: function(key) {
  var index = this._probeForLookup$1(key);
  if ($.geB(index, 0)) {
    this._numberOfEntries = $.sub(this._numberOfEntries, 1);
    var value = $.index(this._values, index);
    $.indexSet(this._values, index, (void 0));
    $.indexSet(this._keys, index, $.CTC6);
    this._numberOfDeleted = $.add(this._numberOfDeleted, 1);
    return value;
  }
  return;
 },
 operator$index$1: function(key) {
  var index = this._probeForLookup$1(key);
  if (typeof index !== 'number') return this.operator$index$1$bailout(1, index, 0);
  if (index < 0) return;
  var t1 = this._values;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(2, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      index = env0;
      break;
    case 2:
      t1 = env0;
      index = env1;
      break;
  }
  switch (state) {
    case 0:
      var index = this._probeForLookup$1(key);
    case 1:
      state = 0;
      if ($.ltB(index, 0)) return;
      var t1 = this._values;
    case 2:
      state = 0;
      return $.index(t1, index);
  }
 },
 operator$indexSet$2: function(key, value) {
  this._ensureCapacity$0();
  var index = this._probeForAdding$1(key);
  if ($.index(this._keys, index) === (void 0) || $.index(this._keys, index) === $.CTC6) this._numberOfEntries = $.add(this._numberOfEntries, 1);
  $.indexSet(this._keys, index, key);
  $.indexSet(this._values, index, value);
 },
 clear$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number') return this.clear$0$bailout(1, length$);
  for (var i = 0; i < length$; ++i) {
    $.indexSet(this._keys, i, (void 0));
    $.indexSet(this._values, i, (void 0));
  }
 },
 clear$0$bailout: function(state, length$) {
  for (var i = 0; $.ltB(i, length$); ++i) {
    $.indexSet(this._keys, i, (void 0));
    $.indexSet(this._values, i, (void 0));
  }
 },
 _grow$1: function(newCapacity) {
  var capacity = $.get$length(this._keys);
  if (typeof capacity !== 'number') return this._grow$1$bailout(1, newCapacity, capacity, 0, 0);
  this._loadLimit = $._computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  if (typeof oldKeys !== 'string' && (typeof oldKeys !== 'object' || (oldKeys.constructor !== Array && !oldKeys.is$JavaScriptIndexingBehavior()))) return this._grow$1$bailout(2, newCapacity, oldKeys, capacity, 0);
  var oldValues = this._values;
  if (typeof oldValues !== 'string' && (typeof oldValues !== 'object' || (oldValues.constructor !== Array && !oldValues.is$JavaScriptIndexingBehavior()))) return this._grow$1$bailout(3, newCapacity, oldKeys, oldValues, capacity);
  this._keys = $.List(newCapacity);
  var t1 = $.List(newCapacity);
  $.setRuntimeTypeInfo(t1, ({E: 'V'}));
  this._values = t1;
  for (var i = 0; i < capacity; ++i) {
    t1 = oldKeys.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = oldKeys[i];
    if (t2 === (void 0) || t2 === $.CTC6) continue;
    t1 = oldValues.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t3 = oldValues[i];
    var newIndex = this._probeForAdding$1(t2);
    $.indexSet(this._keys, newIndex, t2);
    $.indexSet(this._values, newIndex, t3);
  }
  this._numberOfDeleted = 0;
 },
 _grow$1$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var newCapacity = env0;
      capacity = env1;
      break;
    case 2:
      newCapacity = env0;
      oldKeys = env1;
      capacity = env2;
      break;
    case 3:
      newCapacity = env0;
      oldKeys = env1;
      oldValues = env2;
      capacity = env3;
      break;
  }
  switch (state) {
    case 0:
      var capacity = $.get$length(this._keys);
    case 1:
      state = 0;
      this._loadLimit = $._computeLoadLimit(newCapacity);
      var oldKeys = this._keys;
    case 2:
      state = 0;
      var oldValues = this._values;
    case 3:
      state = 0;
      this._keys = $.List(newCapacity);
      var t1 = $.List(newCapacity);
      $.setRuntimeTypeInfo(t1, ({E: 'V'}));
      this._values = t1;
      for (var i = 0; $.ltB(i, capacity); ++i) {
        var key = $.index(oldKeys, i);
        if (key === (void 0) || key === $.CTC6) continue;
        var value = $.index(oldValues, i);
        var newIndex = this._probeForAdding$1(key);
        $.indexSet(this._keys, newIndex, key);
        $.indexSet(this._values, newIndex, value);
      }
      this._numberOfDeleted = 0;
  }
 },
 _ensureCapacity$0: function() {
  var newNumberOfEntries = $.add(this._numberOfEntries, 1);
  if ($.geB(newNumberOfEntries, this._loadLimit)) {
    this._grow$1($.mul($.get$length(this._keys), 2));
    return;
  }
  var numberOfFree = $.sub($.sub($.get$length(this._keys), newNumberOfEntries), this._numberOfDeleted);
  $.gtB(this._numberOfDeleted, numberOfFree) && this._grow$1($.get$length(this._keys));
 },
 _probeForLookup$1: function(key) {
  var hash = $._firstProbe($.hashCode(key), $.get$length(this._keys));
  for (var numberOfProbes = 1; true; ) {
    var existingKey = $.index(this._keys, hash);
    if (existingKey === (void 0)) return -1;
    if ($.eqB(existingKey, key)) return hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $._nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    numberOfProbes = numberOfProbes0;
  }
 },
 _probeForAdding$1: function(key) {
  var hash = $._firstProbe($.hashCode(key), $.get$length(this._keys));
  if (hash !== (hash | 0)) return this._probeForAdding$1$bailout(1, key, hash);
  for (var numberOfProbes = 1, insertionIndex = -1; true; ) {
    var existingKey = $.index(this._keys, hash);
    if (existingKey === (void 0)) {
      if ($.ltB(insertionIndex, 0)) return hash;
      return insertionIndex;
    }
    if ($.eqB(existingKey, key)) return hash;
    if ($.ltB(insertionIndex, 0) && $.CTC6 === existingKey) insertionIndex = hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $._nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    numberOfProbes = numberOfProbes0;
  }
 },
 _probeForAdding$1$bailout: function(state, key, hash) {
  for (var numberOfProbes = 1, insertionIndex = -1; true; ) {
    var existingKey = $.index(this._keys, hash);
    if (existingKey === (void 0)) {
      if ($.ltB(insertionIndex, 0)) return hash;
      return insertionIndex;
    }
    if ($.eqB(existingKey, key)) return hash;
    if ($.ltB(insertionIndex, 0) && $.CTC6 === existingKey) insertionIndex = hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $._nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    numberOfProbes = numberOfProbes0;
  }
 },
 HashMapImplementation$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = $._computeLoadLimit(8);
  this._keys = $.List(8);
  var t1 = $.List(8);
  $.setRuntimeTypeInfo(t1, ({E: 'V'}));
  this._values = t1;
 },
 is$Map: function() { return true; }
};

$$.HashSetImplementation = {"":
 ["_backingMap?"],
 super: "Object",
 toString$0: function() {
  return $.collectionToString(this);
 },
 iterator$0: function() {
  var t1 = $.HashSetIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  return t1;
 },
 get$length: function() {
  return $.get$length(this._backingMap);
 },
 isEmpty$0: function() {
  return $.isEmpty(this._backingMap);
 },
 filter$1: function(f) {
  var t1 = ({});
  t1.f_13 = f;
  var result = $.HashSetImplementation$0();
  $.setRuntimeTypeInfo(result, ({E: 'E'}));
  t1.result_2 = result;
  $.forEach(this._backingMap, new $.Closure62(t1));
  return t1.result_2;
 },
 forEach$1: function(f) {
  var t1 = ({});
  t1.f_12 = f;
  $.forEach(this._backingMap, new $.Closure61(t1));
 },
 addAll$1: function(collection) {
  $.forEach(collection, new $.Closure60(this));
 },
 remove$1: function(value) {
  if (this._backingMap.containsKey$1(value) !== true) return false;
  this._backingMap.remove$1(value);
  return true;
 },
 contains$1: function(value) {
  return this._backingMap.containsKey$1(value);
 },
 add$1: function(value) {
  var t1 = this._backingMap;
  if (typeof t1 !== 'object' || ((t1.constructor !== Array || !!t1.immutable$list) && !t1.is$JavaScriptIndexingBehavior())) return this.add$1$bailout(1, t1, value);
  if (value !== (value | 0)) throw $.iae(value);
  var t2 = t1.length;
  if (value < 0 || value >= t2) throw $.ioore(value);
  t1[value] = value;
 },
 add$1$bailout: function(state, t1, value) {
  $.indexSet(t1, value, value);
 },
 clear$0: function() {
  $.clear(this._backingMap);
 },
 HashSetImplementation$0: function() {
  this._backingMap = $.HashMapImplementation$0();
 },
 is$Collection: function() { return true; }
};

$$.HashSetIterator = {"":
 ["_nextValidIndex", "_entries"],
 super: "Object",
 _advance$0: function() {
  var t1 = this._entries;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this._advance$0$bailout(1, t1);
  var length$ = t1.length;
  var entry = (void 0);
  do {
    var t2 = $.add(this._nextValidIndex, 1);
    this._nextValidIndex = t2;
    if ($.geB(t2, length$)) break;
    t2 = this._nextValidIndex;
    if (t2 !== (t2 | 0)) throw $.iae(t2);
    var t3 = t1.length;
    if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
    entry = t1[t2];
  } while ((entry === (void 0) || entry === $.CTC6));
 },
 _advance$0$bailout: function(state, t1) {
  var length$ = $.get$length(t1);
  var entry = (void 0);
  do {
    var t2 = $.add(this._nextValidIndex, 1);
    this._nextValidIndex = t2;
    if ($.geB(t2, length$)) break;
    entry = $.index(t1, this._nextValidIndex);
  } while ((entry === (void 0) || entry === $.CTC6));
 },
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var t1 = this._entries;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.next$0$bailout(1, t1);
  var t2 = this._nextValidIndex;
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  var t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  t2 = t1[t2];
  this._advance$0();
  return t2;
 },
 next$0$bailout: function(state, t1) {
  var res = $.index(t1, this._nextValidIndex);
  this._advance$0();
  return res;
 },
 hasNext$0: function() {
  var t1 = this._nextValidIndex;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = this._entries;
  if (typeof t2 !== 'string' && (typeof t2 !== 'object' || (t2.constructor !== Array && !t2.is$JavaScriptIndexingBehavior()))) return this.hasNext$0$bailout(2, t1, t2);
  var t3 = t2.length;
  if (t1 >= t3) return false;
  if (t1 !== (t1 | 0)) throw $.iae(t1);
  if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
  t2[t1] === $.CTC6 && this._advance$0();
  t1 = this._nextValidIndex;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(3, t1, t2);
  return t1 < t2.length;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
    case 3:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._nextValidIndex;
    case 1:
      state = 0;
      var t2 = this._entries;
    case 2:
      state = 0;
      if ($.geB(t1, $.get$length(t2))) return false;
      $.index(t2, this._nextValidIndex) === $.CTC6 && this._advance$0();
      t1 = this._nextValidIndex;
    case 3:
      state = 0;
      return $.lt(t1, $.get$length(t2));
  }
 },
 HashSetIterator$1: function(set_) {
  this._advance$0();
 }
};

$$._DeletedKeySentinel = {"":
 [],
 super: "Object"
};

$$.KeyValuePair = {"":
 ["value=", "key?"],
 super: "Object"
};

$$.LinkedHashMapImplementation = {"":
 ["_map", "_lib1_list"],
 super: "Object",
 toString$0: function() {
  return $.mapToString(this);
 },
 clear$0: function() {
  $.clear(this._map);
  $.clear(this._lib1_list);
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 get$length: function() {
  return $.get$length(this._map);
 },
 containsKey$1: function(key) {
  return this._map.containsKey$1(key);
 },
 forEach$1: function(f) {
  var t1 = ({});
  t1.f_10 = f;
  $.forEach(this._lib1_list, new $.Closure21(t1));
 },
 remove$1: function(key) {
  var entry = this._map.remove$1(key);
  if (entry === (void 0)) return;
  entry.remove$0();
  return entry.get$element().get$value();
 },
 operator$index$1: function(key) {
  var t1 = this._map;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, key, t1);
  if (key !== (key | 0)) throw $.iae(key);
  var t2 = t1.length;
  if (key < 0 || key >= t2) throw $.ioore(key);
  t1 = t1[key];
  if (t1 === (void 0)) return;
  return t1.get$element().get$value();
 },
 operator$index$1$bailout: function(state, key, t1) {
  var entry = $.index(t1, key);
  if (entry === (void 0)) return;
  return entry.get$element().get$value();
 },
 operator$indexSet$2: function(key, value) {
  if (this._map.containsKey$1(key) === true) {
    var t1 = this._map;
    if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$indexSet$2$bailout(1, key, value, t1);
    if (key !== (key | 0)) throw $.iae(key);
    var t2 = t1.length;
    if (key < 0 || key >= t2) throw $.ioore(key);
    t1[key].get$element().set$value(value);
  } else {
    $.addLast(this._lib1_list, $.KeyValuePair$2(key, value));
    t1 = this._map;
    if (typeof t1 !== 'object' || ((t1.constructor !== Array || !!t1.immutable$list) && !t1.is$JavaScriptIndexingBehavior())) return this.operator$indexSet$2$bailout(2, key, t1, 0);
    t2 = this._lib1_list.lastEntry$0();
    if (key !== (key | 0)) throw $.iae(key);
    var t3 = t1.length;
    if (key < 0 || key >= t3) throw $.ioore(key);
    t1[key] = t2;
  }
 },
 operator$indexSet$2$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var key = env0;
      var value = env1;
      t1 = env2;
      break;
    case 2:
      key = env0;
      t1 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
    case 2:
      if (state == 1 || (state == 0 && this._map.containsKey$1(key) === true)) {
        switch (state) {
          case 0:
            var t1 = this._map;
          case 1:
            state = 0;
            $.index(t1, key).get$element().set$value(value);
        }
      } else {
        switch (state) {
          case 0:
            $.addLast(this._lib1_list, $.KeyValuePair$2(key, value));
            t1 = this._map;
          case 2:
            state = 0;
            $.indexSet(t1, key, this._lib1_list.lastEntry$0());
        }
      }
  }
 },
 LinkedHashMapImplementation$0: function() {
  this._map = $.HashMapImplementation$0();
  var t1 = $.DoubleLinkedQueue$0();
  $.setRuntimeTypeInfo(t1, ({E: 'KeyValuePair<K, V>'}));
  this._lib1_list = t1;
 },
 is$Map: function() { return true; }
};

$$.DoubleLinkedQueueEntry = {"":
 ["_lib1_element?", "_next=", "_previous="],
 super: "Object",
 get$element: function() {
  return this._lib1_element;
 },
 previousEntry$0: function() {
  return this._previous._asNonSentinelEntry$0();
 },
 _asNonSentinelEntry$0: function() {
  return this;
 },
 remove$0: function() {
  var t1 = this._next;
  this._previous.set$_next(t1);
  t1 = this._previous;
  this._next.set$_previous(t1);
  this._next = (void 0);
  this._previous = (void 0);
  return this._lib1_element;
 },
 prepend$1: function(e) {
  var t1 = $.DoubleLinkedQueueEntry$1(e);
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  t1._link$2(this._previous, this);
 },
 _link$2: function(p, n) {
  this._next = n;
  this._previous = p;
  p.set$_next(this);
  n.set$_previous(this);
 },
 DoubleLinkedQueueEntry$1: function(e) {
  this._lib1_element = e;
 }
};

$$._DoubleLinkedQueueEntrySentinel = {"":
 ["_lib1_element", "_next", "_previous"],
 super: "DoubleLinkedQueueEntry",
 get$element: function() {
  throw $.captureStackTrace($.CTC5);
 },
 _asNonSentinelEntry$0: function() {
  return;
 },
 remove$0: function() {
  throw $.captureStackTrace($.CTC5);
 },
 _DoubleLinkedQueueEntrySentinel$0: function() {
  this._link$2(this, this);
 }
};

$$.DoubleLinkedQueue = {"":
 ["_sentinel"],
 super: "Object",
 toString$0: function() {
  return $.collectionToString(this);
 },
 iterator$0: function() {
  var t1 = $._DoubleLinkedQueueIterator$1(this._sentinel);
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  return t1;
 },
 filter$1: function(f) {
  var other = $.DoubleLinkedQueue$0();
  $.setRuntimeTypeInfo(other, ({E: 'E'}));
  var entry = this._sentinel.get$_next();
  for (; !(entry === this._sentinel); ) {
    var nextEntry = entry.get$_next();
    f.$call$1(entry.get$_lib1_element()) === true && other.addLast$1(entry.get$_lib1_element());
    entry = nextEntry;
  }
  return other;
 },
 forEach$1: function(f) {
  var entry = this._sentinel.get$_next();
  for (; !(entry === this._sentinel); ) {
    var nextEntry = entry.get$_next();
    f.$call$1(entry.get$_lib1_element());
    entry = nextEntry;
  }
 },
 clear$0: function() {
  var t1 = this._sentinel;
  t1.set$_next(t1);
  t1 = this._sentinel;
  t1.set$_previous(t1);
 },
 isEmpty$0: function() {
  return this._sentinel.get$_next() === this._sentinel;
 },
 get$length: function() {
  var t1 = ({});
  t1.counter_1 = 0;
  this.forEach$1(new $.Closure20(t1));
  return t1.counter_1;
 },
 lastEntry$0: function() {
  return this._sentinel.previousEntry$0();
 },
 last$0: function() {
  return this._sentinel.get$_previous().get$element();
 },
 first$0: function() {
  return this._sentinel.get$_next().get$element();
 },
 get$first: function() { return new $.Closure70(this, 'first$0'); },
 removeLast$0: function() {
  return this._sentinel.get$_previous().remove$0();
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection); t1.hasNext$0() === true; ) {
    this.add$1(t1.next$0());
  }
 },
 add$1: function(value) {
  this.addLast$1(value);
 },
 addLast$1: function(value) {
  this._sentinel.prepend$1(value);
 },
 DoubleLinkedQueue$0: function() {
  var t1 = $._DoubleLinkedQueueEntrySentinel$0();
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  this._sentinel = t1;
 },
 is$Collection: function() { return true; }
};

$$._DoubleLinkedQueueIterator = {"":
 ["_currentEntry", "_sentinel"],
 super: "Object",
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  this._currentEntry = this._currentEntry.get$_next();
  return this._currentEntry.get$element();
 },
 hasNext$0: function() {
  return !(this._currentEntry.get$_next() === this._sentinel);
 },
 _DoubleLinkedQueueIterator$1: function(_sentinel) {
  this._currentEntry = this._sentinel;
 }
};

$$.StringBufferImpl = {"":
 ["_length", "_buffer"],
 super: "Object",
 toString$0: function() {
  if ($.get$length(this._buffer) === 0) return '';
  if ($.get$length(this._buffer) === 1) return $.index(this._buffer, 0);
  var result = $.concatAll(this._buffer);
  $.clear(this._buffer);
  $.add$1(this._buffer, result);
  return result;
 },
 clear$0: function() {
  var t1 = $.List((void 0));
  $.setRuntimeTypeInfo(t1, ({E: 'String'}));
  this._buffer = t1;
  this._length = 0;
  return this;
 },
 addAll$1: function(objects) {
  for (var t1 = $.iterator(objects); t1.hasNext$0() === true; ) {
    this.add$1(t1.next$0());
  }
  return this;
 },
 add$1: function(obj) {
  var str = $.toString(obj);
  if (str === (void 0) || $.isEmpty(str) === true) return this;
  $.add$1(this._buffer, str);
  var t1 = this._length;
  if (typeof t1 !== 'number') return this.add$1$bailout(1, str, t1);
  var t2 = $.get$length(str);
  if (typeof t2 !== 'number') return this.add$1$bailout(2, t1, t2);
  this._length = t1 + t2;
  return this;
 },
 add$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      str = env0;
      t1 = env1;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var str = $.toString(obj);
      if (str === (void 0) || $.isEmpty(str) === true) return this;
      $.add$1(this._buffer, str);
      var t1 = this._length;
    case 1:
      state = 0;
      var t2 = $.get$length(str);
    case 2:
      state = 0;
      this._length = $.add(t1, t2);
      return this;
  }
 },
 isEmpty$0: function() {
  return this._length === 0;
 },
 get$length: function() {
  return this._length;
 },
 StringBufferImpl$1: function(content$) {
  this.clear$0();
  this.add$1(content$);
 }
};

$$.JSSyntaxRegExp = {"":
 ["ignoreCase?", "multiLine?", "pattern?"],
 super: "Object",
 allMatches$1: function(str) {
  $.checkString(str);
  return $._AllMatchesIterable$2(this, str);
 },
 hasMatch$1: function(str) {
  return $.regExpTest(this, $.checkString(str));
 },
 firstMatch$1: function(str) {
  var m = $.regExpExec(this, $.checkString(str));
  if (m === (void 0)) return;
  var matchStart = $.regExpMatchStart(m);
  var matchEnd = $.add(matchStart, $.get$length($.index(m, 0)));
  return $.MatchImplementation$5(this.pattern, str, matchStart, matchEnd, m);
 },
 JSSyntaxRegExp$_globalVersionOf$1: function(other) {
  $.regExpAttachGlobalNative(this);
 },
 is$JSSyntaxRegExp: true
};

$$.MatchImplementation = {"":
 ["_groups", "_lib1_end", "_lib1_start", "str", "pattern?"],
 super: "Object",
 groups$1: function(groups) {
  var out = [];
  for (var t1 = $.iterator(groups); t1.hasNext$0() === true; ) {
    $.add$1(out, this.group$1(t1.next$0()));
  }
  return out;
 },
 get$groups: function() { return new $.Closure72(this, 'groups$1'); },
 operator$index$1: function(index) {
  return this.group$1(index);
 },
 group$1: function(index) {
  return $.index(this._groups, index);
 },
 end$0: function() {
  return this._lib1_end;
 },
 get$end: function() { return new $.Closure70(this, 'end$0'); },
 start$0: function() {
  return this._lib1_start;
 },
 get$start: function() { return new $.Closure70(this, 'start$0'); }
};

$$._AllMatchesIterable = {"":
 ["_str", "_re"],
 super: "Object",
 iterator$0: function() {
  return $._AllMatchesIterator$2(this._re, this._str);
 }
};

$$._AllMatchesIterator = {"":
 ["_done", "_next=", "_str", "_re"],
 super: "Object",
 hasNext$0: function() {
  if (this._done === true) return false;
  if (!$.eqNullB(this._next)) return true;
  this._next = this._re.firstMatch$1(this._str);
  if ($.eqNullB(this._next)) {
    this._done = true;
    return false;
  }
  return true;
 },
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var next = this._next;
  this._next = (void 0);
  return next;
 }
};

$$.DateImplementation = {"":
 ["isUtc?", "millisecondsSinceEpoch?"],
 super: "Object",
 _asJs$0: function() {
  return $.lazyAsJsDate(this);
 },
 subtract$1: function(duration) {
  return $.DateImplementation$fromMillisecondsSinceEpoch$2($.sub(this.millisecondsSinceEpoch, duration.get$inMilliseconds()), this.isUtc);
 },
 add$1: function(duration) {
  return $.DateImplementation$fromMillisecondsSinceEpoch$2($.add(this.millisecondsSinceEpoch, duration.get$inMilliseconds()), this.isUtc);
 },
 toString$0: function() {
  var t1 = new $.Closure42();
  var t2 = new $.Closure43();
  var t3 = new $.Closure44();
  var y = t1.$call$1(this.get$year());
  var m = t3.$call$1(this.get$month());
  var d = t3.$call$1(this.get$day());
  var h = t3.$call$1(this.get$hour());
  var min = t3.$call$1(this.get$minute());
  var sec = t3.$call$1(this.get$second());
  var ms = t2.$call$1(this.get$millisecond());
  if (this.isUtc === true) return $.S(y) + '-' + $.S(m) + '-' + $.S(d) + ' ' + $.S(h) + ':' + $.S(min) + ':' + $.S(sec) + '.' + $.S(ms) + 'Z';
  return $.S(y) + '-' + $.S(m) + '-' + $.S(d) + ' ' + $.S(h) + ':' + $.S(min) + ':' + $.S(sec) + '.' + $.S(ms);
 },
 get$millisecond: function() {
  return $.getMilliseconds(this);
 },
 get$second: function() {
  return $.getSeconds(this);
 },
 get$minute: function() {
  return $.getMinutes(this);
 },
 get$hour: function() {
  return $.getHours(this);
 },
 get$day: function() {
  return $.getDay(this);
 },
 get$month: function() {
  return $.getMonth(this);
 },
 get$year: function() {
  return $.getYear(this);
 },
 toUtc$0: function() {
  if (this.isUtc === true) return this;
  return $.DateImplementation$fromMillisecondsSinceEpoch$2(this.millisecondsSinceEpoch, true);
 },
 toLocal$0: function() {
  if (this.isUtc === true) return $.DateImplementation$fromMillisecondsSinceEpoch$2(this.millisecondsSinceEpoch, false);
  return this;
 },
 hashCode$0: function() {
  return this.millisecondsSinceEpoch;
 },
 compareTo$1: function(other) {
  return $.compareTo(this.millisecondsSinceEpoch, other.get$millisecondsSinceEpoch());
 },
 operator$ge$1: function(other) {
  return $.ge(this.millisecondsSinceEpoch, other.get$millisecondsSinceEpoch());
 },
 operator$gt$1: function(other) {
  return $.gt(this.millisecondsSinceEpoch, other.get$millisecondsSinceEpoch());
 },
 operator$le$1: function(other) {
  return $.le(this.millisecondsSinceEpoch, other.get$millisecondsSinceEpoch());
 },
 operator$lt$1: function(other) {
  return $.lt(this.millisecondsSinceEpoch, other.get$millisecondsSinceEpoch());
 },
 operator$eq$1: function(other) {
  if (!((typeof other === 'object') && !!other.is$DateImplementation)) return false;
  return $.eq(this.millisecondsSinceEpoch, other.millisecondsSinceEpoch);
 },
 DateImplementation$8: function(years, month, day, hour, minute, second, millisecond, isUtc) {
  this._asJs$0();
 },
 DateImplementation$now$0: function() {
  this._asJs$0();
 },
 DateImplementation$fromMillisecondsSinceEpoch$2: function(millisecondsSinceEpoch, isUtc) {
  var t1 = this.millisecondsSinceEpoch;
  if ($.gtB($.abs(t1), 8640000000000000)) throw $.captureStackTrace($.IllegalArgumentException$1(t1));
 },
 is$DateImplementation: true
};

$$.ListIterator = {"":
 ["list", "i"],
 super: "Object",
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.NoMoreElementsException$0());
  var value = (this.list[this.i]);
  var t1 = this.i;
  if (typeof t1 !== 'number') return this.next$0$bailout(1, t1, value);
  this.i = t1 + 1;
  return value;
 },
 next$0$bailout: function(state, t1, value) {
  this.i = $.add(t1, 1);
  return value;
 },
 hasNext$0: function() {
  var t1 = this.i;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1);
  return t1 < (this.list.length);
 },
 hasNext$0$bailout: function(state, t1) {
  return $.lt(t1, (this.list.length));
 },
 list$0: function() { return this.list.$call$0(); },
 list$4$singleEvents$timeMax$timeMin: function(arg0, arg1, arg2, arg3) { return this.list.$call$4$singleEvents$timeMax$timeMin(arg0, arg1, arg2, arg3); }
};

$$.StackTrace = {"":
 ["stack"],
 super: "Object",
 toString$0: function() {
  var t1 = this.stack;
  return !$.eqNullB(t1) ? t1 : '';
 }
};

$$.Closure71 = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Closure';
 }
};

$$.ConstantMap = {"":
 ["_lib2_keys?", "_jsObject", "length?"],
 super: "Object",
 clear$0: function() {
  return this._throwImmutable$0();
 },
 remove$1: function(key) {
  return this._throwImmutable$0();
 },
 operator$indexSet$2: function(key, val) {
  return this._throwImmutable$0();
 },
 _throwImmutable$0: function() {
  throw $.captureStackTrace($.CTC9);
 },
 toString$0: function() {
  return $.mapToString(this);
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 forEach$1: function(f) {
  var t1 = ({});
  t1.f_11 = f;
  $.forEach(this._lib2_keys, new $.Closure35(this, t1));
 },
 operator$index$1: function(key) {
  if (this.containsKey$1(key) !== true) return;
  return $.jsPropertyAccess(this._jsObject, key);
 },
 containsKey$1: function(key) {
  if ($.eqB(key, '__proto__')) return false;
  return $.jsHasOwnProperty(this._jsObject, key);
 },
 is$Map: function() { return true; }
};

$$.MetaInfo = {"":
 ["set?", "tags", "tag?"],
 super: "Object"
};

$$.StringMatch = {"":
 ["pattern?", "str", "_start"],
 super: "Object",
 groups$1: function(groups_) {
  var result = $.List((void 0));
  $.setRuntimeTypeInfo(result, ({E: 'String'}));
  for (var t1 = $.iterator(groups_); t1.hasNext$0() === true; ) {
    result.push(this.group$1(t1.next$0()));
  }
  return result;
 },
 get$groups: function() { return new $.Closure72(this, 'groups$1'); },
 group$1: function(group_) {
  if (!$.eqB(group_, 0)) throw $.captureStackTrace($.IndexOutOfRangeException$1(group_));
  return this.pattern;
 },
 operator$index$1: function(g) {
  return this.group$1(g);
 },
 end$0: function() {
  return $.add(this._start, $.get$length(this.pattern));
 },
 get$end: function() { return new $.Closure70(this, 'end$0'); },
 start$0: function() {
  return this._start;
 },
 get$start: function() { return new $.Closure70(this, 'start$0'); }
};

$$.Object = {"":
 [],
 super: "",
 toString$0: function() {
  return $.objectToString(this);
 }
};

$$.IndexOutOfRangeException = {"":
 ["_index"],
 super: "Object",
 toString$0: function() {
  return 'IndexOutOfRangeException: ' + $.S(this._index);
 },
 is$Exception: true
};

$$.IllegalAccessException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Attempt to modify an immutable object';
 },
 is$Exception: true
};

$$.NoSuchMethodException = {"":
 ["_existingArgumentNames", "_arguments", "_functionName", "_receiver"],
 super: "Object",
 toString$0: function() {
  var sb = $.StringBufferImpl$1('');
  var t1 = this._arguments;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.toString$0$bailout(1, sb, t1);
  var i = 0;
  for (; i < t1.length; ++i) {
    i > 0 && sb.add$1(', ');
    var t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    sb.add$1(t1[i]);
  }
  t1 = this._existingArgumentNames;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.toString$0$bailout(2, t1, sb);
  var actualParameters = sb.toString$0();
  sb = $.StringBufferImpl$1('');
  for (i = 0; i < t1.length; ++i) {
    i > 0 && sb.add$1(', ');
    t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    sb.add$1(t1[i]);
  }
  var formalParameters = sb.toString$0();
  t1 = this._functionName;
  return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.S(t1) + '\'\nReceiver: ' + $.S(this._receiver) + '\n' + 'Tried calling: ' + $.S(t1) + '(' + $.S(actualParameters) + ')\n' + 'Found: ' + $.S(t1) + '(' + $.S(formalParameters) + ')';
 },
 toString$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      sb = env0;
      t1 = env1;
      break;
    case 2:
      t1 = env0;
      sb = env1;
      break;
  }
  switch (state) {
    case 0:
      var sb = $.StringBufferImpl$1('');
      var t1 = this._arguments;
    case 1:
      state = 0;
      var i = 0;
      for (; $.ltB(i, $.get$length(t1)); ++i) {
        i > 0 && sb.add$1(', ');
        sb.add$1($.index(t1, i));
      }
      t1 = this._existingArgumentNames;
    case 2:
      state = 0;
      if (t1 === (void 0)) return 'NoSuchMethodException : method not found: \'' + $.S(this._functionName) + '\'\n' + 'Receiver: ' + $.S(this._receiver) + '\n' + 'Arguments: [' + $.S(sb) + ']';
      var actualParameters = sb.toString$0();
      sb = $.StringBufferImpl$1('');
      for (i = 0; $.ltB(i, $.get$length(t1)); ++i) {
        i > 0 && sb.add$1(', ');
        sb.add$1($.index(t1, i));
      }
      var formalParameters = sb.toString$0();
      t1 = this._functionName;
      return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.S(t1) + '\'\nReceiver: ' + $.S(this._receiver) + '\n' + 'Tried calling: ' + $.S(t1) + '(' + $.S(actualParameters) + ')\n' + 'Found: ' + $.S(t1) + '(' + $.S(formalParameters) + ')';
  }
 },
 is$Exception: true
};

$$.ObjectNotClosureException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Object is not closure';
 },
 is$Exception: true
};

$$.IllegalArgumentException = {"":
 ["_arg"],
 super: "Object",
 toString$0: function() {
  return 'Illegal argument(s): ' + $.S(this._arg);
 },
 is$Exception: true
};

$$.StackOverflowException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Stack Overflow';
 },
 is$Exception: true
};

$$.BadNumberFormatException = {"":
 ["_s"],
 super: "Object",
 toString$0: function() {
  return 'BadNumberFormatException: \'' + $.S(this._s) + '\'';
 },
 is$Exception: true
};

$$.NullPointerException = {"":
 ["arguments", "functionName"],
 super: "Object",
 get$exceptionName: function() {
  return 'NullPointerException';
 },
 toString$0: function() {
  var t1 = this.functionName;
  if ($.eqNullB(t1)) return this.get$exceptionName();
  return $.S(this.get$exceptionName()) + ' : method: \'' + $.S(t1) + '\'\n' + 'Receiver: null\n' + 'Arguments: ' + $.S(this.arguments);
 },
 is$Exception: true
};

$$.NoMoreElementsException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'NoMoreElementsException';
 },
 is$Exception: true
};

$$.EmptyQueueException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'EmptyQueueException';
 },
 is$Exception: true
};

$$.UnsupportedOperationException = {"":
 ["_message"],
 super: "Object",
 toString$0: function() {
  return 'UnsupportedOperationException: ' + $.S(this._message);
 },
 is$Exception: true
};

$$.NotImplementedException = {"":
 ["_message"],
 super: "Object",
 toString$0: function() {
  var t1 = this._message;
  return !(t1 === (void 0)) ? 'NotImplementedException: ' + $.S(t1) : 'NotImplementedException';
 },
 is$Exception: true
};

$$.IllegalJSRegExpException = {"":
 ["_errmsg", "_pattern"],
 super: "Object",
 toString$0: function() {
  return 'IllegalJSRegExpException: \'' + $.S(this._pattern) + '\' \'' + $.S(this._errmsg) + '\'';
 },
 is$Exception: true
};

$$.FutureNotCompleteException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Exception: future has not been completed';
 },
 is$Exception: true
};

$$.FutureAlreadyCompleteException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Exception: future already completed';
 },
 is$Exception: true
};

$$._AbstractWorkerEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 }
};

$$._AudioContextEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$complete: function() {
  return this._get$1('complete');
 },
 complete$1: function(arg0) { return this.get$complete().$call$1(arg0); }
};

$$._BatteryManagerEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._BodyElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl",
 get$message: function() {
  return this._get$1('message');
 },
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 }
};

$$._DOMApplicationCacheEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 }
};

$$._DedicatedWorkerContextEventsImpl = {"":
 ["_ptr"],
 super: "_WorkerContextEventsImpl",
 get$message: function() {
  return this._get$1('message');
 }
};

$$._DeprecatedPeerConnectionEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$open: function() {
  return this._get$1('open');
 },
 open$3: function(arg0, arg1, arg2) { return this.get$open().$call$3(arg0, arg1, arg2); },
 open$5: function(arg0, arg1, arg2, arg3, arg4) { return this.get$open().$call$5(arg0, arg1, arg2, arg3, arg4); },
 get$message: function() {
  return this._get$1('message');
 }
};

$$._DocumentEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl",
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 },
 get$click: function() {
  return this._get$1('click');
 }
};

$$.FilteredElementList = {"":
 ["_childNodes", "_node"],
 super: "Object",
 last$0: function() {
  return $.last(this.get$_filtered());
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf$2(this.get$_filtered(), element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf$2(this.get$_filtered(), element, start);
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 getRange$2: function(start, rangeLength) {
  return $.getRange(this.get$_filtered(), start, rangeLength);
 },
 iterator$0: function() {
  return $.iterator(this.get$_filtered());
 },
 operator$index$1: function(index) {
  var t1 = this.get$_filtered();
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, index, t1);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, index, t1) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this.get$_filtered());
 },
 isEmpty$0: function() {
  return $.isEmpty(this.get$_filtered());
 },
 filter$1: function(f) {
  return $.filter(this.get$_filtered(), f);
 },
 removeLast$0: function() {
  var result = this.last$0();
  !$.eqNullB(result) && result.remove$0();
  return result;
 },
 clear$0: function() {
  $.clear(this._childNodes);
 },
 removeRange$2: function(start, rangeLength) {
  $.forEach($.getRange(this.get$_filtered(), start, rangeLength), new $.Closure16());
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.CTC4);
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.CTC12);
 },
 addLast$1: function(value) {
  this.add$1(value);
 },
 addAll$1: function(collection) {
  $.forEach(collection, this.get$add());
 },
 add$1: function(value) {
  $.add$1(this._childNodes, value);
 },
 get$add: function() { return new $.Closure72(this, 'add$1'); },
 set$length: function(newLength) {
  var len = $.get$length(this);
  if ($.geB(newLength, len)) return;
  if ($.ltB(newLength, 0)) throw $.captureStackTrace($.CTC3);
  this.removeRange$2($.sub(newLength, 1), $.sub(len, newLength));
 },
 operator$indexSet$2: function(index, value) {
  this.operator$index$1(index).replaceWith$1(value);
 },
 forEach$1: function(f) {
  $.forEach(this.get$_filtered(), f);
 },
 get$first: function() {
  for (var t1 = $.iterator(this._childNodes); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if (typeof t2 === 'object' && t2.is$Element()) return t2;
  }
  return;
 },
 first$0: function() { return this.get$first().$call$0(); },
 get$_filtered: function() {
  return $.List$from($.filter(this._childNodes, new $.Closure14()));
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ChildrenElementList = {"":
 ["_childElements", "_element?"],
 super: "Object",
 last$0: function() {
  return this._element.get$$$dom_lastElementChild();
 },
 removeLast$0: function() {
  var result = this.last$0();
  !$.eqNullB(result) && this._element.$dom_removeChild$1(result);
  return result;
 },
 clear$0: function() {
  this._element.set$text('');
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 getRange$2: function(start, rangeLength) {
  return $._FrozenElementList$_wrap$1($.getRange0(this, start, rangeLength, []));
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.CTC4);
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.CTC12);
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection), t2 = this._element; t1.hasNext$0() === true; ) {
    t2.$dom_appendChild$1(t1.next$0());
  }
 },
 iterator$0: function() {
  return $.iterator(this._toList$0());
 },
 addLast$1: function(value) {
  return this.add$1(value);
 },
 add$1: function(value) {
  this._element.$dom_appendChild$1(value);
  return value;
 },
 set$length: function(newLength) {
  throw $.captureStackTrace($.CTC2);
 },
 operator$indexSet$2: function(index, value) {
  this._element.$dom_replaceChild$2(value, $.index(this._childElements, index));
 },
 operator$index$1: function(index) {
  var t1 = this._childElements;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, t1, index) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._childElements);
 },
 isEmpty$0: function() {
  return $.eqNull(this._element.get$$$dom_firstElementChild());
 },
 filter$1: function(f) {
  var t1 = ({});
  t1.f_1 = f;
  var output = [];
  this.forEach$1(new $.Closure15(t1, output));
  return $._FrozenElementList$_wrap$1(output);
 },
 forEach$1: function(f) {
  for (var t1 = $.iterator(this._childElements); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
 },
 get$first: function() {
  return this._element.get$$$dom_firstElementChild();
 },
 first$0: function() { return this.get$first().$call$0(); },
 _toList$0: function() {
  var t1 = this._childElements;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this._toList$0$bailout(1, t1);
  var output = $.List(t1.length);
  for (var len = t1.length, i = 0; i < len; ++i) {
    var t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var t3 = t1[i];
    var t4 = output.length;
    if (i < 0 || i >= t4) throw $.ioore(i);
    output[i] = t3;
  }
  return output;
 },
 _toList$0$bailout: function(state, t1) {
  var output = $.List($.get$length(t1));
  for (var len = $.get$length(t1), i = 0; $.ltB(i, len); ++i) {
    var t2 = $.index(t1, i);
    var t3 = output.length;
    if (i < 0 || i >= t3) throw $.ioore(i);
    output[i] = t2;
  }
  return output;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
};

$$._FrozenElementList = {"":
 ["_nodeList"],
 super: "Object",
 last$0: function() {
  return $.last(this._nodeList);
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.CTC2);
 },
 clear$0: function() {
  throw $.captureStackTrace($.CTC2);
 },
 lastIndexOf$2: function(element, start) {
  return $.lastIndexOf$2(this._nodeList, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf$2(this._nodeList, element, start);
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 getRange$2: function(start, rangeLength) {
  return $._FrozenElementList$_wrap$1($.getRange(this._nodeList, start, rangeLength));
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.CTC2);
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.CTC2);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.CTC2);
 },
 iterator$0: function() {
  return $._FrozenElementListIterator$1(this);
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.CTC2);
 },
 add$1: function(value) {
  throw $.captureStackTrace($.CTC2);
 },
 set$length: function(newLength) {
  $.set$length(this._nodeList, newLength);
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.CTC2);
 },
 operator$index$1: function(index) {
  var t1 = this._nodeList;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, t1, index) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._nodeList);
 },
 isEmpty$0: function() {
  return $.isEmpty(this._nodeList);
 },
 filter$1: function(f) {
  var out = $._ElementList$1([]);
  for (var t1 = this.iterator$0(); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    f.$call$1(t2) === true && out.add$1(t2);
  }
  return out;
 },
 forEach$1: function(f) {
  for (var t1 = this.iterator$0(); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
 },
 get$first: function() {
  return $.index(this._nodeList, 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
};

$$._FrozenElementListIterator = {"":
 ["_lib_index", "_list"],
 super: "Object",
 hasNext$0: function() {
  var t1 = this._lib_index;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = $.get$length(this._list);
  if (typeof t2 !== 'number') return this.hasNext$0$bailout(2, t1, t2);
  return t1 < t2;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._lib_index;
    case 1:
      state = 0;
      var t2 = $.get$length(this._list);
    case 2:
      state = 0;
      return $.lt(t1, t2);
  }
 },
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var t1 = this._list;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.next$0$bailout(1, t1, 0);
  var t2 = this._lib_index;
  if (typeof t2 !== 'number') return this.next$0$bailout(2, t1, t2);
  this._lib_index = t2 + 1;
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  var t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  return t1[t2];
 },
 next$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
      var t1 = this._list;
    case 1:
      state = 0;
      var t2 = this._lib_index;
    case 2:
      state = 0;
      this._lib_index = $.add(t2, 1);
      return $.index(t1, t2);
  }
 }
};

$$._ElementList = {"":
 ["_list"],
 super: "_ListWrapper",
 getRange$2: function(start, rangeLength) {
  return $._ElementList$1($._ListWrapper.prototype.getRange$2.call(this, start, rangeLength));
 },
 filter$1: function(f) {
  return $._ElementList$1($._ListWrapper.prototype.filter$1.call(this, f));
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ElementAttributeMap = {"":
 ["_element?"],
 super: "Object",
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 get$length: function() {
  return $.get$length(this._element.get$$$dom_attributes());
 },
 forEach$1: function(f) {
  var attributes = this._element.get$$$dom_attributes();
  if (typeof attributes !== 'string' && (typeof attributes !== 'object' || (attributes.constructor !== Array && !attributes.is$JavaScriptIndexingBehavior()))) return this.forEach$1$bailout(1, f, attributes);
  for (var len = attributes.length, i = 0; i < len; ++i) {
    var t1 = attributes.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = attributes[i];
    f.$call$2(t2.get$name(), t2.get$value());
  }
 },
 forEach$1$bailout: function(state, f, attributes) {
  for (var len = $.get$length(attributes), i = 0; $.ltB(i, len); ++i) {
    var item = $.index(attributes, i);
    f.$call$2(item.get$name(), item.get$value());
  }
 },
 clear$0: function() {
  var attributes = this._element.get$$$dom_attributes();
  if (typeof attributes !== 'string' && (typeof attributes !== 'object' || (attributes.constructor !== Array && !attributes.is$JavaScriptIndexingBehavior()))) return this.clear$0$bailout(1, attributes);
  for (var i = attributes.length - 1; i >= 0; --i) {
    var t1 = attributes.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    this.remove$1(attributes[i].get$name());
  }
 },
 clear$0$bailout: function(state, attributes) {
  for (var i = $.sub($.get$length(attributes), 1); $.geB(i, 0); i = $.sub(i, 1)) {
    this.remove$1($.index(attributes, i).get$name());
  }
 },
 remove$1: function(key) {
  var t1 = this._element;
  var value = t1.$dom_getAttribute$1(key);
  t1.$dom_removeAttribute$1(key);
  return value;
 },
 operator$indexSet$2: function(key, value) {
  this._element.$dom_setAttribute$2(key, $.S(value));
 },
 operator$index$1: function(key) {
  return this._element.$dom_getAttribute$1(key);
 },
 containsKey$1: function(key) {
  return this._element.$dom_hasAttribute$1(key);
 },
 is$Map: function() { return true; }
};

$$._CssClassSet = {"":
 ["_element?"],
 super: "Object",
 _formatSet$1: function(s) {
  return $.join($.List$from(s), ' ');
 },
 _write$1: function(s) {
  var t1 = this._formatSet$1(s);
  this._element.set$$$dom_className(t1);
 },
 _classname$0: function() {
  return this._element.get$$$dom_className();
 },
 _read$0: function() {
  var s = $.HashSetImplementation$0();
  $.setRuntimeTypeInfo(s, ({E: 'String'}));
  for (var t1 = $.iterator($.split(this._classname$0(), ' ')); t1.hasNext$0() === true; ) {
    var trimmed = $.trim(t1.next$0());
    $.isEmpty(trimmed) !== true && s.add$1(trimmed);
  }
  return s;
 },
 _modify$1: function(f) {
  var s = this._read$0();
  f.$call$1(s);
  this._write$1(s);
 },
 clear$0: function() {
  this._modify$1(new $.Closure65());
 },
 addAll$1: function(collection) {
  var t1 = ({});
  t1.collection_1 = collection;
  this._modify$1(new $.Closure64(t1));
 },
 remove$1: function(value) {
  var s = this._read$0();
  var result = s.remove$1(value);
  this._write$1(s);
  return result;
 },
 add$1: function(value) {
  var t1 = ({});
  t1.value_1 = value;
  this._modify$1(new $.Closure63(t1));
 },
 contains$1: function(value) {
  return $.contains$1(this._read$0(), value);
 },
 get$length: function() {
  return $.get$length(this._read$0());
 },
 isEmpty$0: function() {
  return $.isEmpty(this._read$0());
 },
 filter$1: function(f) {
  return $.filter(this._read$0(), f);
 },
 forEach$1: function(f) {
  $.forEach(this._read$0(), f);
 },
 iterator$0: function() {
  return $.iterator(this._read$0());
 },
 toString$0: function() {
  return this._formatSet$1(this._read$0());
 },
 is$Collection: function() { return true; }
};

$$._ElementEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 },
 get$click: function() {
  return this._get$1('click');
 }
};

$$._EventSourceEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$open: function() {
  return this._get$1('open');
 },
 open$3: function(arg0, arg1, arg2) { return this.get$open().$call$3(arg0, arg1, arg2); },
 open$5: function(arg0, arg1, arg2, arg3, arg4) { return this.get$open().$call$5(arg0, arg1, arg2, arg3, arg4); },
 get$message: function() {
  return this._get$1('message');
 },
 get$error: function() {
  return this._get$1('error');
 }
};

$$._EventsImpl = {"":
 ["_ptr"],
 super: "Object",
 _get$1: function(type) {
  return $._EventListenerListImpl$2(this._ptr, type);
 },
 operator$index$1: function(type) {
  return this._get$1($.toLowerCase(type));
 }
};

$$._EventListenerListImpl = {"":
 ["_type", "_ptr"],
 super: "Object",
 _remove$2: function(listener, useCapture) {
  this._ptr.$dom_removeEventListener$3(this._type, listener, useCapture);
 },
 _add$2: function(listener, useCapture) {
  this._ptr.$dom_addEventListener$3(this._type, listener, useCapture);
 },
 remove$2: function(listener, useCapture) {
  this._remove$2(listener, useCapture);
  return this;
 },
 remove$1: function(listener) {
  return this.remove$2(listener,false)
},
 add$2: function(listener, useCapture) {
  this._add$2(listener, useCapture);
  return this;
 },
 add$1: function(listener) {
  return this.add$2(listener,false)
}
};

$$._FileReaderEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 }
};

$$._FileWriterEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 }
};

$$._FrameSetElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl",
 get$message: function() {
  return this._get$1('message');
 },
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 }
};

$$._IDBDatabaseEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 }
};

$$._IDBRequestEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 }
};

$$._IDBTransactionEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 },
 get$complete: function() {
  return this._get$1('complete');
 },
 complete$1: function(arg0) { return this.get$complete().$call$1(arg0); }
};

$$._IDBVersionChangeRequestEventsImpl = {"":
 ["_ptr"],
 super: "_IDBRequestEventsImpl"
};

$$._InputElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl"
};

$$._JavaScriptAudioNodeEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._MediaElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl"
};

$$._MediaStreamEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._MessagePortEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$message: function() {
  return this._get$1('message');
 }
};

$$._ChildNodeListLazy = {"":
 ["_this"],
 super: "Object",
 operator$index$1: function(index) {
  var t1 = this._this.get$$$dom_childNodes();
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, index, t1);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, index, t1) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._this.get$$$dom_childNodes());
 },
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$1($.getRange0(this, start, rangeLength, []));
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 lastIndexOf$2: function(element, start) {
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,0)
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._NodeListWrapper$1($.filter1(this, [], f));
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 iterator$0: function() {
  return $.iterator(this._this.get$$$dom_childNodes());
 },
 operator$indexSet$2: function(index, value) {
  this._this.$dom_replaceChild$2(value, this.operator$index$1(index));
 },
 clear$0: function() {
  this._this.set$text('');
 },
 removeLast$0: function() {
  var result = this.last$0();
  !$.eqNullB(result) && this._this.$dom_removeChild$1(result);
  return result;
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection), t2 = this._this; t1.hasNext$0() === true; ) {
    t2.$dom_appendChild$1(t1.next$0());
  }
 },
 addLast$1: function(value) {
  this._this.$dom_appendChild$1(value);
 },
 add$1: function(value) {
  this._this.$dom_appendChild$1(value);
 },
 last$0: function() {
  return this._this.lastChild;;
 },
 get$first: function() {
  return this._this.firstChild;;
 },
 first$0: function() { return this.get$first().$call$0(); },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ListWrapper = {"":
 [],
 super: "Object",
 get$first: function() {
  return $.index(this._list, 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 setRange$4: function(start, rangeLength, from, startFrom) {
  return $.setRange$4(this._list, start, rangeLength, from, startFrom);
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,0)
},
 getRange$2: function(start, rangeLength) {
  return $.getRange(this._list, start, rangeLength);
 },
 last$0: function() {
  return $.last(this._list);
 },
 removeLast$0: function() {
  return $.removeLast(this._list);
 },
 clear$0: function() {
  return $.clear(this._list);
 },
 lastIndexOf$2: function(element, start) {
  return $.lastIndexOf$2(this._list, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,0)
},
 indexOf$2: function(element, start) {
  return $.indexOf$2(this._list, element, start);
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  return $.sort(this._list, compare);
 },
 addAll$1: function(collection) {
  return $.addAll(this._list, collection);
 },
 addLast$1: function(value) {
  return $.addLast(this._list, value);
 },
 add$1: function(value) {
  return $.add$1(this._list, value);
 },
 set$length: function(newLength) {
  $.set$length(this._list, newLength);
 },
 operator$indexSet$2: function(index, value) {
  $.indexSet(this._list, index, value);
 },
 operator$index$1: function(index) {
  var t1 = this._list;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, t1, index) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._list);
 },
 isEmpty$0: function() {
  return $.isEmpty(this._list);
 },
 filter$1: function(f) {
  return $.filter(this._list, f);
 },
 forEach$1: function(f) {
  return $.forEach(this._list, f);
 },
 iterator$0: function() {
  return $.iterator(this._list);
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
};

$$._NodeListWrapper = {"":
 ["_list"],
 super: "_ListWrapper",
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$1($.getRange(this._list, start, rangeLength));
 },
 filter$1: function(f) {
  return $._NodeListWrapper$1($.filter(this._list, f));
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
};

$$._NotificationEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 },
 get$display: function() {
  return this._get$1('display');
 },
 get$click: function() {
  return this._get$1('click');
 }
};

$$._PeerConnection00EventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$open: function() {
  return this._get$1('open');
 },
 open$3: function(arg0, arg1, arg2) { return this.get$open().$call$3(arg0, arg1, arg2); },
 open$5: function(arg0, arg1, arg2, arg3, arg4) { return this.get$open().$call$5(arg0, arg1, arg2, arg3, arg4); }
};

$$._AttributeClassSet = {"":
 ["_element"],
 super: "_CssClassSet",
 _write$1: function(s) {
  $.indexSet(this._element.get$attributes(), 'class', this._formatSet$1(s));
 },
 $dom_className$0: function() {
  return $.index(this._element.get$attributes(), 'class');
 },
 get$$$dom_className: function() { return new $.Closure70(this, '$dom_className$0'); }
};

$$._SVGElementInstanceEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 },
 get$click: function() {
  return this._get$1('click');
 }
};

$$._SharedWorkerContextEventsImpl = {"":
 ["_ptr"],
 super: "_WorkerContextEventsImpl"
};

$$._SpeechRecognitionEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$start: function() {
  return this._get$1('start');
 },
 start$0: function() { return this.get$start().$call$0(); },
 get$error: function() {
  return this._get$1('error');
 },
 get$end: function() {
  return this._get$1('end');
 }
};

$$._TextTrackEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._TextTrackCueEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._TextTrackListEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._WebSocketEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$open: function() {
  return this._get$1('open');
 },
 open$3: function(arg0, arg1, arg2) { return this.get$open().$call$3(arg0, arg1, arg2); },
 open$5: function(arg0, arg1, arg2, arg3, arg4) { return this.get$open().$call$5(arg0, arg1, arg2, arg3, arg4); },
 get$message: function() {
  return this._get$1('message');
 },
 get$error: function() {
  return this._get$1('error');
 }
};

$$._WindowEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$message: function() {
  return this._get$1('message');
 },
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 },
 get$click: function() {
  return this._get$1('click');
 }
};

$$._WorkerEventsImpl = {"":
 ["_ptr"],
 super: "_AbstractWorkerEventsImpl",
 get$message: function() {
  return this._get$1('message');
 }
};

$$._WorkerContextEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$error: function() {
  return this._get$1('error');
 }
};

$$._XMLHttpRequestEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 }
};

$$._XMLHttpRequestUploadEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$load: function() {
  return this._get$1('load');
 },
 get$error: function() {
  return this._get$1('error');
 }
};

$$._IDBOpenDBRequestEventsImpl = {"":
 ["_ptr"],
 super: "_IDBRequestEventsImpl"
};

$$._LocationWrapper = {"":
 ["_ptr"],
 super: "Object",
 toString$0: function() {
  return $._toString(this._ptr);
 },
 get$port: function() {
  return $._get(this._ptr, 'port');
 },
 get$origin: function() {
  return $._get(this._ptr, 'origin');
 },
 is$Location: function() { return true; }
};

$$._FixedSizeListIterator = {"":
 ["_lib_length", "_pos", "_array"],
 super: "_VariableSizeListIterator",
 hasNext$0: function() {
  var t1 = this._lib_length;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = this._pos;
  if (typeof t2 !== 'number') return this.hasNext$0$bailout(2, t1, t2);
  return t1 > t2;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._lib_length;
    case 1:
      state = 0;
      var t2 = this._pos;
    case 2:
      state = 0;
      return $.gt(t1, t2);
  }
 }
};

$$._VariableSizeListIterator = {"":
 [],
 super: "Object",
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var t1 = this._array;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.next$0$bailout(1, t1, 0);
  var t2 = this._pos;
  if (typeof t2 !== 'number') return this.next$0$bailout(2, t1, t2);
  this._pos = t2 + 1;
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  var t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  return t1[t2];
 },
 next$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
      var t1 = this._array;
    case 1:
      state = 0;
      var t2 = this._pos;
    case 2:
      state = 0;
      this._pos = $.add(t2, 1);
      return $.index(t1, t2);
  }
 },
 hasNext$0: function() {
  var t1 = $.get$length(this._array);
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = this._pos;
  if (typeof t2 !== 'number') return this.hasNext$0$bailout(2, t2, t1);
  return t1 > t2;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t2 = env0;
      t1 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = $.get$length(this._array);
    case 1:
      state = 0;
      var t2 = this._pos;
    case 2:
      state = 0;
      return $.gt(t1, t2);
  }
 }
};

$$.CalendarApi = {"":
 ["alt?", "userIp?", "key?", "oauthToken?", "quotaUser?", "fields?", "prettyPrint?", "_events", "_colors", "_acl", "_calendars", "_calendarList", "_settings", "_freebusy", "applicationName", "clientVersion", "authenticator?", "baseUrl?"],
 super: "Object",
 get$userAgent: function() {
  var t1 = this.applicationName;
  return ($.eqNullB(t1) ? '' : $.S(t1) + ' ') + 'calendar/v3/20120423 google-api-dart-client/' + $.S(this.clientVersion);
 },
 get$events: function() {
  return this._events;
 },
 get$calendars: function() {
  return this._calendars;
 },
 get$calendarList: function() {
  return this._calendarList;
 },
 CalendarApi$3: function(baseUrl, applicationName, authenticator) {
  this._freebusy = $.FreebusyResource$_internal$1(this);
  this._settings = $.SettingsResource$_internal$1(this);
  this._calendarList = $.CalendarListResource$_internal$1(this);
  this._calendars = $.CalendarsResource$_internal$1(this);
  this._acl = $.AclResource$_internal$1(this);
  this._colors = $.ColorsResource$_internal$1(this);
  this._events = $.EventsResource$_internal$1(this);
 }
};

$$.FreebusyResource = {"":
 ["_$service"],
 super: "Object",
 query$1: function(content$) {
  var $$queryParams = $.makeLiteralMap([]);
  var $$headers = $.makeLiteralMap([]);
  var $$pathParams = $.makeLiteralMap([]);
  var t1 = this._$service;
  if (!$.eqNullB(t1.get$prettyPrint())) $.indexSet($$queryParams, 'prettyPrint', t1.get$prettyPrint());
  if (!$.eqNullB(t1.get$fields())) $.indexSet($$queryParams, 'fields', t1.get$fields());
  if (!$.eqNullB(t1.get$quotaUser())) $.indexSet($$queryParams, 'quotaUser', t1.get$quotaUser());
  if (!$.eqNullB(t1.get$oauthToken())) $.indexSet($$headers, 'Authorization', 'Bearer ' + $.S(t1.get$oauthToken()));
  if (!$.eqNullB(t1.get$key())) $.indexSet($$queryParams, 'key', t1.get$key());
  if (!$.eqNullB(t1.get$userIp())) $.indexSet($$queryParams, 'userIp', t1.get$userIp());
  if (!$.eqNullB(t1.get$alt())) $.indexSet($$queryParams, 'alt', t1.get$alt());
  $.indexSet($$headers, 'X-JavaScript-User-Agent', t1.get$userAgent());
  $.indexSet($$headers, 'Content-Type', 'application/json');
  var $$body = $.stringify($.serialize(content$));
  var $$http = $.HttpRequest$3($.UrlPattern$1($.S(t1.get$baseUrl()) + 'freeBusy').generate$2($$pathParams, $$queryParams), 'POST', $$headers);
  var $$authenticatedHttp = $.eqNullB(t1.get$authenticator()) ? $.FutureImpl$immediate($$http) : t1.get$authenticator().authenticate$1($$http);
  return $$authenticatedHttp.chain$1(new $.Closure27($$body)).transform$1(new $.Closure28());
 },
 get$query: function() { return new $.Closure72(this, 'query$1'); }
};

$$.SettingsResource = {"":
 ["_$service"],
 super: "Object",
 list$0: function() {
  var $$queryParams = $.makeLiteralMap([]);
  var $$headers = $.makeLiteralMap([]);
  var $$pathParams = $.makeLiteralMap([]);
  var t1 = this._$service;
  if (!$.eqNullB(t1.get$prettyPrint())) $.indexSet($$queryParams, 'prettyPrint', t1.get$prettyPrint());
  if (!$.eqNullB(t1.get$fields())) $.indexSet($$queryParams, 'fields', t1.get$fields());
  if (!$.eqNullB(t1.get$quotaUser())) $.indexSet($$queryParams, 'quotaUser', t1.get$quotaUser());
  if (!$.eqNullB(t1.get$oauthToken())) $.indexSet($$headers, 'Authorization', 'Bearer ' + $.S(t1.get$oauthToken()));
  if (!$.eqNullB(t1.get$key())) $.indexSet($$queryParams, 'key', t1.get$key());
  if (!$.eqNullB(t1.get$userIp())) $.indexSet($$queryParams, 'userIp', t1.get$userIp());
  if (!$.eqNullB(t1.get$alt())) $.indexSet($$queryParams, 'alt', t1.get$alt());
  $.indexSet($$headers, 'X-JavaScript-User-Agent', t1.get$userAgent());
  var $$http = $.HttpRequest$3($.UrlPattern$1($.S(t1.get$baseUrl()) + 'users/me/settings').generate$2($$pathParams, $$queryParams), 'GET', $$headers);
  var $$authenticatedHttp = $.eqNullB(t1.get$authenticator()) ? $.FutureImpl$immediate($$http) : t1.get$authenticator().authenticate$1($$http);
  return $$authenticatedHttp.chain$1(new $.Closure52()).transform$1(new $.Closure53());
 }
};

$$.CalendarListResource = {"":
 ["_$service"],
 super: "Object",
 list$4: function(pageToken, showHidden, maxResults, minAccessRole) {
  var $$queryParams = $.makeLiteralMap([]);
  var $$headers = $.makeLiteralMap([]);
  var $$pathParams = $.makeLiteralMap([]);
  if (!($.CTC11 === pageToken)) $.indexSet($$queryParams, 'pageToken', pageToken);
  if (!($.CTC11 === showHidden)) $.indexSet($$queryParams, 'showHidden', showHidden);
  if (!($.CTC11 === maxResults)) $.indexSet($$queryParams, 'maxResults', maxResults);
  if (!($.CTC11 === minAccessRole)) $.indexSet($$queryParams, 'minAccessRole', minAccessRole);
  var t1 = this._$service;
  if (!$.eqNullB(t1.get$prettyPrint())) $.indexSet($$queryParams, 'prettyPrint', t1.get$prettyPrint());
  if (!$.eqNullB(t1.get$fields())) $.indexSet($$queryParams, 'fields', t1.get$fields());
  if (!$.eqNullB(t1.get$quotaUser())) $.indexSet($$queryParams, 'quotaUser', t1.get$quotaUser());
  if (!$.eqNullB(t1.get$oauthToken())) $.indexSet($$headers, 'Authorization', 'Bearer ' + $.S(t1.get$oauthToken()));
  if (!$.eqNullB(t1.get$key())) $.indexSet($$queryParams, 'key', t1.get$key());
  if (!$.eqNullB(t1.get$userIp())) $.indexSet($$queryParams, 'userIp', t1.get$userIp());
  if (!$.eqNullB(t1.get$alt())) $.indexSet($$queryParams, 'alt', t1.get$alt());
  $.indexSet($$headers, 'X-JavaScript-User-Agent', t1.get$userAgent());
  var $$http = $.HttpRequest$3($.UrlPattern$1($.S(t1.get$baseUrl()) + 'users/me/calendarList').generate$2($$pathParams, $$queryParams), 'GET', $$headers);
  var $$authenticatedHttp = $.eqNullB(t1.get$authenticator()) ? $.FutureImpl$immediate($$http) : t1.get$authenticator().authenticate$1($$http);
  return $$authenticatedHttp.chain$1(new $.Closure54()).transform$1(new $.Closure55());
 },
 list$0: function() {
  return this.list$4(Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11)
}
};

$$.CalendarsResource = {"":
 ["_$service"],
 super: "Object"
};

$$.AclResource = {"":
 ["_$service"],
 super: "Object"
};

$$.ColorsResource = {"":
 ["_$service"],
 super: "Object"
};

$$.EventsResource = {"":
 ["_$service"],
 super: "Object",
 list$14: function(calendarId, orderBy, showHiddenInvitations, showDeleted, iCalUID, updatedMin, singleEvents, maxResults, q, pageToken, timeMin, timeZone, timeMax, maxAttendees) {
  var $$queryParams = $.makeLiteralMap([]);
  var $$headers = $.makeLiteralMap([]);
  var $$pathParams = $.makeLiteralMap([]);
  $.indexSet($$pathParams, 'calendarId', calendarId);
  if (!($.CTC11 === orderBy)) $.indexSet($$queryParams, 'orderBy', orderBy);
  if (!($.CTC11 === showHiddenInvitations)) $.indexSet($$queryParams, 'showHiddenInvitations', showHiddenInvitations);
  if (!($.CTC11 === showDeleted)) $.indexSet($$queryParams, 'showDeleted', showDeleted);
  if (!($.CTC11 === iCalUID)) $.indexSet($$queryParams, 'iCalUID', iCalUID);
  if (!($.CTC11 === updatedMin)) $.indexSet($$queryParams, 'updatedMin', updatedMin);
  if (!($.CTC11 === singleEvents)) $.indexSet($$queryParams, 'singleEvents', singleEvents);
  if (!($.CTC11 === maxResults)) $.indexSet($$queryParams, 'maxResults', maxResults);
  if (!($.CTC11 === q)) $.indexSet($$queryParams, 'q', q);
  if (!($.CTC11 === pageToken)) $.indexSet($$queryParams, 'pageToken', pageToken);
  if (!($.CTC11 === timeMin)) $.indexSet($$queryParams, 'timeMin', timeMin);
  if (!($.CTC11 === timeZone)) $.indexSet($$queryParams, 'timeZone', timeZone);
  if (!($.CTC11 === timeMax)) $.indexSet($$queryParams, 'timeMax', timeMax);
  if (!($.CTC11 === maxAttendees)) $.indexSet($$queryParams, 'maxAttendees', maxAttendees);
  var t1 = this._$service;
  if (!$.eqNullB(t1.get$prettyPrint())) $.indexSet($$queryParams, 'prettyPrint', t1.get$prettyPrint());
  if (!$.eqNullB(t1.get$fields())) $.indexSet($$queryParams, 'fields', t1.get$fields());
  if (!$.eqNullB(t1.get$quotaUser())) $.indexSet($$queryParams, 'quotaUser', t1.get$quotaUser());
  if (!$.eqNullB(t1.get$oauthToken())) $.indexSet($$headers, 'Authorization', 'Bearer ' + $.S(t1.get$oauthToken()));
  if (!$.eqNullB(t1.get$key())) $.indexSet($$queryParams, 'key', t1.get$key());
  if (!$.eqNullB(t1.get$userIp())) $.indexSet($$queryParams, 'userIp', t1.get$userIp());
  if (!$.eqNullB(t1.get$alt())) $.indexSet($$queryParams, 'alt', t1.get$alt());
  $.indexSet($$headers, 'X-JavaScript-User-Agent', t1.get$userAgent());
  var $$http = $.HttpRequest$3($.UrlPattern$1($.S(t1.get$baseUrl()) + 'calendars/{calendarId}/events').generate$2($$pathParams, $$queryParams), 'GET', $$headers);
  var $$authenticatedHttp = $.eqNullB(t1.get$authenticator()) ? $.FutureImpl$immediate($$http) : t1.get$authenticator().authenticate$1($$http);
  return $$authenticatedHttp.chain$1(new $.Closure58()).transform$1(new $.Closure59());
 },
 list$4$singleEvents$timeMax$timeMin: function(calendarId,singleEvents,timeMax,timeMin) {
  return this.list$14(calendarId,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,singleEvents,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,Isolate.$isolateProperties.CTC11,timeMin,Isolate.$isolateProperties.CTC11,timeMax,Isolate.$isolateProperties.CTC11)
}
};

$$.CalendarList = {"":
 ["etag?", "kind?", "items?", "nextPageToken?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize10(this));
 }
};

$$.CalendarListEntry = {"":
 ["id?", "accessRole?", "hidden?", "timeZone?", "summaryOverride?", "location?", "etag?", "summary?", "selected?", "colorId?", "description?", "defaultReminders?", "kind?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize9(this));
 }
};

$$.Error = {"":
 ["reason?", "domain?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize1(this));
 }
};

$$.Event = {"":
 ["privateCopy?", "transparency?", "guestsCanInviteOthers?", "summary?", "guestsCanSeeOtherGuests?", "reminders?", "anyoneCanAddSelf?", "colorId?", "created?", "kind?", "attendeesOmitted?", "end?", "guestsCanModify?", "visibility?", "sequence?", "extendedProperties?", "iCalUID?", "description?", "gadget?", "updated?", "status?", "originalStartTime?", "recurringEventId?", "location?", "etag?", "start?", "recurrence?", "htmlLink?", "attendees?", "id?", "organizer?", "creator?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize18(this));
 },
 start$0: function() { return this.start.$call$0(); }
};

$$.EventAttendee = {"":
 ["email?", "optional?", "organizer?", "resource?", "additionalGuests?", "responseStatus?", "self?", "displayName?", "comment?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize15(this));
 }
};

$$.EventCreator = {"":
 ["email?", "displayName?", "self?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize17(this));
 }
};

$$.EventDateTime = {"":
 ["dateTime?", "timeZone?", "date?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize12(this));
 }
};

$$.EventExtendedProperties = {"":
 ["$private?", "shared?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize13(this));
 }
};

$$.EventGadget = {"":
 ["iconLink?", "display=", "type?", "link?", "width=", "height=", "title?", "preferences?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize14(this));
 }
};

$$.EventOrganizer = {"":
 ["email?", "displayName?", "self?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize16(this));
 }
};

$$.EventReminder = {"":
 ["method?", "minutes?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize8(this));
 }
};

$$.EventReminders = {"":
 ["useDefault?", "overrides?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize11(this));
 }
};

$$.Events = {"":
 ["accessRole?", "timeZone?", "etag?", "summary?", "updated?", "items?", "description?", "defaultReminders?", "kind?", "nextPageToken?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize19(this));
 }
};

$$.FreeBusyCalendar = {"":
 ["errors?", "busy?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize4(this));
 }
};

$$.FreeBusyGroup = {"":
 ["calendars?", "errors?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize2(this));
 }
};

$$.FreeBusyResponse = {"":
 ["groups?", "timeMin?", "calendars?", "kind?", "timeMax?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize5(this));
 }
};

$$.Setting = {"":
 ["value=", "id?", "etag?", "kind?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize6(this));
 }
};

$$.Settings = {"":
 ["etag?", "kind?", "items?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize7(this));
 }
};

$$.TimePeriod = {"":
 ["end?", "start?", "_id"],
 super: "IdentityHash",
 toString$0: function() {
  return $.toString($.serialize3(this));
 },
 start$0: function() { return this.start.$call$0(); }
};

$$._JsonParser = {"":
 ["position!", "length?", "json"],
 super: "Object",
 _error$1: function(message) {
  throw $.captureStackTrace(message);
 },
 _lib3_token$0: function() {
  for (var t1 = this.json; true; ) {
    if ($.geB(this.position, $.get$length(this))) return;
    var char$ = $.charCodeAt(t1, this.position);
    var token = $.index($.tokens, char$);
    if (token === 32) {
      this.position = $.add(this.position, 1);
      continue;
    }
    if (token === (void 0)) return 0;
    return token;
  }
 },
 _nextChar$0: function() {
  var t1 = this.position;
  if (typeof t1 !== 'number') return this._nextChar$0$bailout(1, t1, 0);
  this.position = t1 + 1;
  t1 = this.position;
  if (typeof t1 !== 'number') return this._nextChar$0$bailout(2, t1, 0);
  var t2 = $.get$length(this);
  if (typeof t2 !== 'number') return this._nextChar$0$bailout(3, t2, t1);
  if (t1 >= t2) return 0;
  return $.charCodeAt(this.json, this.position);
 },
 _nextChar$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      break;
    case 3:
      t2 = env0;
      t1 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this.position;
    case 1:
      state = 0;
      this.position = $.add(t1, 1);
      t1 = this.position;
    case 2:
      state = 0;
      var t2 = $.get$length(this);
    case 3:
      state = 0;
      if ($.geB(t1, t2)) return 0;
      return $.charCodeAt(this.json, this.position);
  }
 },
 _char$0: function() {
  var t1 = this.position;
  if (typeof t1 !== 'number') return this._char$0$bailout(1, t1, 0);
  var t2 = $.get$length(this);
  if (typeof t2 !== 'number') return this._char$0$bailout(2, t1, t2);
  t1 >= t2 && this._error$1('Unexpected end of JSON stream');
  return $.charCodeAt(this.json, this.position);
 },
 _char$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this.position;
    case 1:
      state = 0;
      var t2 = $.get$length(this);
    case 2:
      state = 0;
      $.geB(t1, t2) && this._error$1('Unexpected end of JSON stream');
      return $.charCodeAt(this.json, this.position);
  }
 },
 _isToken$1: function(tokenKind) {
  return $.eq(this._lib3_token$0(), tokenKind);
 },
 _isDigit$1: function(char$) {
  if (typeof char$ !== 'number') return this._isDigit$1$bailout(1, char$);
  return char$ >= 48 && char$ <= 57;
 },
 _isDigit$1$bailout: function(state, char$) {
  return $.geB(char$, 48) && $.leB(char$, 57);
 },
 _parseNumber$0: function() {
  this._isToken$1(45) !== true && this._error$1('Expected number literal');
  var startPos = this.position;
  var char$ = this._char$0();
  if (char$ === 45) char$ = this._nextChar$0();
  if (char$ === 48) char$ = this._nextChar$0();
  else {
    if (this._isDigit$1(char$) === true) {
      char$ = this._nextChar$0();
      for (; this._isDigit$1(char$) === true; ) {
        char$ = this._nextChar$0();
      }
    } else this._error$1('Expected digit when parsing number');
  }
  if (char$ === 46) {
    char$ = this._nextChar$0();
    if (this._isDigit$1(char$) === true) {
      char$ = this._nextChar$0();
      for (; this._isDigit$1(char$) === true; ) {
        char$ = this._nextChar$0();
      }
      var isInt = false;
    } else {
      this._error$1('Expected digit following comma');
      isInt = true;
    }
  } else isInt = true;
  if (char$ === 101 || char$ === 69) {
    char$ = this._nextChar$0();
    if (char$ === 45 || char$ === 43) char$ = this._nextChar$0();
    if (this._isDigit$1(char$) === true) {
      char$ = this._nextChar$0();
      for (; this._isDigit$1(char$) === true; ) {
        char$ = this._nextChar$0();
      }
      isInt = false;
    } else this._error$1('Expected digit following \'e\' or \'E\'');
  }
  var number = $.substring$2(this.json, startPos, this.position);
  if (isInt) return $.parseInt(number);
  return $.parseDouble(number);
 },
 _parseString$0: function() {
  this._isToken$1(34) !== true && this._error$1('Expected string literal');
  this.position = $.add(this.position, 1);
  var charCodes = $.List((void 0));
  $.setRuntimeTypeInfo(charCodes, ({E: 'int'}));
  for (var t1 = this.json; true; ) {
    var c = this._char$0();
    if ($.eqB(c, 34)) {
      this.position = $.add(this.position, 1);
      break;
    }
    if ($.eqB(c, 92)) {
      this.position = $.add(this.position, 1);
      $.eqB(this.position, $.get$length(this)) && this._error$1('\\ at the end of input');
      switch (this._char$0()) {
        case 34:
          c = 34;
          break;
        case 92:
          c = 92;
          break;
        case 47:
          c = 47;
          break;
        case 98:
          c = 8;
          break;
        case 110:
          c = 10;
          break;
        case 114:
          c = 13;
          break;
        case 102:
          c = 12;
          break;
        case 116:
          c = 9;
          break;
        case 117:
          $.gtB($.add(this.position, 5), $.get$length(this)) && this._error$1('Invalid unicode esacape sequence');
          var codeString = $.substring$2(t1, $.add(this.position, 1), $.add(this.position, 5));
          try {
            c = $.parseInt('0x' + $.S(codeString));
          } catch (exception) {
            $.unwrapException(exception);
            this._error$1('Invalid unicode esacape sequence');
          }
          this.position = $.add(this.position, 4);
          break;
        default:
          this._error$1('Invalid esacape sequence in string literal');
      }
    }
    charCodes.push(c);
    this.position = $.add(this.position, 1);
  }
  return $.String$fromCharCodes(charCodes);
 },
 _parseList$0: function() {
  var list = [];
  this.position = $.add(this.position, 1);
  if (this._isToken$1(93) !== true) {
    for (; true; ) {
      $.add$1(list, this._parseValue$0());
      if (this._isToken$1(44) !== true) break;
      this.position = $.add(this.position, 1);
    }
    this._isToken$1(93) !== true && this._error$1('Expected \']\' at end of list');
  }
  this.position = $.add(this.position, 1);
  return list;
 },
 _parseObject$0: function() {
  var object = $.makeLiteralMap([]);
  if (typeof object !== 'object' || ((object.constructor !== Array || !!object.immutable$list) && !object.is$JavaScriptIndexingBehavior())) return this._parseObject$0$bailout(1, object);
  this.position = $.add(this.position, 1);
  if (this._isToken$1(125) !== true) {
    for (; true; ) {
      var key = this._parseString$0();
      this._isToken$1(58) !== true && this._error$1('Expected \':\' when parsing object');
      this.position = $.add(this.position, 1);
      var t1 = this._parseValue$0();
      if (key !== (key | 0)) throw $.iae(key);
      var t2 = object.length;
      if (key < 0 || key >= t2) throw $.ioore(key);
      object[key] = t1;
      if (this._isToken$1(44) !== true) break;
      this.position = $.add(this.position, 1);
    }
    this._isToken$1(125) !== true && this._error$1('Expected \'}\' at end of object');
  }
  this.position = $.add(this.position, 1);
  return object;
 },
 _parseObject$0$bailout: function(state, object) {
  this.position = $.add(this.position, 1);
  if (this._isToken$1(125) !== true) {
    for (; true; ) {
      var key = this._parseString$0();
      this._isToken$1(58) !== true && this._error$1('Expected \':\' when parsing object');
      this.position = $.add(this.position, 1);
      $.indexSet(object, key, this._parseValue$0());
      if (this._isToken$1(44) !== true) break;
      this.position = $.add(this.position, 1);
    }
    this._isToken$1(125) !== true && this._error$1('Expected \'}\' at end of object');
  }
  this.position = $.add(this.position, 1);
  return object;
 },
 _expectKeyword$2: function(word, value) {
  for (var i = 0; $.ltB(i, $.get$length(word)); ++i) {
    !$.eqB(this._char$0(), $.charCodeAt(word, i)) && this._error$1('Expected keyword \'' + $.S(word) + '\'');
    this.position = $.add(this.position, 1);
  }
  return value;
 },
 _parseValue$0: function() {
  var token = this._lib3_token$0();
  token === (void 0) && this._error$1('Nothing to parse');
  switch (token) {
    case 34:
      return this._parseString$0();
    case 45:
      return this._parseNumber$0();
    case 110:
      return this._expectKeyword$2('null', (void 0));
    case 102:
      return this._expectKeyword$2('false', false);
    case 116:
      return this._expectKeyword$2('true', true);
    case 123:
      return this._parseObject$0();
    case 91:
      return this._parseList$0();
    default:
      this._error$1('Unexpected token');
  }
 },
 _parseToplevel$0: function() {
  var result = this._parseValue$0();
  !(this._lib3_token$0() === (void 0)) && this._error$1('Junk at the end of JSON input');
  return result;
 },
 _JsonParser$_internal$1: function(json) {
  if (!($.tokens === (void 0))) return;
  var t1 = $.List(126);
  $.setRuntimeTypeInfo(t1, ({E: 'int'}));
  $.tokens = t1;
  $.indexSet($.tokens, 9, 32);
  $.indexSet($.tokens, 10, 32);
  $.indexSet($.tokens, 13, 32);
  $.indexSet($.tokens, 32, 32);
  $.indexSet($.tokens, 48, 45);
  $.indexSet($.tokens, 49, 45);
  $.indexSet($.tokens, 50, 45);
  $.indexSet($.tokens, 51, 45);
  $.indexSet($.tokens, 52, 45);
  $.indexSet($.tokens, 53, 45);
  $.indexSet($.tokens, 54, 45);
  $.indexSet($.tokens, 55, 45);
  $.indexSet($.tokens, 56, 45);
  $.indexSet($.tokens, 57, 45);
  $.indexSet($.tokens, 45, 45);
  $.indexSet($.tokens, 123, 123);
  $.indexSet($.tokens, 125, 125);
  $.indexSet($.tokens, 91, 91);
  $.indexSet($.tokens, 93, 93);
  $.indexSet($.tokens, 34, 34);
  $.indexSet($.tokens, 58, 58);
  $.indexSet($.tokens, 44, 44);
  $.indexSet($.tokens, 110, 110);
  $.indexSet($.tokens, 116, 116);
  $.indexSet($.tokens, 102, 102);
 }
};

$$.JsonUnsupportedObjectType = {"":
 [],
 super: "Object"
};

$$.JsonStringifier = {"":
 ["_seen", "_sb?"],
 super: "Object",
 _stringify$1: function(object) {
  var t1 = ({});
  if (typeof object === 'number') {
    $.add$1(this._sb, $._numberToString(object));
    return;
  }
  if (object === true) {
    $.add$1(this._sb, 'true');
    return;
  }
  if (object === false) {
    $.add$1(this._sb, 'false');
    return;
  }
  if (object === (void 0)) {
    $.add$1(this._sb, 'null');
    return;
  }
  if (typeof object === 'string') {
    t1 = this._sb;
    $.add$1(t1, '"');
    $._escape(t1, object);
    $.add$1(t1, '"');
    return;
  }
  if (typeof object === 'object' && (object.constructor === Array || object.is$List0())) {
    if (typeof object !== 'object' || (object.constructor !== Array && !object.is$JavaScriptIndexingBehavior())) return this._stringify$1$bailout(1, object);
    this._checkCycle$1(object);
    t1 = this._sb;
    $.add$1(t1, '[');
    var t2 = object.length;
    if (t2 > 0) {
      if (0 >= t2) throw $.ioore(0);
      this._stringify$1(object[0]);
      for (var i = 1; i < object.length; ++i) {
        $.add$1(t1, ',');
        t2 = object.length;
        if (i < 0 || i >= t2) throw $.ioore(i);
        this._stringify$1(object[i]);
      }
    }
    $.add$1(t1, ']');
    $.removeLast(this._seen);
    return;
  }
  if (typeof object === 'object' && object.is$Map()) {
    this._checkCycle$1(object);
    t2 = this._sb;
    $.add$1(t2, '{');
    t1.first_1 = true;
    object.forEach$1(new $.Closure25(this, t1));
    $.add$1(t2, '}');
    $.removeLast(this._seen);
    return;
  }
  throw $.captureStackTrace($.CTC7);
 },
 _stringify$1$bailout: function(state, env0) {
  switch (state) {
    case 1:
      var object = env0;
      break;
  }
  switch (state) {
    case 0:
      var t1 = ({});
    case 1:
      if ((state == 0 && typeof object === 'number')) {
        $.add$1(this._sb, $._numberToString(object));
        return;
      } else {
        switch (state) {
          case 0:
          case 1:
            if ((state == 0 && object === true)) {
              $.add$1(this._sb, 'true');
              return;
            } else {
              switch (state) {
                case 0:
                case 1:
                  if ((state == 0 && object === false)) {
                    $.add$1(this._sb, 'false');
                    return;
                  } else {
                    switch (state) {
                      case 0:
                      case 1:
                        if ((state == 0 && object === (void 0))) {
                          $.add$1(this._sb, 'null');
                          return;
                        } else {
                          switch (state) {
                            case 0:
                            case 1:
                              if ((state == 0 && typeof object === 'string')) {
                                t1 = this._sb;
                                $.add$1(t1, '"');
                                $._escape(t1, object);
                                $.add$1(t1, '"');
                                return;
                              } else {
                                switch (state) {
                                  case 0:
                                  case 1:
                                    if (state == 1 || (state == 0 && (typeof object === 'object' && ((object.constructor === Array || object.is$List0()))))) {
                                      switch (state) {
                                        case 0:
                                        case 1:
                                          state = 0;
                                          this._checkCycle$1(object);
                                          t1 = this._sb;
                                          $.add$1(t1, '[');
                                          if ($.gtB($.get$length(object), 0)) {
                                            this._stringify$1($.index(object, 0));
                                            for (var i = 1; $.ltB(i, $.get$length(object)); ++i) {
                                              $.add$1(t1, ',');
                                              this._stringify$1($.index(object, i));
                                            }
                                          }
                                          $.add$1(t1, ']');
                                          $.removeLast(this._seen);
                                          return;
                                      }
                                    } else {
                                      if (typeof object === 'object' && object.is$Map()) {
                                        this._checkCycle$1(object);
                                        var t2 = this._sb;
                                        $.add$1(t2, '{');
                                        t1.first_1 = true;
                                        object.forEach$1(new $.Closure25(this, t1));
                                        $.add$1(t2, '}');
                                        $.removeLast(this._seen);
                                        return;
                                      }
                                      throw $.captureStackTrace($.CTC7);
                                    }
                                }
                              }
                          }
                        }
                    }
                  }
              }
            }
        }
      }
  }
 },
 _checkCycle$1: function(object) {
  var t1 = this._seen;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this._checkCycle$1$bailout(1, object, t1);
  var t2 = t1.length;
  var i = 0;
  for (; i < t2; ++i) {
    if (i < 0 || i >= t2) throw $.ioore(i);
    if (t1[i] === object) throw $.captureStackTrace('Cyclic structure');
  }
  $.add$1(t1, object);
 },
 _checkCycle$1$bailout: function(state, object, t1) {
  var i = 0;
  for (; $.ltB(i, $.get$length(t1)); ++i) {
    if ($.index(t1, i) === object) throw $.captureStackTrace('Cyclic structure');
  }
  $.add$1(t1, object);
 },
 get$_result: function() {
  return $.toString(this._sb);
 }
};

$$.IdentityHash = {"":
 [],
 super: "Object",
 hashCode$0: function() {
  return this._id;
 }
};

$$.UrlPattern = {"":
 ["_tokens"],
 super: "Object",
 generate$2: function(urlParams, queryParams) {
  var t1 = ({});
  t1.urlParams_1 = urlParams;
  var buffer = $.StringBufferImpl$1('');
  $.forEach(this._tokens, new $.Closure17(t1, buffer));
  t1.first_2 = true;
  $.forEach(queryParams, new $.Closure18(buffer, t1));
  return buffer.toString$0();
 },
 UrlPattern$1: function(pattern) {
  for (var t1 = this._tokens, cursor = 0; $.ltB(cursor, $.get$length(pattern)); ) {
    var t2 = ({});
    var open$ = $.indexOf$2(pattern, '{', cursor);
    if ($.ltB(open$, 0)) {
      $.add$1(t1, new $.Closure22($.substring$1(pattern, cursor)));
      cursor = $.get$length(pattern);
    } else {
      if ($.gtB(open$, cursor)) {
        $.add$1(t1, new $.Closure23($.substring$2(pattern, cursor, open$)));
      }
      var close$ = $.indexOf$2(pattern, '}', open$);
      if ($.ltB(close$, 0)) throw $.captureStackTrace($.IllegalArgumentException$1('Token meets end of text: ' + $.S(pattern)));
      t2.variable_1 = $.substring$2(pattern, $.add(open$, 1), close$);
      $.add$1(t1, new $.Closure24(t2));
      cursor = $.add(close$, 1);
    }
  }
 }
};

$$._Unspecified = {"":
 [],
 super: "Object"
};

$$.Uri = {"":
 ["fragment?", "query?", "path?", "port?", "domain?", "userInfo?", "scheme?"],
 super: "Object",
 toString$0: function() {
  var sb = $.StringBufferImpl$1('');
  var t1 = this.scheme;
  $._addIfNonEmpty(sb, t1, t1, ':');
  if (this.hasAuthority$0() === true || $.eqB(t1, 'file')) {
    sb.add$1('//');
    t1 = this.userInfo;
    $._addIfNonEmpty(sb, t1, t1, '@');
    t1 = this.domain;
    sb.add$1(t1 === (void 0) ? 'null' : t1);
    t1 = this.port;
    if (!$.eqB(t1, 0)) {
      sb.add$1(':');
      sb.add$1($.toString(t1));
    }
  }
  t1 = this.path;
  sb.add$1(t1 === (void 0) ? 'null' : t1);
  t1 = this.query;
  $._addIfNonEmpty(sb, t1, '?', t1);
  t1 = this.fragment;
  $._addIfNonEmpty(sb, t1, '#', t1);
  return sb.toString$0();
 },
 hasAuthority$0: function() {
  return !$.eqB(this.userInfo, '') || !$.eqB(this.domain, '') || !$.eqB(this.port, 0);
 },
 resolveUri$1: function(reference) {
  if (!$.eqB(reference.get$scheme(), '')) {
    var targetScheme = reference.get$scheme();
    var targetUserInfo = reference.get$userInfo();
    var targetDomain = reference.get$domain();
    var targetPort = reference.get$port();
    var targetPath = $.removeDotSegments(reference.get$path());
    var targetQuery = reference.get$query();
  } else {
    if (reference.hasAuthority$0() === true) {
      targetUserInfo = reference.get$userInfo();
      targetDomain = reference.get$domain();
      targetPort = reference.get$port();
      targetPath = $.removeDotSegments(reference.get$path());
      targetQuery = reference.get$query();
    } else {
      if ($.eqB(reference.get$path(), '')) {
        targetPath = this.path;
        targetQuery = !$.eqB(reference.get$query(), '') ? reference.get$query() : this.query;
      } else {
        targetPath = $.startsWith(reference.get$path(), '/') === true ? $.removeDotSegments(reference.get$path()) : $.removeDotSegments($.merge(this.path, reference.get$path()));
        targetQuery = reference.get$query();
      }
      targetUserInfo = this.userInfo;
      targetDomain = this.domain;
      targetPort = this.port;
    }
    targetScheme = this.scheme;
  }
  return $.Uri$7(targetScheme, targetUserInfo, targetDomain, targetPort, targetPath, targetQuery, reference.get$fragment());
 },
 resolve$1: function(uri) {
  return this.resolveUri$1($.Uri$fromString$1(uri));
 },
 query$1: function(arg0) { return this.query.$call$1(arg0); }
};

$$._ListRange = {"":
 ["_lib0_length", "_offset", "_source"],
 super: "Object",
 get$length: function() {
  return this._lib0_length;
 },
 iterator$0: function() {
  var t1 = this._source;
  var t2 = this._offset;
  return $._ListRangeIteratorImpl$3(t1, t2, $.add(t2, this._lib0_length));
 },
 _ListRange$3: function(source, offset, length$) {
  var t1 = this._offset;
  if ($.ltB(t1, 0) || $.gtB(t1, $.get$length(this._source))) throw $.captureStackTrace($.IndexOutOfRangeException$1(t1));
  var t2 = this._lib0_length;
  if (!$.eqNullB(t2) && $.ltB(t2, 0)) throw $.captureStackTrace($.IndexOutOfRangeException$1(t2));
  if ($.gtB($.add(t2, t1), $.get$length(this._source))) throw $.captureStackTrace($.IndexOutOfRangeException$1($.add(t2, t1)));
 }
};

$$._ListRangeIteratorImpl = {"":
 ["_end", "_offset", "_source"],
 super: "Object",
 next$0: function() {
  var t1 = this._source;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.next$0$bailout(1, t1, 0);
  var t2 = this._offset;
  if (typeof t2 !== 'number') return this.next$0$bailout(2, t1, t2);
  this._offset = t2 + 1;
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  var t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  return t1[t2];
 },
 next$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._source;
    case 1:
      state = 0;
      var t2 = this._offset;
    case 2:
      state = 0;
      this._offset = $.add(t2, 1);
      return $.index(t1, t2);
  }
 },
 hasNext$0: function() {
  var t1 = this._offset;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = this._end;
  if (typeof t2 !== 'number') return this.hasNext$0$bailout(2, t1, t2);
  return t1 < t2;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._offset;
    case 1:
      state = 0;
      var t2 = this._end;
    case 2:
      state = 0;
      return $.lt(t1, t2);
  }
 }
};

$$.HttpRequest = {"":
 ["headers?", "method?", "url"],
 super: "Object",
 request$1: function(body) {
  var completer = $.CompleterImpl$0();
  $.setRuntimeTypeInfo(completer, ({T: 'String'}));
  var req = $.XMLHttpRequest();
  req.open$5(this.method, this.url, true, (void 0), (void 0));
  $.forEach(this.headers, req.get$setRequestHeader());
  $.add$1(req.get$on().get$error(), new $.Closure40(completer));
  $.add$1(req.get$on().get$load(), new $.Closure41(completer, req));
  req.send$1(body);
  return completer.get$future();
 },
 request$0: function() {
  return this.request$1((void 0))
},
 request$0: function() {
  return this.request$1((void 0))
}
};

$$.NetworkException = {"":
 [],
 super: "Object",
 is$Exception: true
};

$$.HttpException = {"":
 ["code"],
 super: "Object",
 is$Exception: true
};

$$.OAuth2 = {"":
 ["__token", "_tokenCompleter?", "_tokenFuture!", "_channel", "_provider", "_scopes", "_clientId?"],
 super: "Object",
 _wrapValidation$1: function(validatedTokenCompleter) {
  var t1 = ({});
  t1.validatedTokenCompleter_3 = validatedTokenCompleter;
  var result = $.CompleterImpl$0();
  result.get$future().onComplete$1(new $.Closure9(this, t1));
  return result;
 },
 get$_storageKey: function() {
  return $.stringify($.makeLiteralMap(['clientId', this._clientId, 'scopes', this._scopes, 'provider', this._provider]));
 },
 set$_storedToken: function(value) {
  if ($.eqNullB(value)) var t1 = $.window().get$localStorage().remove$1(this.get$_storageKey());
  else {
    t1 = $.window().get$localStorage();
    var t2 = this.get$_storageKey();
    var t3 = value.toJson$0();
    $.indexSet(t1, t2, t3);
    t1 = t3;
  }
  return t1;
 },
 get$_storedToken: function() {
  return $.window().get$localStorage().containsKey$1(this.get$_storageKey()) === true ? $.Token$fromJson($.index($.window().get$localStorage(), this.get$_storageKey())) : (void 0);
 },
 set$_token: function(value) {
  try {
    this.set$_storedToken(value);
  } catch (exception) {
    var t1 = $.unwrapException(exception);
    var e = t1;
    $.print('Failed to cache OAuth2 token: ' + $.S(e));
  }
  this.__token = value;
 },
 get$token: function() {
  return this.__token;
 },
 authenticate$1: function(request) {
  var t1 = ({});
  t1.request_1 = request;
  return this.login$0().transform$1(new $.Closure33(t1));
 },
 login$1: function(immediate) {
  var t1 = ({});
  t1.immediate_3 = immediate;
  if (!$.eqNullB(this.get$token())) {
    if (this.get$token().get$expired() === true) {
      if ($.eqNullB(t1.immediate_3)) t1.immediate_3 = true;
    } else {
      t1 = $.FutureImpl$immediate(this.get$token());
      $.setRuntimeTypeInfo(t1, ({T: 'Token'}));
      return t1;
    }
  }
  if ($.eqNullB(t1.immediate_3)) t1.immediate_3 = false;
  if (!$.eqNullB(this._tokenFuture)) {
    if (t1.immediate_3 !== true) {
      var result = $.CompleterImpl$0();
      $.setRuntimeTypeInfo(result, ({T: 'Token'}));
      t1.result_4 = result;
      this._tokenFuture.onComplete$1(new $.Closure5(this, t1));
      return t1.result_4.get$future();
    }
  } else {
    var tokenCompleter = $.CompleterImpl$0();
    tokenCompleter.get$future().onComplete$1(new $.Closure6(this));
    this._tokenFuture = tokenCompleter.get$future();
    this._tokenCompleter = this._wrapValidation$1(tokenCompleter);
    this._channel.onComplete$1(new $.Closure7(this, t1));
  }
  return this._tokenFuture.transform$1(new $.Closure8());
 },
 login$0: function() {
  return this.login$1((void 0))
},
 login$1$immediate: function(immediate) {
  return this.login$1(immediate)
},
 login$1$immediate: function(immediate) {
  return this.login$1(immediate)
},
 login$0: function() {
  return this.login$1((void 0))
},
 _getAuthorizeUri$1: function(immediate) {
  var queryParams = $.makeLiteralMap(['response_type', 'token', 'client_id', this._clientId, 'origin', $.window().get$location().get$origin(), 'redirect_uri', 'postmessage', 'scope', $.join(this._scopes, ' '), 'immediate', immediate]);
  return $.UrlPattern$1($.S(this._provider) + 'auth').generate$2($.makeLiteralMap([]), queryParams);
 },
 _createFutureChannel$0: function() {
  var t1 = ({});
  var completer = $.CompleterImpl$0();
  $.setRuntimeTypeInfo(completer, ({T: '_ProxyChannel'}));
  t1.channel_1 = (void 0);
  t1.channel_1 = $._ProxyChannel$2(this._provider, new $.Closure46(this, completer, t1));
  return completer.get$future();
 },
 OAuth2$3: function(_clientId, _scopes, provider) {
  this._channel = this._createFutureChannel$0();
  try {
    this.__token = this.get$_storedToken();
  } catch (exception) {
    $.unwrapException(exception);
  }
  this.login$1$immediate(true);
 }
};

$$._WindowPoller = {"":
 ["_window", "_completer"],
 super: "Object",
 poll$0: function() {
  var t1 = this._completer;
  if (t1.get$future().get$isComplete() === true) return;
  if (this._window.get$closed() === true) t1.completeException$1($.ExceptionImplementation$1('User closed the window'));
  else $.window().setTimeout$2(this.get$poll(), 500);
 },
 get$poll: function() { return new $.Closure70(this, 'poll$0'); }
};

$$._ProxyChannel = {"":
 ["_callback", "_lib4_element?", "_provider", "_nonce"],
 super: "Object",
 _getProxyUrl$0: function() {
  var proxyParams = $.makeLiteralMap(['parent', $.window().get$location().get$origin()]);
  return $.toString($.Uri$fromString$1($.UrlPattern$1($.S(this._provider) + 'postmessageRelay').generate$2($.makeLiteralMap([]), proxyParams)).resolve$1('#rpctoken=' + $.S(this._nonce) + '&forcesecure=1'));
 },
 _onMessage$1: function(event$) {
  var data = $.parse0(event$.get$data());
  if (!((typeof data === 'object') && data.is$Map()) || !$.eqB(data.operator$index$1('t'), this._nonce)) return;
  var subject = $.index(data, 's');
  if ($.endsWith(subject, ':' + $.S(this._nonce)) === true) subject = $.substring$2(subject, 0, $.sub($.sub($.get$length(subject), $.get$length(this._nonce)), 1));
  this._callback$2(subject, $.index(data, 'a'));
 },
 get$_onMessage: function() { return new $.Closure72(this, '_onMessage$1'); },
 _callback$2: function(arg0, arg1) { return this._callback.$call$2(arg0, arg1); },
 _ProxyChannel$2: function(_provider, _callback) {
  this._nonce = $.toString($.toInt($.mul($.random(), 100000)));
  this._lib4_element = $._iframe(this._getProxyUrl$0());
  $.add$1($.window().get$on().get$message(), this.get$_onMessage());
 }
};

$$.Token = {"":
 ["expiry", "data?", "type?"],
 super: "Object",
 toJson$0: function() {
  return $.stringify($.makeLiteralMap(['type', this.type, 'data', this.data, 'expiry', this.expiry.get$millisecondsSinceEpoch()]));
 },
 validate$2: function(clientId, service) {
  var t1 = ({});
  t1.clientId_1 = clientId;
  return $.HttpRequest$3($.UrlPattern$1(service).generate$2($.makeLiteralMap([]), $.makeLiteralMap(['access_token', this.data])), 'GET', $.CTC8).request$0().transform$1(new $.Closure45(t1));
 },
 validate$1: function(clientId) {
  return this.validate$2(clientId,'https://www.googleapis.com/oauth2/v1/tokeninfo')
},
 toString$0: function() {
  return '[Token type=' + $.S(this.type) + ', data=' + $.S(this.data) + ', expired=' + $.S(this.get$expired()) + ', expiry=' + $.S(this.expiry) + ']';
 },
 get$expired: function() {
  return $.gt($.DateImplementation$now$0().compareTo$1(this.expiry), 0);
 },
 is$Token: true
};

$$.AuthException = {"":
 ["data?", "message?"],
 super: "Object",
 toString$0: function() {
  return 'AuthException: ' + $.S(this.message);
 },
 is$Exception: true
};

$$.Closure = {"":
 [],
 super: "Closure71",
 $call$1: function(f) {
  f.get$hasValue() === true && $.loadCalendars();
 }
};

$$.Closure0 = {"":
 ["oauth_0"],
 super: "Closure71",
 $call$1: function(e) {
  this.oauth_0.login$0().onComplete$1(new $.Closure50());
 }
};

$$.Closure50 = {"":
 [],
 super: "Closure71",
 $call$1: function(f) {
  f.get$hasValue() === true && $.loadCalendars();
 }
};

$$.Closure1 = {"":
 ["box_0"],
 super: "Closure71",
 $call$0: function() {
  return this.box_0.closure_1.$call$0();
 }
};

$$.Closure2 = {"":
 ["box_0"],
 super: "Closure71",
 $call$0: function() {
  var t1 = this.box_0;
  return t1.closure_1.$call$1(t1.arg1_2);
 }
};

$$.Closure3 = {"":
 ["box_0"],
 super: "Closure71",
 $call$0: function() {
  var t1 = this.box_0;
  return t1.closure_1.$call$2(t1.arg1_2, t1.arg2_3);
 }
};

$$.Closure4 = {"":
 ["box_0"],
 super: "Closure71",
 $call$2: function(k, v) {
  var t1 = this.box_0;
  t1.first_3 !== true && $.add$1(t1.result_1, ', ');
  this.box_0.first_3 = false;
  t1 = this.box_0;
  $._emitObject(k, t1.result_1, t1.visiting_2);
  $.add$1(this.box_0.result_1, ': ');
  t1 = this.box_0;
  $._emitObject(v, t1.result_1, t1.visiting_2);
 }
};

$$.Closure5 = {"":
 ["this_5", "box_2"],
 super: "Closure71",
 $call$1: function(v) {
  if (v.get$hasValue() === true) return this.box_2.result_4.complete$1(v.get$value());
  var t1 = this.this_5;
  t1.login$1$immediate(t1.get$immedaite()).onComplete$1(new $.Closure26(this.box_2));
 }
};

$$.Closure26 = {"":
 ["box_2"],
 super: "Closure71",
 $call$1: function(f) {
  if (f.get$hasValue() === true) return this.box_2.result_4.complete$1(f.get$value());
  this.box_2.result_4.completeException$1(f.get$exception());
 }
};

$$.Closure6 = {"":
 ["this_6"],
 super: "Closure71",
 $call$1: function(tok) {
  this.this_6.set$_tokenFuture((void 0));
  var t1 = tok.get$hasValue() === true ? tok.get$value() : (void 0);
  this.this_6.set$_token(t1);
 }
};

$$.Closure7 = {"":
 ["this_7", "box_2"],
 super: "Closure71",
 $call$1: function(proxyChannel) {
  var t1 = ({});
  if (proxyChannel.get$hasValue() !== true) return this.this_7.get$_tokenCompleter().get$future().handleException$1(proxyChannel.get$exception());
  var uri = this.this_7._getAuthorizeUri$1(this.box_2.immediate_3);
  if (this.box_2.immediate_3 === true) {
    t1.iframe_1 = $._iframe(uri);
    this.this_7.get$_tokenCompleter().get$future().onComplete$1(new $.Closure13(t1));
  } else {
    var popup = $._popup(uri);
    $._WindowPoller$2(this.this_7.get$_tokenCompleter(), popup).poll$0();
  }
 }
};

$$.Closure13 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(f) {
  return this.box_0.iframe_1.remove$0();
 }
};

$$.Closure8 = {"":
 [],
 super: "Closure71",
 $call$1: function(v) {
  if (!((typeof v === 'object') && !!v.is$Token)) throw $.captureStackTrace(v);
  return v;
 }
};

$$.Closure9 = {"":
 ["this_4", "box_2"],
 super: "Closure71",
 $call$1: function(future) {
  var t1 = ({});
  t1.future_1 = future;
  if (t1.future_1.get$hasValue() !== true) return this.box_2.validatedTokenCompleter_3.completeException$1(t1.future_1.get$exception());
  t1.future_1.get$value().validate$1(this.this_4.get$_clientId()).onComplete$1(new $.Closure12(t1, this.box_2));
 }
};

$$.Closure12 = {"":
 ["box_0", "box_2"],
 super: "Closure71",
 $call$1: function(validation) {
  if (validation.get$hasValue() !== true) return this.box_2.validatedTokenCompleter_3.completeException$1(validation.get$exception());
  var t1 = validation.get$value() === true;
  var t2 = this.box_2;
  if (t1) t2.validatedTokenCompleter_3.complete$1(this.box_0.future_1.get$value());
  else t2.validatedTokenCompleter_3.completeException$1($.ExceptionImplementation$1('Server returned token is invalid'));
 }
};

$$.Closure10 = {"":
 ["completer_2"],
 super: "Closure71",
 $call$1: function(e) {
  this.completer_2.completeException$1(e);
  return true;
 }
};

$$.Closure11 = {"":
 ["completer_3", "box_0"],
 super: "Closure71",
 $call$1: function(v) {
  var transformed = (void 0);
  try {
    transformed = this.box_0.transformation_1.$call$1(v);
  } catch (exception) {
    var t1 = $.unwrapException(exception);
    var ex = t1;
    var stackTrace = $.getTraceFromException(exception);
    this.completer_3.completeException$2(ex, stackTrace);
    return;
  }
  this.completer_3.complete$1(transformed);
 }
};

$$.Closure14 = {"":
 [],
 super: "Closure71",
 $call$1: function(n) {
  return typeof n === 'object' && n.is$Element();
 }
};

$$.Closure15 = {"":
 ["box_0", "output_2"],
 super: "Closure71",
 $call$1: function(element) {
  this.box_0.f_1.$call$1(element) === true && $.add$1(this.output_2, element);
 }
};

$$.Closure16 = {"":
 [],
 super: "Closure71",
 $call$1: function(el) {
  return el.remove$0();
 }
};

$$.Closure17 = {"":
 ["box_0", "buffer_3"],
 super: "Closure71",
 $call$1: function(token) {
  return $.add$1(this.buffer_3, token.$call$1(this.box_0.urlParams_1));
 }
};

$$.Closure18 = {"":
 ["buffer_4", "box_0"],
 super: "Closure71",
 $call$2: function(key, value) {
  if ($.eqNullB(value)) return;
  var t1 = this.buffer_4;
  $.add$1(t1, this.box_0.first_2 === true ? '?' : '&');
  t1 = this.box_0;
  if (t1.first_2 === true) t1.first_2 = false;
  $.add$1(this.buffer_4, $.encodeUriComponent($.toString(key)));
  $.add$1(this.buffer_4, '=');
  $.add$1(this.buffer_4, $.encodeUriComponent($.toString(value)));
 }
};

$$.Closure19 = {"":
 ["hex_0"],
 super: "Closure71",
 $call$1: function(v) {
  return '%' + $.S($.index(this.hex_0, $.shr(v, 4))) + $.S($.index(this.hex_0, $.and(v, 15)));
 }
};

$$.Closure20 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(element) {
  var counter = $.add(this.box_0.counter_1, 1);
  this.box_0.counter_1 = counter;
 }
};

$$.Closure21 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(entry) {
  this.box_0.f_10.$call$2(entry.get$key(), entry.get$value());
 }
};

$$.Closure22 = {"":
 ["rest_2"],
 super: "Closure71",
 $call$1: function(params) {
  return this.rest_2;
 }
};

$$.Closure23 = {"":
 ["intermediate_3"],
 super: "Closure71",
 $call$1: function(params) {
  return this.intermediate_3;
 }
};

$$.Closure24 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(params) {
  return $.eqNullB($.index(params, this.box_0.variable_1)) ? 'null' : $.encodeUriComponent($.toString($.index(params, this.box_0.variable_1)));
 }
};

$$.Closure25 = {"":
 ["this_2", "box_0"],
 super: "Closure71",
 $call$2: function(key, value) {
  var t1 = this.box_0.first_1 !== true;
  var t2 = this.this_2;
  if (t1) $.add$1(t2.get$_sb(), ',"');
  else $.add$1(t2.get$_sb(), '"');
  $._escape(this.this_2.get$_sb(), key);
  $.add$1(this.this_2.get$_sb(), '":');
  this.this_2._stringify$1(value);
  this.box_0.first_1 = false;
 }
};

$$.Closure27 = {"":
 ["$$body_0"],
 super: "Closure71",
 $call$1: function($$req) {
  return $$req.request$1(this.$$body_0);
 }
};

$$.Closure28 = {"":
 [],
 super: "Closure71",
 $call$1: function($$text) {
  return $.parse($.parse0($$text));
 }
};

$$.Closure29 = {"":
 ["completer_2"],
 super: "Closure71",
 $call$1: function(e) {
  this.completer_2.completeException$1(e);
  return true;
 }
};

$$.Closure30 = {"":
 ["completer_3", "box_0"],
 super: "Closure71",
 $call$1: function(v) {
  var future = (void 0);
  try {
    future = this.box_0.transformation_10.$call$1(v);
  } catch (exception) {
    var t1 = $.unwrapException(exception);
    var ex = t1;
    var stackTrace = $.getTraceFromException(exception);
    this.completer_3.completeException$2(ex, stackTrace);
    return;
  }
  future.handleException$1(new $.Closure31(this.completer_3));
  future.then$1(new $.Closure32(this.completer_3));
 }
};

$$.Closure31 = {"":
 ["completer_4"],
 super: "Closure71",
 $call$1: function(e) {
  this.completer_4.completeException$1(e);
  return true;
 }
};

$$.Closure32 = {"":
 ["completer_5"],
 super: "Closure71",
 $call$1: function(b) {
  return this.completer_5.complete$1(b);
 }
};

$$.Closure33 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(token) {
  $.indexSet(this.box_0.request_1.get$headers(), 'Authorization', 'Bearer ' + $.S(token.get$data()));
  return this.box_0.request_1;
 }
};

$$.Closure34 = {"":
 ["box_0"],
 super: "Closure71",
 $call$2: function(key, value) {
  $.indexSet(this.box_0.result_10, key, value);
 }
};

$$.Closure35 = {"":
 ["this_2", "box_0"],
 super: "Closure71",
 $call$1: function(key) {
  return this.box_0.f_11.$call$2(key, $.index(this.this_2, key));
 }
};

$$.Closure36 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(input) {
  if ($.eqNullB(input)) return;
  var result = $.List((void 0));
  $.forEach(input, new $.Closure37(result, this.box_0));
  return result;
 }
};

$$.Closure37 = {"":
 ["result_2", "box_0"],
 super: "Closure71",
 $call$1: function(value) {
  return $.add$1(this.result_2, this.box_0.transform_1.$call$1(value));
 }
};

$$.Closure38 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(input) {
  if ($.eqNullB(input)) return;
  var result = $.HashMapImplementation$0();
  $.forEach(input, new $.Closure39(result, this.box_0));
  return result;
 }
};

$$.Closure39 = {"":
 ["result_2", "box_0"],
 super: "Closure71",
 $call$2: function(key, value) {
  var t1 = this.result_2;
  var t2 = this.box_0.transform_10.$call$1(value);
  $.indexSet(t1, key, t2);
  return t2;
 }
};

$$.Closure40 = {"":
 ["completer_0"],
 super: "Closure71",
 $call$1: function(event$) {
  this.completer_0.completeException$1($.NetworkException$0());
 }
};

$$.Closure41 = {"":
 ["completer_2", "req_1"],
 super: "Closure71",
 $call$1: function(event$) {
  var t1 = $.geB(this.req_1.get$status(), 400);
  var t2 = this.completer_2;
  var t3 = this.req_1;
  if (t1) t2.completeException$1($.HttpException$1(t3.get$status()));
  else t2.complete$1(t3.get$responseText());
 }
};

$$.Closure42 = {"":
 [],
 super: "Closure71",
 $call$1: function(n) {
  var absN = $.abs(n);
  var sign = $.ltB(n, 0) ? '-' : '';
  if ($.geB(absN, 1000)) return $.S(n);
  if ($.geB(absN, 100)) return sign + '0' + $.S(absN);
  if ($.geB(absN, 10)) return sign + '00' + $.S(absN);
  if ($.geB(absN, 1)) return sign + '000' + $.S(absN);
  throw $.captureStackTrace($.IllegalArgumentException$1(n));
 }
};

$$.Closure43 = {"":
 [],
 super: "Closure71",
 $call$1: function(n) {
  if ($.geB(n, 100)) return $.S(n);
  if ($.geB(n, 10)) return '0' + $.S(n);
  return '00' + $.S(n);
 }
};

$$.Closure44 = {"":
 [],
 super: "Closure71",
 $call$1: function(n) {
  if ($.geB(n, 10)) return $.S(n);
  return '0' + $.S(n);
 }
};

$$.Closure45 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(json) {
  return $.eq(this.box_0.clientId_1, $.index($.parse0(json), 'audience'));
 }
};

$$.Closure46 = {"":
 ["this_3", "completer_2", "box_0"],
 super: "Closure71",
 $call$2: function(subject, args) {
  switch (subject) {
    case 'oauth2relayReady':
      this.completer_2.complete$1(this.box_0.channel_1);
      break;
    case 'oauth2callback':
      try {
        var token = $._parse($.index(args, 0));
        this.this_3.get$_tokenCompleter().complete$1(token);
      } catch (exception0) {
        var t1 = $.unwrapException(exception0);
        if (t1 === (void 0) || typeof t1 === 'object' && !!t1.is$Exception) {
          var exception = t1;
          this.this_3.get$_tokenCompleter().completeException$1(exception);
        } else throw exception0;
      }
      break;
  }
 }
};

$$.Closure47 = {"":
 [],
 super: "Closure71",
 $call$1: function(n) {
  if ($.geB(n, 100)) return $.S(n);
  if ($.gtB(n, 10)) return '0' + $.S(n);
  return '00' + $.S(n);
 }
};

$$.Closure48 = {"":
 [],
 super: "Closure71",
 $call$1: function(n) {
  if ($.geB(n, 10)) return $.S(n);
  return '0' + $.S(n);
 }
};

$$.Closure49 = {"":
 ["result_0"],
 super: "Closure71",
 $call$1: function(x) {
  !$.eqNullB(x) && $.addAll(this.result_0, $._tokenize(x));
 }
};

$$.Closure51 = {"":
 [],
 super: "Closure71",
 $call$1: function(list) {
  $.document().query$1('#loading').remove$0();
  $.forEach(list.get$items(), new $.Closure56());
 }
};

$$.Closure56 = {"":
 [],
 super: "Closure71",
 $call$1: function(calendar) {
  $.add$1($.document().query$1('#calendars').get$elements(), $.createCalendarBox(calendar));
 }
};

$$.Closure52 = {"":
 [],
 super: "Closure71",
 $call$1: function($$req) {
  return $$req.request$0();
 }
};

$$.Closure53 = {"":
 [],
 super: "Closure71",
 $call$1: function($$text) {
  return $.parse6($.parse0($$text));
 }
};

$$.Closure54 = {"":
 [],
 super: "Closure71",
 $call$1: function($$req) {
  return $$req.request$0();
 }
};

$$.Closure55 = {"":
 [],
 super: "Closure71",
 $call$1: function($$text) {
  return $.parse8($.parse0($$text));
 }
};

$$.Closure57 = {"":
 ["box_1", "loading_0"],
 super: "Closure71",
 $call$1: function(result) {
  this.loading_0.remove$0();
  if (result.get$hasValue() !== true) {
    this.box_1.insertAdjacentText$2('beforeend', 'Error: ' + $.S(result.get$exception()));
    return;
  }
  var events = result.get$value();
  if ($.eqNullB(events.get$items()) || $.isEmpty(events.get$items()) === true) {
    var noEvents = $.SpanElement();
    $.add$1(noEvents.get$classes(), 'no-events');
    noEvents.set$text('No events!');
    $.add$1(this.box_1.get$elements(), noEvents);
  } else {
    $.sort($.List$from(events.get$items()), new $.Closure66());
    $.forEach(events.get$items(), new $.Closure67(this.box_1));
  }
 }
};

$$.Closure66 = {"":
 [],
 super: "Closure71",
 $call$2: function(a, b) {
  return $.compare($.dateFromRfc3339(a.get$start().get$dateTime()), $.dateFromRfc3339(b.get$start().get$dateTime()));
 }
};

$$.Closure67 = {"":
 ["box_2"],
 super: "Closure71",
 $call$1: function(e) {
  return $.add$1(this.box_2.get$elements(), $.createEventBox(e));
 }
};

$$.Closure58 = {"":
 [],
 super: "Closure71",
 $call$1: function($$req) {
  return $$req.request$0();
 }
};

$$.Closure59 = {"":
 [],
 super: "Closure71",
 $call$1: function($$text) {
  return $.parse11($.parse0($$text));
 }
};

$$.Closure60 = {"":
 ["this_0"],
 super: "Closure71",
 $call$1: function(value) {
  this.this_0.add$1(value);
 }
};

$$.Closure61 = {"":
 ["box_0"],
 super: "Closure71",
 $call$2: function(key, value) {
  this.box_0.f_12.$call$1(key);
 }
};

$$.Closure62 = {"":
 ["box_0"],
 super: "Closure71",
 $call$2: function(key, value) {
  this.box_0.f_13.$call$1(key) === true && $.add$1(this.box_0.result_2, key);
 }
};

$$.Closure63 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(s) {
  return $.add$1(s, this.box_0.value_1);
 }
};

$$.Closure64 = {"":
 ["box_0"],
 super: "Closure71",
 $call$1: function(s) {
  return $.addAll(s, this.box_0.collection_1);
 }
};

$$.Closure65 = {"":
 [],
 super: "Closure71",
 $call$1: function(s) {
  return $.clear(s);
 }
};

$$.Closure68 = {"":
 [],
 super: "Closure71",
 $call$1: function(matched) {
  if (matched === (void 0) || $.eqB(matched, '')) return 0;
  return $.parseInt(matched);
 }
};

$$.Closure69 = {"":
 [],
 super: "Closure71",
 $call$1: function(matched) {
  if (matched === (void 0) || $.eqB(matched, '')) return 0.0;
  return $.parseDouble(matched);
 }
};

Isolate.$defineClass('Closure70', 'Closure71', ['self', 'target'], {
$call$0: function() { return this.self[this.target](); }
});
Isolate.$defineClass('Closure72', 'Closure71', ['self', 'target'], {
$call$1: function(p0) { return this.self[this.target](p0); }
});
Isolate.$defineClass('Closure73', 'Closure71', ['self', 'target'], {
$call$2: function(p0, p1) { return this.self[this.target](p0, p1); }
});
$.mul$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a * b;
  }
  return a.operator$mul$1(b);
};

$._ChildNodeListLazy$1 = function(_this) {
  return new $._ChildNodeListLazy(_this);
};

$._AudioContextEventsImpl$1 = function(_ptr) {
  return new $._AudioContextEventsImpl(_ptr);
};

$.EventReminder$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventReminder((void 0), (void 0), t1);
};

$.floor = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.floor$0();
  return Math.floor(receiver);
};

$._iframe = function(url) {
  var iframe = $.Element$tag('iframe');
  iframe.set$src(url);
  iframe.get$style().set$position('absolute');
  iframe.set$height('1');
  iframe.set$width('1');
  iframe.get$style().set$left('-100px');
  iframe.get$style().set$top('-100px');
  $.add$1($.document().get$body().get$elements(), iframe);
  return iframe;
};

$.serialize18 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'creator', $.serialize17(value.get$creator()));
  $.indexSet(result, 'organizer', $.serialize16(value.get$organizer()));
  $.indexSet(result, 'id', $.identity(value.get$id()));
  $.indexSet(result, 'attendees', $.map($.serialize15).$call$1(value.get$attendees()));
  $.indexSet(result, 'htmlLink', $.identity(value.get$htmlLink()));
  $.indexSet(result, 'recurrence', $.map($.identity).$call$1(value.get$recurrence()));
  $.indexSet(result, 'start', $.serialize12(value.get$start()));
  $.indexSet(result, 'etag', $.identity(value.get$etag()));
  $.indexSet(result, 'location', $.identity(value.get$location()));
  $.indexSet(result, 'recurringEventId', $.identity(value.get$recurringEventId()));
  $.indexSet(result, 'originalStartTime', $.serialize12(value.get$originalStartTime()));
  $.indexSet(result, 'status', $.identity(value.get$status()));
  $.indexSet(result, 'updated', $.identity(value.get$updated()));
  $.indexSet(result, 'gadget', $.serialize14(value.get$gadget()));
  $.indexSet(result, 'description', $.identity(value.get$description()));
  $.indexSet(result, 'iCalUID', $.identity(value.get$iCalUID()));
  $.indexSet(result, 'extendedProperties', $.serialize13(value.get$extendedProperties()));
  $.indexSet(result, 'sequence', $.identity(value.get$sequence()));
  $.indexSet(result, 'visibility', $.identity(value.get$visibility()));
  $.indexSet(result, 'guestsCanModify', $.identity(value.get$guestsCanModify()));
  $.indexSet(result, 'end', $.serialize12(value.get$end()));
  $.indexSet(result, 'attendeesOmitted', $.identity(value.get$attendeesOmitted()));
  $.indexSet(result, 'kind', $.identity(value.get$kind()));
  $.indexSet(result, 'created', $.identity(value.get$created()));
  $.indexSet(result, 'colorId', $.identity(value.get$colorId()));
  $.indexSet(result, 'anyoneCanAddSelf', $.identity(value.get$anyoneCanAddSelf()));
  $.indexSet(result, 'reminders', $.serialize11(value.get$reminders()));
  $.indexSet(result, 'guestsCanSeeOtherGuests', $.identity(value.get$guestsCanSeeOtherGuests()));
  $.indexSet(result, 'summary', $.identity(value.get$summary()));
  $.indexSet(result, 'guestsCanInviteOthers', $.identity(value.get$guestsCanInviteOthers()));
  $.indexSet(result, 'transparency', $.identity(value.get$transparency()));
  $.indexSet(result, 'privateCopy', $.identity(value.get$privateCopy()));
  return result;
};

$.eqB = function(a, b) {
  if (typeof a === "object") {
    if (!!a.operator$eq$1) return a.operator$eq$1(b) === true;
    return a === b;
  }
  return a === b;
};

$.Token$fromJson = function(json) {
  var map = $.parse0(json);
  return $.Token$3($.index(map, 'type'), $.index(map, 'data'), $.DateImplementation$fromMillisecondsSinceEpoch$2($.index(map, 'expiry'), false));
};

$._containsRef = function(c, ref) {
  for (var t1 = $.iterator(c); t1.hasNext$0() === true; ) {
    if (t1.next$0() === ref) return true;
  }
  return false;
};

$.parse13 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventCreator$0();
  result.self = $.identity($.index(json, 'self'));
  result.displayName = $.identity($.index(json, 'displayName'));
  result.email = $.identity($.index(json, 'email'));
  return result;
};

$.EventDateTime$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventDateTime((void 0), (void 0), (void 0), t1);
};

$._NodeListWrapper$1 = function(list) {
  return new $._NodeListWrapper(list);
};

$.jsHasOwnProperty = function(jsObject, property) {
  return jsObject.hasOwnProperty(property);
};

$._LocationWrapper$1 = function(_ptr) {
  return new $._LocationWrapper(_ptr);
};

$.map = function(transform) {
  var t1 = ({});
  t1.transform_1 = transform;
  return new $.Closure36(t1);
};

$.isJsArray = function(value) {
  return !(value === (void 0)) && (value.constructor === Array);
};

$.indexSet$slow = function(a, index, value) {
  if ($.isJsArray(a) === true) {
    if (!((typeof index === 'number') && (index === (index | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(index));
    if (index < 0 || $.geB(index, $.get$length(a))) throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    $.checkMutable(a, 'indexed set');
    a[index] = value;
    return;
  }
  a.operator$indexSet$2(index, value);
};

$._nextProbe = function(currentProbe, numberOfProbes, length$) {
  return $.and($.add(currentProbe, numberOfProbes), $.sub(length$, 1));
};

$.Token$3 = function(type, data, expiry) {
  return new $.Token(expiry, data, type);
};

$.EventsResource$_internal$1 = function($$service) {
  return new $.EventsResource($$service);
};

$.allMatches = function(receiver, str) {
  if (!(typeof receiver === 'string')) return receiver.allMatches$1(str);
  $.checkString(str);
  return $.allMatchesInStringUnchecked(receiver, str);
};

$._parseIntOrZero = function(val) {
  if (!(val === (void 0)) && !$.eqB(val, '')) return $.parseInt(val);
  return 0;
};

$.substringUnchecked = function(receiver, startIndex, endIndex) {
  return receiver.substring(startIndex, endIndex);
};

$.serialize19 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'nextPageToken', $.identity(value.get$nextPageToken()));
  $.indexSet(result, 'kind', $.identity(value.get$kind()));
  $.indexSet(result, 'defaultReminders', $.map($.serialize8).$call$1(value.get$defaultReminders()));
  $.indexSet(result, 'description', $.identity(value.get$description()));
  $.indexSet(result, 'items', $.map($.serialize18).$call$1(value.get$items()));
  $.indexSet(result, 'updated', $.identity(value.get$updated()));
  $.indexSet(result, 'summary', $.identity(value.get$summary()));
  $.indexSet(result, 'etag', $.identity(value.get$etag()));
  $.indexSet(result, 'timeZone', $.identity(value.get$timeZone()));
  $.indexSet(result, 'accessRole', $.identity(value.get$accessRole()));
  return result;
};

$.DateImplementation$now$0 = function() {
  var t1 = new $.DateImplementation(false, $.dateNow());
  t1.DateImplementation$now$0();
  return t1;
};

$.get$length = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver) === true) {
    return receiver.length;
  }
  return receiver.get$length();
};

$.ge$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a >= b;
  }
  return a.operator$ge$1(b);
};

$.TimePeriod$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.TimePeriod((void 0), (void 0), t1);
};

$._ProxyChannel$2 = function(_provider, _callback) {
  var t1 = new $._ProxyChannel(_callback, (void 0), _provider, (void 0));
  t1._ProxyChannel$2(_provider, _callback);
  return t1;
};

$.NetworkException$0 = function() {
  return new $.NetworkException();
};

$.HttpException$1 = function(code) {
  return new $.HttpException(code);
};

$.IllegalJSRegExpException$2 = function(_pattern, _errmsg) {
  return new $.IllegalJSRegExpException(_errmsg, _pattern);
};

$.FutureImpl$immediate = function(value) {
  var res = $.FutureImpl$0();
  res._setValue$1(value);
  return res;
};

$.clear = function(receiver) {
  if ($.isJsArray(receiver) !== true) return receiver.clear$0();
  $.set$length(receiver, 0);
};

$._IDBOpenDBRequestEventsImpl$1 = function(_ptr) {
  return new $._IDBOpenDBRequestEventsImpl(_ptr);
};

$.constructorNameFallback = function(obj) {
  var constructor$ = (obj.constructor);
  if ((typeof(constructor$)) === 'function') {
    var name$ = (constructor$.name);
    if ((typeof(name$)) === 'string' && $.isEmpty(name$) !== true && !(name$ === 'Object')) return name$;
  }
  var string = (Object.prototype.toString.call(obj));
  return $.substring$2(string, 8, string.length - 1);
};

$.regExpMatchStart = function(m) {
  return m.index;
};

$.HashMapImplementation$from = function(other) {
  var t1 = ({});
  t1.result_10 = $.HashMapImplementation$0();
  $.forEach(other, new $.Closure34(t1));
  return t1.result_10;
};

$.NullPointerException$2 = function(functionName, arguments$) {
  return new $.NullPointerException(arguments$, functionName);
};

$.typeNameInIE = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if ($.eqB(name$, 'Window')) return 'DOMWindow';
  if ($.eqB(name$, 'Document')) {
    if (!!obj.xmlVersion) return 'Document';
    return 'HTMLDocument';
  }
  if ($.eqB(name$, 'HTMLTableDataCellElement')) return 'HTMLTableCellElement';
  if ($.eqB(name$, 'HTMLTableHeaderCellElement')) return 'HTMLTableCellElement';
  if ($.eqB(name$, 'MSStyleCSSProperties')) return 'CSSStyleDeclaration';
  if ($.eqB(name$, 'CanvasPixelArray')) return 'Uint8ClampedArray';
  if ($.eqB(name$, 'HTMLPhraseElement')) return 'HTMLElement';
  if ($.eqB(name$, 'MouseWheelEvent')) return 'WheelEvent';
  return name$;
};

$._get = function(p, m) {
  return p[m];;
};

$.tdiv = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return $.truncate((a) / (b));
  }
  return a.operator$tdiv$1(b);
};

$.JSSyntaxRegExp$_globalVersionOf$1 = function(other) {
  var t1 = other.get$pattern();
  var t2 = other.get$multiLine();
  t1 = new $.JSSyntaxRegExp(other.get$ignoreCase(), t2, t1);
  t1.JSSyntaxRegExp$_globalVersionOf$1(other);
  return t1;
};

$.replaceFirst = function(receiver, from, to) {
  if (!(typeof receiver === 'string')) return receiver.replaceFirst$2(from, to);
  $.checkString(to);
  return $.stringReplaceFirstUnchecked(receiver, from, to);
};

$.printString = function(string) {
  if (typeof dartPrint == "function") dartPrint(string);
  else {
    if (typeof console == "object") console.log(string);
    else {
      write(string);
      write("\n");
    }
  }
};

$.typeNameInChrome = function(obj) {
  var name$ = (obj.constructor.name);
  if (name$ === 'Window') return 'DOMWindow';
  if (name$ === 'CanvasPixelArray') return 'Uint8ClampedArray';
  return name$;
};

$.stringReplaceFirstUnchecked = function(receiver, from, to) {
  if (typeof from === 'string') return $.stringReplaceJS(receiver, from, to);
  if (typeof from === 'object' && !!from.is$JSSyntaxRegExp) return $.stringReplaceJS(receiver, $.regExpGetNative(from), to);
  $.checkNull(from);
  throw $.captureStackTrace('StringImplementation.replace(Pattern) UNIMPLEMENTED');
};

$.formatTime = function(date) {
  var hour = $.toString(date.get$hour());
  var minute = $.toString(date.get$minute());
  if ($.ltB($.get$length(hour), 2)) hour = '0' + $.S(hour);
  if ($.ltB($.get$length(minute), 2)) minute = '0' + $.S(minute);
  return $.S(hour) + ':' + $.S(minute);
};

$.shr = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    a = (a);
    b = (b);
    if (b < 0) throw $.captureStackTrace($.IllegalArgumentException$1(b));
    if (a > 0) {
      if (b > 31) return 0;
      return a >>> b;
    }
    if (b > 31) b = 31;
    return (a >> b) >>> 0;
  }
  return a.operator$shr$1(b);
};

$.eqNull = function(a) {
  if (typeof a === "object") {
    if (!!a.operator$eq$1) return a.operator$eq$1((void 0));
    return false;
  }
  return typeof a === "undefined";
};

$._dualPivotQuicksort = function(a, left, right, compare) {
  if (typeof a !== 'object' || ((a.constructor !== Array || !!a.immutable$list) && !a.is$JavaScriptIndexingBehavior())) return $._dualPivotQuicksort$bailout(1, a, left, right, compare, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var sixth = $.tdiv($.add($.sub(right, left), 1), 6);
  var index1 = $.add(left, sixth);
  var index5 = $.sub(right, sixth);
  var index3 = $.tdiv($.add(left, right), 2);
  var index2 = $.sub(index3, sixth);
  var index4 = $.add(index3, sixth);
  if (index1 !== (index1 | 0)) throw $.iae(index1);
  var t1 = a.length;
  if (index1 < 0 || index1 >= t1) throw $.ioore(index1);
  var el2 = a[index1];
  if (index2 !== (index2 | 0)) throw $.iae(index2);
  if (index2 < 0 || index2 >= t1) throw $.ioore(index2);
  var el20 = a[index2];
  if (index3 !== (index3 | 0)) throw $.iae(index3);
  if (index3 < 0 || index3 >= t1) throw $.ioore(index3);
  var el1 = a[index3];
  if (index4 !== (index4 | 0)) throw $.iae(index4);
  if (index4 < 0 || index4 >= t1) throw $.ioore(index4);
  var el4 = a[index4];
  if (index5 !== (index5 | 0)) throw $.iae(index5);
  if (index5 < 0 || index5 >= t1) throw $.ioore(index5);
  var el40 = a[index5];
  if ($.gtB(compare.$call$2(el2, el20), 0)) var el10 = el20;
  else {
    el10 = el2;
    el2 = el20;
  }
  if ($.gtB(compare.$call$2(el4, el40), 0)) {
    var el5 = el4;
    el4 = el40;
  } else el5 = el40;
  if ($.gtB(compare.$call$2(el10, el1), 0)) var el3 = el10;
  else {
    el3 = el1;
    el1 = el10;
  }
  if ($.gtB(compare.$call$2(el2, el3), 0)) {
    var t0 = el3;
    el3 = el2;
    el2 = t0;
  }
  if ($.gtB(compare.$call$2(el1, el4), 0)) {
    t0 = el1;
    el1 = el4;
    el4 = t0;
  }
  if ($.gtB(compare.$call$2(el3, el4), 0)) {
    t0 = el3;
    el3 = el4;
    el4 = t0;
  }
  if ($.gtB(compare.$call$2(el2, el5), 0)) {
    t0 = el5;
    el5 = el2;
    el2 = t0;
  }
  if ($.gtB(compare.$call$2(el2, el3), 0)) {
    t0 = el3;
    el3 = el2;
    el2 = t0;
  }
  if ($.gtB(compare.$call$2(el4, el5), 0)) {
    t0 = el5;
    el5 = el4;
    el4 = t0;
  }
  t1 = a.length;
  if (index1 < 0 || index1 >= t1) throw $.ioore(index1);
  a[index1] = el1;
  var t2 = a.length;
  if (index3 < 0 || index3 >= t2) throw $.ioore(index3);
  a[index3] = el3;
  var t3 = a.length;
  if (index5 < 0 || index5 >= t3) throw $.ioore(index5);
  a[index5] = el5;
  if (left !== (left | 0)) throw $.iae(left);
  var t4 = a.length;
  if (left < 0 || left >= t4) throw $.ioore(left);
  var t5 = a[left];
  if (index2 < 0 || index2 >= t4) throw $.ioore(index2);
  a[index2] = t5;
  if (right !== (right | 0)) throw $.iae(right);
  t5 = a.length;
  if (right < 0 || right >= t5) throw $.ioore(right);
  var t6 = a[right];
  if (index4 < 0 || index4 >= t5) throw $.ioore(index4);
  a[index4] = t6;
  var less = $.add(left, 1);
  if (typeof less !== 'number') return $._dualPivotQuicksort$bailout(2, a, left, right, compare, index5, el2, less, el4, index1, 0, 0, 0, 0, 0);
  var great = $.sub(right, 1);
  if (typeof great !== 'number') return $._dualPivotQuicksort$bailout(3, a, left, right, compare, index5, el2, great, less, el4, index1, 0, 0, 0, 0);
  var pivots_are_equal = $.eqB(compare.$call$2(el2, el4), 0);
  if (pivots_are_equal) {
    for (var k = less; k <= great; ++k) {
      if (k !== (k | 0)) throw $.iae(k);
      t1 = a.length;
      if (k < 0 || k >= t1) throw $.ioore(k);
      t2 = a[k];
      var comp = compare.$call$2(t2, el2);
      if (typeof comp !== 'number') return $._dualPivotQuicksort$bailout(4, a, less, k, compare, left, right, great, index1, index5, el2, pivots_are_equal, t2, comp, el4);
      if (comp === 0) continue;
      if (comp < 0) {
        if (!(k === less)) {
          if (less !== (less | 0)) throw $.iae(less);
          t1 = a.length;
          if (less < 0 || less >= t1) throw $.ioore(less);
          t3 = a[less];
          if (k < 0 || k >= t1) throw $.ioore(k);
          a[k] = t3;
          t3 = a.length;
          if (less < 0 || less >= t3) throw $.ioore(less);
          a[less] = t2;
        }
        ++less;
      } else {
        for (var less0 = less + 1; true; ) {
          if (great !== (great | 0)) throw $.iae(great);
          t1 = a.length;
          if (great < 0 || great >= t1) throw $.ioore(great);
          comp = compare.$call$2(a[great], el2);
          if ($.gtB(comp, 0)) {
            --great;
            continue;
          } else {
            t1 = $.ltB(comp, 0);
            var great0 = great - 1;
            t3 = a.length;
            if (t1) {
              if (less !== (less | 0)) throw $.iae(less);
              if (less < 0 || less >= t3) throw $.ioore(less);
              t1 = a[less];
              if (k < 0 || k >= t3) throw $.ioore(k);
              a[k] = t1;
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              t4 = a[great];
              if (less < 0 || less >= t1) throw $.ioore(less);
              a[less] = t4;
              t4 = a.length;
              if (great < 0 || great >= t4) throw $.ioore(great);
              a[great] = t2;
              great = great0;
              less = less0;
              break;
            } else {
              if (great < 0 || great >= t3) throw $.ioore(great);
              t1 = a[great];
              if (k < 0 || k >= t3) throw $.ioore(k);
              a[k] = t1;
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              a[great] = t2;
              great = great0;
              break;
            }
          }
        }
      }
    }
  } else {
    for (k = less; k <= great; ++k) {
      if (k !== (k | 0)) throw $.iae(k);
      t1 = a.length;
      if (k < 0 || k >= t1) throw $.ioore(k);
      t2 = a[k];
      if ($.ltB(compare.$call$2(t2, el2), 0)) {
        if (!(k === less)) {
          if (less !== (less | 0)) throw $.iae(less);
          t1 = a.length;
          if (less < 0 || less >= t1) throw $.ioore(less);
          t3 = a[less];
          if (k < 0 || k >= t1) throw $.ioore(k);
          a[k] = t3;
          t3 = a.length;
          if (less < 0 || less >= t3) throw $.ioore(less);
          a[less] = t2;
        }
        ++less;
      } else {
        if ($.gtB(compare.$call$2(t2, el4), 0)) {
          for (less0 = less + 1; true; ) {
            if (great !== (great | 0)) throw $.iae(great);
            t1 = a.length;
            if (great < 0 || great >= t1) throw $.ioore(great);
            if ($.gtB(compare.$call$2(a[great], el4), 0)) {
              --great;
              if (great < k) break;
              continue;
            } else {
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              t1 = $.ltB(compare.$call$2(a[great], el2), 0);
              great0 = great - 1;
              t3 = a.length;
              if (t1) {
                if (less !== (less | 0)) throw $.iae(less);
                if (less < 0 || less >= t3) throw $.ioore(less);
                t1 = a[less];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                t4 = a[great];
                if (less < 0 || less >= t1) throw $.ioore(less);
                a[less] = t4;
                t4 = a.length;
                if (great < 0 || great >= t4) throw $.ioore(great);
                a[great] = t2;
                great = great0;
                less = less0;
              } else {
                if (great < 0 || great >= t3) throw $.ioore(great);
                t1 = a[great];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                a[great] = t2;
                great = great0;
              }
              break;
            }
          }
        }
      }
    }
  }
  t1 = less - 1;
  if (t1 !== (t1 | 0)) throw $.iae(t1);
  t2 = a.length;
  if (t1 < 0 || t1 >= t2) throw $.ioore(t1);
  t3 = a[t1];
  if (left < 0 || left >= t2) throw $.ioore(left);
  a[left] = t3;
  t3 = a.length;
  if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
  a[t1] = el2;
  t1 = great + 1;
  if (t1 !== (t1 | 0)) throw $.iae(t1);
  t4 = a.length;
  if (t1 < 0 || t1 >= t4) throw $.ioore(t1);
  t5 = a[t1];
  if (right < 0 || right >= t4) throw $.ioore(right);
  a[right] = t5;
  t5 = a.length;
  if (t1 < 0 || t1 >= t5) throw $.ioore(t1);
  a[t1] = el4;
  $._doSort(a, left, less - 2, compare);
  $._doSort(a, great + 2, right, compare);
  if (pivots_are_equal) return;
  if ($.ltB(less, index1) && $.gtB(great, index5)) {
    while (true) {
      if (less !== (less | 0)) throw $.iae(less);
      t1 = a.length;
      if (less < 0 || less >= t1) throw $.ioore(less);
      if (!$.eqB(compare.$call$2(a[less], el2), 0)) break;
      ++less;
    }
    while (true) {
      if (great !== (great | 0)) throw $.iae(great);
      t1 = a.length;
      if (great < 0 || great >= t1) throw $.ioore(great);
      if (!$.eqB(compare.$call$2(a[great], el4), 0)) break;
      --great;
    }
    for (k = less; k <= great; ++k) {
      if (k !== (k | 0)) throw $.iae(k);
      t1 = a.length;
      if (k < 0 || k >= t1) throw $.ioore(k);
      t2 = a[k];
      if ($.eqB(compare.$call$2(t2, el2), 0)) {
        if (!(k === less)) {
          if (less !== (less | 0)) throw $.iae(less);
          t1 = a.length;
          if (less < 0 || less >= t1) throw $.ioore(less);
          t3 = a[less];
          if (k < 0 || k >= t1) throw $.ioore(k);
          a[k] = t3;
          t3 = a.length;
          if (less < 0 || less >= t3) throw $.ioore(less);
          a[less] = t2;
        }
        ++less;
      } else {
        if ($.eqB(compare.$call$2(t2, el4), 0)) {
          for (less0 = less + 1; true; ) {
            if (great !== (great | 0)) throw $.iae(great);
            t1 = a.length;
            if (great < 0 || great >= t1) throw $.ioore(great);
            if ($.eqB(compare.$call$2(a[great], el4), 0)) {
              --great;
              if (great < k) break;
              continue;
            } else {
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              t1 = $.ltB(compare.$call$2(a[great], el2), 0);
              great0 = great - 1;
              t3 = a.length;
              if (t1) {
                if (less !== (less | 0)) throw $.iae(less);
                if (less < 0 || less >= t3) throw $.ioore(less);
                t1 = a[less];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                t4 = a[great];
                if (less < 0 || less >= t1) throw $.ioore(less);
                a[less] = t4;
                t4 = a.length;
                if (great < 0 || great >= t4) throw $.ioore(great);
                a[great] = t2;
                great = great0;
                less = less0;
              } else {
                if (great < 0 || great >= t3) throw $.ioore(great);
                t1 = a[great];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                a[great] = t2;
                great = great0;
              }
              break;
            }
          }
        }
      }
    }
    $._doSort(a, less, great, compare);
  } else $._doSort(a, less, great, compare);
};

$.and = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return (a & b) >>> 0;
  }
  return a.operator$and$1(b);
};

$.substring$2 = function(receiver, startIndex, endIndex) {
  if (!(typeof receiver === 'string')) return receiver.substring$2(startIndex, endIndex);
  $.checkNum(startIndex);
  var length$ = receiver.length;
  if (endIndex === (void 0)) endIndex = length$;
  $.checkNum(endIndex);
  if ($.ltB(startIndex, 0)) throw $.captureStackTrace($.IndexOutOfRangeException$1(startIndex));
  if ($.gtB(startIndex, endIndex)) throw $.captureStackTrace($.IndexOutOfRangeException$1(startIndex));
  if ($.gtB(endIndex, length$)) throw $.captureStackTrace($.IndexOutOfRangeException$1(endIndex));
  return $.substringUnchecked(receiver, startIndex, endIndex);
};

$.indexSet = function(a, index, value) {
  if (a.constructor === Array && !a.immutable$list) {
    var key = (index >>> 0);
    if (key === index && key < (a.length)) {
      a[key] = value;
      return;
    }
  }
  $.indexSet$slow(a, index, value);
};

$._DOMApplicationCacheEventsImpl$1 = function(_ptr) {
  return new $._DOMApplicationCacheEventsImpl(_ptr);
};

$.ExceptionImplementation$1 = function(msg) {
  return new $.ExceptionImplementation(msg);
};

$.StringMatch$3 = function(_start, str, pattern) {
  return new $.StringMatch(pattern, str, _start);
};

$.EventCreator$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventCreator((void 0), (void 0), (void 0), t1);
};

$.invokeClosure = function(closure, isolate, numberOfArguments, arg1, arg2) {
  var t1 = ({});
  t1.arg2_3 = arg2;
  t1.arg1_2 = arg1;
  t1.closure_1 = closure;
  if ($.eqB(numberOfArguments, 0)) {
    return new $.Closure1(t1).$call$0();
  }
  if ($.eqB(numberOfArguments, 1)) {
    return new $.Closure2(t1).$call$0();
  }
  if ($.eqB(numberOfArguments, 2)) {
    return new $.Closure3(t1).$call$0();
  }
  throw $.captureStackTrace($.ExceptionImplementation$1('Unsupported number of arguments for wrapped closure'));
};

$.last = function(receiver) {
  if ($.isJsArray(receiver) !== true) return receiver.last$0();
  return $.index(receiver, $.sub($.get$length(receiver), 1));
};

$.CalendarApi$3 = function(baseUrl, applicationName, authenticator) {
  var t1 = new $.CalendarApi((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), applicationName, '0.1', authenticator, baseUrl);
  t1.CalendarApi$3(baseUrl, applicationName, authenticator);
  return t1;
};

$.stringJoinUnchecked = function(array, separator) {
  return array.join(separator);
};

$.gt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a > b) : $.gt$slow(a, b);
};

$.String$fromCharCodes = function(charCodes) {
  return $.createFromCharCodes(charCodes);
};

$.filter = function(receiver, predicate) {
  if ($.isJsArray(receiver) !== true) return receiver.filter$1(predicate);
  return $.filter0(receiver, [], predicate);
};

$.buildDynamicMetadata = function(inputTable) {
  if (typeof inputTable !== 'string' && (typeof inputTable !== 'object' || (inputTable.constructor !== Array && !inputTable.is$JavaScriptIndexingBehavior()))) return $.buildDynamicMetadata$bailout(1, inputTable, 0, 0, 0, 0, 0, 0);
  var result = [];
  for (var i = 0; t1 = inputTable.length, i < t1; ++i) {
    if (i < 0 || i >= t1) throw $.ioore(i);
    var tag = $.index(inputTable[i], 0);
    var t2 = inputTable.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var tags = $.index(inputTable[i], 1);
    var set = $.HashSetImplementation$0();
    $.setRuntimeTypeInfo(set, ({E: 'String'}));
    var tagNames = $.split(tags, '|');
    if (typeof tagNames !== 'string' && (typeof tagNames !== 'object' || (tagNames.constructor !== Array && !tagNames.is$JavaScriptIndexingBehavior()))) return $.buildDynamicMetadata$bailout(2, inputTable, result, tagNames, tag, i, tags, set);
    for (var j = 0; t1 = tagNames.length, j < t1; ++j) {
      if (j < 0 || j >= t1) throw $.ioore(j);
      set.add$1(tagNames[j]);
    }
    $.add$1(result, $.MetaInfo$3(tag, tags, set));
  }
  return result;
  var t1;
};

$.filter0 = function(source, destination, f) {
  for (var t1 = $.iterator(source); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    f.$call$1(t2) === true && $.add$1(destination, t2);
  }
  return destination;
};

$.contains$1 = function(receiver, other) {
  if (!(typeof receiver === 'string')) return receiver.contains$1(other);
  return $.contains$2(receiver, other, 0);
};

$._EventSourceEventsImpl$1 = function(_ptr) {
  return new $._EventSourceEventsImpl(_ptr);
};

$.filter1 = function(source, destination, f) {
  for (var t1 = $.iterator(source); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    f.$call$1(t2) === true && $.add$1(destination, t2);
  }
  return destination;
};

$.mul = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a * b) : $.mul$slow(a, b);
};

$.parseInt = function(str) {
  return $.parseInt0(str);
};

$._NotificationEventsImpl$1 = function(_ptr) {
  return new $._NotificationEventsImpl(_ptr);
};

$.parseInt0 = function(str) {
  $.checkString(str);
  if (!(/^\s*[+-]?(?:0[xX][abcdefABCDEF0-9]+|\d+)\s*$/.test(str))) throw $.captureStackTrace($.BadNumberFormatException$1(str));
  var trimmed = $.trim(str);
  if ($.gtB($.get$length(trimmed), 2)) {
    var t1 = $.eqB($.index(trimmed, 1), 'x') || $.eqB($.index(trimmed, 1), 'X');
  } else t1 = false;
  if (!t1) {
    if ($.gtB($.get$length(trimmed), 3)) {
      t1 = $.eqB($.index(trimmed, 2), 'x') || $.eqB($.index(trimmed, 2), 'X');
    } else t1 = false;
  } else t1 = true;
  var base = t1 ? 16 : 10;
  var ret = (parseInt(trimmed, base));
  if ($.isNaN(ret) === true) throw $.captureStackTrace($.BadNumberFormatException$1(str));
  return ret;
};

$.AuthException$2 = function(message, data) {
  return new $.AuthException(data, message);
};

$.EventOrganizer$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventOrganizer((void 0), (void 0), (void 0), t1);
};

$._browserPrefix = function() {
  if ($._cachedBrowserPrefix === (void 0)) {
    if ($.isFirefox() === true) $._cachedBrowserPrefix = '-moz-';
    else $._cachedBrowserPrefix = '-webkit-';
  }
  return $._cachedBrowserPrefix;
};

$.Error$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.Error((void 0), (void 0), t1);
};

$._addIfNonEmpty = function(sb, test, first, second) {
  if (!('' === test)) {
    $.add$1(sb, first === (void 0) ? 'null' : first);
    $.add$1(sb, second === (void 0) ? 'null' : second);
  }
};

$.neg = function(a) {
  if (typeof a === "number") {
    return -a;
  }
  return a.operator$negate$0();
};

$._emitCollection = function(c, result, visiting) {
  $.add$1(visiting, c);
  var isList = typeof c === 'object' && (c.constructor === Array || c.is$List0());
  $.add$1(result, isList ? '[' : '{');
  for (var t1 = $.iterator(c), first = true; t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    !first && $.add$1(result, ', ');
    $._emitObject(t2, result, visiting);
    first = false;
  }
  $.add$1(result, isList ? ']' : '}');
  $.removeLast(visiting);
};

$.checkMutable = function(list, reason) {
  if (!!(list.immutable$list)) throw $.captureStackTrace($.UnsupportedOperationException$1(reason));
};

$._numberToString = function(x) {
  if (typeof x === 'number' && x === (x | 0)) return $.toString(x);
  if (typeof x === 'number') return $.toString(x);
  return $.toString($.toDouble(x));
};

$.sub$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a - b;
  }
  return a.operator$sub$1(b);
};

$.toStringWrapper = function() {
  return $.toString((this.dartException));
};

$._PeerConnection00EventsImpl$1 = function(_ptr) {
  return new $._PeerConnection00EventsImpl(_ptr);
};

$._ElementList$1 = function(list) {
  return new $._ElementList(list);
};

$._WorkerContextEventsImpl$1 = function(_ptr) {
  return new $._WorkerContextEventsImpl(_ptr);
};

$._popup = function(url) {
  var width = $.min(650, $.sub($.window().get$screen().get$width(), 20));
  var height = $.min(600, $.sub($.window().get$screen().get$height(), 30));
  var left = $.tdiv($.sub($.window().get$screen().get$width(), width), 2);
  var top$ = $.tdiv($.sub($.window().get$screen().get$height(), height), 2);
  return $.window().open$3(url, '_blank', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=' + $.S(width) + ',height=' + $.S(height) + ',top=' + $.S(top$) + ',left=' + $.S(left));
};

$._DocumentEventsImpl$1 = function(_ptr) {
  return new $._DocumentEventsImpl(_ptr);
};

$.loadCalendars = function() {
  $.document().query$1('#login').get$style().set$display('none');
  $.document().query$1('#loading').get$style().set$display('');
  $.calApi.get$calendarList().list$0().then$1(new $.Closure51());
};

$.removeDotSegments = function(path) {
  var output = [];
  for (var t1 = $.iterator($.split(path, '/')), appendSlash = false; t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if ($.eqB(t2, '..')) {
      if ($.isEmpty(output) !== true) {
        t2 = output.length;
        if (t2 === 1) {
          if (0 >= t2) throw $.ioore(0);
          var t3 = !$.eqB(output[0], '');
          t2 = t3;
        } else t2 = true;
      } else t2 = false;
      t2 && $.removeLast(output);
      appendSlash = true;
    } else {
      if ('.' === t2) appendSlash = true;
      else {
        $.add$1(output, t2);
        appendSlash = false;
      }
    }
  }
  appendSlash && $.add$1(output, '');
  return $.join(output, '/');
};

$.regExpTest = function(regExp, str) {
  return $.regExpGetNative(regExp).test(str);
};

$.Events$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.Events((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), t1);
};

$.getDay = function(receiver) {
  return receiver.get$isUtc() === true ? ($.lazyAsJsDate(receiver).getUTCDate()) : ($.lazyAsJsDate(receiver).getDate());
};

$._EventsImpl$1 = function(_ptr) {
  return new $._EventsImpl(_ptr);
};

$.isEmpty = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver) === true) {
    return receiver.length === 0;
  }
  return receiver.isEmpty$0();
};

$.HashSetImplementation$0 = function() {
  var t1 = new $.HashSetImplementation((void 0));
  t1.HashSetImplementation$0();
  return t1;
};

$._IDBRequestEventsImpl$1 = function(_ptr) {
  return new $._IDBRequestEventsImpl(_ptr);
};

$.stringSplitUnchecked = function(receiver, pattern) {
  if (typeof pattern === 'string') {
    return receiver.split(pattern);
  }
  if (typeof pattern === 'object' && !!pattern.is$JSSyntaxRegExp) {
    return receiver.split($.regExpGetNative(pattern));
  }
  throw $.captureStackTrace('StringImplementation.split(Pattern) UNIMPLEMENTED');
};

$.checkGrowable = function(list, reason) {
  if (!!(list.fixed$length)) throw $.captureStackTrace($.UnsupportedOperationException$1(reason));
};

$.CalendarListResource$_internal$1 = function($$service) {
  return new $.CalendarListResource($$service);
};

$._SpeechRecognitionEventsImpl$1 = function(_ptr) {
  return new $._SpeechRecognitionEventsImpl(_ptr);
};

$._SVGElementInstanceEventsImpl$1 = function(_ptr) {
  return new $._SVGElementInstanceEventsImpl(_ptr);
};

$._JsonParser$_internal$1 = function(json) {
  var t1 = new $._JsonParser(0, $.get$length(json), json);
  t1._JsonParser$_internal$1(json);
  return t1;
};

$.Setting$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.Setting((void 0), (void 0), (void 0), (void 0), t1);
};

$.Uri$7 = function(scheme, userInfo, domain, port, path, query, fragment) {
  return new $.Uri(fragment, query, path, port, domain, userInfo, scheme);
};

$.identity = function(t) {
  return t;
};

$.ColorsResource$_internal$1 = function($$service) {
  return new $.ColorsResource($$service);
};

$.compare = function(a, b) {
  if ($.eqNullB(a)) return -1;
  if ($.eqNullB(b)) return 1;
  return $.compareTo(a, b);
};

$.add$1 = function(receiver, value) {
  if ($.isJsArray(receiver) === true) {
    $.checkGrowable(receiver, 'add');
    receiver.push(value);
    return;
  }
  return receiver.add$1(value);
};

$.regExpExec = function(regExp, str) {
  var result = ($.regExpGetNative(regExp).exec(str));
  if (result === null) return;
  return result;
};

$.add = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a + b) : $.add$slow(a, b);
};

$.geB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a >= b) : $.ge$slow(a, b) === true;
};

$.getMinutes = function(receiver) {
  return receiver.get$isUtc() === true ? ($.lazyAsJsDate(receiver).getUTCMinutes()) : ($.lazyAsJsDate(receiver).getMinutes());
};

$.DoubleLinkedQueueEntry$1 = function(e) {
  var t1 = new $.DoubleLinkedQueueEntry((void 0), (void 0), (void 0));
  t1.DoubleLinkedQueueEntry$1(e);
  return t1;
};

$.getMonth = function(receiver) {
  return receiver.get$isUtc() === true ? ($.lazyAsJsDate(receiver).getUTCMonth()) + 1 : ($.lazyAsJsDate(receiver).getMonth()) + 1;
};

$._toString = function(p) {
  return p.toString();;
};

$.stringContainsUnchecked = function(receiver, other, startIndex) {
  if (typeof other === 'string') return !($.indexOf$2(receiver, other, startIndex) === -1);
  if (typeof other === 'object' && !!other.is$JSSyntaxRegExp) return other.hasMatch$1($.substring$1(receiver, startIndex));
  return $.iterator($.allMatches(other, $.substring$1(receiver, startIndex))).hasNext$0();
};

$.ObjectNotClosureException$0 = function() {
  return new $.ObjectNotClosureException();
};

$.window = function() {
  return window;;
};

$.abs = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.abs$0();
  return Math.abs(receiver);
};

$._emptyIfNull = function(val) {
  return !$.eqNullB(val) ? val : '';
};

$.regExpAttachGlobalNative = function(regExp) {
  regExp._re = $.regExpMakeNative(regExp, true);
};

$.leB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a <= b) : $.le$slow(a, b) === true;
};

$.isNegative = function(receiver) {
  if (typeof receiver === 'number') {
    return receiver === 0 ? 1 / receiver < 0 : receiver < 0;
  }
  return receiver.isNegative$0();
};

$._tokenize = function(data) {
  return $.isEmpty(data) === true ? [] : $.split(data, '&');
};

$.UrlPattern$1 = function(pattern) {
  var t1 = new $.UrlPattern([]);
  t1.UrlPattern$1(pattern);
  return t1;
};

$.regExpMakeNative = function(regExp, global) {
  var pattern = regExp.get$pattern();
  var multiLine = regExp.get$multiLine();
  var ignoreCase = regExp.get$ignoreCase();
  $.checkString(pattern);
  var sb = $.StringBufferImpl$1('');
  multiLine === true && $.add$1(sb, 'm');
  ignoreCase === true && $.add$1(sb, 'i');
  global === true && $.add$1(sb, 'g');
  try {
    return new RegExp(pattern, $.toString(sb));
  } catch (exception) {
    var t1 = $.unwrapException(exception);
    var e = t1;
    throw $.captureStackTrace($.IllegalJSRegExpException$2(pattern, (String(e))));
  }
};

$.CalendarsResource$_internal$1 = function($$service) {
  return new $.CalendarsResource($$service);
};

$.BadNumberFormatException$1 = function(_s) {
  return new $.BadNumberFormatException(_s);
};

$.stringify = function(object) {
  return $.stringify0(object);
};

$.stringify0 = function(object) {
  var stringifier = $.JsonStringifier$_internal$0();
  stringifier._stringify$1(object);
  return stringifier.get$_result();
};

$._FrozenElementListIterator$1 = function(_list) {
  return new $._FrozenElementListIterator(0, _list);
};

$.mapToString = function(m) {
  var result = $.StringBufferImpl$1('');
  $._emitMap(m, result, $.List((void 0)));
  return result.toString$0();
};

$.lazyAsJsDate = function(receiver) {
  if (receiver.date === (void 0)) receiver.date = new Date(receiver.get$millisecondsSinceEpoch());
  return receiver.date;
};

$.lastIndexOf0 = function(a, element, startIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object' || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $.lastIndexOf0$bailout(1, a, element, startIndex);
  if ($.ltB(startIndex, 0)) return -1;
  if ($.geB(startIndex, a.length)) startIndex = a.length - 1;
  if (typeof startIndex !== 'number') return $.lastIndexOf0$bailout(2, a, element, startIndex);
  for (var i = startIndex; i >= 0; --i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    if ($.eqB(a[i], element)) return i;
  }
  return -1;
};

$._XMLHttpRequestEventsImpl$1 = function(_ptr) {
  return new $._XMLHttpRequestEventsImpl(_ptr);
};

$._JavaScriptAudioNodeEventsImpl$1 = function(_ptr) {
  return new $._JavaScriptAudioNodeEventsImpl(_ptr);
};

$._emitObject = function(o, result, visiting) {
  if (typeof o === 'object' && (o.constructor === Array || o.is$Collection())) {
    if ($._containsRef(visiting, o) === true) {
      $.add$1(result, typeof o === 'object' && (o.constructor === Array || o.is$List0()) ? '[...]' : '{...}');
    } else $._emitCollection(o, result, visiting);
  } else {
    if (typeof o === 'object' && o.is$Map()) {
      if ($._containsRef(visiting, o) === true) $.add$1(result, '{...}');
      else $._emitMap(o, result, visiting);
    } else {
      $.add$1(result, $.eqNullB(o) ? 'null' : o);
    }
  }
};

$._emitMap = function(m, result, visiting) {
  var t1 = ({});
  t1.visiting_2 = visiting;
  t1.result_1 = result;
  $.add$1(t1.visiting_2, m);
  $.add$1(t1.result_1, '{');
  t1.first_3 = true;
  $.forEach(m, new $.Closure4(t1));
  $.add$1(t1.result_1, '}');
  $.removeLast(t1.visiting_2);
};

$._IDBDatabaseEventsImpl$1 = function(_ptr) {
  return new $._IDBDatabaseEventsImpl(_ptr);
};

$.isFirefox = function() {
  return $.contains$2($.userAgent(), 'Firefox', 0);
};

$.setRange$4 = function(receiver, start, length$, from, startFrom) {
  if ($.isJsArray(receiver) !== true) return receiver.setRange$4(start, length$, from, startFrom);
  $.checkMutable(receiver, 'indexed set');
  if (length$ === 0) return;
  $.checkNull(start);
  $.checkNull(length$);
  $.checkNull(from);
  $.checkNull(startFrom);
  if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(start));
  if (!((typeof length$ === 'number') && (length$ === (length$ | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  if (!((typeof startFrom === 'number') && (startFrom === (startFrom | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(startFrom));
  if (length$ < 0) throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  if (start < 0) throw $.captureStackTrace($.IndexOutOfRangeException$1(start));
  if ($.gtB(start + length$, $.get$length(receiver))) throw $.captureStackTrace($.IndexOutOfRangeException$1($.add(start, length$)));
  $.copy(from, startFrom, receiver, start, length$);
};

$.compareTo = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    if ($.ltB(a, b)) return -1;
    if ($.gtB(a, b)) return 1;
    if ($.eqB(a, b)) {
      if ($.eqB(a, 0)) {
        var aIsNegative = $.isNegative(a);
        if ($.eqB(aIsNegative, $.isNegative(b))) return 0;
        if (aIsNegative === true) return -1;
        return 1;
      }
      return 0;
    }
    if ($.isNaN(a) === true) {
      if ($.isNaN(b) === true) return 0;
      return 1;
    }
    return -1;
  }
  if (typeof a === 'string') {
    if (!(typeof b === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(b));
    if (a == b) var t1 = 0;
    else {
      t1 = (a < b) ? -1 : 1;
    }
    return t1;
  }
  return a.compareTo$1(b);
};

$.ge = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a >= b) : $.ge$slow(a, b);
};

$.iterator = function(receiver) {
  if ($.isJsArray(receiver) === true) return $.ListIterator$1(receiver);
  return receiver.iterator$0();
};

$._TextTrackCueEventsImpl$1 = function(_ptr) {
  return new $._TextTrackCueEventsImpl(_ptr);
};

$.lastIndexOf$2 = function(receiver, element, start) {
  if ($.isJsArray(receiver) === true) return $.lastIndexOf(receiver, element, start);
  if (typeof receiver === 'string') {
    $.checkNull(element);
    if (!(typeof element === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(element));
    if (!(start === (void 0))) {
      if (!(typeof start === 'number')) throw $.captureStackTrace($.IllegalArgumentException$1(start));
      if (start < 0) return -1;
      var t1 = receiver.length;
      if (start >= t1) {
        if (element === '') return t1;
        start = t1 - 1;
      } else start = start;
    }
    return $.stringLastIndexOfUnchecked(receiver, element, start);
  }
  return receiver.lastIndexOf$2(element, start);
};

$.patchUpY2K = function(value, years, isUtc) {
  var date = (new Date(value));
  if (isUtc === true) date.setUTCFullYear(years);
  else date.setFullYear(years);
  return date.valueOf();
};

$.MatchImplementation$5 = function(pattern, str, _start, _end, _groups) {
  return new $.MatchImplementation(_groups, _end, _start, str, pattern);
};

$.stringReplaceJS = function(receiver, replacer, to) {
  return receiver.replace(replacer, to.replace('$', '$$$$'));
};

$.UnsupportedOperationException$1 = function(_message) {
  return new $.UnsupportedOperationException(_message);
};

$.indexOf$2 = function(receiver, element, start) {
  if ($.isJsArray(receiver) === true) {
    if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(start));
    return $.indexOf(receiver, element, start, (receiver.length));
  }
  if (typeof receiver === 'string') {
    $.checkNull(element);
    if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(start));
    if (!(typeof element === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(element));
    if (start < 0) return -1;
    return receiver.indexOf(element, start);
  }
  return receiver.indexOf$2(element, start);
};

$._DedicatedWorkerContextEventsImpl$1 = function(_ptr) {
  return new $._DedicatedWorkerContextEventsImpl(_ptr);
};

$.today = function() {
  var now = $.DateImplementation$now$0().toUtc$0();
  return $.DateImplementation$8(now.get$year(), now.get$month(), now.get$day(), 0, 0, 0, 0, now.get$isUtc());
};

$._FileReaderEventsImpl$1 = function(_ptr) {
  return new $._FileReaderEventsImpl(_ptr);
};

$._tokenizeRelativeUrl = function(uri) {
  var u = $.Uri$fromString$1(uri);
  var result = [];
  $.forEach([u.path, u.query, u.fragment], new $.Closure49(result));
  return result;
};

$.stringLastIndexOfUnchecked = function(receiver, element, start) {
  return receiver.lastIndexOf(element, start);
};

$.NoMoreElementsException$0 = function() {
  return new $.NoMoreElementsException();
};

$.eqNullB = function(a) {
  if (typeof a === "object") {
    if (!!a.operator$eq$1) return a.operator$eq$1((void 0)) === true;
    return false;
  }
  return typeof a === "undefined";
};

$.getYear = function(receiver) {
  return receiver.get$isUtc() === true ? ($.lazyAsJsDate(receiver).getUTCFullYear()) : ($.lazyAsJsDate(receiver).getFullYear());
};

$.Element$tag = function(tag) {
  return document.createElement(tag);
};

$._FrameSetElementEventsImpl$1 = function(_ptr) {
  return new $._FrameSetElementEventsImpl(_ptr);
};

$.add$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a + b;
  }
  return a.operator$add$1(b);
};

$.List$from = function(other) {
  var result = $.List((void 0));
  $.setRuntimeTypeInfo(result, ({E: 'E'}));
  var iterator = $.iterator(other);
  for (; iterator.hasNext$0() === true; ) {
    result.push(iterator.next$0());
  }
  return result;
};

$.Uri$fromString$1 = function(uri) {
  var t1 = $.CTC10.firstMatch$1(uri);
  var t2 = $._emptyIfNull($.index(t1, 1));
  var t3 = $._emptyIfNull($.index(t1, 2));
  var t4 = $._emptyIfNull($.index(t1, 3));
  var t5 = $._parseIntOrZero($.index(t1, 4));
  var t6 = $._emptyIfNull($.index(t1, 5));
  var t7 = $._emptyIfNull($.index(t1, 6));
  return new $.Uri($._emptyIfNull($.index(t1, 7)), t7, t6, t5, t4, t3, t2);
};

$.newList = function(length$) {
  if (length$ === (void 0)) {
    return new Array();
  }
  if (!((typeof length$ === 'number') && (length$ === (length$ | 0))) || length$ < 0) throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  var result = (new Array(length$));
  result.fixed$length = true;
  return result;
};

$.main = function() {
  var oauth = $.OAuth2$3('484081979759.apps.googleusercontent.com', ['https://www.googleapis.com/auth/calendar.readonly'], 'https://accounts.google.com/o/oauth2/');
  $.calApi = $.CalendarApi$3('https://www.googleapis.com/calendar/v3/', 'CalendarSample', oauth);
  oauth.login$1$immediate(true).onComplete$1(new $.Closure());
  $.add$1($.document().query$1('#login').get$on().get$click(), new $.Closure0(oauth));
};

$._AbstractWorkerEventsImpl$1 = function(_ptr) {
  return new $._AbstractWorkerEventsImpl(_ptr);
};

$.dateNow = function() {
  return Date.now();
};

$._computeLoadLimit = function(capacity) {
  return $.tdiv($.mul(capacity, 3), 4);
};

$.valueFromDecomposedDate = function(years, month, day, hours, minutes, seconds, milliseconds, isUtc) {
  $.checkInt(years);
  $.checkInt(month);
  if ($.ltB(month, 1) || $.ltB(12, month)) throw $.captureStackTrace($.IllegalArgumentException$1(month));
  $.checkInt(day);
  if ($.ltB(day, 1) || $.ltB(31, day)) throw $.captureStackTrace($.IllegalArgumentException$1(day));
  $.checkInt(hours);
  if ($.ltB(hours, 0) || $.ltB(24, hours)) throw $.captureStackTrace($.IllegalArgumentException$1(hours));
  $.checkInt(minutes);
  if ($.ltB(minutes, 0) || $.ltB(59, minutes)) throw $.captureStackTrace($.IllegalArgumentException$1(minutes));
  $.checkInt(seconds);
  if ($.ltB(seconds, 0) || $.ltB(59, seconds)) throw $.captureStackTrace($.IllegalArgumentException$1(seconds));
  $.checkInt(milliseconds);
  if ($.ltB(milliseconds, 0) || $.ltB(999, milliseconds)) throw $.captureStackTrace($.IllegalArgumentException$1(milliseconds));
  $.checkBool(isUtc);
  var jsMonth = $.sub(month, 1);
  var value = isUtc === true ? (Date.UTC(years, jsMonth, day, hours, minutes, seconds, milliseconds)) : (new Date(years, jsMonth, day, hours, minutes, seconds, milliseconds).valueOf());
  if ($.isNaN(value) === true) throw $.captureStackTrace($.IllegalArgumentException$1(''));
  if ($.leB(years, 0) || $.ltB(years, 100)) return $.patchUpY2K(value, years, isUtc);
  return value;
};

$.HashSetIterator$1 = function(set_) {
  var t1 = new $.HashSetIterator(-1, set_.get$_backingMap().get$_keys());
  t1.HashSetIterator$1(set_);
  return t1;
};

$.IllegalArgumentException$1 = function(arg) {
  return new $.IllegalArgumentException(arg);
};

$._MediaElementEventsImpl$1 = function(_ptr) {
  return new $._MediaElementEventsImpl(_ptr);
};

$._IDBTransactionEventsImpl$1 = function(_ptr) {
  return new $._IDBTransactionEventsImpl(_ptr);
};

$._BodyElementEventsImpl$1 = function(_ptr) {
  return new $._BodyElementEventsImpl(_ptr);
};

$._AllMatchesIterator$2 = function(re, _str) {
  return new $._AllMatchesIterator(false, (void 0), _str, $.JSSyntaxRegExp$_globalVersionOf$1(re));
};

$.FutureImpl$0 = function() {
  var t1 = [];
  var t2 = [];
  return new $.FutureImpl([], t2, t1, false, (void 0), (void 0), (void 0), false);
};

$.iae = function(argument) {
  throw $.captureStackTrace($.IllegalArgumentException$1(argument));
};

$.truncate = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.truncate$0();
  return receiver < 0 ? $.ceil(receiver) : $.floor(receiver);
};

$.isNaN = function(receiver) {
  if (typeof receiver === 'number') {
    return isNaN(receiver);
  }
  return receiver.isNaN$0();
};

$.isInfinite = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.isInfinite$0();
  return (receiver == Infinity) || (receiver == -Infinity);
};

$.round = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.round$0();
  if (receiver < 0) {
    return -Math.round(-receiver);
  }
  return Math.round(receiver);
};

$.allMatchesInStringUnchecked = function(needle, haystack) {
  var result = $.List((void 0));
  $.setRuntimeTypeInfo(result, ({E: 'Match'}));
  var length$ = $.get$length(haystack);
  var patternLength = $.get$length(needle);
  if (patternLength !== (patternLength | 0)) return $.allMatchesInStringUnchecked$bailout(1, needle, haystack, length$, patternLength, result);
  for (var startIndex = 0; true; ) {
    var position = $.indexOf$2(haystack, needle, startIndex);
    if ($.eqB(position, -1)) break;
    result.push($.StringMatch$3(position, haystack, needle));
    var endIndex = $.add(position, patternLength);
    if ($.eqB(endIndex, length$)) break;
    else {
      startIndex = $.eqB(position, endIndex) ? $.add(startIndex, 1) : endIndex;
    }
  }
  return result;
};

$.le$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a <= b;
  }
  return a.operator$le$1(b);
};

$._ChildrenElementList$_wrap$1 = function(element) {
  return new $._ChildrenElementList(element.get$$$dom_children(), element);
};

$.addLast = function(receiver, value) {
  if ($.isJsArray(receiver) !== true) return receiver.addLast$1(value);
  $.checkGrowable(receiver, 'addLast');
  receiver.push(value);
};

$._AllMatchesIterable$2 = function(_re, _str) {
  return new $._AllMatchesIterable(_str, _re);
};

$.copy = function(src, srcStart, dst, dstStart, count) {
  if (typeof src !== 'string' && (typeof src !== 'object' || (src.constructor !== Array && !src.is$JavaScriptIndexingBehavior()))) return $.copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (typeof dst !== 'object' || ((dst.constructor !== Array || !!dst.immutable$list) && !dst.is$JavaScriptIndexingBehavior())) return $.copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (typeof count !== 'number') return $.copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (srcStart === (void 0)) srcStart = 0;
  if (typeof srcStart !== 'number') return $.copy$bailout(2, src, dst, dstStart, count, srcStart);
  if (dstStart === (void 0)) dstStart = 0;
  if (typeof dstStart !== 'number') return $.copy$bailout(3, src, dst, count, srcStart, dstStart);
  if (srcStart < dstStart) {
    for (var i = srcStart + count - 1, j = dstStart + count - 1; i >= srcStart; --i, --j) {
      if (i !== (i | 0)) throw $.iae(i);
      var t1 = src.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      var t2 = src[i];
      if (j !== (j | 0)) throw $.iae(j);
      var t3 = dst.length;
      if (j < 0 || j >= t3) throw $.ioore(j);
      dst[j] = t2;
    }
  } else {
    for (t1 = srcStart + count, i = srcStart, j = dstStart; i < t1; ++i, ++j) {
      if (i !== (i | 0)) throw $.iae(i);
      t2 = src.length;
      if (i < 0 || i >= t2) throw $.ioore(i);
      t3 = src[i];
      if (j !== (j | 0)) throw $.iae(j);
      var t4 = dst.length;
      if (j < 0 || j >= t4) throw $.ioore(j);
      dst[j] = t3;
    }
  }
};

$.mapValues = function(transform) {
  var t1 = ({});
  t1.transform_10 = transform;
  return new $.Closure38(t1);
};

$.dynamicSetMetadata = function(inputTable) {
  var t1 = $.buildDynamicMetadata(inputTable);
  $._dynamicMetadata(t1);
};

$.endsWith = function(receiver, other) {
  if (!(typeof receiver === 'string')) return receiver.endsWith$1(other);
  $.checkString(other);
  var receiverLength = receiver.length;
  var otherLength = $.get$length(other);
  if ($.gtB(otherLength, receiverLength)) return false;
  if (typeof otherLength !== 'number') throw $.iae(otherLength);
  return $.eq(other, $.substring$1(receiver, receiverLength - otherLength));
};

$.getMilliseconds = function(receiver) {
  return receiver.get$isUtc() === true ? ($.lazyAsJsDate(receiver).getUTCMilliseconds()) : ($.lazyAsJsDate(receiver).getMilliseconds());
};

$.ListIterator$1 = function(list) {
  return new $.ListIterator(list, 0);
};

$.XMLHttpRequest = function() {
  return new XMLHttpRequest();;
};

$.checkNum = function(value) {
  if (!(typeof value === 'number')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return value;
};

$.DurationImplementation$5 = function(days, hours, minutes, seconds, milliseconds) {
  return new $.DurationImplementation($.add($.add($.add($.add($.mul(days, 86400000), $.mul(hours, 3600000)), $.mul(minutes, 60000)), $.mul(seconds, 1000)), milliseconds));
};

$.FutureAlreadyCompleteException$0 = function() {
  return new $.FutureAlreadyCompleteException();
};

$._WorkerEventsImpl$1 = function(_ptr) {
  return new $._WorkerEventsImpl(_ptr);
};

$.rfc3339Date = function(date) {
  return $.replaceFirst($.toString(date), ' ', 'T');
};

$.ltB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a < b) : $.lt$slow(a, b) === true;
};

$.HttpRequest$3 = function(url, method, headers) {
  return new $.HttpRequest($.HashMapImplementation$from(headers), method, url);
};

$.FilteredElementList$1 = function(node) {
  return new $.FilteredElementList(node.get$nodes(), node);
};

$.convertDartClosureToJS = function(closure, arity) {
  if (closure === (void 0)) return;
  var function$ = (closure.$identity);
  if (!!function$) return function$;
  function$ = (function() {
    return $.invokeClosure.$call$5(closure, $, arity, arguments[0], arguments[1]);
  });
  closure.$identity = function$;
  return function$;
};

$.parse0 = function(json) {
  return $.parse1(json);
};

$._FixedSizeListIterator$1 = function(array) {
  return new $._FixedSizeListIterator($.get$length(array), 0, array);
};

$.parse1 = function(json) {
  return $._JsonParser$_internal$1(json)._parseToplevel$0();
};

$.parse = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.FreeBusyResponse$0();
  result.timeMax = $.identity($.index(json, 'timeMax'));
  result.kind = $.identity($.index(json, 'kind'));
  result.calendars = $.mapValues($.parse2).$call$1($.index(json, 'calendars'));
  result.timeMin = $.identity($.index(json, 'timeMin'));
  result.groups = $.mapValues($.parse3).$call$1($.index(json, 'groups'));
  return result;
};

$._FrozenElementList$_wrap$1 = function(_nodeList) {
  return new $._FrozenElementList(_nodeList);
};

$.split = function(receiver, pattern) {
  if (!(typeof receiver === 'string')) return receiver.split$1(pattern);
  $.checkNull(pattern);
  return $.stringSplitUnchecked(receiver, pattern);
};

$.parse3 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.FreeBusyGroup$0();
  result.errors = $.map($.parse4).$call$1($.index(json, 'errors'));
  result.calendars = $.map($.identity).$call$1($.index(json, 'calendars'));
  return result;
};

$.concatAll = function(strings) {
  return $.stringJoinUnchecked($._toJsStringArray(strings), '');
};

$.serialize = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'calendarExpansionMax', $.identity(value.get$calendarExpansionMax()));
  $.indexSet(result, 'groupExpansionMax', $.identity(value.get$groupExpansionMax()));
  $.indexSet(result, 'timeMax', $.identity(value.get$timeMax()));
  $.indexSet(result, 'items', $.map($.serialize0).$call$1(value.get$items()));
  $.indexSet(result, 'timeMin', $.identity(value.get$timeMin()));
  $.indexSet(result, 'timeZone', $.identity(value.get$timeZone()));
  return result;
};

$.serialize0 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'id', $.identity(value.get$id()));
  return result;
};

$.parse4 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.Error$0();
  result.domain = $.identity($.index(json, 'domain'));
  result.reason = $.identity($.index(json, 'reason'));
  return result;
};

$.serialize1 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'domain', $.identity(value.get$domain()));
  $.indexSet(result, 'reason', $.identity(value.get$reason()));
  return result;
};

$.userAgent = function() {
  return $.window().get$navigator().get$userAgent();
};

$._InputElementEventsImpl$1 = function(_ptr) {
  return new $._InputElementEventsImpl(_ptr);
};

$.FreeBusyResponse$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.FreeBusyResponse((void 0), (void 0), (void 0), (void 0), (void 0), t1);
};

$.serialize2 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'errors', $.map($.serialize1).$call$1(value.get$errors()));
  $.indexSet(result, 'calendars', $.map($.identity).$call$1(value.get$calendars()));
  return result;
};

$.EventAttendee$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventAttendee((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), t1);
};

$._parse = function(data) {
  if ($.eqNullB(data)) throw $.captureStackTrace($.ExceptionImplementation$1('No auth token data'));
  var params = $.makeLiteralMap([]);
  for (var t1 = $.iterator($._tokenizeRelativeUrl(data)); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if ($.isEmpty(t2) === true) continue;
    var eqIndex = $.indexOf$1(t2, '=');
    if ($.ltB(eqIndex, 0)) $.indexSet(params, t2, '');
    else $.indexSet(params, $.substring$2(t2, 0, eqIndex), $.substring$1(t2, $.add(eqIndex, 1)));
  }
  if (params.containsKey$1('error') === true) throw $.captureStackTrace($.AuthException$2($.index(params, 'error'), params));
  for (t1 = $.iterator(['access_token', 'token_type', 'expires_in']); t1.hasNext$0() === true; ) {
    t2 = t1.next$0();
    if (params.containsKey$1(t2) !== true) throw $.captureStackTrace($.ExceptionImplementation$1('Missing parameter ' + $.S(t2)));
  }
  var duration = $.DurationImplementation$5(0, 0, 0, $.sub($.parseInt($.index(params, 'expires_in')), 20), 0);
  return $.Token$3($.index(params, 'token_type'), $.index(params, 'access_token'), $.DateImplementation$now$0().add$1(duration));
};

$.serialize3 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'start', $.identity(value.get$start()));
  $.indexSet(result, 'end', $.identity(value.get$end()));
  return result;
};

$.serialize4 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'busy', $.map($.serialize3).$call$1(value.get$busy()));
  $.indexSet(result, 'errors', $.map($.serialize1).$call$1(value.get$errors()));
  return result;
};

$._DoubleLinkedQueueIterator$1 = function(_sentinel) {
  var t1 = new $._DoubleLinkedQueueIterator((void 0), _sentinel);
  t1._DoubleLinkedQueueIterator$1(_sentinel);
  return t1;
};

$.getRange = function(receiver, start, length$) {
  if ($.isJsArray(receiver) !== true) return receiver.getRange$2(start, length$);
  if (0 === length$) return [];
  $.checkNull(start);
  $.checkNull(length$);
  if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(start));
  if (!((typeof length$ === 'number') && (length$ === (length$ | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  if (length$ < 0) throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  if (start < 0) throw $.captureStackTrace($.IndexOutOfRangeException$1(start));
  var end = start + length$;
  if ($.gtB(end, $.get$length(receiver))) throw $.captureStackTrace($.IndexOutOfRangeException$1(length$));
  if ($.ltB(length$, 0)) throw $.captureStackTrace($.IllegalArgumentException$1(length$));
  return receiver.slice(start, end);
};

$.JsonStringifier$_internal$0 = function() {
  var t1 = $.StringBufferImpl$1('');
  var t2 = $.List((void 0));
  $.setRuntimeTypeInfo(t2, ({E: 'Object'}));
  return new $.JsonStringifier(t2, t1);
};

$.S = function(value) {
  var res = $.toString(value);
  if (!(typeof res === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(value));
  return res;
};

$._TextTrackListEventsImpl$1 = function(_ptr) {
  return new $._TextTrackListEventsImpl(_ptr);
};

$.parse2 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.FreeBusyCalendar$0();
  result.busy = $.map($.parse5).$call$1($.index(json, 'busy'));
  result.errors = $.map($.parse4).$call$1($.index(json, 'errors'));
  return result;
};

$._dynamicMetadata = function(table) {
  $dynamicMetadata = table;
};

$.getRange0 = function(a, start, length$, accumulator) {
  if (typeof a !== 'string' && (typeof a !== 'object' || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $.getRange0$bailout(1, a, start, length$, accumulator);
  if (typeof start !== 'number') return $.getRange0$bailout(1, a, start, length$, accumulator);
  if ($.ltB(length$, 0)) throw $.captureStackTrace($.IllegalArgumentException$1('length'));
  if (start < 0) throw $.captureStackTrace($.IndexOutOfRangeException$1(start));
  if (typeof length$ !== 'number') throw $.iae(length$);
  var end = start + length$;
  if (end > a.length) throw $.captureStackTrace($.IndexOutOfRangeException$1(end));
  for (var i = start; i < end; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    $.add$1(accumulator, a[i]);
  }
  return accumulator;
};

$.jsPropertyAccess = function(jsObject, property) {
  return jsObject[property];
};

$.lastIndexOf$1 = function(receiver, element) {
  if ($.isJsArray(receiver) === true) {
    return $.lastIndexOf(receiver, element, (receiver.length));
  }
  if (typeof receiver === 'string') {
    $.checkNull(element);
    if (!(typeof element === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(element));
    return receiver.lastIndexOf(element);
  }
  return receiver.lastIndexOf$1(element);
};

$.LinkedHashMapImplementation$0 = function() {
  var t1 = new $.LinkedHashMapImplementation((void 0), (void 0));
  t1.LinkedHashMapImplementation$0();
  return t1;
};

$._DeprecatedPeerConnectionEventsImpl$1 = function(_ptr) {
  return new $._DeprecatedPeerConnectionEventsImpl(_ptr);
};

$._dynamicMetadata0 = function() {
  if ((typeof($dynamicMetadata)) === 'undefined') {
    var t1 = [];
    $._dynamicMetadata(t1);
  }
  return $dynamicMetadata;
};

$.regExpGetNative = function(regExp) {
  var r = (regExp._re);
  return r === (void 0) ? (regExp._re = $.regExpMakeNative(regExp, false)) : r;
};

$.serialize5 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'timeMax', $.identity(value.get$timeMax()));
  $.indexSet(result, 'kind', $.identity(value.get$kind()));
  $.indexSet(result, 'calendars', $.mapValues($.serialize4).$call$1(value.get$calendars()));
  $.indexSet(result, 'timeMin', $.identity(value.get$timeMin()));
  $.indexSet(result, 'groups', $.mapValues($.serialize2).$call$1(value.get$groups()));
  return result;
};

$.checkNull = function(object) {
  if (object === (void 0)) throw $.captureStackTrace($.NullPointerException$2((void 0), $.CTC0));
  return object;
};

$.parse5 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.TimePeriod$0();
  result.start = $.identity($.index(json, 'start'));
  result.end = $.identity($.index(json, 'end'));
  return result;
};

$.CompleterImpl$0 = function() {
  return new $.CompleterImpl($.FutureImpl$0());
};

$.EventExtendedProperties$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventExtendedProperties((void 0), (void 0), t1);
};

$.throwNoSuchMethod = function(obj, name$, arguments$) {
  throw $.captureStackTrace($.NoSuchMethodException$4(obj, name$, arguments$, (void 0)));
};

$.StackTrace$1 = function(stack) {
  return new $.StackTrace(stack);
};

$.parse6 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.Settings$0();
  result.items = $.map($.parse7).$call$1($.index(json, 'items'));
  result.kind = $.identity($.index(json, 'kind'));
  result.etag = $.identity($.index(json, 'etag'));
  return result;
};

$._EventListenerListImpl$2 = function(_ptr, _type) {
  return new $._EventListenerListImpl(_type, _ptr);
};

$.serialize6 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'kind', $.identity(value.get$kind()));
  $.indexSet(result, 'etag', $.identity(value.get$etag()));
  $.indexSet(result, 'id', $.identity(value.get$id()));
  $.indexSet(result, 'value', $.identity(value.get$value()));
  return result;
};

$.FreebusyResource$_internal$1 = function($$service) {
  return new $.FreebusyResource($$service);
};

$.getSeconds = function(receiver) {
  return receiver.get$isUtc() === true ? ($.lazyAsJsDate(receiver).getUTCSeconds()) : ($.lazyAsJsDate(receiver).getSeconds());
};

$._WindowEventsImpl$1 = function(_ptr) {
  return new $._WindowEventsImpl(_ptr);
};

$.Text = function(data) {
  return document.createTextNode(data);;
};

$.DoubleLinkedQueue$0 = function() {
  var t1 = new $.DoubleLinkedQueue((void 0));
  t1.DoubleLinkedQueue$0();
  return t1;
};

$.insertionSort_ = function(a, left, right, compare) {
  if (typeof a !== 'object' || ((a.constructor !== Array || !!a.immutable$list) && !a.is$JavaScriptIndexingBehavior())) return $.insertionSort_$bailout(1, a, left, right, compare);
  if (typeof left !== 'number') return $.insertionSort_$bailout(1, a, left, right, compare);
  if (typeof right !== 'number') return $.insertionSort_$bailout(1, a, left, right, compare);
  for (var i = left + 1; i <= right; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = a[i];
    var j = i;
    while (true) {
      if (j > left) {
        t1 = j - 1;
        if (t1 !== (t1 | 0)) throw $.iae(t1);
        var t3 = a.length;
        if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
        t1 = $.gtB(compare.$call$2(a[t1], t2), 0);
      } else t1 = false;
      if (!t1) break;
      var j0 = j - 1;
      if (j0 !== (j0 | 0)) throw $.iae(j0);
      t1 = a.length;
      if (j0 < 0 || j0 >= t1) throw $.ioore(j0);
      t3 = a[j0];
      if (j !== (j | 0)) throw $.iae(j);
      if (j < 0 || j >= t1) throw $.ioore(j);
      a[j] = t3;
      j = j0;
    }
    if (j !== (j | 0)) throw $.iae(j);
    t1 = a.length;
    if (j < 0 || j >= t1) throw $.ioore(j);
    a[j] = t2;
  }
};

$.parse7 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.Setting$0();
  result.kind = $.identity($.index(json, 'kind'));
  result.etag = $.identity($.index(json, 'etag'));
  result.id = $.identity($.index(json, 'id'));
  result.value = $.identity($.index(json, 'value'));
  return result;
};

$.serialize7 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'items', $.map($.serialize6).$call$1(value.get$items()));
  $.indexSet(result, 'kind', $.identity(value.get$kind()));
  $.indexSet(result, 'etag', $.identity(value.get$etag()));
  return result;
};

$.AclResource$_internal$1 = function($$service) {
  return new $.AclResource($$service);
};

$.parse8 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.CalendarList$0();
  result.nextPageToken = $.identity($.index(json, 'nextPageToken'));
  result.items = $.map($.parse9).$call$1($.index(json, 'items'));
  result.kind = $.identity($.index(json, 'kind'));
  result.etag = $.identity($.index(json, 'etag'));
  return result;
};

$.checkNumbers = function(a, b) {
  if (typeof a === 'number') {
    if (typeof b === 'number') return true;
    $.checkNull(b);
    throw $.captureStackTrace($.IllegalArgumentException$1(b));
  }
  return false;
};

$.serialize8 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'minutes', $.identity(value.get$minutes()));
  $.indexSet(result, 'method', $.identity(value.get$method()));
  return result;
};

$.random = function() {
  return $.random0();
};

$._DoubleLinkedQueueEntrySentinel$0 = function() {
  var t1 = new $._DoubleLinkedQueueEntrySentinel((void 0), (void 0), (void 0));
  t1.DoubleLinkedQueueEntry$1((void 0));
  t1._DoubleLinkedQueueEntrySentinel$0();
  return t1;
};

$.getHours = function(receiver) {
  return receiver.get$isUtc() === true ? ($.lazyAsJsDate(receiver).getUTCHours()) : ($.lazyAsJsDate(receiver).getHours());
};

$.random0 = function() {
  return Math.random();
};

$._ElementAttributeMap$1 = function(_element) {
  return new $._ElementAttributeMap(_element);
};

$.lt$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a < b;
  }
  return a.operator$lt$1(b);
};

$.EventReminders$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventReminders((void 0), (void 0), t1);
};

$.DivElement = function() {
  return $._document().$dom_createElement$1('div');
};

$.remainder = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a % b;
  }
  return a.remainder$1(b);
};

$.parse9 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.CalendarListEntry$0();
  result.kind = $.identity($.index(json, 'kind'));
  result.defaultReminders = $.map($.parse10).$call$1($.index(json, 'defaultReminders'));
  result.description = $.identity($.index(json, 'description'));
  result.colorId = $.identity($.index(json, 'colorId'));
  result.selected = $.identity($.index(json, 'selected'));
  result.summary = $.identity($.index(json, 'summary'));
  result.etag = $.identity($.index(json, 'etag'));
  result.location = $.identity($.index(json, 'location'));
  result.summaryOverride = $.identity($.index(json, 'summaryOverride'));
  result.timeZone = $.identity($.index(json, 'timeZone'));
  result.hidden = $.identity($.index(json, 'hidden'));
  result.accessRole = $.identity($.index(json, 'accessRole'));
  result.id = $.identity($.index(json, 'id'));
  return result;
};

$.index$slow = function(a, index) {
  if (typeof a === 'string' || $.isJsArray(a) === true) {
    if (!((typeof index === 'number') && (index === (index | 0)))) {
      if (!(typeof index === 'number')) throw $.captureStackTrace($.IllegalArgumentException$1(index));
      if (!($.truncate(index) === index)) throw $.captureStackTrace($.IllegalArgumentException$1(index));
    }
    if ($.ltB(index, 0) || $.geB(index, $.get$length(a))) throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    return a[index];
  }
  return a.operator$index$1(index);
};

$.serialize9 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'kind', $.identity(value.get$kind()));
  $.indexSet(result, 'defaultReminders', $.map($.serialize8).$call$1(value.get$defaultReminders()));
  $.indexSet(result, 'description', $.identity(value.get$description()));
  $.indexSet(result, 'colorId', $.identity(value.get$colorId()));
  $.indexSet(result, 'selected', $.identity(value.get$selected()));
  $.indexSet(result, 'summary', $.identity(value.get$summary()));
  $.indexSet(result, 'etag', $.identity(value.get$etag()));
  $.indexSet(result, 'location', $.identity(value.get$location()));
  $.indexSet(result, 'summaryOverride', $.identity(value.get$summaryOverride()));
  $.indexSet(result, 'timeZone', $.identity(value.get$timeZone()));
  $.indexSet(result, 'hidden', $.identity(value.get$hidden()));
  $.indexSet(result, 'accessRole', $.identity(value.get$accessRole()));
  $.indexSet(result, 'id', $.identity(value.get$id()));
  return result;
};

$.parse10 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventReminder$0();
  result.minutes = $.identity($.index(json, 'minutes'));
  result.method = $.identity($.index(json, 'method'));
  return result;
};

$._addToEncoding = function(offset, bytes, value, buffer) {
  if (typeof offset !== 'number') return $._addToEncoding$bailout(1, offset, bytes, value, buffer);
  if (typeof bytes !== 'number') return $._addToEncoding$bailout(1, offset, bytes, value, buffer);
  if (value !== (value | 0)) return $._addToEncoding$bailout(1, offset, bytes, value, buffer);
  if (typeof buffer !== 'object' || ((buffer.constructor !== Array || !!buffer.immutable$list) && !buffer.is$JavaScriptIndexingBehavior())) return $._addToEncoding$bailout(1, offset, bytes, value, buffer);
  for (; bytes > 0; ) {
    var t1 = offset + bytes;
    var t2 = (128 | (value & 63) >>> 0) >>> 0;
    if (t1 !== (t1 | 0)) throw $.iae(t1);
    var t3 = buffer.length;
    if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
    buffer[t1] = t2;
    value = $.shr(value, 6);
    --bytes;
  }
  return value;
};

$.serialize10 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'nextPageToken', $.identity(value.get$nextPageToken()));
  $.indexSet(result, 'items', $.map($.serialize9).$call$1(value.get$items()));
  $.indexSet(result, 'kind', $.identity(value.get$kind()));
  $.indexSet(result, 'etag', $.identity(value.get$etag()));
  return result;
};

$.parse11 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.Events$0();
  result.nextPageToken = $.identity($.index(json, 'nextPageToken'));
  result.kind = $.identity($.index(json, 'kind'));
  result.defaultReminders = $.map($.parse10).$call$1($.index(json, 'defaultReminders'));
  result.description = $.identity($.index(json, 'description'));
  result.items = $.map($.parse12).$call$1($.index(json, 'items'));
  result.updated = $.identity($.index(json, 'updated'));
  result.summary = $.identity($.index(json, 'summary'));
  result.etag = $.identity($.index(json, 'etag'));
  result.timeZone = $.identity($.index(json, 'timeZone'));
  result.accessRole = $.identity($.index(json, 'accessRole'));
  return result;
};

$.createCalendarBox = function(calendar) {
  var box = $.DivElement();
  $.add$1(box.get$classes(), 'calendar');
  var header = $.Element$tag('h2');
  header.set$text(calendar.get$summary());
  $.add$1(box.get$elements(), header);
  var loading = $.DivElement();
  $.add$1(loading.get$elements(), $.ImageElement('spinner.gif', (void 0), (void 0)));
  loading.insertAdjacentText$2('beforeend', 'Loading events...');
  $.add$1(box.get$elements(), loading);
  var t1 = $.calApi.get$events();
  var t2 = calendar.get$id();
  var t3 = $.rfc3339Date($.today());
  t1.list$4$singleEvents$timeMax$timeMin(t2, true, $.rfc3339Date($.add$1($.today(), $.DurationImplementation$5(1, 0, 0, 0, 0))), t3).onComplete$1(new $.Closure57(box, loading));
  return box;
};

$.toString = function(value) {
  if (typeof value == "object") {
    if ($.isJsArray(value) === true) return $.collectionToString(value);
    return value.toString$0();
  }
  if (value === 0 && (1 / value) < 0) return '-0.0';
  if (value === (void 0)) return 'null';
  if (typeof value == "function") return 'Closure';
  return String(value);
};

$.serialize11 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'overrides', $.map($.serialize8).$call$1(value.get$overrides()));
  $.indexSet(result, 'useDefault', $.identity(value.get$useDefault()));
  return result;
};

$.SettingsResource$_internal$1 = function($$service) {
  return new $.SettingsResource($$service);
};

$.contains$2 = function(receiver, other, startIndex) {
  if (!(typeof receiver === 'string')) return receiver.contains$2(other, startIndex);
  $.checkNull(other);
  return $.stringContainsUnchecked(receiver, other, startIndex);
};

$._ListRangeIteratorImpl$3 = function(_source, _offset, _end) {
  return new $._ListRangeIteratorImpl(_end, _offset, _source);
};

$._escape = function(sb, s) {
  var length$ = $.get$length(s);
  var charCodes = $.List((void 0));
  $.setRuntimeTypeInfo(charCodes, ({E: 'int'}));
  for (var needsEscape = false, i = 0; $.ltB(i, length$); ++i) {
    var charCode = $.charCodeAt(s, i);
    if ($.ltB(charCode, 32)) {
      charCodes.push(92);
      switch (charCode) {
        case 8:
          charCodes.push(98);
          break;
        case 9:
          charCodes.push(116);
          break;
        case 10:
          charCodes.push(110);
          break;
        case 12:
          charCodes.push(102);
          break;
        case 13:
          charCodes.push(114);
          break;
        default:
          charCodes.push(117);
          charCodes.push($._hexDigit($.and($.shr(charCode, 12), 15)));
          charCodes.push($._hexDigit($.and($.shr(charCode, 8), 15)));
          charCodes.push($._hexDigit($.and($.shr(charCode, 4), 15)));
          charCodes.push($._hexDigit($.and(charCode, 15)));
          break;
      }
      needsEscape = true;
    } else {
      if ($.eqB(charCode, 34) || $.eqB(charCode, 92)) {
        charCodes.push(92);
        charCodes.push(charCode);
        needsEscape = true;
      } else charCodes.push(charCode);
    }
  }
  $.add$1(sb, needsEscape ? $.String$fromCharCodes(charCodes) : s);
};

$.ImageElement = function(src, width, height) {
  var _e = $._document().$dom_createElement$1('img');
  !$.eqNullB(src) && _e.set$src(src);
  !$.eqNullB(width) && _e.set$width(width);
  !$.eqNullB(height) && _e.set$height(height);
  return _e;
};

$._toJsStringArray = function(strings) {
  if (typeof strings !== 'object' || ((strings.constructor !== Array || !!strings.immutable$list) && !strings.is$JavaScriptIndexingBehavior())) return $._toJsStringArray$bailout(1, strings);
  $.checkNull(strings);
  var length$ = strings.length;
  if ($.isJsArray(strings) === true) {
    for (var i = 0; i < length$; ++i) {
      var t1 = strings.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      var t2 = strings[i];
      $.checkNull(t2);
      if (!(typeof t2 === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(t2));
    }
    var array = strings;
  } else {
    array = $.List(length$);
    for (i = 0; i < length$; ++i) {
      t1 = strings.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      t2 = strings[i];
      $.checkNull(t2);
      if (!(typeof t2 === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(t2));
      t1 = array.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      array[i] = t2;
    }
  }
  return array;
};

$.parse12 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.Event$0();
  result.creator = $.parse13($.index(json, 'creator'));
  result.organizer = $.parse14($.index(json, 'organizer'));
  result.id = $.identity($.index(json, 'id'));
  result.attendees = $.map($.parse15).$call$1($.index(json, 'attendees'));
  result.htmlLink = $.identity($.index(json, 'htmlLink'));
  result.recurrence = $.map($.identity).$call$1($.index(json, 'recurrence'));
  result.start = $.parse16($.index(json, 'start'));
  result.etag = $.identity($.index(json, 'etag'));
  result.location = $.identity($.index(json, 'location'));
  result.recurringEventId = $.identity($.index(json, 'recurringEventId'));
  result.originalStartTime = $.parse16($.index(json, 'originalStartTime'));
  result.status = $.identity($.index(json, 'status'));
  result.updated = $.identity($.index(json, 'updated'));
  result.gadget = $.parse17($.index(json, 'gadget'));
  result.description = $.identity($.index(json, 'description'));
  result.iCalUID = $.identity($.index(json, 'iCalUID'));
  result.extendedProperties = $.parse18($.index(json, 'extendedProperties'));
  result.sequence = $.identity($.index(json, 'sequence'));
  result.visibility = $.identity($.index(json, 'visibility'));
  result.guestsCanModify = $.identity($.index(json, 'guestsCanModify'));
  result.end = $.parse16($.index(json, 'end'));
  result.attendeesOmitted = $.identity($.index(json, 'attendeesOmitted'));
  result.kind = $.identity($.index(json, 'kind'));
  result.created = $.identity($.index(json, 'created'));
  result.colorId = $.identity($.index(json, 'colorId'));
  result.anyoneCanAddSelf = $.identity($.index(json, 'anyoneCanAddSelf'));
  result.reminders = $.parse19($.index(json, 'reminders'));
  result.guestsCanSeeOtherGuests = $.identity($.index(json, 'guestsCanSeeOtherGuests'));
  result.summary = $.identity($.index(json, 'summary'));
  result.guestsCanInviteOthers = $.identity($.index(json, 'guestsCanInviteOthers'));
  result.transparency = $.identity($.index(json, 'transparency'));
  result.privateCopy = $.identity($.index(json, 'privateCopy'));
  return result;
};

$.IndexOutOfRangeException$1 = function(_index) {
  return new $.IndexOutOfRangeException(_index);
};

$.OAuth2$3 = function(_clientId, _scopes, provider) {
  var t1 = new $.OAuth2((void 0), (void 0), (void 0), (void 0), provider, _scopes, _clientId);
  t1.OAuth2$3(_clientId, _scopes, provider);
  return t1;
};

$._WindowPoller$2 = function(_completer, _window) {
  return new $._WindowPoller(_window, _completer);
};

$.getTraceFromException = function(exception) {
  return $.StackTrace$1((exception.stack));
};

$._TextTrackEventsImpl$1 = function(_ptr) {
  return new $._TextTrackEventsImpl(_ptr);
};

$._AttributeClassSet$1 = function(element) {
  return new $._AttributeClassSet(element);
};

$.charCodeAt = function(receiver, index) {
  if (typeof receiver === 'string') {
    if (!(typeof index === 'number')) throw $.captureStackTrace($.IllegalArgumentException$1(index));
    if (index < 0) throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    if (index >= receiver.length) throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
    return receiver.charCodeAt(index);
  }
  return receiver.charCodeAt$1(index);
};

$._BatteryManagerEventsImpl$1 = function(_ptr) {
  return new $._BatteryManagerEventsImpl(_ptr);
};

$.CalendarList$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.CalendarList((void 0), (void 0), (void 0), (void 0), t1);
};

$.EventGadget$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.EventGadget((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), t1);
};

$.serialize12 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'date', $.identity(value.get$date()));
  $.indexSet(result, 'timeZone', $.identity(value.get$timeZone()));
  $.indexSet(result, 'dateTime', $.identity(value.get$dateTime()));
  return result;
};

$.parse19 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventReminders$0();
  result.overrides = $.map($.parse10).$call$1($.index(json, 'overrides'));
  result.useDefault = $.identity($.index(json, 'useDefault'));
  return result;
};

$.toInt = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.toInt$0();
  if ($.isNaN(receiver) === true) throw $.captureStackTrace($.BadNumberFormatException$1('NaN'));
  if ($.isInfinite(receiver) === true) throw $.captureStackTrace($.BadNumberFormatException$1('Infinity'));
  var truncated = $.truncate(receiver);
  return (truncated == -0.0) ? 0 : truncated;
};

$._WebSocketEventsImpl$1 = function(_ptr) {
  return new $._WebSocketEventsImpl(_ptr);
};

$.collectionToString = function(c) {
  var result = $.StringBufferImpl$1('');
  $._emitCollection(c, result, $.List((void 0)));
  return result.toString$0();
};

$.KeyValuePair$2 = function(key, value) {
  return new $.KeyValuePair(value, key);
};

$.MetaInfo$3 = function(tag, tags, set) {
  return new $.MetaInfo(set, tags, tag);
};

$._MediaStreamEventsImpl$1 = function(_ptr) {
  return new $._MediaStreamEventsImpl(_ptr);
};

$.defineProperty = function(obj, property, value) {
  Object.defineProperty(obj, property,
      {value: value, enumerable: false, writable: true, configurable: true});;
};

$.print = function(obj) {
  return $.printString($.toString(obj));
};

$.checkString = function(value) {
  if (!(typeof value === 'string')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return value;
};

$.dynamicFunction = function(name$) {
  var f = (Object.prototype[name$]);
  if (!(f === (void 0)) && (!!f.methods)) {
    return f.methods;
  }
  var methods = ({});
  var dartMethod = (Object.getPrototypeOf($.CTC16)[name$]);
  if (!(dartMethod === (void 0))) methods['Object'] = dartMethod;
  var bind = (function() {return $.dynamicBind.$call$4(this, name$, methods, Array.prototype.slice.call(arguments));});
  bind.methods = methods;
  $.defineProperty((Object.prototype), name$, bind);
  return methods;
};

$.parse16 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventDateTime$0();
  result.date = $.identity($.index(json, 'date'));
  result.timeZone = $.identity($.index(json, 'timeZone'));
  result.dateTime = $.identity($.index(json, 'dateTime'));
  return result;
};

$.addAll = function(receiver, collection) {
  if ($.isJsArray(receiver) !== true) return receiver.addAll$1(collection);
  var iterator = $.iterator(collection);
  for (; iterator.hasNext$0() === true; ) {
    $.add$1(receiver, iterator.next$0());
  }
};

$.serialize13 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'shared', $.mapValues($.identity).$call$1(value.get$shared()));
  $.indexSet(result, 'private', $.mapValues($.identity).$call$1(value.get$$private()));
  return result;
};

$.removeLast = function(receiver) {
  if ($.isJsArray(receiver) === true) {
    $.checkGrowable(receiver, 'removeLast');
    if ($.get$length(receiver) === 0) throw $.captureStackTrace($.IndexOutOfRangeException$1(-1));
    return receiver.pop();
  }
  return receiver.removeLast$0();
};

$.DateImplementation$8 = function(years, month, day, hour, minute, second, millisecond, isUtc) {
  var t1 = new $.DateImplementation($.checkNull(isUtc), $.valueFromDecomposedDate(years, month, day, hour, minute, second, millisecond, isUtc));
  t1.DateImplementation$8(years, month, day, hour, minute, second, millisecond, isUtc);
  return t1;
};

$.stringFromCharCodes = function(charCodes) {
  for (var t1 = $.iterator(charCodes); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if (!((typeof t2 === 'number') && (t2 === (t2 | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(t2));
  }
  return String.fromCharCode.apply((void 0), charCodes);
};

$.parse18 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventExtendedProperties$0();
  result.shared = $.mapValues($.identity).$call$1($.index(json, 'shared'));
  result.$private = $.mapValues($.identity).$call$1($.index(json, 'private'));
  return result;
};

$.DateImplementation$fromMillisecondsSinceEpoch$2 = function(millisecondsSinceEpoch, isUtc) {
  var t1 = new $.DateImplementation($.checkNull(isUtc), millisecondsSinceEpoch);
  t1.DateImplementation$fromMillisecondsSinceEpoch$2(millisecondsSinceEpoch, isUtc);
  return t1;
};

$.Settings$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.Settings((void 0), (void 0), (void 0), t1);
};

$.checkInt = function(value) {
  if (!((typeof value === 'number') && (value === (value | 0)))) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return value;
};

$.objectToString = function(object) {
  var name$ = $.constructorNameFallback(object);
  if ($.eqB(name$, 'Object')) {
    var decompiled = (String(object.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1]);
    if (typeof decompiled === 'string') name$ = decompiled;
  }
  return 'Instance of \'' + $.S($.charCodeAt(name$, 0) === 36 ? $.substring$1(name$, 1) : name$) + '\'';
};

$.checkBool = function(value) {
  if (!(typeof value === 'boolean')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$1(value));
  }
  return value;
};

$._firstProbe = function(hashCode, length$) {
  return $.and(hashCode, $.sub(length$, 1));
};

$._hexDigit = function(x) {
  if ($.ltB(x, 10)) {
    if (typeof x !== 'number') throw $.iae(x);
    var t1 = 48 + x;
  } else {
    if (typeof x !== 'number') throw $.iae(x);
    t1 = 87 + x;
  }
  return t1;
};

$.set$length = function(receiver, newLength) {
  if ($.isJsArray(receiver) === true) {
    $.checkNull(newLength);
    if (!((typeof newLength === 'number') && (newLength === (newLength | 0)))) throw $.captureStackTrace($.IllegalArgumentException$1(newLength));
    if (newLength < 0) throw $.captureStackTrace($.IndexOutOfRangeException$1(newLength));
    $.checkGrowable(receiver, 'set length');
    receiver.length = newLength;
  } else receiver.set$length(newLength);
  return newLength;
};

$.ioore = function(index) {
  throw $.captureStackTrace($.IndexOutOfRangeException$1(index));
};

$.DateImplementation$fromString = function(formattedString) {
  var match = $.CTC14.firstMatch$1(formattedString);
  if (!(match === (void 0))) {
    var t1 = new $.Closure68();
    var t2 = new $.Closure69();
    var years = $.parseInt($.index(match, 1));
    var month = $.parseInt($.index(match, 2));
    var day = $.parseInt($.index(match, 3));
    var hour = t1.$call$1($.index(match, 4));
    var minute = t1.$call$1($.index(match, 5));
    var second = t1.$call$1($.index(match, 6));
    var millisecond = $.toInt($.round($.mul(t2.$call$1($.index(match, 7)), 1000)));
    if ($.eqB(millisecond, 1000)) {
      var addOneMillisecond = true;
      millisecond = 999;
    } else addOneMillisecond = false;
    var isUtc = !($.index(match, 8) === (void 0)) && !$.eqB($.index(match, 8), '');
    var millisecondsSinceEpoch = $.valueFromDecomposedDate(years, month, day, hour, minute, second, millisecond, isUtc);
    if (millisecondsSinceEpoch === (void 0)) throw $.captureStackTrace($.IllegalArgumentException$1(formattedString));
    if (addOneMillisecond) millisecondsSinceEpoch = $.add(millisecondsSinceEpoch, 1);
    return $.DateImplementation$fromMillisecondsSinceEpoch$2(millisecondsSinceEpoch, isUtc);
  }
  throw $.captureStackTrace($.IllegalArgumentException$1(formattedString));
};

$.gt$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    return a > b;
  }
  return a.operator$gt$1(b);
};

$.indexOf0 = function(a, element, startIndex, endIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object' || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $.indexOf0$bailout(1, a, element, startIndex, endIndex);
  if (typeof endIndex !== 'number') return $.indexOf0$bailout(1, a, element, startIndex, endIndex);
  if ($.geB(startIndex, a.length)) return -1;
  if ($.ltB(startIndex, 0)) startIndex = 0;
  if (typeof startIndex !== 'number') return $.indexOf0$bailout(2, a, element, startIndex, endIndex);
  for (var i = startIndex; i < endIndex; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    if ($.eqB(a[i], element)) return i;
  }
  return -1;
};

$.createEventBox = function(event$) {
  var box = $.DivElement();
  box.set$text(event$.get$summary());
  $.add$1(box.get$classes(), 'event');
  var time = $.SpanElement();
  $.add$1(time.get$classes(), 'time');
  time.set$text($.eqNullB(event$.get$start().get$dateTime()) ? 'All day' : $.join([$.formatTime($.dateFromRfc3339(event$.get$start().get$dateTime())), $.formatTime($.dateFromRfc3339(event$.get$end().get$dateTime()))], ' - '));
  $.add$1(box.get$elements(), time);
  return box;
};

$.SpanElement = function() {
  return $._document().$dom_createElement$1('span');
};

$.typeNameInFirefox = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if ($.eqB(name$, 'Window')) return 'DOMWindow';
  if ($.eqB(name$, 'Document')) return 'HTMLDocument';
  if ($.eqB(name$, 'XMLDocument')) return 'Document';
  if ($.eqB(name$, 'WorkerMessageEvent')) return 'MessageEvent';
  return name$;
};

$.parse17 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventGadget$0();
  result.preferences = $.mapValues($.identity).$call$1($.index(json, 'preferences'));
  result.title = $.identity($.index(json, 'title'));
  result.height = $.identity($.index(json, 'height'));
  result.width = $.identity($.index(json, 'width'));
  result.link = $.identity($.index(json, 'link'));
  result.type = $.identity($.index(json, 'type'));
  result.display = $.identity($.index(json, 'display'));
  result.iconLink = $.identity($.index(json, 'iconLink'));
  return result;
};

$.hashCode = function(receiver) {
  if (typeof receiver === 'number') {
    return receiver & 0x1FFFFFFF;
  }
  if (!(typeof receiver === 'string')) return receiver.hashCode$0();
  var length$ = (receiver.length);
  for (var hash = 0, i = 0; i < length$; ++i) {
    hash = (536870911 & hash + (receiver.charCodeAt(i))) >>> 0;
    hash = (536870911 & hash + ((524287 & hash) >>> 0 << 10)) >>> 0;
    hash = (hash ^ $.shr(hash, 6)) >>> 0;
  }
  hash = (536870911 & hash + ((67108863 & hash) >>> 0 << 3)) >>> 0;
  hash = (hash ^ $.shr(hash, 11)) >>> 0;
  return (536870911 & hash + ((16383 & hash) >>> 0 << 15)) >>> 0;
};

$._isDartLocation = function(thing) {
  try {
    var t1 = thing;
    return typeof t1 === 'object' && t1.is$Location();
  } catch (exception) {
    $.unwrapException(exception);
    return false;
  }
};

$.serialize14 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'preferences', $.mapValues($.identity).$call$1(value.get$preferences()));
  $.indexSet(result, 'title', $.identity(value.get$title()));
  $.indexSet(result, 'height', $.identity(value.get$height()));
  $.indexSet(result, 'width', $.identity(value.get$width()));
  $.indexSet(result, 'link', $.identity(value.get$link()));
  $.indexSet(result, 'type', $.identity(value.get$type()));
  $.indexSet(result, 'display', $.identity(value.get$display()));
  $.indexSet(result, 'iconLink', $.identity(value.get$iconLink()));
  return result;
};

$.makeLiteralMap = function(keyValuePairs) {
  var iterator = $.iterator(keyValuePairs);
  var result = $.LinkedHashMapImplementation$0();
  for (; iterator.hasNext$0() === true; ) {
    result.operator$indexSet$2(iterator.next$0(), iterator.next$0());
  }
  return result;
};

$.min = function(a, b) {
  var c = $.compareTo(a, b);
  if ($.eqB(c, 0)) return a;
  if ($.ltB(c, 0)) {
    if (typeof b === 'number' && $.isNaN(b) === true) return b;
    return a;
  }
  if (typeof a === 'number' && $.isNaN(a) === true) return a;
  return b;
};

$.dateFromRfc3339 = function(text) {
  if ($.eqNullB(text)) return;
  if ($.endsWith(text, 'Z') === true) return $.DateImplementation$fromString(text).toLocal$0();
  var tzMatch = $.CTC13.firstMatch$1(text);
  if ($.eqNullB(tzMatch)) throw $.captureStackTrace($.IllegalArgumentException$1(text));
  var rawDate = $.DateImplementation$fromString($.S($.substring$2(text, 0, tzMatch.start$0())) + 'Z');
  var offset = $.DurationImplementation$5(0, $.parseInt(tzMatch.group$1(2)), $.parseInt(tzMatch.group$1(3)), 0, 0);
  return ($.eqB(tzMatch.group$1(1), '+') ? rawDate.subtract$1(offset) : $.add$1(rawDate, offset)).toLocal$0();
};

$.startsWith = function(receiver, other) {
  if (!(typeof receiver === 'string')) return receiver.startsWith$1(other);
  $.checkString(other);
  var length$ = $.get$length(other);
  if ($.gtB(length$, receiver.length)) return false;
  return other == receiver.substring(0, length$);
};

$.createFromCharCodes = function(charCodes) {
  $.checkNull(charCodes);
  if ($.isJsArray(charCodes) !== true) {
    if (!((typeof charCodes === 'object') && (((charCodes.constructor === Array) || charCodes.is$List0())))) throw $.captureStackTrace($.IllegalArgumentException$1(charCodes));
    var charCodes0 = $.List$from(charCodes);
    charCodes = charCodes0;
  }
  return $.stringFromCharCodes(charCodes);
};

$.le = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a <= b) : $.le$slow(a, b);
};

$.toStringForNativeObject = function(obj) {
  return 'Instance of ' + $.S($.getTypeNameOf(obj));
};

$.trim = function(receiver) {
  if (!(typeof receiver === 'string')) return receiver.trim$0();
  return receiver.trim();
};

$.encodeUriComponent = function(component) {
  return $._uriEncode('-_.!~*\'()0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', component);
};

$.forEach = function(receiver, f) {
  if ($.isJsArray(receiver) !== true) return receiver.forEach$1(f);
  return $.forEach0(receiver, f);
};

$.dynamicBind = function(obj, name$, methods, arguments$) {
  var tag = $.getTypeNameOf(obj);
  var method = (methods[tag]);
  if (method === (void 0) && !($._dynamicMetadata0() === (void 0))) {
    for (var i = 0; $.ltB(i, $.get$length($._dynamicMetadata0())); ++i) {
      var entry = $.index($._dynamicMetadata0(), i);
      if ($.contains$1(entry.get$set(), tag) === true) {
        method = (methods[entry.get$tag()]);
        if (!(method === (void 0))) break;
      }
    }
  }
  if (method === (void 0)) {
    method = (methods['Object']);
  }
  var proto = (Object.getPrototypeOf(obj));
  if (method === (void 0)) {
    method = (function () {if (Object.getPrototypeOf(this) === proto) {$.throwNoSuchMethod.$call$3(this, name$, Array.prototype.slice.call(arguments));} else {return Object.prototype[name$].apply(this, arguments);}});
  }
  var nullCheckMethod = (function() {var res = method.apply(this, Array.prototype.slice.call(arguments));return res === null ? (void 0) : res;});
  (!proto.hasOwnProperty(name$)) && $.defineProperty(proto, name$, nullCheckMethod);
  return nullCheckMethod.apply(obj, arguments$);
};

$._MessagePortEventsImpl$1 = function(_ptr) {
  return new $._MessagePortEventsImpl(_ptr);
};

$._document = function() {
  return document;;
};

$.lastIndexOf = function(a, element, startIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object' || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $.lastIndexOf$bailout(1, a, element, startIndex);
  if ($.ltB(startIndex, 0)) return -1;
  if ($.geB(startIndex, a.length)) startIndex = a.length - 1;
  if (typeof startIndex !== 'number') return $.lastIndexOf$bailout(2, a, element, startIndex);
  for (var i = startIndex; i >= 0; --i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    if ($.eqB(a[i], element)) return i;
  }
  return -1;
};

$.forEach0 = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
};

$.getFunctionForTypeNameOf = function() {
  if (!((typeof(navigator)) === 'object')) return $.typeNameInChrome;
  var userAgent = (navigator.userAgent);
  if ($.contains$1(userAgent, $.CTC15) === true) return $.typeNameInChrome;
  if ($.contains$1(userAgent, 'Firefox') === true) return $.typeNameInFirefox;
  if ($.contains$1(userAgent, 'MSIE') === true) return $.typeNameInIE;
  return $.constructorNameFallback;
};

$.index = function(a, index) {
  if (typeof a == "string" || a.constructor === Array) {
    var key = (index >>> 0);
    if (key === index && key < (a.length)) {
      return a[key];
    }
  }
  return $.index$slow(a, index);
};

$.sort = function(receiver, compare) {
  if ($.isJsArray(receiver) !== true) return receiver.sort$1(compare);
  $.checkMutable(receiver, 'sort');
  $.sort0(receiver, compare);
};

$.sort0 = function(a, compare) {
  $._doSort(a, 0, $.sub($.get$length(a), 1), compare);
};

$._ElementEventsImpl$1 = function(_ptr) {
  return new $._ElementEventsImpl(_ptr);
};

$.FreeBusyGroup$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.FreeBusyGroup((void 0), (void 0), t1);
};

$.toLowerCase = function(receiver) {
  if (!(typeof receiver === 'string')) return receiver.toLowerCase$0();
  return receiver.toLowerCase();
};

$.serialize15 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'comment', $.identity(value.get$comment()));
  $.indexSet(result, 'displayName', $.identity(value.get$displayName()));
  $.indexSet(result, 'self', $.identity(value.get$self()));
  $.indexSet(result, 'responseStatus', $.identity(value.get$responseStatus()));
  $.indexSet(result, 'additionalGuests', $.identity(value.get$additionalGuests()));
  $.indexSet(result, 'resource', $.identity(value.get$resource()));
  $.indexSet(result, 'organizer', $.identity(value.get$organizer()));
  $.indexSet(result, 'optional', $.identity(value.get$optional()));
  $.indexSet(result, 'email', $.identity(value.get$email()));
  return result;
};

$.toDouble = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.toDouble$0();
  return receiver;
};

$.CalendarListEntry$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.CalendarListEntry((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), t1);
};

$.parseDouble = function(str) {
  return $.parseDouble0(str);
};

$.List = function(length$) {
  return $.newList(length$);
};

$._ListRange$3 = function(source, offset, length$) {
  var t1 = $.eqNullB(length$) ? $.sub($.get$length(source), offset) : length$;
  t1 = new $._ListRange(t1, offset, source);
  t1._ListRange$3(source, offset, length$);
  return t1;
};

$.parseDouble0 = function(str) {
  $.checkString(str);
  var ret = (parseFloat(str));
  if (ret === 0) {
    var t1 = $.startsWith(str, '0x') === true || $.startsWith(str, '0X') === true;
  } else t1 = false;
  if (t1) {
    ret = (parseInt(str));
  }
  if ($.isNaN(ret) === true && !$.eqB(str, 'NaN') && !$.eqB(str, '-NaN')) throw $.captureStackTrace($.BadNumberFormatException$1(str));
  return ret;
};

$._doSort = function(a, left, right, compare) {
  if ($.leB($.sub(right, left), 32)) $.insertionSort_(a, left, right, compare);
  else $._dualPivotQuicksort(a, left, right, compare);
};

$._uriEncode = function(canonical, text) {
  if (typeof text !== 'string' && (typeof text !== 'object' || (text.constructor !== Array && !text.is$JavaScriptIndexingBehavior()))) return $._uriEncode$bailout(1, canonical, text);
  var byteToHex = new $.Closure19('0123456789ABCDEF');
  var result = $.StringBufferImpl$1('');
  for (var i = 0; t1 = text.length, i < t1; ++i) {
    if (i < 0 || i >= t1) throw $.ioore(i);
    if ($.geB($.indexOf$1(canonical, text[i]), 0)) {
      t1 = text.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      result.add$1(text[i]);
    } else {
      var ch = $.charCodeAt(text, i);
      if ($.geB(ch, 55296) && $.ltB(ch, 56320)) {
        ++i;
        var nextCh = text.length === i ? 0 : $.charCodeAt(text, i);
        if ($.geB(nextCh, 56320) && $.ltB(nextCh, 57344)) {
          t1 = $.shl($.sub(ch, 55296), 10);
          if (typeof t1 !== 'number') throw $.iae(t1);
          t1 += 65536;
          var t2 = $.sub(nextCh, 56320);
          if (typeof t2 !== 'number') throw $.iae(t2);
          ch = t1 + t2;
        } else throw $.captureStackTrace($.IllegalArgumentException$1('Malformed URI'));
      }
      for (t1 = $.iterator($.codepointsToUtf8([ch], 0, (void 0))); t1.hasNext$0() === true; ) {
        result.add$1(byteToHex.$call$1(t1.next$0()));
      }
    }
  }
  return result.toString$0();
  var t1;
};

$.FreeBusyCalendar$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.FreeBusyCalendar((void 0), (void 0), t1);
};

$._XMLHttpRequestUploadEventsImpl$1 = function(_ptr) {
  return new $._XMLHttpRequestUploadEventsImpl(_ptr);
};

$.Event$0 = function() {
  var t1 = $._cnt;
  $._cnt = $.add(t1, 1);
  return new $.Event((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), t1);
};

$.captureStackTrace = function(ex) {
  var jsError = (new Error());
  jsError.dartException = ex;
  jsError.toString = $.toStringWrapper.$call$0;
  return jsError;
};

$.indexOf$1 = function(receiver, element) {
  if ($.isJsArray(receiver) === true) {
    return $.indexOf(receiver, element, 0, (receiver.length));
  }
  if (typeof receiver === 'string') {
    $.checkNull(element);
    if (!(typeof element === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(element));
    return receiver.indexOf(element);
  }
  return receiver.indexOf$1(element);
};

$._CssClassSet$1 = function(_element) {
  return new $._CssClassSet(_element);
};

$.parse15 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventAttendee$0();
  result.comment = $.identity($.index(json, 'comment'));
  result.displayName = $.identity($.index(json, 'displayName'));
  result.self = $.identity($.index(json, 'self'));
  result.responseStatus = $.identity($.index(json, 'responseStatus'));
  result.additionalGuests = $.identity($.index(json, 'additionalGuests'));
  result.resource = $.identity($.index(json, 'resource'));
  result.organizer = $.identity($.index(json, 'organizer'));
  result.optional = $.identity($.index(json, 'optional'));
  result.email = $.identity($.index(json, 'email'));
  return result;
};

$.StackOverflowException$0 = function() {
  return new $.StackOverflowException();
};

$.eq = function(a, b) {
  if (typeof a === "object") {
    if (!!a.operator$eq$1) return a.operator$eq$1(b);
    return a === b;
  }
  return a === b;
};

$.forEach1 = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
};

$.StringBufferImpl$1 = function(content$) {
  var t1 = new $.StringBufferImpl((void 0), (void 0));
  t1.StringBufferImpl$1(content$);
  return t1;
};

$.codepointsToUtf8 = function(codepoints, offset, length$) {
  var source = $._ListRange$3(codepoints, offset, length$);
  for (var t1 = source.iterator$0(), encodedLength = 0; t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if ($.ltB(t2, 0) || $.gtB(t2, 1114111)) encodedLength += 3;
    else {
      if ($.leB(t2, 127)) ++encodedLength;
      else {
        if ($.leB(t2, 2047)) encodedLength += 2;
        else {
          if ($.leB(t2, 65535)) encodedLength += 3;
          else {
            if ($.leB(t2, 1114111)) encodedLength += 4;
          }
        }
      }
    }
  }
  var encoded = $.List(encodedLength);
  $.setRuntimeTypeInfo(encoded, ({E: 'int'}));
  for (t1 = source.iterator$0(), insertAt = 0; t1.hasNext$0() === true; ) {
    t2 = t1.next$0();
    if ($.ltB(t2, 0) || $.gtB(t2, 1114111)) {
      $.setRange$3(encoded, insertAt, 3, [239, 191, 189]);
      insertAt += 3;
    } else {
      if ($.leB(t2, 127)) {
        var t3 = encoded.length;
        if (insertAt < 0 || insertAt >= t3) throw $.ioore(insertAt);
        encoded[insertAt] = t2;
        ++insertAt;
      } else {
        if ($.leB(t2, 2047)) {
          t2 = $._addToEncoding(insertAt, 1, t2, encoded);
          if (typeof t2 !== 'number') throw $.iae(t2);
          t2 = (192 | (31 & t2) >>> 0) >>> 0;
          t3 = encoded.length;
          if (insertAt < 0 || insertAt >= t3) throw $.ioore(insertAt);
          encoded[insertAt] = t2;
          insertAt += 2;
        } else {
          if ($.leB(t2, 65535)) {
            t2 = $._addToEncoding(insertAt, 2, t2, encoded);
            if (typeof t2 !== 'number') throw $.iae(t2);
            t2 = (224 | (15 & t2) >>> 0) >>> 0;
            t3 = encoded.length;
            if (insertAt < 0 || insertAt >= t3) throw $.ioore(insertAt);
            encoded[insertAt] = t2;
            insertAt += 3;
          } else {
            if ($.leB(t2, 1114111)) {
              t2 = $._addToEncoding(insertAt, 3, t2, encoded);
              if (typeof t2 !== 'number') throw $.iae(t2);
              t2 = (240 | (7 & t2) >>> 0) >>> 0;
              t3 = encoded.length;
              if (insertAt < 0 || insertAt >= t3) throw $.ioore(insertAt);
              encoded[insertAt] = t2;
              insertAt += 4;
            }
          }
        }
      }
    }
  }
  return encoded;
  var insertAt;
};

$.HashMapImplementation$0 = function() {
  var t1 = new $.HashMapImplementation((void 0), (void 0), (void 0), (void 0), (void 0));
  t1.HashMapImplementation$0();
  return t1;
};

$.substring$1 = function(receiver, startIndex) {
  if (!(typeof receiver === 'string')) return receiver.substring$1(startIndex);
  return $.substring$2(receiver, startIndex, (void 0));
};

$.join = function(strings, separator) {
  return $.join0(strings, separator);
};

$.join0 = function(strings, separator) {
  $.checkNull(strings);
  $.checkNull(separator);
  if (!(typeof separator === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(separator));
  return $.stringJoinUnchecked($._toJsStringArray(strings), separator);
};

$._SharedWorkerContextEventsImpl$1 = function(_ptr) {
  return new $._SharedWorkerContextEventsImpl(_ptr);
};

$._IDBVersionChangeRequestEventsImpl$1 = function(_ptr) {
  return new $._IDBVersionChangeRequestEventsImpl(_ptr);
};

$.parse14 = function(json) {
  if ($.eqNullB(json)) return;
  var result = $.EventOrganizer$0();
  result.self = $.identity($.index(json, 'self'));
  result.displayName = $.identity($.index(json, 'displayName'));
  result.email = $.identity($.index(json, 'email'));
  return result;
};

$.gtB = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a > b) : $.gt$slow(a, b) === true;
};

$.setRuntimeTypeInfo = function(target, typeInfo) {
  if (!(target === (void 0))) target.builtin$typeInfo = typeInfo;
};

$.shl = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    a = (a);
    b = (b);
    if (b < 0) throw $.captureStackTrace($.IllegalArgumentException$1(b));
    if (b > 31) return 0;
    return (a << b) >>> 0;
  }
  return a.operator$shl$1(b);
};

$.serialize16 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'self', $.identity(value.get$self()));
  $.indexSet(result, 'displayName', $.identity(value.get$displayName()));
  $.indexSet(result, 'email', $.identity(value.get$email()));
  return result;
};

$.document = function() {
  return document;;
};

$._FileWriterEventsImpl$1 = function(_ptr) {
  return new $._FileWriterEventsImpl(_ptr);
};

$.FutureNotCompleteException$0 = function() {
  return new $.FutureNotCompleteException();
};

$.NoSuchMethodException$4 = function(_receiver, _functionName, _arguments, existingArgumentNames) {
  return new $.NoSuchMethodException(existingArgumentNames, _arguments, _functionName, _receiver);
};

$.indexOf = function(a, element, startIndex, endIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object' || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $.indexOf$bailout(1, a, element, startIndex, endIndex);
  if (typeof endIndex !== 'number') return $.indexOf$bailout(1, a, element, startIndex, endIndex);
  if ($.geB(startIndex, a.length)) return -1;
  if ($.ltB(startIndex, 0)) startIndex = 0;
  if (typeof startIndex !== 'number') return $.indexOf$bailout(2, a, element, startIndex, endIndex);
  for (var i = startIndex; i < endIndex; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    if ($.eqB(a[i], element)) return i;
  }
  return -1;
};

$.lt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a < b) : $.lt$slow(a, b);
};

$.unwrapException = function(ex) {
  if ("dartException" in ex) {
    return ex.dartException;
  }
  var message = (ex.message);
  if (ex instanceof TypeError) {
    var type = (ex.type);
    var name$ = (ex.arguments ? ex.arguments[0] : "");
    if ($.eqB(type, 'property_not_function') || $.eqB(type, 'called_non_callable') || $.eqB(type, 'non_object_property_call') || $.eqB(type, 'non_object_property_load')) {
      if (typeof name$ === 'string' && $.startsWith(name$, '$call$') === true) return $.ObjectNotClosureException$0();
      return $.NullPointerException$2((void 0), $.CTC0);
    }
    if ($.eqB(type, 'undefined_method')) {
      if (typeof name$ === 'string' && $.startsWith(name$, '$call$') === true) return $.ObjectNotClosureException$0();
      return $.NoSuchMethodException$4('', name$, [], (void 0));
    }
    if (typeof message === 'string') {
      if ($.endsWith(message, 'is null') === true || $.endsWith(message, 'is undefined') === true || $.endsWith(message, 'is null or undefined') === true) return $.NullPointerException$2((void 0), $.CTC0);
      if ($.endsWith(message, 'is not a function') === true) return $.NoSuchMethodException$4('', '<unknown>', [], (void 0));
    }
    return $.ExceptionImplementation$1(typeof message === 'string' ? message : '');
  }
  if (ex instanceof RangeError) {
    if (typeof message === 'string' && $.contains$1(message, 'call stack') === true) return $.StackOverflowException$0();
    return $.IllegalArgumentException$1('');
  }
  if (typeof InternalError == 'function' && ex instanceof InternalError) {
    if (typeof message === 'string' && message === 'too much recursion') return $.StackOverflowException$0();
  }
  return ex;
};

$.ceil = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.ceil$0();
  return Math.ceil(receiver);
};

$.getTypeNameOf = function(obj) {
  if ($._getTypeNameOf === (void 0)) $._getTypeNameOf = $.getFunctionForTypeNameOf();
  return $._getTypeNameOf.$call$1(obj);
};

$.merge = function(base, reference) {
  if ($.eqB(base, '')) return '/' + $.S(reference);
  return $.S($.substring$2(base, 0, $.add($.lastIndexOf$1(base, '/'), 1))) + $.S(reference);
};

$.serialize17 = function(value) {
  if ($.eqNullB(value)) return;
  var result = $.makeLiteralMap([]);
  $.indexSet(result, 'self', $.identity(value.get$self()));
  $.indexSet(result, 'displayName', $.identity(value.get$displayName()));
  $.indexSet(result, 'email', $.identity(value.get$email()));
  return result;
};

$.sub = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a - b) : $.sub$slow(a, b);
};

$.setRange$3 = function(receiver, start, length$, from) {
  if ($.isJsArray(receiver) === true) return $.setRange$4(receiver, start, length$, from, 0);
  return receiver.setRange$3(start, length$, from);
};

$.indexOf0$bailout = function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var a = env0;
      var element = env1;
      var startIndex = env2;
      var endIndex = env3;
      break;
    case 1:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
    case 2:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
      if ($.geB(startIndex, $.get$length(a))) return -1;
      if ($.ltB(startIndex, 0)) startIndex = 0;
    case 2:
      state = 0;
      for (var i = startIndex; $.ltB(i, endIndex); i = $.add(i, 1)) {
        if ($.eqB($.index(a, i), element)) return i;
      }
      return -1;
  }
};

$._dualPivotQuicksort$bailout = function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12, env13) {
  switch (state) {
    case 1:
      var a = env0;
      var left = env1;
      var right = env2;
      var compare = env3;
      break;
    case 2:
      a = env0;
      left = env1;
      right = env2;
      compare = env3;
      index5 = env4;
      el2 = env5;
      less = env6;
      el4 = env7;
      index1 = env8;
      break;
    case 3:
      a = env0;
      left = env1;
      right = env2;
      compare = env3;
      index5 = env4;
      el2 = env5;
      great = env6;
      less = env7;
      el4 = env8;
      index1 = env9;
      break;
    case 4:
      a = env0;
      less = env1;
      k = env2;
      compare = env3;
      left = env4;
      right = env5;
      great = env6;
      index1 = env7;
      index5 = env8;
      el2 = env9;
      t1 = env10;
      ak = env11;
      comp = env12;
      el4 = env13;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var sixth = $.tdiv($.add($.sub(right, left), 1), 6);
      var index1 = $.add(left, sixth);
      var index5 = $.sub(right, sixth);
      var index3 = $.tdiv($.add(left, right), 2);
      var index2 = $.sub(index3, sixth);
      var index4 = $.add(index3, sixth);
      var el1 = $.index(a, index1);
      var el2 = $.index(a, index2);
      var el3 = $.index(a, index3);
      var el4 = $.index(a, index4);
      var el5 = $.index(a, index5);
      if ($.gtB(compare.$call$2(el1, el2), 0)) {
        var t0 = el1;
        el1 = el2;
        el2 = t0;
      }
      if ($.gtB(compare.$call$2(el4, el5), 0)) {
        t0 = el5;
        el5 = el4;
        el4 = t0;
      }
      if ($.gtB(compare.$call$2(el1, el3), 0)) {
        t0 = el3;
        el3 = el1;
        el1 = t0;
      }
      if ($.gtB(compare.$call$2(el2, el3), 0)) {
        t0 = el3;
        el3 = el2;
        el2 = t0;
      }
      if ($.gtB(compare.$call$2(el1, el4), 0)) {
        t0 = el1;
        el1 = el4;
        el4 = t0;
      }
      if ($.gtB(compare.$call$2(el3, el4), 0)) {
        t0 = el3;
        el3 = el4;
        el4 = t0;
      }
      if ($.gtB(compare.$call$2(el2, el5), 0)) {
        t0 = el5;
        el5 = el2;
        el2 = t0;
      }
      if ($.gtB(compare.$call$2(el2, el3), 0)) {
        t0 = el3;
        el3 = el2;
        el2 = t0;
      }
      if ($.gtB(compare.$call$2(el4, el5), 0)) {
        t0 = el5;
        el5 = el4;
        el4 = t0;
      }
      $.indexSet(a, index1, el1);
      $.indexSet(a, index3, el3);
      $.indexSet(a, index5, el5);
      $.indexSet(a, index2, $.index(a, left));
      $.indexSet(a, index4, $.index(a, right));
      var less = $.add(left, 1);
    case 2:
      state = 0;
      var great = $.sub(right, 1);
    case 3:
      state = 0;
      var t1 = $.eq(compare.$call$2(el2, el4), 0) === true;
    case 4:
      if (state == 4 || (state == 0 && t1)) {
        switch (state) {
          case 0:
            var k = less;
          case 4:
            L0: while (true) {
              switch (state) {
                case 0:
                  if (!$.leB(k, great)) break L0;
                case 4:
                  c$0:{
                    switch (state) {
                      case 0:
                        var ak = $.index(a, k);
                        var comp = compare.$call$2(ak, el2);
                      case 4:
                        state = 0;
                        if ($.eqB(comp, 0)) break c$0;
                        if ($.ltB(comp, 0)) {
                          if (!$.eqB(k, less)) {
                            $.indexSet(a, k, $.index(a, less));
                            $.indexSet(a, less, ak);
                          }
                          less = $.add(less, 1);
                        } else {
                          for (; true; ) {
                            comp = compare.$call$2($.index(a, great), el2);
                            if ($.gtB(comp, 0)) {
                              great = $.sub(great, 1);
                              continue;
                            } else {
                              if ($.ltB(comp, 0)) {
                                $.indexSet(a, k, $.index(a, less));
                                var less0 = $.add(less, 1);
                                $.indexSet(a, less, $.index(a, great));
                                var great0 = $.sub(great, 1);
                                $.indexSet(a, great, ak);
                                great = great0;
                                less = less0;
                                break;
                              } else {
                                $.indexSet(a, k, $.index(a, great));
                                great0 = $.sub(great, 1);
                                $.indexSet(a, great, ak);
                                great = great0;
                                break;
                              }
                            }
                          }
                        }
                    }
                  }
                  k = $.add(k, 1);
              }
            }
        }
      } else {
        for (k = less; $.leB(k, great); k = $.add(k, 1)) {
          ak = $.index(a, k);
          if ($.ltB(compare.$call$2(ak, el2), 0)) {
            if (!$.eqB(k, less)) {
              $.indexSet(a, k, $.index(a, less));
              $.indexSet(a, less, ak);
            }
            less = $.add(less, 1);
          } else {
            if ($.gtB(compare.$call$2(ak, el4), 0)) {
              for (; true; ) {
                if ($.gtB(compare.$call$2($.index(a, great), el4), 0)) {
                  great = $.sub(great, 1);
                  if ($.ltB(great, k)) break;
                  continue;
                } else {
                  if ($.ltB(compare.$call$2($.index(a, great), el2), 0)) {
                    $.indexSet(a, k, $.index(a, less));
                    less0 = $.add(less, 1);
                    $.indexSet(a, less, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                    less = less0;
                  } else {
                    $.indexSet(a, k, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                  }
                  break;
                }
              }
            }
          }
        }
      }
      $.indexSet(a, left, $.index(a, $.sub(less, 1)));
      $.indexSet(a, $.sub(less, 1), el2);
      $.indexSet(a, right, $.index(a, $.add(great, 1)));
      $.indexSet(a, $.add(great, 1), el4);
      $._doSort(a, left, $.sub(less, 2), compare);
      $._doSort(a, $.add(great, 2), right, compare);
      if (t1) return;
      if ($.ltB(less, index1) && $.gtB(great, index5)) {
        for (; $.eqB(compare.$call$2($.index(a, less), el2), 0); ) {
          less = $.add(less, 1);
        }
        for (; $.eqB(compare.$call$2($.index(a, great), el4), 0); ) {
          great = $.sub(great, 1);
        }
        for (k = less; $.leB(k, great); k = $.add(k, 1)) {
          ak = $.index(a, k);
          if ($.eqB(compare.$call$2(ak, el2), 0)) {
            if (!$.eqB(k, less)) {
              $.indexSet(a, k, $.index(a, less));
              $.indexSet(a, less, ak);
            }
            less = $.add(less, 1);
          } else {
            if ($.eqB(compare.$call$2(ak, el4), 0)) {
              for (; true; ) {
                if ($.eqB(compare.$call$2($.index(a, great), el4), 0)) {
                  great = $.sub(great, 1);
                  if ($.ltB(great, k)) break;
                  continue;
                } else {
                  if ($.ltB(compare.$call$2($.index(a, great), el2), 0)) {
                    $.indexSet(a, k, $.index(a, less));
                    less0 = $.add(less, 1);
                    $.indexSet(a, less, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                    less = less0;
                  } else {
                    $.indexSet(a, k, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                  }
                  break;
                }
              }
            }
          }
        }
        $._doSort(a, less, great, compare);
      } else $._doSort(a, less, great, compare);
  }
};

$.indexOf$bailout = function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var a = env0;
      var element = env1;
      var startIndex = env2;
      var endIndex = env3;
      break;
    case 1:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
    case 2:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
      if ($.geB(startIndex, $.get$length(a))) return -1;
      if ($.ltB(startIndex, 0)) startIndex = 0;
    case 2:
      state = 0;
      for (var i = startIndex; $.ltB(i, endIndex); i = $.add(i, 1)) {
        if ($.eqB($.index(a, i), element)) return i;
      }
      return -1;
  }
};

$.allMatchesInStringUnchecked$bailout = function(state, needle, haystack, length$, patternLength, result) {
  for (var startIndex = 0; true; ) {
    var position = $.indexOf$2(haystack, needle, startIndex);
    if ($.eqB(position, -1)) break;
    result.push($.StringMatch$3(position, haystack, needle));
    var endIndex = $.add(position, patternLength);
    if ($.eqB(endIndex, length$)) break;
    else {
      startIndex = $.eqB(position, endIndex) ? $.add(startIndex, 1) : endIndex;
    }
  }
  return result;
};

$._addToEncoding$bailout = function(state, offset, bytes, value, buffer) {
  for (; $.gtB(bytes, 0); ) {
    var t1 = $.add(offset, bytes);
    var t2 = $.and(value, 63);
    if (typeof t2 !== 'number') throw $.iae(t2);
    $.indexSet(buffer, t1, (128 | t2) >>> 0);
    value = $.shr(value, 6);
    bytes = $.sub(bytes, 1);
  }
  return value;
};

$.copy$bailout = function(state, env0, env1, env2, env3, env4) {
  switch (state) {
    case 1:
      var src = env0;
      var srcStart = env1;
      var dst = env2;
      var dstStart = env3;
      var count = env4;
      break;
    case 1:
      src = env0;
      srcStart = env1;
      dst = env2;
      dstStart = env3;
      count = env4;
      break;
    case 1:
      src = env0;
      srcStart = env1;
      dst = env2;
      dstStart = env3;
      count = env4;
      break;
    case 2:
      src = env0;
      dst = env1;
      dstStart = env2;
      count = env3;
      srcStart = env4;
      break;
    case 3:
      src = env0;
      dst = env1;
      count = env2;
      srcStart = env3;
      dstStart = env4;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 1:
      state = 0;
      if (srcStart === (void 0)) srcStart = 0;
    case 2:
      state = 0;
      if (dstStart === (void 0)) dstStart = 0;
    case 3:
      state = 0;
      if ($.ltB(srcStart, dstStart)) {
        for (var i = $.sub($.add(srcStart, count), 1), j = $.sub($.add(dstStart, count), 1); $.geB(i, srcStart); i = $.sub(i, 1), j = $.sub(j, 1)) {
          $.indexSet(dst, j, $.index(src, i));
        }
      } else {
        for (i = srcStart, j = dstStart; $.ltB(i, $.add(srcStart, count)); i = $.add(i, 1), j = $.add(j, 1)) {
          $.indexSet(dst, j, $.index(src, i));
        }
      }
  }
};

$.insertionSort_$bailout = function(state, a, left, right, compare) {
  for (var i = $.add(left, 1); $.leB(i, right); i = $.add(i, 1)) {
    var el = $.index(a, i);
    var j = i;
    while (true) {
      if (!($.gtB(j, left) && $.gtB(compare.$call$2($.index(a, $.sub(j, 1)), el), 0))) break;
      $.indexSet(a, j, $.index(a, $.sub(j, 1)));
      j = $.sub(j, 1);
    }
    $.indexSet(a, j, el);
  }
};

$.buildDynamicMetadata$bailout = function(state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      var inputTable = env0;
      break;
    case 2:
      inputTable = env0;
      result = env1;
      tagNames = env2;
      tag = env3;
      i = env4;
      tags = env5;
      set = env6;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var result = [];
      var i = 0;
    case 2:
      L0: while (true) {
        switch (state) {
          case 0:
            if (!$.ltB(i, $.get$length(inputTable))) break L0;
            var tag = $.index($.index(inputTable, i), 0);
            var tags = $.index($.index(inputTable, i), 1);
            var set = $.HashSetImplementation$0();
            $.setRuntimeTypeInfo(set, ({E: 'String'}));
            var tagNames = $.split(tags, '|');
          case 2:
            state = 0;
            for (var j = 0; $.ltB(j, $.get$length(tagNames)); ++j) {
              set.add$1($.index(tagNames, j));
            }
            $.add$1(result, $.MetaInfo$3(tag, tags, set));
            ++i;
        }
      }
      return result;
  }
};

$._uriEncode$bailout = function(state, canonical, text) {
  var byteToHex = new $.Closure19('0123456789ABCDEF');
  var result = $.StringBufferImpl$1('');
  for (var i = 0; $.ltB(i, $.get$length(text)); ++i) {
    if ($.geB($.indexOf$1(canonical, $.index(text, i)), 0)) result.add$1($.index(text, i));
    else {
      var ch = $.charCodeAt(text, i);
      if ($.geB(ch, 55296) && $.ltB(ch, 56320)) {
        ++i;
        var nextCh = $.eqB($.get$length(text), i) ? 0 : $.charCodeAt(text, i);
        if ($.geB(nextCh, 56320) && $.ltB(nextCh, 57344)) {
          var t1 = $.shl($.sub(ch, 55296), 10);
          if (typeof t1 !== 'number') throw $.iae(t1);
          t1 += 65536;
          var t2 = $.sub(nextCh, 56320);
          if (typeof t2 !== 'number') throw $.iae(t2);
          ch = t1 + t2;
        } else throw $.captureStackTrace($.IllegalArgumentException$1('Malformed URI'));
      }
      for (t1 = $.iterator($.codepointsToUtf8([ch], 0, (void 0))); t1.hasNext$0() === true; ) {
        result.add$1(byteToHex.$call$1(t1.next$0()));
      }
    }
  }
  return result.toString$0();
};

$.getRange0$bailout = function(state, a, start, length$, accumulator) {
  if ($.ltB(length$, 0)) throw $.captureStackTrace($.IllegalArgumentException$1('length'));
  if ($.ltB(start, 0)) throw $.captureStackTrace($.IndexOutOfRangeException$1(start));
  var end = $.add(start, length$);
  if ($.gtB(end, $.get$length(a))) throw $.captureStackTrace($.IndexOutOfRangeException$1(end));
  for (var i = start; $.ltB(i, end); i = $.add(i, 1)) {
    $.add$1(accumulator, $.index(a, i));
  }
  return accumulator;
};

$.lastIndexOf0$bailout = function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var a = env0;
      var element = env1;
      var startIndex = env2;
      break;
    case 2:
      a = env0;
      element = env1;
      startIndex = env2;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      if ($.ltB(startIndex, 0)) return -1;
      if ($.geB(startIndex, $.get$length(a))) startIndex = $.sub($.get$length(a), 1);
    case 2:
      state = 0;
      for (var i = startIndex; $.geB(i, 0); i = $.sub(i, 1)) {
        if ($.eqB($.index(a, i), element)) return i;
      }
      return -1;
  }
};

$._toJsStringArray$bailout = function(state, strings) {
  $.checkNull(strings);
  var length$ = $.get$length(strings);
  if ($.isJsArray(strings) === true) {
    for (var i = 0; $.ltB(i, length$); ++i) {
      var string = $.index(strings, i);
      $.checkNull(string);
      if (!(typeof string === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(string));
    }
    var array = strings;
  } else {
    array = $.List(length$);
    for (i = 0; $.ltB(i, length$); ++i) {
      string = $.index(strings, i);
      $.checkNull(string);
      if (!(typeof string === 'string')) throw $.captureStackTrace($.IllegalArgumentException$1(string));
      var t1 = array.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      array[i] = string;
    }
  }
  return array;
};

$.lastIndexOf$bailout = function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var a = env0;
      var element = env1;
      var startIndex = env2;
      break;
    case 2:
      a = env0;
      element = env1;
      startIndex = env2;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      if ($.ltB(startIndex, 0)) return -1;
      if ($.geB(startIndex, $.get$length(a))) startIndex = $.sub($.get$length(a), 1);
    case 2:
      state = 0;
      for (var i = startIndex; $.geB(i, 0); i = $.sub(i, 1)) {
        if ($.eqB($.index(a, i), element)) return i;
      }
      return -1;
  }
};

$.serialize15.$call$1 = $.serialize15;
$.serialize15.$name = "serialize15";
$.identity.$call$1 = $.identity;
$.identity.$name = "identity";
$.parse9.$call$1 = $.parse9;
$.parse9.$name = "parse9";
$.parse10.$call$1 = $.parse10;
$.parse10.$name = "parse10";
$.parse4.$call$1 = $.parse4;
$.parse4.$name = "parse4";
$.parse5.$call$1 = $.parse5;
$.parse5.$name = "parse5";
$.throwNoSuchMethod.$call$3 = $.throwNoSuchMethod;
$.throwNoSuchMethod.$name = "throwNoSuchMethod";
$.parse2.$call$1 = $.parse2;
$.parse2.$name = "parse2";
$.typeNameInChrome.$call$1 = $.typeNameInChrome;
$.typeNameInChrome.$name = "typeNameInChrome";
$.parse12.$call$1 = $.parse12;
$.parse12.$name = "parse12";
$.serialize3.$call$1 = $.serialize3;
$.serialize3.$name = "serialize3";
$.serialize4.$call$1 = $.serialize4;
$.serialize4.$name = "serialize4";
$.parse3.$call$1 = $.parse3;
$.parse3.$name = "parse3";
$.serialize9.$call$1 = $.serialize9;
$.serialize9.$name = "serialize9";
$.dynamicBind.$call$4 = $.dynamicBind;
$.dynamicBind.$name = "dynamicBind";
$.serialize0.$call$1 = $.serialize0;
$.serialize0.$name = "serialize0";
$.typeNameInIE.$call$1 = $.typeNameInIE;
$.typeNameInIE.$name = "typeNameInIE";
$.parse15.$call$1 = $.parse15;
$.parse15.$name = "parse15";
$.serialize18.$call$1 = $.serialize18;
$.serialize18.$name = "serialize18";
$.serialize1.$call$1 = $.serialize1;
$.serialize1.$name = "serialize1";
$.serialize2.$call$1 = $.serialize2;
$.serialize2.$name = "serialize2";
$.constructorNameFallback.$call$1 = $.constructorNameFallback;
$.constructorNameFallback.$name = "constructorNameFallback";
$.parse7.$call$1 = $.parse7;
$.parse7.$name = "parse7";
$.typeNameInFirefox.$call$1 = $.typeNameInFirefox;
$.typeNameInFirefox.$name = "typeNameInFirefox";
$.serialize6.$call$1 = $.serialize6;
$.serialize6.$name = "serialize6";
$.invokeClosure.$call$5 = $.invokeClosure;
$.invokeClosure.$name = "invokeClosure";
$.toStringWrapper.$call$0 = $.toStringWrapper;
$.toStringWrapper.$name = "toStringWrapper";
$.serialize8.$call$1 = $.serialize8;
$.serialize8.$name = "serialize8";
Isolate.$finishClasses($$);
$$ = {};
Isolate.makeConstantList = function(list) {
  list.immutable$list = true;
  list.fixed$length = true;
  return list;
};
$.CTC0 = Isolate.makeConstantList([]);
$.CTC2 = new Isolate.$isolateProperties.UnsupportedOperationException('');
$.CTC4 = new Isolate.$isolateProperties.NotImplementedException((void 0));
$.CTC13 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '([+-])(\\d\\d):(\\d\\d)$');
$.CTC8 = new Isolate.$isolateProperties.ConstantMap(Isolate.$isolateProperties.CTC0, {}, 0);
$.CTC14 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^([+-]?\\d?\\d\\d\\d\\d)-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(.\\d{1,6})?)?)? ?([zZ])?)?$');
$.CTC6 = new Isolate.$isolateProperties._DeletedKeySentinel();
$.CTC10 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$');
$.CTC15 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, 'Chrome|DumpRenderTree');
$.CTC16 = new Isolate.$isolateProperties.Object();
$.CTC12 = new Isolate.$isolateProperties.UnsupportedOperationException('TODO(jacobr): should we impl?');
$.CTC3 = new Isolate.$isolateProperties.IllegalArgumentException('Invalid list length');
$.CTC9 = new Isolate.$isolateProperties.IllegalAccessException();
$.CTC = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^#[_a-zA-Z]\\w*$');
$.CTC7 = new Isolate.$isolateProperties.JsonUnsupportedObjectType();
$.CTC11 = new Isolate.$isolateProperties._Unspecified();
$.CTC1 = new Isolate.$isolateProperties.NoMoreElementsException();
$.CTC5 = new Isolate.$isolateProperties.EmptyQueueException();
$._getTypeNameOf = (void 0);
$._cachedBrowserPrefix = (void 0);
$.tokens = (void 0);
$._cnt = 0;
$.calApi = (void 0);
var $ = null;
Isolate.$finishClasses($$);
$$ = {};
Isolate = Isolate.$finishIsolateConstructor(Isolate);
var $ = new Isolate();
$.$defineNativeClass = function(cls, fields, methods) {
  var generateGetterSetter = function(field, prototype) {
  var len = field.length;
  var lastChar = field[len - 1];
  var needsGetter = lastChar == '?' || lastChar == '=';
  var needsSetter = lastChar == '!' || lastChar == '=';
  if (needsGetter || needsSetter) field = field.substring(0, len - 1);
  if (needsGetter) {
    var getterString = "return this." + field + ";";
    prototype["get$" + field] = new Function(getterString);
  }
  if (needsSetter) {
    var setterString = "this." + field + " = v;";
    prototype["set$" + field] = new Function("v", setterString);
  }
  return field;
};
  for (var i = 0; i < fields.length; i++) {
    generateGetterSetter(fields[i], methods);
  }
  for (var method in methods) {
    $.dynamicFunction(method)[cls] = methods[method];
  }
};
$.defineProperty(Object.prototype, 'is$JavaScriptIndexingBehavior', function() { return false; });
$.defineProperty(Object.prototype, 'is$Collection', function() { return false; });
$.defineProperty(Object.prototype, 'is$List0', function() { return false; });
$.defineProperty(Object.prototype, 'is$Map', function() { return false; });
$.defineProperty(Object.prototype, 'is$Location', function() { return false; });
$.defineProperty(Object.prototype, 'is$Element', function() { return false; });
$.defineProperty(Object.prototype, 'toString$0', function() { return $.toStringForNativeObject(this); });
$.$defineNativeClass('AbstractWorker', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._AbstractWorkerEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('HTMLAnchorElement', ["type?", "port?", "origin?", "name?"], {
 toString$0: function() {
  return this.toString();
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('WebKitAnimation', ["name?"], {
});

$.$defineNativeClass('WebKitAnimationList', ["length?"], {
});

$.$defineNativeClass('HTMLAppletElement', ["width=", "name?", "height=", "alt?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLAreaElement', ["port?", "alt?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Attr', ["value=", "name?"], {
});

$.$defineNativeClass('AudioBuffer', ["length?"], {
});

$.$defineNativeClass('AudioContext', [], {
 get$on: function() {
  return $._AudioContextEventsImpl$1(this);
 }
});

$.$defineNativeClass('HTMLAudioElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('AudioParam', ["value=", "name?"], {
});

$.$defineNativeClass('HTMLBRElement', [], {
 clear$0: function() { return this.clear.$call$0(); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLBaseElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLBaseFontElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('BatteryManager', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._BatteryManagerEventsImpl$1(this);
 }
});

$.$defineNativeClass('BiquadFilterNode', ["type?"], {
});

$.$defineNativeClass('Blob', ["type?"], {
});

$.$defineNativeClass('HTMLBodyElement', ["link?"], {
 get$on: function() {
  return $._BodyElementEventsImpl$1(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLButtonElement', ["value=", "type?", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('CSSFontFaceRule', ["style?"], {
});

$.$defineNativeClass('WebKitCSSKeyframeRule', ["style?"], {
});

$.$defineNativeClass('WebKitCSSKeyframesRule', ["name?"], {
});

$.$defineNativeClass('WebKitCSSMatrix', [], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('CSSPageRule', ["style?"], {
});

$.$defineNativeClass('CSSRule', ["type?"], {
});

$.$defineNativeClass('CSSRuleList', ["length?"], {
});

$.$defineNativeClass('CSSStyleDeclaration', ["length?"], {
 set$width: function(value) {
  this.setProperty$3('width', value, '');
 },
 get$width: function() {
  return this.getPropertyValue$1('width');
 },
 get$visibility: function() {
  return this.getPropertyValue$1('visibility');
 },
 get$transform: function() {
  return this.getPropertyValue$1($.S($._browserPrefix()) + 'transform');
 },
 transform$1: function(arg0) { return this.get$transform().$call$1(arg0); },
 set$top: function(value) {
  this.setProperty$3('top', value, '');
 },
 set$src: function(value) {
  this.setProperty$3('src', value, '');
 },
 set$position: function(value) {
  this.setProperty$3('position', value, '');
 },
 set$left: function(value) {
  this.setProperty$3('left', value, '');
 },
 set$height: function(value) {
  this.setProperty$3('height', value, '');
 },
 get$height: function() {
  return this.getPropertyValue$1('height');
 },
 get$filter: function() {
  return this.getPropertyValue$1($.S($._browserPrefix()) + 'filter');
 },
 filter$1: function(arg0) { return this.get$filter().$call$1(arg0); },
 set$display: function(value) {
  this.setProperty$3('display', value, '');
 },
 get$display: function() {
  return this.getPropertyValue$1('display');
 },
 get$clear: function() {
  return this.getPropertyValue$1('clear');
 },
 clear$0: function() { return this.get$clear().$call$0(); },
 setProperty$3: function(propertyName, value, priority) {
  return this.setProperty(propertyName,value,priority);
 },
 getPropertyValue$1: function(propertyName) {
  return this.getPropertyValue(propertyName);
 }
});

$.$defineNativeClass('CSSStyleRule', ["style?"], {
});

$.$defineNativeClass('CSSValueList', ["length?"], {
});

$.$defineNativeClass('HTMLCanvasElement', ["width=", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('CharacterData', ["length?", "data?"], {
});

$.$defineNativeClass('ClientRect', ["width?", "height?"], {
});

$.$defineNativeClass('ClientRectList', ["length?"], {
});

$.$defineNativeClass('Clipboard', ["items?"], {
});

$.$defineNativeClass('CloseEvent', ["reason?"], {
});

$.$defineNativeClass('CompositionEvent', ["data?"], {
});

_ConsoleImpl = (typeof console == 'undefined' ? {} : console);
_ConsoleImpl.group$1 = function(arg) {
  return this.group(arg);
 };
_ConsoleImpl.error$1 = function(arg) {
  return this.error(arg);
 };
_ConsoleImpl.get$error = function() { return new $.Closure72(this, 'error$1'); };
$.$defineNativeClass('HTMLContentElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDListElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('DOMApplicationCache', ["status?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._DOMApplicationCacheEventsImpl$1(this);
 }
});

$.$defineNativeClass('DOMError', ["name?"], {
});

$.$defineNativeClass('DOMException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('DOMFileSystem', ["name?"], {
});

$.$defineNativeClass('DOMFileSystemSync', ["name?"], {
});

$.$defineNativeClass('DOMMimeType', ["type?", "description?"], {
});

$.$defineNativeClass('DOMMimeTypeArray', ["length?"], {
});

$.$defineNativeClass('DOMPlugin', ["name?", "length?", "description?"], {
});

$.$defineNativeClass('DOMPluginArray', ["length?"], {
});

$.$defineNativeClass('DOMSelection', ["type?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('DOMSettableTokenList', ["value="], {
});

$.$defineNativeClass('DOMStringList', ["length?"], {
 contains$1: function(string) {
  return this.contains(string);
 },
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'String'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('DOMTokenList', ["length?"], {
 toString$0: function() {
  return this.toString();
 },
 remove$1: function(token) {
  return this.remove(token);
 },
 contains$1: function(token) {
  return this.contains(token);
 },
 add$1: function(token) {
  return this.add(token);
 }
});

$.$defineNativeClass('DataTransferItem', ["type?", "kind?"], {
});

$.$defineNativeClass('DataTransferItemList', ["length?"], {
 clear$0: function() {
  return this.clear();
 },
 add$2: function(data_OR_file, type) {
  return this.add(data_OR_file,type);
 },
 add$1: function(data_OR_file) {
  return this.add(data_OR_file);
}
});

$.$defineNativeClass('DedicatedWorkerContext', [], {
 get$on: function() {
  return $._DedicatedWorkerContextEventsImpl$1(this);
 }
});

$.$defineNativeClass('DeprecatedPeerConnection', [], {
 send$1: function(text) {
  return this.send(text);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._DeprecatedPeerConnectionEventsImpl$1(this);
 }
});

$.$defineNativeClass('HTMLDetailsElement', [], {
 open$3: function(arg0, arg1, arg2) { return this.open.$call$3(arg0, arg1, arg2); },
 open$5: function(arg0, arg1, arg2, arg3, arg4) { return this.open.$call$5(arg0, arg1, arg2, arg3, arg4); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDirectoryElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDivElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDocument', ["title?", "domain?", "body?"], {
 query$1: function(selectors) {
  if ($.CTC.hasMatch$1(selectors) === true) return this.$dom_getElementById$1($.substring$1(selectors, 1));
  return this.$dom_querySelector$1(selectors);
 },
 get$query: function() { return new $.Closure72(this, 'query$1'); },
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
 },
 $dom_getElementById$1: function(elementId) {
  return this.getElementById(elementId);
 },
 $dom_createElement$1: function(tagName) {
  return this.createElement(tagName);
 },
 get$on: function() {
  return $._DocumentEventsImpl$1(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('DocumentFragment', [], {
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
 },
 get$on: function() {
  return $._ElementEventsImpl$1(this);
 },
 click$0: function() {
 },
 get$click: function() { return new $.Closure70(this, 'click$0'); },
 get$style: function() {
  return $.Element$tag('div').get$style();
 },
 get$classes: function() {
  var t1 = $.HashSetImplementation$0();
  $.setRuntimeTypeInfo(t1, ({E: 'String'}));
  return t1;
 },
 get$attributes: function() {
  return $.CTC8;
 },
 get$parent: function() {
  return;
 },
 get$$$dom_lastElementChild: function() {
  return $.last(this.get$elements());
 },
 get$$$dom_firstElementChild: function() {
  return this.get$elements().first$0();
 },
 get$title: function() {
  return '';
 },
 get$id: function() {
  return '';
 },
 get$hidden: function() {
  return false;
 },
 insertAdjacentText$2: function(where, text) {
  this._insertAdjacentNode$2(where, $.Text(text));
 },
 _insertAdjacentNode$2: function(where, node) {
  switch ($.toLowerCase(where)) {
    case 'beforebegin':
      return;
    case 'afterend':
      return;
    case 'afterbegin':
      this.insertBefore$2(node, this.get$nodes().get$first());
      return node;
    case 'beforeend':
      $.add$1(this.get$nodes(), node);
      return node;
    default:
      throw $.captureStackTrace($.IllegalArgumentException$1('Invalid position ' + $.S(where)));
  }
 },
 query$1: function(selectors) {
  return this.$dom_querySelector$1(selectors);
 },
 get$query: function() { return new $.Closure72(this, 'query$1'); },
 get$elements: function() {
  if ($.eqNullB(this._elements)) this._elements = $.FilteredElementList$1(this);
  return this._elements;
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('DocumentType', ["name?"], {
});

$.$defineNativeClass('Element', ["style?", "title?", "id?", "hidden?"], {
 $dom_setAttribute$2: function(name, value) {
  return this.setAttribute(name,value);
 },
 $dom_removeAttribute$1: function(name) {
  return this.removeAttribute(name);
 },
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
 },
 $dom_hasAttribute$1: function(name) {
  return this.hasAttribute(name);
 },
 $dom_getAttribute$1: function(name) {
  return this.getAttribute(name);
 },
 get$$$dom_lastElementChild: function() {
  return this.lastElementChild;;
 },
 get$$$dom_firstElementChild: function() {
  return this.firstElementChild;;
 },
 insertAdjacentText$2: function(where, text) {
  return this.insertAdjacentText(where,text);
 },
 click$0: function() {
  return this.click();
 },
 get$click: function() { return new $.Closure70(this, 'click$0'); },
 set$$$dom_className: function(value) {
  this.className = value;;
 },
 get$$$dom_className: function() {
  return this.className;;
 },
 get$$$dom_children: function() {
  return this.children;;
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._ElementEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 },
 get$classes: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$classes')) {
    return $._CssClassSet$1(this);
  } else {
    return Object.prototype.get$classes.call(this);
  }
 },
 query$1: function(selectors) {
  return this.$dom_querySelector$1(selectors);
 },
 get$query: function() { return new $.Closure72(this, 'query$1'); },
 get$elements: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$elements')) {
    return $._ChildrenElementList$_wrap$1(this);
  } else {
    return Object.prototype.get$elements.call(this);
  }
 },
 get$attributes: function() {
  return $._ElementAttributeMap$1(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLEmbedElement', ["width=", "type?", "src!", "name?", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Entry', ["name?"], {
 remove$2: function(successCallback, errorCallback) {
  return this.remove($.convertDartClosureToJS(successCallback, 0),$.convertDartClosureToJS(errorCallback, 1));
 },
 remove$1: function(successCallback) {
  successCallback = $.convertDartClosureToJS(successCallback, 0);
  return this.remove(successCallback);
}
});

$.$defineNativeClass('EntryArray', ["length?"], {
});

$.$defineNativeClass('EntryArraySync', ["length?"], {
});

$.$defineNativeClass('EntrySync', ["name?"], {
 remove$0: function() {
  return this.remove();
 }
});

$.$defineNativeClass('ErrorEvent', ["message?"], {
});

$.$defineNativeClass('Event', ["type?"], {
});

$.$defineNativeClass('EventException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('EventSource', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._EventSourceEventsImpl$1(this);
 }
});

$.$defineNativeClass('EventTarget', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
    return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._EventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('HTMLFieldSetElement', ["type?", "name?", "lib$_FieldSetElementImpl$elements?"], {
 get$elements: function() {
  return this.lib$_FieldSetElementImpl$elements;
 },
 set$elements: function(x) {
  this.lib$_FieldSetElementImpl$elements = x;
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('File', ["name?"], {
});

$.$defineNativeClass('FileException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('FileList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'File'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('FileReader', ["error?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._FileReaderEventsImpl$1(this);
 }
});

$.$defineNativeClass('FileWriter', ["length?", "error?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._FileWriterEventsImpl$1(this);
 }
});

$.$defineNativeClass('FileWriterSync', ["length?"], {
});

$.$defineNativeClass('Float32Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'num'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Float64Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'num'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLFontElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFormElement', ["name?", "method?", "length?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFrameElement', ["width?", "src!", "name?", "location?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFrameSetElement', [], {
 get$on: function() {
  return $._FrameSetElementEventsImpl$1(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLHRElement', ["width="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLAllCollection', ["length?"], {
});

$.$defineNativeClass('HTMLCollection', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Node'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLOptionsCollection', [], {
 remove$1: function(index) {
  return this.remove(index);
 },
 set$length: function(value) {
  this.length = value;;
 },
 get$length: function() {
  return this.length;;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLHeadElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLHeadingElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('History', ["length?"], {
});

$.$defineNativeClass('HTMLHtmlElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('IDBCursor', ["key?"], {
});

$.$defineNativeClass('IDBCursorWithValue', ["value?"], {
});

$.$defineNativeClass('IDBDatabase', ["name?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._IDBDatabaseEventsImpl$1(this);
 }
});

$.$defineNativeClass('IDBDatabaseException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('IDBIndex', ["name?"], {
});

$.$defineNativeClass('IDBObjectStore', ["name?"], {
 clear$0: function() {
  return this.clear();
 },
 add$2: function(value, key) {
  return this.add(value,key);
 },
 add$1: function(value) {
  return this.add(value);
}
});

$.$defineNativeClass('IDBRequest', ["error?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
    return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._IDBRequestEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('IDBTransaction', ["error?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._IDBTransactionEventsImpl$1(this);
 }
});

$.$defineNativeClass('IDBVersionChangeRequest', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._IDBVersionChangeRequestEventsImpl$1(this);
 }
});

$.$defineNativeClass('HTMLIFrameElement', ["width=", "src!", "name?", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ImageData', ["width?", "height?", "data?"], {
});

$.$defineNativeClass('HTMLImageElement', ["width=", "src!", "name?", "height=", "alt?"], {
 complete$1: function(arg0) { return this.complete.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLInputElement', ["width=", "value=", "type?", "src!", "pattern?", "name?", "height=", "alt?"], {
 get$on: function() {
  return $._InputElementEventsImpl$1(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('Int16Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Int32Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Int8Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('JavaScriptAudioNode', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._JavaScriptAudioNodeEventsImpl$1(this);
 }
});

$.$defineNativeClass('JavaScriptCallFrame', ["type?"], {
});

$.$defineNativeClass('HTMLKeygenElement', ["type?", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLIElement', ["value=", "type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLabelElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLegendElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLinkElement', ["type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('LocalMediaStream', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 }
});

$.$defineNativeClass('Location', ["port?", "origin?"], {
 toString$0: function() {
  return this.toString();
 },
 is$Location: function() { return true; }
});

$.$defineNativeClass('HTMLMapElement', ["name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLMarqueeElement', ["width=", "height="], {
 start$0: function() {
  return this.start();
 },
 get$start: function() { return new $.Closure70(this, 'start$0'); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('MediaController', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 }
});

$.$defineNativeClass('HTMLMediaElement', ["src!", "error?"], {
 load$0: function() {
  return this.load();
 },
 get$load: function() { return new $.Closure70(this, 'load$0'); },
 get$on: function() {
  return $._MediaElementEventsImpl$1(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('MediaKeyEvent', ["message?"], {
});

$.$defineNativeClass('MediaList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'String'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('MediaStream', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
    return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 },
 get$on: function() {
  return $._MediaStreamEventsImpl$1(this);
 }
});

$.$defineNativeClass('MediaStreamList', ["length?"], {
});

$.$defineNativeClass('MediaStreamTrack', ["kind?"], {
});

$.$defineNativeClass('MediaStreamTrackList', ["length?"], {
});

$.$defineNativeClass('HTMLMenuElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('MessageEvent', ["origin?", "data?"], {
});

$.$defineNativeClass('MessagePort', [], {
 start$0: function() {
  return this.start();
 },
 get$start: function() { return new $.Closure70(this, 'start$0'); },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._MessagePortEventsImpl$1(this);
 }
});

$.$defineNativeClass('HTMLMetaElement', ["scheme?", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLMeterElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLModElement', ["dateTime?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('MutationRecord', ["type?"], {
});

$.$defineNativeClass('NamedNodeMap', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Node'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Navigator', ["userAgent?"], {
});

$.$defineNativeClass('Node', [], {
 $dom_replaceChild$2: function(newChild, oldChild) {
  return this.replaceChild(newChild,oldChild);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_removeChild$1: function(oldChild) {
  return this.removeChild(oldChild);
 },
 insertBefore$2: function(newChild, refChild) {
  return this.insertBefore(newChild,refChild);
 },
 contains$1: function(other) {
  return this.contains(other);
 },
 $dom_appendChild$1: function(newChild) {
  return this.appendChild(newChild);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 set$text: function(value) {
  this.textContent = value;;
 },
 get$parent: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$parent')) {
    return this.parentNode;;
  } else {
    return Object.prototype.get$parent.call(this);
  }
 },
 get$$$dom_childNodes: function() {
  return this.childNodes;;
 },
 get$$$dom_attributes: function() {
  return this.attributes;;
 },
 replaceWith$1: function(otherNode) {
  try {
    var parent$ = this.get$parent();
    parent$.$dom_replaceChild$2(otherNode, this);
  } catch (exception) {
    $.unwrapException(exception);
  }
  return this;
 },
 remove$0: function() {
  !$.eqNullB(this.get$parent()) && this.get$parent().$dom_removeChild$1(this);
  return this;
 },
 get$nodes: function() {
  return $._ChildNodeListLazy$1(this);
 }
});

$.$defineNativeClass('NodeIterator', [], {
 filter$1: function(arg0) { return this.filter.$call$1(arg0); }
});

$.$defineNativeClass('NodeList', ["length?"], {
 operator$index$1: function(index) {
  return this[index];;
 },
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$1($.getRange0(this, start, rangeLength, []));
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 get$first: function() {
  return this.operator$index$1(0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,0)
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._NodeListWrapper$1($.filter1(this, [], f));
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 operator$indexSet$2: function(index, value) {
  this._parent.$dom_replaceChild$2(value, this.operator$index$1(index));
 },
 clear$0: function() {
  this._parent.set$text('');
 },
 removeLast$0: function() {
  var result = this.last$0();
  !$.eqNullB(result) && this._parent.$dom_removeChild$1(result);
  return result;
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection), t2 = this._parent; t1.hasNext$0() === true; ) {
    t2.$dom_appendChild$1(t1.next$0());
  }
 },
 addLast$1: function(value) {
  this._parent.$dom_appendChild$1(value);
 },
 add$1: function(value) {
  this._parent.$dom_appendChild$1(value);
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Node'}));
  return t1;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Notification', ["tag?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._NotificationEventsImpl$1(this);
 }
});

$.$defineNativeClass('HTMLOListElement', ["type?", "start?"], {
 start$0: function() { return this.start.$call$0(); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLObjectElement', ["width=", "type?", "name?", "height=", "data?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLOptGroupElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLOptionElement', ["value=", "selected?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Oscillator', ["type?"], {
});

$.$defineNativeClass('HTMLOutputElement', ["value=", "type?", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLParagraphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLParamElement', ["value=", "type?", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('PeerConnection00', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._PeerConnection00EventsImpl$1(this);
 }
});

$.$defineNativeClass('PerformanceNavigation', ["type?"], {
});

$.$defineNativeClass('PositionError', ["message?"], {
});

$.$defineNativeClass('HTMLPreElement', ["width="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ProcessingInstruction', ["data?"], {
});

$.$defineNativeClass('HTMLProgressElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLQuoteElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('RadioNodeList', ["value="], {
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Range', [], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('RangeException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('SQLError', ["message?"], {
});

$.$defineNativeClass('SQLException', ["message?"], {
});

$.$defineNativeClass('SQLResultSetRowList', ["length?"], {
});

$.$defineNativeClass('SVGAElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphDefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphItemElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAngle', ["value="], {
});

$.$defineNativeClass('SVGAnimateColorElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateMotionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateTransformElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimationElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGCircleElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGClipPathElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGComponentTransferFunctionElement', ["type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGCursorElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDefsElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDescElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDocument', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGElement', [], {
 get$id: function() {
  return this.id;;
 },
 get$elements: function() {
  return $.FilteredElementList$1(this);
 },
 get$classes: function() {
  this.get$_cssClassSet() === (void 0) && this.set$_cssClassSet($._AttributeClassSet$1(this.get$_ptr()));
  return this.get$_cssClassSet();
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGElementInstance', [], {
 get$on: function() {
  return $._SVGElementInstanceEventsImpl$1(this);
 }
});

$.$defineNativeClass('SVGElementInstanceList', ["length?"], {
});

$.$defineNativeClass('SVGEllipseElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('SVGFEBlendElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEColorMatrixElement', ["width?", "height?", "type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEComponentTransferElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFECompositeElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEConvolveMatrixElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDiffuseLightingElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDisplacementMapElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDistantLightElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDropShadowElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFloodElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncAElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncBElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncGElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncRElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEGaussianBlurElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEImageElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMergeElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMergeNodeElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMorphologyElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEOffsetElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEPointLightElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFESpecularLightingElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFESpotLightElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFETileElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFETurbulenceElement', ["width?", "height?", "type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFilterElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceFormatElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceNameElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceSrcElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceUriElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGForeignObjectElement', ["width?", "height?"], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGlyphRefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGHKernElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGImageElement', ["width?", "height?"], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGLength', ["value="], {
});

$.$defineNativeClass('SVGLengthList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGLineElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGLinearGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMPathElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMarkerElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMaskElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMetadataElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMissingGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGNumber', ["value="], {
});

$.$defineNativeClass('SVGNumberList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGPathElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPathSegList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGPatternElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPointList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGPolygonElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPolylineElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGRadialGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGRect', ["width=", "height="], {
});

$.$defineNativeClass('SVGRectElement', ["width?", "height?"], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSVGElement', ["width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGScriptElement', ["type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSetElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGStopElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGStringList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGStyleElement', ["type?"], {
 get$title: function() {
  return this.title;;
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSwitchElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSymbolElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTRefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTSpanElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextContentElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextElement', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextPathElement', ["method?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextPositioningElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTitleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTransform', ["type?"], {
});

$.$defineNativeClass('SVGTransformList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGUseElement', ["width?", "height?"], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGVKernElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGViewElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGViewSpec', [], {
 transform$1: function(arg0) { return this.transform.$call$1(arg0); }
});

$.$defineNativeClass('Screen', ["width?", "height?"], {
});

$.$defineNativeClass('HTMLScriptElement', ["type?", "src!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ScriptProfile', ["title?"], {
});

$.$defineNativeClass('HTMLSelectElement', ["value=", "type?", "name?", "length="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLShadowElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ShadowRoot', [], {
 get$innerHTML: function() {
  return this.lib$_ShadowRootImpl$innerHTML;
 },
 set$innerHTML: function(x) {
  this.lib$_ShadowRootImpl$innerHTML = x;
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SharedWorker', ["port?"], {
});

$.$defineNativeClass('SharedWorkerContext', ["name?"], {
 get$on: function() {
  return $._SharedWorkerContextEventsImpl$1(this);
 }
});

$.$defineNativeClass('HTMLSourceElement', ["type?", "src!"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLSpanElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SpeechGrammar', ["src!"], {
});

$.$defineNativeClass('SpeechGrammarList', ["length?"], {
});

$.$defineNativeClass('SpeechInputResultList', ["length?"], {
});

$.$defineNativeClass('SpeechRecognition', [], {
 start$0: function() {
  return this.start();
 },
 get$start: function() { return new $.Closure70(this, 'start$0'); },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._SpeechRecognitionEventsImpl$1(this);
 }
});

$.$defineNativeClass('SpeechRecognitionError', ["message?"], {
});

$.$defineNativeClass('SpeechRecognitionResult', ["length?"], {
});

$.$defineNativeClass('SpeechRecognitionResultList', ["length?"], {
});

$.$defineNativeClass('Storage', [], {
 $dom_setItem$2: function(key, data) {
  return this.setItem(key,data);
 },
 $dom_removeItem$1: function(key) {
  return this.removeItem(key);
 },
 $dom_key$1: function(index) {
  return this.key(index);
 },
 $dom_getItem$1: function(key) {
  return this.getItem(key);
 },
 $dom_clear$0: function() {
  return this.clear();
 },
 get$$$dom_length: function() {
  return this.length;;
 },
 isEmpty$0: function() {
  return $.eqNull(this.$dom_key$1(0));
 },
 get$length: function() {
  return this.get$$$dom_length();
 },
 forEach$1: function(f) {
  for (var i = 0; true; ++i) {
    var key = this.$dom_key$1(i);
    if ($.eqNullB(key)) return;
    f.$call$2(key, this.operator$index$1(key));
  }
 },
 clear$0: function() {
  return this.$dom_clear$0();
 },
 remove$1: function(key) {
  var value = this.operator$index$1(key);
  this.$dom_removeItem$1(key);
  return value;
 },
 operator$indexSet$2: function(key, value) {
  return this.$dom_setItem$2(key, value);
 },
 operator$index$1: function(key) {
  return this.$dom_getItem$1(key);
 },
 containsKey$1: function(key) {
  return !$.eqNullB(this.$dom_getItem$1(key));
 },
 is$Map: function() { return true; }
});

$.$defineNativeClass('StorageEvent', ["key?"], {
});

$.$defineNativeClass('HTMLStyleElement', ["type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('StyleMedia', ["type?"], {
});

$.$defineNativeClass('StyleSheet', ["type?", "title?"], {
});

$.$defineNativeClass('StyleSheetList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'StyleSheet'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTableCaptionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableCellElement', ["width=", "height=", "headers?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableColElement', ["width="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableElement', ["width=", "summary?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableRowElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableSectionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTextAreaElement', ["value=", "type?", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TextEvent', ["data?"], {
});

$.$defineNativeClass('TextMetrics', ["width?"], {
});

$.$defineNativeClass('TextTrack', ["kind?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._TextTrackEventsImpl$1(this);
 }
});

$.$defineNativeClass('TextTrackCue', ["text!", "position!", "id?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._TextTrackCueEventsImpl$1(this);
 }
});

$.$defineNativeClass('TextTrackCueList', ["length?"], {
});

$.$defineNativeClass('TextTrackList', ["length?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._TextTrackListEventsImpl$1(this);
 }
});

$.$defineNativeClass('TimeRanges', ["length?"], {
 start$1: function(index) {
  return this.start(index);
 },
 get$start: function() { return new $.Closure72(this, 'start$1'); },
 end$1: function(index) {
  return this.end(index);
 },
 get$end: function() { return new $.Closure72(this, 'end$1'); }
});

$.$defineNativeClass('HTMLTitleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TouchList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Touch'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTrackElement', ["src!", "kind?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TreeWalker', [], {
 filter$1: function(arg0) { return this.filter.$call$1(arg0); }
});

$.$defineNativeClass('HTMLUListElement', ["type?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Uint16Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Uint32Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Uint8Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $.getRange0(this, start, rangeLength, []);
 },
 setRange$4: function(start, rangeLength, from, startFrom) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot setRange on immutable List.'));
 },
 setRange$3: function(start,rangeLength,from) {
  return this.setRange$4(start,rangeLength,from,(void 0))
},
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 lastIndexOf$2: function(element, start) {
  if (start === (void 0)) start = $.sub($.get$length(this), 1);
  return $.lastIndexOf0(this, element, start);
 },
 lastIndexOf$1: function(element) {
  return this.lastIndexOf$2(element,(void 0))
},
 indexOf$2: function(element, start) {
  return $.indexOf0(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $.filter1(this, [], f);
 },
 forEach$1: function(f) {
  return $.forEach1(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$1('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$1(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Uint8ClampedArray', [], {
 is$List0: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLUnknownElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLVideoElement', ["width=", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('WebGLActiveInfo', ["type?", "name?"], {
});

$.$defineNativeClass('WebKitNamedFlow', ["name?"], {
});

$.$defineNativeClass('WebSocket', [], {
 send$1: function(data) {
  return this.send(data);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._WebSocketEventsImpl$1(this);
 }
});

$.$defineNativeClass('DOMWindow', ["status?", "self?", "screen?", "navigator?", "name?", "localStorage?", "length?", "closed?"], {
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 open$3: function(url, name, options) {
  return this.open(url,name,options);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._WindowEventsImpl$1(this);
 },
 get$_location: function() {
  return this.location;
 },
 _get_location$0: function() {
  var result = this.get$_location();
  if ($._isDartLocation(result) === true) return result;
  if ((void 0) === this._location_wrapper) this._location_wrapper = $._LocationWrapper$1(result);
  return this._location_wrapper;
 },
 get$location: function() {
  return this._get_location$0();
 }
});

$.$defineNativeClass('Worker', [], {
 get$on: function() {
  return $._WorkerEventsImpl$1(this);
 }
});

$.$defineNativeClass('WorkerContext', ["self?", "navigator?", "location?"], {
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._WorkerContextEventsImpl$1(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('WorkerLocation', ["port?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('WorkerNavigator', ["userAgent?"], {
});

$.$defineNativeClass('XMLHttpRequest', ["status?", "responseText?"], {
 setRequestHeader$2: function(header, value) {
  return this.setRequestHeader(header,value);
 },
 get$setRequestHeader: function() { return new $.Closure73(this, 'setRequestHeader$2'); },
 send$1: function(data) {
  return this.send(data);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 open$5: function(method, url, async, user, password) {
  return this.open(method,url,async,user,password);
 },
 open$3: function(method,url,async) {
  return this.open(method,url,async);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._XMLHttpRequestEventsImpl$1(this);
 }
});

$.$defineNativeClass('XMLHttpRequestException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('XMLHttpRequestUpload', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._XMLHttpRequestUploadEventsImpl$1(this);
 }
});

$.$defineNativeClass('XPathException', ["name?", "message?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('IDBOpenDBRequest', [], {
 get$on: function() {
  return $._IDBOpenDBRequestEventsImpl$1(this);
 }
});

// 325 dynamic classes.
// 371 classes
// 33 !leaf
(function(){
  var v0/*class(_SVGTextPositioningElementImpl)*/ = 'SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement';
  var v1/*class(_SVGTextContentElementImpl)*/ = [v0/*class(_SVGTextPositioningElementImpl)*/,v0/*class(_SVGTextPositioningElementImpl)*/,'SVGTextContentElement|SVGTextPathElement|SVGTextPathElement'].join('|');
  var v2/*class(_SVGGradientElementImpl)*/ = 'SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement';
  var v3/*class(_SVGComponentTransferFunctionElementImpl)*/ = 'SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement';
  var v4/*class(_SVGAnimationElementImpl)*/ = 'SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement';
  var v5/*class(_SVGElementImpl)*/ = [v1/*class(_SVGTextContentElementImpl)*/,v2/*class(_SVGGradientElementImpl)*/,v3/*class(_SVGComponentTransferFunctionElementImpl)*/,v4/*class(_SVGAnimationElementImpl)*/,v1/*class(_SVGTextContentElementImpl)*/,v2/*class(_SVGGradientElementImpl)*/,v3/*class(_SVGComponentTransferFunctionElementImpl)*/,v4/*class(_SVGAnimationElementImpl)*/,'SVGElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGClipPathElement|SVGCircleElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGClipPathElement|SVGCircleElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement'].join('|');
  var v6/*class(_MediaElementImpl)*/ = 'HTMLMediaElement|HTMLVideoElement|HTMLAudioElement|HTMLVideoElement|HTMLAudioElement';
  var v7/*class(_ElementImpl)*/ = [v5/*class(_SVGElementImpl)*/,v6/*class(_MediaElementImpl)*/,v5/*class(_SVGElementImpl)*/,v6/*class(_MediaElementImpl)*/,'Element|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement'].join('|');
  var v8/*class(_DocumentFragmentImpl)*/ = 'DocumentFragment|ShadowRoot|ShadowRoot';
  var v9/*class(_DocumentImpl)*/ = 'HTMLDocument|SVGDocument|SVGDocument';
  var v10/*class(_CharacterDataImpl)*/ = 'CharacterData|Text|CDATASection|CDATASection|Comment|Text|CDATASection|CDATASection|Comment';
  var v11/*class(_WorkerContextImpl)*/ = 'WorkerContext|SharedWorkerContext|DedicatedWorkerContext|SharedWorkerContext|DedicatedWorkerContext';
  var v12/*class(_NodeImpl)*/ = [v7/*class(_ElementImpl)*/,v8/*class(_DocumentFragmentImpl)*/,v9/*class(_DocumentImpl)*/,v10/*class(_CharacterDataImpl)*/,v7/*class(_ElementImpl)*/,v8/*class(_DocumentFragmentImpl)*/,v9/*class(_DocumentImpl)*/,v10/*class(_CharacterDataImpl)*/,'Node|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr'].join('|');
  var v13/*class(_MediaStreamImpl)*/ = 'MediaStream|LocalMediaStream|LocalMediaStream';
  var v14/*class(_IDBRequestImpl)*/ = 'IDBRequest|IDBOpenDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest|IDBVersionChangeRequest';
  var v15/*class(_AbstractWorkerImpl)*/ = 'AbstractWorker|Worker|SharedWorker|Worker|SharedWorker';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['SVGTextPositioningElement', v0/*class(_SVGTextPositioningElementImpl)*/],
    ['SVGTextContentElement', v1/*class(_SVGTextContentElementImpl)*/],
    ['StyleSheet', 'StyleSheet|CSSStyleSheet|CSSStyleSheet'],
    ['Uint8Array', 'Uint8Array|Uint8ClampedArray|Uint8ClampedArray'],
    ['AbstractWorker', v15/*class(_AbstractWorkerImpl)*/],
    ['AudioParam', 'AudioParam|AudioGain|AudioGain'],
    ['WorkerContext', v11/*class(_WorkerContextImpl)*/],
    ['Blob', 'Blob|File|File'],
    ['CSSRule', 'CSSRule|CSSUnknownRule|CSSStyleRule|CSSPageRule|CSSMediaRule|WebKitCSSKeyframesRule|WebKitCSSKeyframeRule|CSSImportRule|CSSFontFaceRule|CSSCharsetRule|CSSUnknownRule|CSSStyleRule|CSSPageRule|CSSMediaRule|WebKitCSSKeyframesRule|WebKitCSSKeyframeRule|CSSImportRule|CSSFontFaceRule|CSSCharsetRule'],
    ['CSSValueList', 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue|WebKitCSSFilterValue|WebKitCSSTransformValue'],
    ['CharacterData', v10/*class(_CharacterDataImpl)*/],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList|DOMSettableTokenList'],
    ['HTMLDocument', v9/*class(_DocumentImpl)*/],
    ['DocumentFragment', v8/*class(_DocumentFragmentImpl)*/],
    ['SVGGradientElement', v2/*class(_SVGGradientElementImpl)*/],
    ['SVGComponentTransferFunctionElement', v3/*class(_SVGComponentTransferFunctionElementImpl)*/],
    ['SVGAnimationElement', v4/*class(_SVGAnimationElementImpl)*/],
    ['SVGElement', v5/*class(_SVGElementImpl)*/],
    ['HTMLMediaElement', v6/*class(_MediaElementImpl)*/],
    ['Element', v7/*class(_ElementImpl)*/],
    ['Entry', 'Entry|FileEntry|DirectoryEntry|FileEntry|DirectoryEntry'],
    ['EntrySync', 'EntrySync|FileEntrySync|DirectoryEntrySync|FileEntrySync|DirectoryEntrySync'],
    ['Event', 'Event|WebGLContextEvent|UIEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent|WebKitTransitionEvent|TrackEvent|StorageEvent|SpeechRecognitionEvent|SpeechRecognitionError|SpeechInputEvent|ProgressEvent|XMLHttpRequestProgressEvent|XMLHttpRequestProgressEvent|PopStateEvent|PageTransitionEvent|OverflowEvent|OfflineAudioCompletionEvent|MutationEvent|MessageEvent|MediaStreamEvent|MediaKeyEvent|IDBVersionChangeEvent|HashChangeEvent|ErrorEvent|DeviceOrientationEvent|DeviceMotionEvent|CustomEvent|CloseEvent|BeforeLoadEvent|AudioProcessingEvent|WebKitAnimationEvent|WebGLContextEvent|UIEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent|WebKitTransitionEvent|TrackEvent|StorageEvent|SpeechRecognitionEvent|SpeechRecognitionError|SpeechInputEvent|ProgressEvent|XMLHttpRequestProgressEvent|XMLHttpRequestProgressEvent|PopStateEvent|PageTransitionEvent|OverflowEvent|OfflineAudioCompletionEvent|MutationEvent|MessageEvent|MediaStreamEvent|MediaKeyEvent|IDBVersionChangeEvent|HashChangeEvent|ErrorEvent|DeviceOrientationEvent|DeviceMotionEvent|CustomEvent|CloseEvent|BeforeLoadEvent|AudioProcessingEvent|WebKitAnimationEvent'],
    ['Node', v12/*class(_NodeImpl)*/],
    ['MediaStream', v13/*class(_MediaStreamImpl)*/],
    ['IDBRequest', v14/*class(_IDBRequestImpl)*/],
    ['EventTarget', [v11/*class(_WorkerContextImpl)*/,v12/*class(_NodeImpl)*/,v13/*class(_MediaStreamImpl)*/,v14/*class(_IDBRequestImpl)*/,v15/*class(_AbstractWorkerImpl)*/,v11/*class(_WorkerContextImpl)*/,v12/*class(_NodeImpl)*/,v13/*class(_MediaStreamImpl)*/,v14/*class(_IDBRequestImpl)*/,v15/*class(_AbstractWorkerImpl)*/,'EventTarget|XMLHttpRequestUpload|XMLHttpRequest|DOMWindow|WebSocket|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|PeerConnection00|Notification|MessagePort|MediaController|IDBTransaction|IDBDatabase|FileWriter|FileReader|EventSource|DeprecatedPeerConnection|DOMApplicationCache|BatteryManager|AudioContext|XMLHttpRequestUpload|XMLHttpRequest|DOMWindow|WebSocket|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|PeerConnection00|Notification|MessagePort|MediaController|IDBTransaction|IDBDatabase|FileWriter|FileReader|EventSource|DeprecatedPeerConnection|DOMApplicationCache|BatteryManager|AudioContext'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection|HTMLOptionsCollection'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue|IDBCursorWithValue'],
    ['NodeList', 'NodeList|RadioNodeList|RadioNodeList']];
$.dynamicSetMetadata(table);
})();

if (typeof window != 'undefined' && typeof document != 'undefined' &&
    window.addEventListener && document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', function(e) {
    $.main();
  });
} else {
  $.main();
}
function init() {
  Isolate.$isolateProperties = {};
Isolate.$defineClass = function(cls, superclass, fields, prototype) {
  var generateGetterSetter = function(field, prototype) {
  var len = field.length;
  var lastChar = field[len - 1];
  var needsGetter = lastChar == '?' || lastChar == '=';
  var needsSetter = lastChar == '!' || lastChar == '=';
  if (needsGetter || needsSetter) field = field.substring(0, len - 1);
  if (needsGetter) {
    var getterString = "return this." + field + ";";
    prototype["get$" + field] = new Function(getterString);
  }
  if (needsSetter) {
    var setterString = "this." + field + " = v;";
    prototype["set$" + field] = new Function("v", setterString);
  }
  return field;
};
  var constructor;
  if (typeof fields == 'function') {
    constructor = fields;
  } else {
    var str = "function " + cls + "(";
    var body = "";
    for (var i = 0; i < fields.length; i++) {
      if (i != 0) str += ", ";
      var field = fields[i];
      field = generateGetterSetter(field, prototype);
      str += field;
      body += "this." + field + " = " + field + ";\n";
    }
    str += ") {" + body + "}\n";
    str += "return " + cls + ";";
    constructor = new Function(str)();
  }
  Isolate.$isolateProperties[cls] = constructor;
  constructor.prototype = prototype;
  if (superclass !== "") {
    Isolate.$pendingClasses[cls] = superclass;
  }
};
Isolate.$pendingClasses = {};
Isolate.$finishClasses = function(collectedClasses) {
  for (var collected in collectedClasses) {
    if (Object.prototype.hasOwnProperty.call(collectedClasses, collected)) {
      var desc = collectedClasses[collected];
      Isolate.$defineClass(collected, desc.super, desc[''], desc);
    }
  }
  var pendingClasses = Isolate.$pendingClasses;
  Isolate.$pendingClasses = {};
  var finishedClasses = {};
  function finishClass(cls) {
    if (finishedClasses[cls]) return;
    finishedClasses[cls] = true;
    var superclass = pendingClasses[cls];
    if (!superclass) return;
    finishClass(superclass);
    var constructor = Isolate.$isolateProperties[cls];
    var superConstructor = Isolate.$isolateProperties[superclass];
    var prototype = constructor.prototype;
    if (prototype.__proto__) {
      prototype.__proto__ = superConstructor.prototype;
      prototype.constructor = constructor;
    } else {
      function tmp() {};
      tmp.prototype = superConstructor.prototype;
      var newPrototype = new tmp();
      constructor.prototype = newPrototype;
      newPrototype.constructor = constructor;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var member in prototype) {
        if (member == '' || member == 'super') continue;
        if (hasOwnProperty.call(prototype, member)) {
          newPrototype[member] = prototype[member];
        }
      }
    }
  }
  for (var cls in pendingClasses) finishClass(cls);
};
Isolate.$finishIsolateConstructor = function(oldIsolate) {
  var isolateProperties = oldIsolate.$isolateProperties;
  var isolatePrototype = oldIsolate.prototype;
  var str = "{\n";
  str += "var properties = Isolate.$isolateProperties;\n";
  for (var staticName in isolateProperties) {
    if (Object.prototype.hasOwnProperty.call(isolateProperties, staticName)) {
      str += "this." + staticName + "= properties." + staticName + ";\n";
    }
  }
  str += "}\n";
  var newIsolate = new Function(str);
  newIsolate.prototype = isolatePrototype;
  isolatePrototype.constructor = newIsolate;
  newIsolate.$isolateProperties = isolateProperties;
  return newIsolate;
};
}

//@ sourceMappingURL=.map