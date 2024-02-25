package com.company;
import java.awt.*;
import java.util.Scanner;

class Employee1{
    int salary;
    int id;
    String name;
     public int getSalary(){
         return salary;
    }
    public void getName(){
        System.out.println(name);
    }
    public void getId(){
        System.out.println(id);
    }
    public void setName(String n){
         name=n;
    }

        }

        class cellphone{
    public void ringing(){
        System.out.println("ringing..");
    }
    public void vibrating(){
        System.out.println("vibrating..");
    }
    public void picking(){
        System.out.println("picking..");
    }



        }
        class Square{
    int side;
    public int areaSq(){
        return side*side;
            }
            public int perimeter(){
//        int l;
        return 4*side;
            }

        }


        class rectangle{
    int length;
    int breadth;
    public int Area(){
        return length*breadth;
    }
    public int Perimeter(){
        return 2*(length+breadth);
    }


        }





public class ps__oops {
    public static void main(String[] args) {
/*
        //attributes about rishav
        Employee1 rishav=new Employee1();
        rishav.name="rishav singh";
        rishav.id=545;
        rishav.salary=55;


int a=rishav.getSalary();
        System.out.println(a);
        rishav.getName();
        rishav.getId();


//        problem2
        cellphone asus=new cellphone();
        asus.ringing();
        asus.picking();

 */

//        problem3
        Scanner sc =new Scanner(System.in);
        System.out.println("enter the no: ");
        int s=sc.nextInt();

Square sq=new Square();
sq.side=s;
int area= sq.areaSq();
        System.out.println(area);
        System.out.println(sq.perimeter());

        Rectangle Rect=new Rectangle();
//        Rect.length=s;
//        Rect.breadth=4;












    }
}
