class Circle {                                          
    constructor(radius, color){                         
        this.radius=radius;
        this.color = color;
    }

    circle(){
        console.log("circle")
    }
    circle(radius=4){
        console.log(radius)
    }
    circle(radius=4, color="Red"){
        console.log(radius,color)                     
    }
    getRadius(){
        console.log(this.radius)
    }
    setRadius(newRadius){
        this.radius=newRadius
        console.log("New radius is:"+ newRadius)        
    }
    getColor(){
        console.log(this.color)
    }                        
    setColor(newColor){
        this.color=newColor
        console.log("New color is:"+ newColor) 
    }
    getArea(){
        let area = 3.4*this.radius*this.radius         
        console.log("Area of circle is:" + area)        
    }
    getCircumference(){
        let Circumference = 2*3.14*this.radius;            
        console.log("Circumferece of circle is:" + Circumference);
    }
}