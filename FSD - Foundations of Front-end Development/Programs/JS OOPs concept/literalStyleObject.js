// object in literal style with only property 
let product1 = {pid:100,pname:"TV",price:15000,qty:10}
document.write("<br/> Product details ")
document.write("<br/> PId is "+product1.pid)
document.write("<br/> PName is "+product1.pname)
document.write("<br/> Price is "+product1.price)
document.write("<br/> Qty is "+product1.qty)
// object in literal style with complex property 
let emp1 = {eid:1,ename:"Bob",age:21,skillSet:["Java","Python","JS"],
        address:
        {city:"New York City",state:"New York"},
        project:[
            {prid:1122,tech:"Java"},
            {prid:1123,tech:"python"},
            {prid:1124,tech:"JS"}
        ]}

document.write("<br/> Employee details")
document.write("<br/> id is "+emp1.eid)
document.write("<br/> Name is "+emp1.ename)
document.write("<br/> age is "+emp1.age)
document.write("<br/> SkillSet is "+emp1.skillSet); // display as string format
document.write("<br/> All skill information one by one") 
emp1.skillSet.forEach(skill=>document.write("<br/> Skill "+skill))
document.write("<br/> City is "+emp1.address.city)
document.write("<br/> State is "+emp1.address.state)
document.write("<br/>  display 1 index position skillSet "+emp1.skillSet[1])
document.write("<br/> 3rd project technology name "+emp1.project[2].tech)
emp1.project.forEach(project=>document.write("<br/> PId "+project.prid+" Tech name"+project.tech))