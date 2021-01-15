import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(workers: any[], myStr: string, onFilter: string): any[] {
    if (onFilter === 'idDown') { //ID по убыванию
      workers = workers.sort(
        (a, b) => b.id - a.id
      )
    } else if (onFilter === 'idUp') { // ID по возрастанию
      workers = workers.sort(
        (a, b) => a.id - b.id
      )
    } else if (onFilter === 'ageDown') { //Возраст по убыванию
      workers = workers.sort(function(a, b) {
        let aAge = a.birthday.slice(0,2)+a.birthday.slice(3,5)*100+a.birthday.slice(6,10)*10000;
        let bAge = b.birthday.slice(0,2)+b.birthday.slice(3,5)*100+b.birthday.slice(6,10)*10000;
        return aAge - bAge;
      })
    } else { //onFilter === 'ageUP'. Возраст по возрастанию
      workers = workers.sort(function(a, b) {
        let aAge = a.birthday.slice(6,10)*10000+a.birthday.slice(3,5)*100+a.birthday.slice(0,2);
        let bAge = b.birthday.slice(6,10)*10000+b.birthday.slice(3,5)*100+b.birthday.slice(0,2);
        return bAge - aAge;
      })
    }
    if (myStr === '' || myStr === undefined) {
      return workers;
    }
    else{
      let filteredItems = workers.filter((worker) =>
        worker.name.toLowerCase().indexOf(myStr.toLowerCase()) !== -1 ||
        worker.surname.toLowerCase().indexOf(myStr.toLowerCase()) !== -1
      );
      return filteredItems;
    }
  }
}
