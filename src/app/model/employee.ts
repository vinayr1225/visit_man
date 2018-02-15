export class Employee {
  public username: String;
  public password: String;
  public privilageLvl: String;
  public fullname: String;
  public section: String;
  public floor: number;
  public mobileNumber: String;

  constructor(username: String,
              password: String,
              privilageLvl: String,
              fullname: String,
              section: String,
              floor: number,
              mobileNumber: String) {
    this.username = username;
    this.password = password;
    this.privilageLvl = privilageLvl;
    this.fullname = fullname;
    this.section = section;
    this.floor = floor;
    this.mobileNumber = mobileNumber;


  }

}
