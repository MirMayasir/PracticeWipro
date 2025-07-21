import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements ControlValueAccessor{

  @Input()  label = '';
  @Input() maxDate : Date | undefined;
  bsConfig : Partial<BsDatepickerConfig> | undefined;

 colourTheme = 'theme-green';
  constructor(@Self() public ngControl:NgControl){
    this.ngControl.valueAccessor = this;
    this.bsConfig = {
      containerClass: this.colourTheme,
      dateInputFormat: 'DD MMMM YYYY',
    }
  }
  writeValue(obj: any): void {
    console.log("hello");
    
  }
  registerOnChange(fn: any): void {  
    console.log("hello");
   
  }
  registerOnTouched(fn: any): void {
   
   console.log("hello");
  }

  get control() : FormControl{
    return this.ngControl.control as FormControl;
  }
  

}
