export class Employee {
  public usename: String;
  public password: String;
  public privilageLvl: String;
  public fullName: String;
  public section: String;
  public floor: number;
  public mobileNumber: String;

  constructor(usename: String,
              password: String,
              privilageLvl: String,
              fullName: String,
              section: String,
              floor: number,
              mobileNumber: String) {
    this.usename = usename;
    this.password = password;
    this.privilageLvl = privilageLvl;
    this.fullName = fullName;
    this.section = section;
    this.floor = floor;
    this.mobileNumber = mobileNumber;


  }

}
