-- Below command is use to create the database 
create database clientDB;
-- move inside a database using below command 
use clientDB;
-- create table as ClientDetails 
create table ClientDetails(
cid int primary key,
cname varchar(30) not null,
email varchar(30) unique not null,
password varchar(30)
);
-- view table structure 
desc ClientDetails;
-- below command insert 10 record 
INSERT INTO ClientDetails (cid, cname, email, password) VALUES
(1, 'John Smith', 'john.smith@gmail.com', 'john@123'),
(2, 'Emma Johnson', 'emma.johnson@gmail.com', 'emma@123'),
(3, 'Michael Brown', 'michael.brown@gmail.com', 'michael@123'),
(4, 'Olivia Davis', 'olivia.davis@gmail.com', 'olivia@123'),
(5, 'William Wilson', 'william.wilson@gmail.com', 'william@123'),
(6, 'Sophia Martinez', 'sophia.martinez@gmail.com', 'sophia@123'),
(7, 'James Anderson', 'james.anderson@gmail.com', 'james@123'),
(8, 'Isabella Thomas', 'isabella.thomas@gmail.com', 'isabella@123'),
(9, 'Benjamin Taylor', 'benjamin.taylor@gmail.com', 'benjamin@123'),
(10, 'Mia Moore', 'mia.moore@gmail.com', 'mia@123');

-- View all records from ClientDetails table 
select * from ClientDetails;

-- table creationg for ClientMeeting 
create table ClientMeeting(
MeetingId int primary key auto_increment,
MeetingTopic varchar(100),
NumberOfPeople int,
MeetingDate date check(MeetingDate>sysdate()),
ClientId int, 
foreign Key(ClientId) references ClientDetails(cid)
);

select sysdate();


INSERT INTO ClientMeeting (MeetingTopic, NumberOfPeople, MeetingDate, ClientId) VALUES
-- Client 1 (multiple meetings)
('Project Kickoff', 5, '2026-06-10', 1),
('Requirement Discussion', 6, '2026-06-12', 1),
('Final Review', 4, '2026-06-20', 1),

-- Client 2 (multiple meetings)
('Initial Meeting', 3, '2026-06-11', 2),
('Design Discussion', 7, '2026-06-15', 2),

-- Client 3 (single meeting)
('Planning Session', 5, '2026-06-13', 3),

-- Client 4 (multiple meetings)
('Architecture Review', 8, '2026-06-18', 4),
('Testing Discussion', 6, '2026-06-22', 4),
('Deployment Planning', 5, '2026-06-28', 4),

-- Client 5 (single meeting)
('Demo Presentation', 10, '2026-06-25', 5);

desc ClientMeeting;

select * from ClientMeeting;

desc ClientDetails;

select cd.cname,cm.meetingtopic,cm.numberofpeople,cm.meetingdate from ClientDetails cd 
inner join
ClientMeeting cm on cd.cid = cm.clientId;


 











