import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appValidateEqual][formControlName],[appValidateEqual][formControl],[appValidateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true
  }]
})
export class EqualValidatorDirective {

  constructor( @Attribute('validateEqual') public validateEqual: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    const v = c.value;

    // control value (e.g. password)
    const e = c.root.get(this.validateEqual);

    // value not equal
    if (e && v !== e.value) {
      return {
        validateEqual: false
      };
    }
    return null;
  }

}
