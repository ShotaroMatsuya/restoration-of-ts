abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;

  private static instance: AccountDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (AccountDepartment.instance) {
      return this.instance; //existing one
    }
    this.instance = new AccountDepartment('d2', []); //creating new one
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID : ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'userX') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('User12');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['UserX']);

it.addEmployee('user1');
it.addEmployee('user2');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccountDepartment('d2', []);

const accounting = AccountDepartment.getInstance();
const accounting2 = AccountDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('userX');
accounting.addEmployee('user3');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
