import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Size } from '../../interfaces/product';

export class AddProductForm extends FormGroup {
  readonly name = this.get('name') as FormControl;
  readonly description = this.get('description') as FormControl;
  readonly quantity = this.get('quantity') as FormControl;
  readonly sizes = this.get('sizes') as FormControl;
  readonly sku = this.get('sku') as FormControl;
  readonly price = this.get('price') as FormControl;
  readonly photos = this.get('photos') as FormControl;

  sizeOptions: Size[] = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor(readonly fb: FormBuilder = new FormBuilder()) {
    super(
      fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        quantity: ['', Validators.pattern('[0-9]*$')],
        sizes: ['', Validators.required],
        price: ['', Validators.pattern('[0-9]*$')],
        sku: [''],
      }).controls
    );
  }
}
