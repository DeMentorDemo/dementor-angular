import {Deserializable} from './deserializable.model';

export class User implements Deserializable {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;

  deserialize(input: any) {
    this.id = input.id;
    Object.assign(this, input.attributes);
    return this;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
