export class Database {
  find(callback) {
    const data =  [
      {
        id: 1,
        name: "Max Kaplan"
      },
      {
        id: 2,
        name: "John Doe"
      },
      {
        id: 3,
        name: "Ben Smith"
      }

    ];
    callback(data);
  }
}
