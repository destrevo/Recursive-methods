const filesystem = {
    documents: {
        files: ['tax.txt', 'resume.pdf', 'picuture.jpg']
    },
    work: {
        urgent: {
            files: ['project-b.pdf']
        },
        lowPrio: {
            files: ['budget.xlsx']
        }
    }
};

let getFilenames = (fs) => {
    const allFiles = [];
    for (const identifier in fs){
        if(Array.isArray(fs[identifier])){
            allFiles.push(...fs[identifier]);
        }else {
            allFiles.push(...getFilenames(fs[identifier]));
        }
    } return allFiles
}
/////*Immediately Invoked Functions Executions*///
/* Array.isArray([1, 2, 3]);  // true */
console.log((function xS (fs){
    const allFiles = [];
    for(const file in fs){
        Array.isArray(fs[file])? allFiles.push(...fs[file]): allFiles.push(...xS(fs[file]));
    } return allFiles
}(filesystem)))


// console.log(filesystem)
// console.log(getFilenames(filesystem))

const myself = {
    name: 'Max',
    friends: [
      {
        name: 'Manuel',
        friends: [
          {
            name: 'Chris',
            friends: [
              {
                name: 'Hari'
              },
              {
                name: 'Amilia'
              }
            ]
          }
        ]
      },
      {
        name: 'Julia'
      }
    ]
  };
  function getFriendNames(person) {
    const collectedNames = [];
  
    if (!person.friends) {
      return [];
    }
    for (const friend of person.friends) {
      collectedNames.push(friend.name);
      collectedNames.push(...getFriendNames(friend));
    }
    return collectedNames;
  }  console.log(getFriendNames(myself));
