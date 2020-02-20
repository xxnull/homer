var arr = [{
  "name": "actual",
  "data": [
    [1396242000000, 592.685],
    [1396242000000, 377.712],
    [1404104400000, 316.74],
    [1404104400000, 596.709],
    [1412053200000, 579.066],
    [1412053200000, 300.803],
    [1420005600000, 596.497],
    [1420005600000, 297.004],
    [1427778000000, 435.818],
    [1427778000000, 287.556],
    [1435640400000, 446.788],
    [1435640400000, 282.971],
    [1443589200000, 270.027],
    [1443589200000, 445.239],
    [1451541600000, 258.869],
    [1451541600000, 432.285],
    [1459400400000, 266.438],
    [1459400400000, 409.761],
    [1467262800000, 408.126],
    [1467262800000, 246.83],
    [1475211600000, 395.026],
    [1475211600000, 233.635]
  ]
}, {
  "name": "forecast",
  "data": [
    [1483164000000, 406.329],
    [1483164000000, 240.611],
    [1490936400000, 414.456],
    [1490936400000, 241.814],
    [1498798800000, 243.99],
    [1498798800000, 422.745],
    [1506747600000, 443.882],
    [1506747600000, 246.43],
    [1514700000000, 466.076],
    [1514700000000, 253.823]
  ]
}];

arr.forEach(function(o) {                      // for each object o in the array
  var hash = {};                               // the hash object, to store the indexes of times in the new array
  o.data = o.data.reduce(function(newArr, e) { // reduce the data array of the object o

    var index = hash[e[0]];                    // get the index from the hash object of this time (e[0])

    if(index === undefined) {                  // if index is undefined (this time is not hashed yet), then add e to the array and hash its index so it'll be used for duplicates
      hash[e[0]] = newArr.push(e) - 1;         // push returns the new length so the index is the length - 1
    } else {                                   // otherwise (the time is already hashed)
      newArr[index][1] += e[1];                // then add the value of this element (e[1]) to the value of the already hashed element at index index
    }

    
    return newArr;
  }, []);
});

console.log(arr);