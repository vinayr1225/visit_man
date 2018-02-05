export class VisitorInfo {
  public visitorId: String;
  public name: String;
  public organization: String;

  constructor(visitorId: String,
              name: String,
              organization: String) {
    this.visitorId = visitorId;
    this.name = name;
    this.organization = organization;

  }
}
