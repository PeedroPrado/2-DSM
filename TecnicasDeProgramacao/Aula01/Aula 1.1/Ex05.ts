const operarFlecha = (v1: any, v2: any): any | string => {
    let res: Array<any> = [];
    for (let i = 0; i < v1.length; i++) {
      res[i] = v1[i] + v2[i];
    }
    return res;
  };
  
  const vet5 = [5, 3, 1, 8, 2];
  const vet6 = ["M", "a", "r", "i", "a"];
  
  console.log("Resultado:", operar(vet5, vet6));
  