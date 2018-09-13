import {Deserializable} from './deserializable.model';

export class User implements Deserializable {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: Date;

  deserialize(input: any) {
    this.id = input.id;
    Object.assign(this, input.attributes);
    return this;
  }

  getFullName() {
    return this.first_name + ' ' + this.last_name;
  }
}
