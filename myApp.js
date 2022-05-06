require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const Schema1 = mongoose.Schema;
const personSchema = new Schema1({
  name: { type: String, required: true },//neaparat sa aiba nume "required:true"
  age: Number,
  favoriteFoods: [String]
});
const Person = mongoose.model('Person', personSchema);//"person" apare in baza de date 



const createAndSavePerson = async  ()=> {//echivalente
  const ChioreanBogdan = new Person({ name: "Chiorean Bogdan", age: 25, favoriteFood: ["carne", "oua", "lapte", "legume"] });
  return ChioreanBogdan.save();
};
//createAndSavePerson();
let arrayOfPeople = [{ name: "Bogdan", age: 25, favouriteFood: ["ou", "carne"] }, { name: "Ana", age: 28, favouriteFood: ["lapte", "ceai"] }];
const createManyPeople = async  (arrayOfPeople)=> {
 return  Person.create(arrayOfPeople)
 
};
try {
  await createManyPeople(arrayOfPeople)
} catch (error) {
  console.log(err);
}

//createManyPeople(arrayOfPeople)
 
const personName = "Bogdan";
const findPeopleByName = function (personName, done) {
  Person.find({ name: personName }, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
    console.log(personFound);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
