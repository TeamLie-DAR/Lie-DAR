package com.company;
class Employee{
    int id;
    String name;
    int salary;
    public void printDetail(){
        System.out.println("My Id is "+ id);
        System.out.println("My name is "+ name);


    }
    public int  getSalary(){
        return salary;

//        System.out.println(salary);
    }

}


public class Main {

    public static void main(String[] args) {
//        attributes for harry
        Employee harry=new Employee();
        harry.id=12;
        harry.name="codewithharry";
        harry.salary=11;



        //        attributes for raj
        Employee raj= new Employee();
        raj.id=44;
        raj.name="Raj";
        raj.salary=12;


//        System.out.println(harry.id);
//        System.out.println(harry.name);

harry.printDetail();
raj.printDetail();

 int a=raj.getSalary();
        System.out.println(raj.getSalary());
        System.out.println(a);
    }
}
