USE EMS;

drop table if exists EmployLogin;

Create Table EmployLogin
(
   EMP_ID INT,
   SecretCode varchar(30)
);
   
INSERT INTO EmployLogin values(1000,'Rishab'),(2000,'Laxmi'),(3000,'Raghu'),(4000,'Bindu'),
(5000,'SaiKiran')   