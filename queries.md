# queries

- find all customers with postal code 1010. Returns 3 records.

[x] select * from customers where postalCode = '1010'

- find the phone number for the supplier with the id 11. Should be (010) 9984510.

[x] SELECT Phone FROM Suppliers where SupplierID = 11

- list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top

[x] SELECT * FROM Orders order by OrderDate desc limit 10

- find all customers that live in London, Madrid, or Brazil. Returns 18 records

[x] SELECT * FROM Customers where City in ('London', 'Madrid') or Country = 'Brazil'

- add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is "1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth".

[x] insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country) values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth'

- update Bilbo Baggins record so that the postal code changes to "11122".

[x] update Customers set PostalCode = '11122' where CustomerID = 92