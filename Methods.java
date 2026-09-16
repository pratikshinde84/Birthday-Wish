class Methods{
    int printName(int a,int b){
        System.out.println("Two parammetters");
        return a+b;
    }
    int printName(int a,int b,int c){
        System.out.println("Three parameters");
        return a+b+c;
    }
    public static void main(String args[]){
        Methods m=new Methods();   
        m.printName(3,5,3);
    }
}