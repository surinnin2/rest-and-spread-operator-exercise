const filterOutOdds = (...array) => array.filter((num) => num%2===0)

const findMin = (...array) => Math.min(...array)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (array, ...args) => [...array, ...args.map(num => num*2)]

//Slice and Dice

const removeRandom = (items) => {
    randIndex = Math.floor(Math.random()*items.length)
    return [...items.slice(0, randIndex), ...items.slice(randIndex+1)]
}

const extend = (array1, array2) => [...array1, ...array2]

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj} 
    newObj[key] = val
    return newObj
}


const removeKey = (obj, key) => {
    newObj = {...obj}
    delete newObj[key]
    return newObj 
}

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) => {
    const newObj = {...obj} 
    newObj[key] = val
    return newObj
}