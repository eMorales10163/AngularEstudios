import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ActiveBlockedVivoPipe'})
export class ActiveBlockedVivoPipe implements PipeTransform {
    transform(value) {
        return value ? 'Vivo' : 'Muerto';
    }
}
