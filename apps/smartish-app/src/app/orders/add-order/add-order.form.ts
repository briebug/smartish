import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Payment } from '../+state/order';

class AddressForm extends FormGroup {
  readonly addressLine1 = this.get('addressLine1') as FormControl;
  readonly city = this.get('city') as FormControl;
  readonly state = this.get('state') as FormControl;
  readonly zip = this.get('zip') as FormControl;

  stateOptions = ['OH'];

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        addressLine1: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: [null, Validators.required],
      }).controls
    );
  }
}

class CustomerForm extends FormGroup {
  readonly firstName = this.get('firstName') as FormControl;
  readonly lastName = this.get('lastName') as FormControl;
  readonly phone = this.get('phone') as FormControl;
  readonly email = this.get('email') as FormControl;

  get Address(): AddressForm {
    return this.controls.address as AddressForm;
  }

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: new AddressForm(fb),
      }).controls
    );
  }
}

export class AddOrderForm extends FormGroup {
  readonly total = this.get('total') as FormControl;
  readonly payment = this.get('payment') as FormControl;
  readonly items = this.get('items') as FormControl;

  get Customer(): CustomerForm {
    return this.controls.customer as CustomerForm;
  }

  paymentOptions: Payment[] = ['Unpaid', 'Paid', 'Refunded'];

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        total: ['', Validators.required],
        payment: ['Unpaid'],
        items: [null, Validators.required],
        customer: new CustomerForm(fb),
      }).controls
    );
  }
}
