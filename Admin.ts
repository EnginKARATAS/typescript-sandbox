class Admin extends User {
  password: string;
  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  public get getId(): number {
    return this.id;
  }

  private getYear(): number {
    return this.dob.getFullYear();
  }
}
