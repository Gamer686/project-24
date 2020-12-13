class DustBin{
    constructor(x,y,width,height){
        var options ={
            "isStatic": true
        
        }
       
        this.body1 = bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body1);
        this.body1 = bodies.rectangle((x=(width/2)),(y=(height*2)),height,width/2,options);
        World.add(world,this.body1);
        this.body2 = bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body2);
        this.body1 = bodies.rectangle((x=(width/2)),(y=(height*2)),height,width/2,options);
        World.add(world,this.body1);
        this.body1.width = width
        this.body1.height= height
    

    }
    display(){
fill("white");
rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.height)
rect((this.body1.position.x-(this.body1.width/2)),(this.body1.position.y-(this.body1.height*(2*(this.body1.width/100)))),this.body1.heigth,this.body1.width/2)
rect((this.body2.position.x-(this.body2.width/2)),(this.body2.position.y-(this.body2.height*(2*(this.body2.width/100)))),this.body2.heigth,this.body2.width/2)

}
}



    
