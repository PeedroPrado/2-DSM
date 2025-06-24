function calcular(a: any, b: any): number { 
    if (typeof a === 'number' && typeof b === 'number') {  return a + b; 
    } 
    throw new Error('Os parâmetros precisam ser números'); 
} 
 try{
console.log("Soma:", calcular('oi', 2)); 
 } catch (e:any){
    console.log(e.message);
 } finally{
    console.log("Fim do programa");
 }

 try{
console.log("Soma:", calcular(1, 2)); 
 } catch (e:any){
    console.log(e.message);
 }
 finally{
console.log("Fim do programa");
 }