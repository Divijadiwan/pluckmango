class connect
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
        }
        this.pointB = pointB;

        this.connect = Constraint.create(options);
        World.add(world,this.connect);
    }
    fly(){
        this.connect.bodyA = null;
    }
    display()
    {

        var pointA = this.connect.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}