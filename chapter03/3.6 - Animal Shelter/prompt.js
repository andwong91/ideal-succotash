/**
 * An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis.
 * People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can
 * select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They
 * cannot select which specific animal they would like. Create the data structures to maintain this system
 * and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in
 * LinkedList data structure.
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(species, priority) {
  this.priority = priority;
  this.species = species;
  this.next = null;
}

class AnimalShelter {
  constructor() {
    this.cats = new LinkedList();
    this.dogs = new LinkedList();
    this.priority = 0;
  }

  enqueue(species) {
    // add to tail as new animals are added
    // species must be a string that defines whether a dog or cat is being added to the shelter
    if (typeof species !== 'string') return undefined;
    if (species === 'dog') {
      if (this.dogIsEmpty()) return this.emptyList(this.dogs, species, this.priority);
      const newNode = new Node(species, this.priority);
      this.dogs.tail.next = newNode;
      this.dogs.tail = newNode;
      this.priority++;
    } else if (species === 'cat') {
      if (this.catIsEmpty()) return this.emptyList(this.cats, species, this.priority);
      const newNode = new Node(species, this.priority);
      this.cats.tail.next = newNode;
      this.cats.tail = newNode;
      this.priority++;
    }
  }

  dequeueAny() {
    if (this.dogIsEmpty() || this.catIsEmpty()) {
      if (this.dogIsEmpty() && this.catIsEmpty()) return undefined;
      return (this.dogIsEmpty() ? this.dequeueCat() : this.dequeueDog());
    } else {
      return (this.peekDog() > this.peekCat() ? this.dequeueCat() : this.dequeueDog());
    }
  }

  dequeueDog() {
    // remove from head when dequeuing
    const dog = this.dogs.head;
    this.dogs.head = this.dogs.head.next;
    dog.next = null;
    return dog;
  }

  dequeueCat() {
    // remove from head when dequeuing
    const cat = this.cats.head;
    this.cats.head = this.cats.head.next;
    cat.next = null;
    return cat;
  }

  peekDog() {
    return this.dogs.head.priority;
  }

  peekCat() {
    return this.cats.head.priority;
  }

  dogIsEmpty() {
    return this.dogs.head === null;
  }

  catIsEmpty() {
    return this.cats.head === null;
  }

  emptyList(list, species, priority) {
    const newNode = new Node(species, priority);
    list.head = newNode;
    list.tail = newNode;
    this.priority++;
  }
}

const shelter = new AnimalShelter();

// return undefined when there are no animals in the shelter
console.log(shelter.dequeueAny());
console.log(`there are no dogs? ${shelter.dogIsEmpty()} | there are no cats? ${shelter.catIsEmpty()}`);
shelter.enqueue('cat');
shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('dog');
// cat was added first, so it should have the "highest" priority (lowest number in this case)
console.log(`the oldest cat is priority ${shelter.peekCat()}, the oldest dog is priority ${shelter.peekDog()}`);
// this should be the first cat that was added (priority 0)
console.log(shelter.dequeueAny());
// this should be the first dog that was added (priority 1)
console.log(shelter.dequeueAny());
// this should return the second cat that was added
console.log(shelter.dequeueAny());
// one cat and one dog remain
console.log(`there are no dogs? ${shelter.dogIsEmpty()} | there are no cats? ${shelter.catIsEmpty()}`);
console.log(shelter.dequeueCat());
console.log(shelter.dequeueDog());
console.log(`there are no dogs? ${shelter.dogIsEmpty()} | there are no cats? ${shelter.catIsEmpty()}`);