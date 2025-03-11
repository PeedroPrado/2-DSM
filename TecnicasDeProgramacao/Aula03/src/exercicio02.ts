class X{
    um(){
        console.log("um");
    }
}
class Y extends X{
    dois(){
        this.um();
        console.log("Dois")
    }
}
class Z extends Y{
    tres(){
        this.dois();
        console.log("Três")
    }
}

const z = new Z();
z.tres();
