/*getting the table data
describe("database", () => {
    it("Testing DB", () => {
      cy.task("queryDb", "select * from Emp;").then(res => {
        const results = Object.values(res[0]);
        cy.log(results[0]);
        cy.log(results[1]);
      });
    });
  });*/
  
//insert the data into sql table
/*describe('Insert data into SQL table', () => {
    it('should insert data into EMP table', () => {
      const query = `INSERT INTO EMP (EMP_ID, EMP_NAME, Dept, Sal) VALUES (1, 'John Doe', 'Engineering', 50000)`;
      
      cy.task('queryDb', query).then((result) => {
        expect(result.affectedRows).to.equal(1);
      });
    });
  });*/
  
  /*delete the data from sql table

  describe('SQL Table Operations', () => {
  
    it('should insert data into EMP table', () => {
      const insertQuery = `INSERT INTO EMP (EMP_ID, EMP_NAME, Dept, Sal) VALUES (1, 'John Doe', 'Engineering', 50000)`;
  
      cy.task('queryDb', insertQuery).then((result) => {
        expect(result.affectedRows).to.equal(1);
      });
    });
  
    it('should delete data from EMP table', () => {
      const deleteQuery = `DELETE FROM EMP WHERE EMP_ID = 1`;
  
      cy.task('queryDb', deleteQuery).then((result) => {
        expect(result.affectedRows).to.equal(1);
      });
    });
  
  });*/
  

  describe('Update row in SQL table', () => {
    it('should update employee salary', () => {
      const empId = 2; // Employee ID to update
      const newSalary = 60000;
      const updateQuery = `UPDATE EMP SET Sal = ${newSalary} WHERE EMP_ID = ${empId}`;
      const selectQuery = `SELECT Sal FROM EMP WHERE EMP_ID = ${empId}`;
  
      cy.task('queryDb', updateQuery)
        .then(() => cy.task('queryDb', selectQuery))
        .then(rows => {
          expect(rows).to.have.lengthOf(1);
          expect(rows[0].Sal).to.equal(newSalary);
        });
    });
  });
  