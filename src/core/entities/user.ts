// import { Email } from "./email";

export class User {
  private firstName: string;
  private lastName: string;
  private email: string;
  // private organization?: string;
  // private accessType?: string;

  static singleton(data: any) {
    if (data === null || data == undefined) {
      return null;
    }

    if (isEmptyOrNull(data.firstName) || isEmptyOrNull(data.lastName) || isEmptyOrNull(data.email)) {
      return null;
    }
    return new User(data.firstName, data.lastName, data.email)
  }

  constructor(firstName: string, lastName: string, email: string) {
    if (isEmptyOrNull(firstName) || isEmptyOrNull(lastName)) {
      throw new Error("You must fill first name and last name");
    }

    this.email = email;
    this.firstName = firstName.toLocaleLowerCase();
    this.lastName = lastName.toLocaleLowerCase();
  }

  get myEmail(): string {
    return this.email;
  }

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static djoka(): string {
    return "asdada"
  }
}

function isEmptyOrNull(word: string) {
  return !word || word.trim().length === 0;
}
