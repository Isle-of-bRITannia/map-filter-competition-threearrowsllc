import allTransactions from './all_transactions.js';
import botwData from './botw_data.js';

const categories = [];
Object.keys(botwData.data).forEach(element => {
        categories.push(element);
});

const data = []

let categoriesLength = 0;

categories.forEach((category)=>{
    categoriesLength+=1;
})

for(let i = 0; i<categoriesLength; i++){
    data[i] = botwData.data[categories[i]];
}

let index;
for(let i = 0; i<categoriesLength; i++){
    index = i;

    if(categories[index] !== "creatures" &&
    categories[index] !== "equipment" &&
    categories[index] !== "treasure" &&
    categories[index] !== "materials" &&
    categories[index] === "monsters"){
        i=categoriesLength;
    }
}

const monsterData = data[index];
const neededData = {};

monsterData.forEach((monster)=>{
neededData[monster.name] = monster.drops;
})

const keys = Object.keys(neededData);
const moreNeededData = {}
for(let i = 0;i<keys.length; i++){
    if(neededData[keys[i]] !== null && neededData[keys[i]].includes("ruby")){
        moreNeededData[keys[i]] = neededData[keys[i]];
    }
}

const moreKeys = Object.keys(moreNeededData);
const final = [];
for(let i = 0;i<moreKeys.length; i++){
    final[i] = moreKeys[i] + " : " + moreNeededData[moreKeys[i]]; 
}

debugger;