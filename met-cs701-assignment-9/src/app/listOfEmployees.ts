import { Employee } from './employees'; 
export const EMPLOYEES: Employee[] = [
    { employeeNumber: 1002, lastName: 'Murphy', firstName: 'Diane', extension: 'x5800', email: 'dmurphy@classicmodelcars.com', officeCode: '1', reportsTo: undefined, jobTitle: 'President' }, 
    { employeeNumber: 1056, lastName: 'Patterson', firstName: 'Mary', extension: 'x4611', email: 'mpatterso@classicmodelcars.com', officeCode: '1', reportsTo: 1002, jobTitle: 'VP Sales' }, 
    { employeeNumber: 1076, lastName: 'Firrelli', firstName: 'Jeff', extension: 'x9273', email: 'jfirrelli@classicmodelcars.com', officeCode: '1', reportsTo: 1002, jobTitle: 'VP Marketing' }, 
    { employeeNumber: 1088 , lastName:'Patterson' , firstName:'William' , extension: 'x4871', email: 'wpatterson@classicmodelcars.com', officeCode: '6', reportsTo:1056 , jobTitle:'Sales Manager (APAC)'}, 
    { employeeNumber:1143 , lastName:'Bow' , firstName:'Anthony' , extension:'x5428' , email:'abow@classicmodelcars.com' , officeCode:'1' , reportsTo: 1056, jobTitle:'Sales Manager (NA)'  }, 
    { employeeNumber: 1165, lastName:'Jennings' , firstName:'Leslie' , extension:'x3291' , email:'ljennings@classicmodelcars.com' , officeCode: '1', reportsTo:1143 , jobTitle:'Sales Rep' }, 
    { employeeNumber:1166 , lastName:'Thompson' , firstName:'Leslie' , extension: 'x4065', email:'lthompson@classicmodelcars.com', officeCode:'1' , reportsTo: 1143, jobTitle: 'Sales Rep' }, 
    { employeeNumber:1188 , lastName:'Firrelli' , firstName:'Julie' , extension:'x2173' , email:'jfirrelli@classicmodelcars.com' , officeCode:'2' , reportsTo: 1143, jobTitle: 'Sales Rep' }, 
    { employeeNumber: 1216, lastName:'Patterson' , firstName:'Steve' , extension:'x4334' , email:'spatterson@classicmodelcars.com' , officeCode:'2' , reportsTo: 1143, jobTitle:'Sales Rep'}, 
    { employeeNumber: 1286, lastName: 'Tseng', firstName:'Foon Yue' , extension:'x2248' , email:'ftseng@classicmodelcars.com' , officeCode:'3' , reportsTo:1143 , jobTitle: 'Sales Rep'}, 
    { employeeNumber:1323 , lastName:'Vanauf' , firstName:'George' , extension:'x4102' , email:'gvanauf@classicmodelcars.com' , officeCode:'3' , reportsTo: 1143, jobTitle:'Sales Rep'  }, 
    { employeeNumber:1337 , lastName:'Bondur' , firstName:'Loui' , extension:'x6493' , email:'lbondur@classicmodelcars.com' , officeCode:'4' , reportsTo:1102 , jobTitle:'Sales Rep'  }, 
    { employeeNumber:1401 , lastName:'Castillo' , firstName: 'Pamela', extension:'x2759' , email:'pcastillo@classicmodelcars.com' , officeCode:'4' , reportsTo:1102 , jobTitle:'Sales Rep'  }, 
    { employeeNumber: 1501, lastName:'Bott' , firstName:'Larry' , extension:'x2311' , email:'lbott@classicmodelcars.com' , officeCode:'7' , reportsTo:1102 , jobTitle:'Sales Rep'  }, 
    { employeeNumber:1504 , lastName:'Jones' , firstName:'Barry' , extension:'x102' , email:'bjones@classicmodelcars.com' , officeCode:'7' , reportsTo:1102 , jobTitle:'Sales Rep'  }, 
    { employeeNumber:1611 , lastName:'Fixter' , firstName:'Andy' , extension:'x101' , email:'afixter@classicmodelcars.com' , officeCode:'6' , reportsTo:1088 , jobTitle:'Sales Rep'  }, 
    { employeeNumber:1619, lastName:'King' , firstName:'Tom' , extension:'x103' , email:'tking@classicmodelcars.com' , officeCode:'6' , reportsTo:1088 , jobTitle:'Sales Rep'  }, 
    { employeeNumber:1621 , lastName:'Nishi' , firstName:'Mami' , extension:'x101' , email:'mnishi@classicmodelcars.com' , officeCode:'5' , reportsTo:1056 , jobTitle:'Sales Rep'  }, 
    { employeeNumber:1702 , lastName:'Gerard' , firstName:'Martin' , extension:'x2312' , email:'mgerard@classicmodelcars.com' , officeCode: '4', reportsTo:1102 , jobTitle:'Sales Rep'}
];