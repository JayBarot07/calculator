const inp1=document.getElementById("inp1")
const inp2=document.getElementById("inp2")
const select=document.getElementById("select")
const btn=document.getElementById("btn")
const totalincome=document.getElementById("totalincome")
const totalexpense=document.getElementById("totalexpense")
const h2=document.getElementById("h2")
const p1=document.getElementById("p1")
const p2=document.getElementById("p2")


let incomecount=1;
let expensecount=1;


btn.addEventListener('click',function(e){
  if(select.value==1){
    let layout=`<tr>
    <td>${incomecount}</td>
    <td>${inp1.value}</td>
    <td>${inp2.value}</td>
    </tr>`
    totalincome.insertAdjacentHTML("beforebegin",layout)
incomecount++
p1.innerText= +p1.innerText + +inp1.value

  }
  else if (select.value==2) {
    let layout=`<tr>
    <td>${expensecount}</td>
    <td>${inp1.value}</td>
    <td>${inp2.value}</td>
    </tr>`
    totalexpense.insertAdjacentHTML("beforebegin",layout)
    expensecount++
    p2.innerText= +p2.innerText + +inp1.value
  }
let newh2=p1.innerText-p2.innerText
console.log(newh2);
if(newh2<=200){
  h2.innerText=` Your Savings are not looking good:  ${newh2}`
h2.classList.add("red")
h2.classList.remove("green")
}
else if (newh2>=200) {
  h2.innerText=` Your Saving's are looking good:  ${newh2}`
  h2.classList.add("green")
  h2.classList.remove("red")
}
inp1.value="";
inp2.value=""
})
