import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let [ termino ] = args
    console.log(args);


    if( termino === '' ){
      return value
    }else{
      return value.filter( (peli : any ) => {
        console.log(termino);
        console.log(peli.title.toLowerCase().includes( termino.toLowerCase() ));


        return peli.title.toLowerCase().includes( termino.toLowerCase() )
      } )
    }
  }
}
