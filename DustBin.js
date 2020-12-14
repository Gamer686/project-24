class DustBin{
    constructor(x,y,width,height){
        var options ={
            "isStatic": true
        
        }
       
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body1);
        this.body = Bodies.rectangle((x=(width/2)),(y=(height*2)),height,width/2,options);
     this.body.width = width
        this.body.height= height
        
        
    

    }
    display(){
fill("white");
rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.height)
rect((this.body1.position.x-(this.body1.width/2)),(this.body1.position.y-(this.body1.height*(2*(this.body1.width/100)))),this.body1.heigth,this.body1.width/2)

}
}



    
