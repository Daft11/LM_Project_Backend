import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getItemsArray() {
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
}
