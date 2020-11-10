import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

 itemsArray(): object {
  return [
    { idFacade: 'resh_blue', idMaterial: 'mdf', idCover: 'pet' },
    { idFacade: 'resh_white', idMaterial: 'mdf', idCover: 'pet' },
    { idFacade: 'berlin', idMaterial: 'mdf', idCover: 'pvh' },
    { idFacade: 'megion', idMaterial: 'mdf', idCover: 'pvh' },
    { idFacade: 'asha_white', idMaterial: 'dsp', idCover: 'lak' },
    { idFacade: 'asha_green', idMaterial: 'dsp', idCover: 'lak' },
    { idFacade: 'asha_red', idMaterial: 'dsp', idCover: 'lak' },
    { idFacade: 'asha_beige', idMaterial: 'dsp', idCover: 'lak' },
    { idFacade: 'nordic', idMaterial: 'dsp', idCover: 'ldsp' },
    { idFacade: 'birsk', idMaterial: 'dsp', idCover: 'plastic' },
    { idFacade: 'fatezh', idMaterial: 'dsp', idCover: 'ldsp' },
    { idFacade: 'rouza', idMaterial: 'dsp', idCover: 'ldsp' },
    { idFacade: 'nevel', idMaterial: 'massive', idCover: 'paint' },
    { idFacade: 'newport_taupe', idMaterial: 'mdf', idCover: 'pvh' },
    { idFacade: 'newport_white', idMaterial: 'mdf', idCover: 'pvh' },
    { idFacade: 'oxford', idMaterial: 'mdf', idCover: 'pvh' },
    { idFacade: 'petergof', idMaterial: 'mdf', idCover: 'pvh' },
    { idFacade: 'plast', idMaterial: 'dsp', idCover: 'ldsp' },
    { idFacade: 'santiago', idMaterial: 'dsp', idCover: 'ldsp' },
    { idFacade: 'sofia', idMaterial: 'dsp', idCover: 'ldsp' },
    { idFacade: 'tomari', idMaterial: 'mdf', idCover: 'pvh' }
    ]
}

  framesInfo(): object {
    return {
      position: {
        top: {
          prices: [],
          sizes: [150, 300, 400, 450, 600, 800],
          lmCode:[82140031, 82140036, 82140037, 82140038, 82140011, 82140012]
        },
        botttom:{
          prices: [1007, 1638, 2051, 1571, 2255, 2255, 2838, 2838, 2838],
          sizes: [150, 300, 400, 450, 600, 800, 1000, 1050, 1200],
          lmCode: [82140023, 82140024, 82140025, 82140026, 82140027, 82140028, 82140013, 82140013, 82140013]
        }
      }
    }
  }

  calc(len, sizes): any {
    const maxLength = Math.ceil(len * 0.002);
    function permutation(len: number, acc = []):Promise<any> {
      let res: any;
      res = [];
      sizes.forEach(s => {
        let temp = null
    
        // if (s === 1200) {
        //   if(acc.length > 3) {return res}
        //   else temp = permutation(len-s, acc.concat([s]))
        // }
    
        // else if (s === 1050) {
        //   if(acc.length > 3) {return res}
        //   else temp = permutation(len-s, acc.concat([s]))
        // }
    
        // else if (s === 1000) {
        //   if(acc.length >= 3) {return res}
        //   else temp = permutation(len-s, acc.concat([s]))
        // }
    
        if (s === 600) {
          if(acc.length >= 4) {return res}
          else temp = permutation(len-s, acc.concat([s]))
        }
    
        else if (s === 400) {
          if(acc.length >= 2) {return res}
          else temp = permutation(len-s, acc.concat([s]))
        }
    
        else if (s === 450) {
          if(acc.length >= 2) {return res}
          else temp = permutation(len-s, acc.concat([s]))
        }
    
        else if (s === 300) {
          if(acc.length >= 2) {return res}
          else temp = permutation(len-s, acc.concat([s]))
        }
    
        if (s === 150) {
          if(acc.length >= 1) {return res}
          else temp = permutation(len-s, acc.concat([s]))
        } 
    
        else if (s == len) {
          res.push(acc.concat([s]))
        } 
    
        else if (s < len) {
          if(acc.length == maxLength) {return res}
          temp = permutation(len-s, acc.concat([s]))
        } 
        if (temp) {
          res = res.concat(temp)
        }
      })
      if (res.length) {
        return res
      }
    }
    return permutation(len)
  }
}
