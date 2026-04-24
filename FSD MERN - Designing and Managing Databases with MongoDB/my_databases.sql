use mydb;
select * from employee;

create view emp1_view
as 
select * from employee;

select * from emp1_view;
create view emp2_view
as 
select first_name,salary from employee;

select * from emp2_view;

create view emp3_view
as 
select e.first_name,e.salary,d.department_name from employee e
inner join department d on e.department_id=d.department_id;

select * from emp3_view;


select * from emp;

insert into emp values(100,'John',34000,'Tester');
select * from emp;

create view emp_dml_view 
as 
select * from emp;

select * from emp_dml_view;
insert into emp_dml_view values(101,'Steven',45000,'Developer');





