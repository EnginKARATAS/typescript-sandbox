class User {
  firstName: string;
  lastName: string;
  email: string;
  public readonly id: number;
  protected dob: Date; //date of birth

  get fullname(): string {
    return this.firstName + this.lastName;
  }

  isEmailMatches(email: string): boolean {
    return email === this.email;
  }
}
