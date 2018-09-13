import { Pipe, PipeTransform } from '@angular/core';
import { Countries } from './shared/countries';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     return value.filter(x => {
//         return(

//         x['name'].toLowerCase().includes(args.toLowerCase()) ||
//         x['capital'].toLowerCase().includes(args.toLowerCase())
//         );
//     });
 // }
 transform(items: any[], field: string): any[] {

    if (!field || !field) {
        return items;
    }
    return items.filter(singleItem => singleItem.name.toLowerCase().indexOf(field.toLowerCase()) !== -1) ||
    items.filter(singleItem => singleItem.capital.toLowerCase().indexOf(field.toLowerCase()) !== -1);
}
}
