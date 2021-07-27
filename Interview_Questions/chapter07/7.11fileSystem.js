// File System: Explain the data structures and algorithms that you would
// use to design an in-memory file system.
// Illustrate with an example in code where possible.

class Entry{
    constructor(data, time, path){
        this.data = data;
        this.timeCreated = time
        this.path = path;
    }
}

class File extends Entry{
    constructor(data, time, path){
        super(data, time, path);
    }
}

class Directory extends Entry{
    constructor(data, time, path){
        super(data, time, path);
        this.files = [];
    }
    
    addFile(file){
        this.files.push(file);
    }

    removeFile(file){
        this.files = this.files.filter(file1 !== file);
    }
}