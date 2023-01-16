function rez()
{
q=test1.vopros1.value;
w=test1.vopros2.value;
e=test1.vopros3.value;
r=test1.vopros4.value;
t=test1.vopros5.value;
y=test1.vopros6.value;
u=test1.vopros7.value;
i=test1.vopros8.value;
o=test1.vopros9.value;
p=test1.vopros10.value;
a=test1.vopros11.value;
s=test1.vopros12.value;
d=test1.vopros13.value;
f=test1.vopros14.value;
g=test1.vopros15.value;




x=q+w+e+r+t+y+u+i+o+p+a+s+d+f+g;
c=Number(x);
v=String(c);
if (v=="NaN")
{
test1.error.value="";
}
else
{
test1.error.value=15-x;
}
if (v=="NaN")
{
alert("Попробуйте снова");
location.replace("./TID01SID07.html");
}
else
{
pro=Math.round(100*x/15);
test1.rezul.value=pro;

}
}