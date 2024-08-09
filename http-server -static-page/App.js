const http=require("http")
// const url=require("url")
const fs=require("fs")


const staticserver=http.createServer((req,res)=>{
    console.log("request recived")

    let filepath=req.url
    if(filepath ==="/"){
        filepath="index.html"
    }


        let requestedfile="./static" + filepath;

        fs.readFile(requestedfile,(err,content)=>{
            if(err){
                requestedfile="./static/pagenotfound.html"
                fs.readFile(requestedfile,(err,content)=>{
                    res.writeHead(400,{"content-type":"text/html"})
                    res.write(content);
                    res.end();
                })
            }else{
                res.writeHead(200,{"content-type":"text/html"})
                res.write(content);
                res.end();
            }
        })

   

})


staticserver.listen(3232,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("server running on port 3232")
})

