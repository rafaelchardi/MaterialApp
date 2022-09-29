import { Component, OnInit ,Input ,forwardRef   } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-myimput',
  templateUrl: './myimput.component.html',
  styleUrls: ['./myimput.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true
    }]
})
export class InputControlComponent implements OnInit, ControlValueAccessor {
  @Input() myLabel: string = '';
  counter: number = 0;
  value: string='';
  isDisabled: boolean=false;
  onChange = (_:any) => { }
  onTouch = () => { }


  constructor() { }
  ngOnInit() {
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
      this.counter = value.length;
    } else {
      this.value = '';
    }

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
   }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  onInput(event:any) {
    const value =event.target.value
    this.counter = value.length;
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }
}
