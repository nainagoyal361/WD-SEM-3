const fs=require('fs');

//create
fs.writeFile('example.txt','Hello World! My name is Naina Goyal.I am currently studying B.Tech in Abes Engineering College.My hobbies are dacing, listening music and exporing new things!!!! ',(err)=>{
    if(err) throw err;
    console.log('File created!');

    //Read
    fs.readFile('example.txt','utf8',(err,data)=>{
        console.log('File content:',data);
    });

    fs.writeFile('example.txt','This is the updated content!!',(err)=>{
        if(err) throw err;
        console.log('File Overwritten(updated)!');
    });

    fs.appendFile('example.txt','\nThis line was added!!',(err)=>{
        if(err) throw err;
        console.log('File updated(appeded)!');
    });

    //delete
    fs.unlink('example.txt',(err)=>{
        if(err) throw err;
        console.log('File deleted');
    });
});