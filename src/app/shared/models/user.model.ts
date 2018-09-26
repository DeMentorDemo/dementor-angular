export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  avatar: String;

  constructor(input: any) {
    this.id = input.id;
    Object.assign(this, input.attributes);
    if (!this.avatar) {
      this.avatar = require('assets/images/default-profile-image.png');
    }
    return this;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
