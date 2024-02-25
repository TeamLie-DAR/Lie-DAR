package com.company;
class Tommy{
    public void hit(){
        System.out.println("hitting the enemy");
    }
    public void run(){
        System.out.println("running");

    }
    public void fire(){
        System.out.println("firing on the enemy");
    }
}

class rectangle1{
    int length;
    int breadth;
    public int Area(){
        return length*breadth;
    }
    public int pm(){
        return 2*(length+breadth);
    }


}


public class ps {
    public static void main(String[] args) {
        rectangle1 rect=new rectangle1();
        rect.length=5;
        rect.breadth=4;
        int Area=rect.Area();
        System.out.println(Area);
        System.out.println(rect.pm());
        Tommy player1=new Tommy();
        player1.run();


    }
}
