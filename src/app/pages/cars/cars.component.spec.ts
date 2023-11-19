import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CarsComponent } from './cars.component';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarsComponent, NoopAnimationsModule],
    });
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checkedFilter() should return checked items', () => {
    component.filter = {
      makers: [
        { title: 'マツダ', value: 'マツダ', checked: false },
        { title: 'トヨタ', value: 'トヨタ', checked: false },
        { title: 'ホンダ', value: 'ホンダ', checked: true },
        { title: '日産', value: '日産', checked: true },
      ],
      bodyTypes: [
        { title: 'SUV', value: 'SUV', checked: false },
        { title: 'Sedan', value: 'SEDAN', checked: true },
        { title: 'ハッチバック', value: 'HATCHBACK', checked: false },
      ],
      powerTrains: [
        { title: 'エンジン', value: 'ICE', checked: false },
        { title: 'ストロングHV', value: 'StrHV', checked: false },
        { title: 'マイルドHV', value: 'MldHV', checked: true },
        { title: 'バッテリーEV', value: 'BEV', checked: false },
        { title: 'シリーズHV', value: 'SerHV', checked: false },
      ],
      driveSystems: [
        { title: 'FF', value: 'FF', checked: false },
        { title: 'FR', value: 'FR', checked: true },
        { title: 'RR', value: 'RR', checked: false },
      ],
    };
    expect(component.checkedFilter().makers).toContain({
      title: 'ホンダ',
      value: 'ホンダ',
      checked: true,
    });
    expect(component.checkedFilter().bodyTypes).toContain({
      title: 'Sedan',
      value: 'SEDAN',
      checked: true,
    });
    expect(component.checkedFilter().powerTrains).toContain({
      title: 'マイルドHV',
      value: 'MldHV',
      checked: true,
    });
    expect(component.checkedFilter().driveSystems).toContain({
      title: 'FR',
      value: 'FR',
      checked: true,
    });
  });

  it('onCloseMakerTag() should update checked value', () => {
    component.filter = {
      makers: [
        { title: 'マツダ', value: 'マツダ', checked: false },
        { title: 'トヨタ', value: 'トヨタ', checked: false },
        { title: 'ホンダ', value: 'ホンダ', checked: true },
        { title: '日産', value: '日産', checked: true },
      ],
      bodyTypes: [
        { title: 'SUV', value: 'SUV', checked: false },
        { title: 'Sedan', value: 'SEDAN', checked: true },
        { title: 'ハッチバック', value: 'HATCHBACK', checked: false },
      ],
      powerTrains: [
        { title: 'エンジン', value: 'ICE', checked: false },
        { title: 'ストロングHV', value: 'StrHV', checked: false },
        { title: 'マイルドHV', value: 'MldHV', checked: true },
        { title: 'バッテリーEV', value: 'BEV', checked: false },
        { title: 'シリーズHV', value: 'SerHV', checked: false },
      ],
      driveSystems: [
        { title: 'FF', value: 'FF', checked: false },
        { title: 'FR', value: 'FR', checked: true },
        { title: 'RR', value: 'RR', checked: false },
      ],
    };
    component.onCloseMakerTag('日産');
    expect(component.filter.makers).toContain({
      title: '日産',
      value: '日産',
      checked: false,
    });
  });

  it('onCloseBodyTypeTag() should update checked value', () => {
    component.filter = {
      makers: [
        { title: 'マツダ', value: 'マツダ', checked: false },
        { title: 'トヨタ', value: 'トヨタ', checked: false },
        { title: 'ホンダ', value: 'ホンダ', checked: true },
        { title: '日産', value: '日産', checked: true },
      ],
      bodyTypes: [
        { title: 'SUV', value: 'SUV', checked: false },
        { title: 'Sedan', value: 'SEDAN', checked: true },
        { title: 'ハッチバック', value: 'HATCHBACK', checked: false },
      ],
      powerTrains: [
        { title: 'エンジン', value: 'ICE', checked: false },
        { title: 'ストロングHV', value: 'StrHV', checked: false },
        { title: 'マイルドHV', value: 'MldHV', checked: true },
        { title: 'バッテリーEV', value: 'BEV', checked: false },
        { title: 'シリーズHV', value: 'SerHV', checked: false },
      ],
      driveSystems: [
        { title: 'FF', value: 'FF', checked: false },
        { title: 'FR', value: 'FR', checked: true },
        { title: 'RR', value: 'RR', checked: false },
      ],
    };
    component.onCloseBodyTypeTag('SEDAN');
    expect(component.filter.bodyTypes).toContain({
      title: 'Sedan',
      value: 'SEDAN',
      checked: false,
    });
  });

  it('onClosePowerTrainTag() should update checked value', () => {
    component.filter = {
      makers: [
        { title: 'マツダ', value: 'マツダ', checked: false },
        { title: 'トヨタ', value: 'トヨタ', checked: false },
        { title: 'ホンダ', value: 'ホンダ', checked: true },
        { title: '日産', value: '日産', checked: true },
      ],
      bodyTypes: [
        { title: 'SUV', value: 'SUV', checked: false },
        { title: 'Sedan', value: 'SEDAN', checked: true },
        { title: 'ハッチバック', value: 'HATCHBACK', checked: false },
      ],
      powerTrains: [
        { title: 'エンジン', value: 'ICE', checked: false },
        { title: 'ストロングHV', value: 'StrHV', checked: false },
        { title: 'マイルドHV', value: 'MldHV', checked: true },
        { title: 'バッテリーEV', value: 'BEV', checked: false },
        { title: 'シリーズHV', value: 'SerHV', checked: false },
      ],
      driveSystems: [
        { title: 'FF', value: 'FF', checked: false },
        { title: 'FR', value: 'FR', checked: true },
        { title: 'RR', value: 'RR', checked: false },
      ],
    };
    component.onClosePowerTrainTag('MldHV');
    expect(component.filter.powerTrains).toContain({
      title: 'マイルドHV',
      value: 'MldHV',
      checked: false,
    });
  });

  it('onCloseDriveSystemTag() should update checked value', () => {
    component.filter = {
      makers: [
        { title: 'マツダ', value: 'マツダ', checked: false },
        { title: 'トヨタ', value: 'トヨタ', checked: false },
        { title: 'ホンダ', value: 'ホンダ', checked: true },
        { title: '日産', value: '日産', checked: true },
      ],
      bodyTypes: [
        { title: 'SUV', value: 'SUV', checked: false },
        { title: 'Sedan', value: 'SEDAN', checked: true },
        { title: 'ハッチバック', value: 'HATCHBACK', checked: false },
      ],
      powerTrains: [
        { title: 'エンジン', value: 'ICE', checked: false },
        { title: 'ストロングHV', value: 'StrHV', checked: false },
        { title: 'マイルドHV', value: 'MldHV', checked: true },
        { title: 'バッテリーEV', value: 'BEV', checked: false },
        { title: 'シリーズHV', value: 'SerHV', checked: false },
      ],
      driveSystems: [
        { title: 'FF', value: 'FF', checked: false },
        { title: 'FR', value: 'FR', checked: true },
        { title: 'RR', value: 'RR', checked: false },
      ],
    };
    component.onCloseDriveSystemTag('FR');
    expect(component.filter.driveSystems).toContain({
      title: 'FR',
      value: 'FR',
      checked: false,
    });
  });
});
