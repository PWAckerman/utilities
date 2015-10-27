/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    if(!n){
      return array[0];
    }
    var n = n || 0;
    n > array.length? n = array.length : n;
    var arr = [];
      for(var i = 0; i < n; i++){
        arr.push(array[i]);
      }
    return arr;
	};

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function (array, n) {
    var bottomidx;
    var arr = [];
      if(n === 0){
      return 0;
    }
    if(!n){
      return array[array.length - 1];
    }
   n > array.length ? bottomidx = 0 : bottomidx = array.length - n;
  for(var i = array.length - 1; i >= bottomidx; i--){
    arr.unshift(array[i]);
  }
  return arr;
  }

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
      for(var key in collection){
        iterator(collection[key], key, collection);
      }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    for(var i = 0; i < array.length; i++){
      if(array[i] === target){
        return i;
      }
    }
    return -1;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, iterator) {
    var arr = [];
    for(var i = 0; i < collection.length; i++){
      if(iterator(collection[i])){
        arr.push(collection[i]);
      }
    }
    return arr;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, iterator) {
    var arr = [];
    for(var i = 0; i < collection.length; i++){
      if(!iterator(collection[i])){
        arr.push(collection[i]);
      }
    }
    return arr;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var uniqObj = {};
    var unique = [];
    for(var i = 0; i < array.length; i++){
      if(!uniqObj[array[i]]){
        uniqObj[array[i]] = 1;
      } else {
        uniqObj[array[i]]++;
      }
    }
    for(var key in uniqObj){
        unique.push(parseInt(key));
      }
    return unique;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    var result = [];
    for(var i = 0; i < array.length; i++){
      result.push(iterator(array[i]));
    }
    return result;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var result = [];
    for(var i = 0; i < array.length; i++){
      result.push(array[i][propertyName]);
    }
    return result;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
      var result = [];

      for(var i = 0; i < list.length; i++){
          if(typeof methodName === "string"){
          result.push(list[i][methodName](args));
        } else {
          result.push(methodName.call(list[i], args));
        }
      }
      return result;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
      if(initialValue){
        collection.unshift(initialValue);
      }
      var previousValue = collection[0];
      var item;
      for(var i = 1; i < collection.length; i++){
        item = collection[i];
        console.log(previousValue)
        previousValue = iterator(previousValue, item);
      }
      return previousValue;
  }

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    if(!target){
      console.log('you messed up')
      return false;
    }
    for(var key in collection){
      if(collection[key] === target){
        return true;
      }
    }
    return false;
  }


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    var getValue = function(i) { return i; };
    var iterator = iterator || getValue;
    if(collection === []){
      return true;
    }
    for(var key in collection){
      if(!Boolean(iterator(collection[key]))){
        return false;
      };
    }
  return true;
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    var getValue = function(i) { return i; };
    var iterator = iterator || getValue;
    if(collection === []){
      return true;
    }
    for(var key in collection){
      if(Boolean(iterator(collection[key]))){
        return true;
      };
    }
  return false;
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
    var extendee = arguments[0];
    for(var i = 1; i <= arguments.length; i++){
      for(var key in arguments[i]){
        if(!extendee.hasOwnProperty(key) && typeof arguments[i][key] !== undefined){
          extendee[key] = arguments[i][key];
        }
        if(extendee.hasOwnProperty(key) &&  typeof arguments[i][key] !== undefined){
          extendee[key] = arguments[i][key];
        }
      }
    }
      return extendee;
    }

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj){
    var defaultee = arguments[0];
    for(var i = 1; i <= arguments.length; i++){
      for(var key in arguments[i]){
        if(!defaultee.hasOwnProperty(key) && typeof arguments[i][key] !== undefined){
          defaultee[key] = arguments[i][key];
        }
        if(defaultee.hasOwnProperty(key) && typeof arguments[i][key] !== undefined){
          defaultee[key] = defaultee[key];
        }
      }
    }
      return defaultee;
    }


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    func.counter = 0;
    return function(){
      if(func.counter === 0){
        func.counter++;
        return func();

      } else if(func.counter > 0){
        return "No.";
      }
    }
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  var f = {function: func, results: {} };
  return function(x){
    console.log(f.results.hasOwnProperty(x));
    if(f.results.hasOwnProperty(x)){
      console.log(f)
      return f.results[x];
    } else {
      f.results[x] = f.function(x);
      return f.results[x];
    }
  }
}

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    var args = Array.prototype.slice.call(arguments, 2);
    setTimeout(function(){return func.apply(func, args)}, wait, args);
  };



  // Shuffle an array.
  _.shuffle = function(arr) {
  var array = [];
  for(var i = 0; i < arr.length; i++){
    array.push(arr);
  }
  var tmp, current, top = array.length;

  if(top) while(top--) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
if (typeof iterator === 'string' && iterator !== 'length'){
    var newArr = [];
    for(var x = 0; x < collection.length; x++){
      for(var prop in collection[x]){
        if(prop === iterator){
          newArr.push([collection[x][prop], collection[x]]);
        }
      }
    }
    newArr.sort();
    var result = [];
    for(var i = 0; i < newArr.length; i++){
      result.push(newArr[i][1]);
    }
    return result;
  } else if(iterator === 'length'){
        var lengths = [];
        var res = [];
        for(var z = 0; z < collection.length; z++){
          lengths.push([collection[z].length, collection[z]]);
        }
        lengths.sort();
        console.log(lengths);
        for(var l = 0; l < lengths.length; l++){
          res.push(lengths[l][1]);
        }
        return res;
      } else {
    result = [];
    newArr = [];
    for(x = 0; x < collection.length; x++){
      result.push([iterator(collection[x]), collection[x]]);
    }
    result.sort();
    console.log(result);
    var uns = []
    for(i = 0; i < result.length; i++){
      if(!result[i][1]){
        uns.push(undefined);
      } else {
      newArr.push(result[i][1]);
      }
    }
    return newArr.concat(uns);
  }
};


  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
      var arrays = arguments;
      var longest = 0;
      var longestIdx = 0;
      for(var i = 0; i < arrays.length; i++){
        if(arrays[i].length > longest){
          longest = arrays[i].length;
          longestIdx = i;
        }
      }
      var result = {};
      var resultArr = [];
      for(var x = 0; x < arrays.length; x++){
        for(var prop in arrays[longestIdx]){
          if(!result[prop]){
            result[prop] = [];
            result[prop].push(arrays[x][prop]);
          } else if (result[prop]){
            result[prop].push(arrays[x][prop]);
          }
        }
      }
      for(var prope in result){
        resultArr.push(result[prope]);
      }
      return resultArr;
    };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
      if(!result){
        var res = [];
      }
      else {
        res = result;
      }
      // (!result) ? var res = [] : var res = result;
      for(var i = 0; i < nestedArray.length; i++){
        if(Array.isArray(nestedArray[i]) === false){
          res.push(nestedArray[i]);
        }else if(Array.isArray(nestedArray[i]) === true){
          _.flatten(nestedArray[i], res);
        }
      }
      return res;
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function () {
  var result = {};
  var resultArr = [];
  var arrays = arguments;
  for(var i = 0; i < arrays.length; i++){
    for(var x = 0; x < arrays[i].length; x++){
      if (!result[arrays[i][x]]){
        result[arrays[i][x]] = 1;
      } else if (result[arrays[i][x]]){
        result[arrays[i][x]]++;
      }
    }
  }
  console.log(result);
  for(var prop in result){
    if(result[prop] === arrays.length){
      resultArr.push(prop);
    }
  }
  return resultArr;
};

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var result = {};
    var resultArr = [];
    var first = array;
    var arrays = Array.prototype.slice.call(arguments, 1);
    for(var prop in first){
      result[first[prop]] = 1;
    }
    for(var x = 0; x < arrays.length; x++){
      for(var thing in arrays[x]){
        if(result[arrays[x][thing]]){
          result[arrays[x][thing]]++;
        } else if (!result[arrays[x][thing]]) {

        }
      }
    }
    for(var res in result){
      if(result[res] < 2){
        if(parseInt(res)){
        resultArr.push(parseInt(res));
        } else {
          resultArr.push(res);
        }
      }
    }
    return resultArr;
  };

}).call(this);
