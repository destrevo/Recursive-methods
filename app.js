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

console.log(filesystem)
console.log(getFilenames(filesystem))