export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;

  constructor(input: any){
    this.id = input.id;
    Object.assign(this, input.attributes);
    return this;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
