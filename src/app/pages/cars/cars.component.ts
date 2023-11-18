import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CarsFilter } from './cars-filter';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NzLayoutModule, NzMenuModule, NzIconModule, NzCheckboxModule, NzTagModule]
})
export class CarsComponent {
  isCollapsed = false;
  filter: CarsFilter  = {
    makers: [
      { title: 'マツダ', value: 'マツダ', checked: false },
      { title: 'トヨタ', value: 'トヨタ', checked: false },
      { title: 'ホンダ', value: 'ホンダ', checked: false  },
      { title: '日産', value: '日産', checked: true  },
    ],
    bodyTypes: [
      { title: 'SUV', value: 'SUV', checked: false  },
      { title: 'Sedan', value: 'SEDAN', checked: true  },
      { title: 'ハッチバック', value: 'HATCHBACK', checked: false  },
    ],
    powerTrains: [
      { title: 'エンジン', value: 'long-range', checked: false  },
      { title: 'ストロングHV', value: 'performance', checked: false  },
      { title: 'マイルドHV', value: 'performance', checked: true  },
      { title: 'バッテリーEV', value: 'performance', checked: false  },
      { title: 'シリーズHV', value: 'performance', checked: false  },
    ],
    driveSystems: [
      { title: 'FF', value: 'FF', checked: false  },
      { title: 'FR', value: 'FR', checked: true  },
      { title: 'RR', value: 'RR', checked: false  },
    ],
  };
  checkedFilter(): CarsFilter {
    const checkedFilter : CarsFilter = {
      makers: this.filter.makers.filter(item => item.checked).map(item => item),
      bodyTypes: this.filter.bodyTypes.filter(item => item.checked).map(item => item),
      powerTrains: this.filter.powerTrains.filter(item => item.checked).map(item => item),
      driveSystems: this.filter.driveSystems.filter(item => item.checked).map(item => item),
    };
    return checkedFilter;
  };
  onCloseMakerTag(targetValue: string) {
    const itemToUpdate = this.filter.makers.find((i) => i.value === targetValue);
    if (itemToUpdate) {
      itemToUpdate.checked = false;
    }
  }
  onCloseBodyTypeTag(targetValue: string) {
    const itemToUpdate = this.filter.bodyTypes.find((i) => i.value === targetValue);
    if (itemToUpdate) {
      itemToUpdate.checked = false;
    }
  }
  onClosePowerTrainTag(targetValue: string) {
    const itemToUpdate = this.filter.powerTrains.find((i) => i.value === targetValue);
    if (itemToUpdate) {
      itemToUpdate.checked = false;
    }
  }
  onCloseDriveSystemTag(targetValue: string) {
    const itemToUpdate = this.filter.driveSystems.find((i) => i.value === targetValue);
    if (itemToUpdate) {
      itemToUpdate.checked = false;
    }
  }
}
