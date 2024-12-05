document.getElementById('calculate').addEventListener("click",function(){
    const income= document.getElementById("income").value ;
    const software= document.getElementById("software").value ;
    const courses= document.getElementById("courses").value ;
    const internet= document.getElementById("internet").value ;
    const totalExpense= document.getElementById("total-expenses");
    const balance= document.getElementById("balance");

if(income<=0 || isNaN(income)){
    document.getElementById('income-error').classList.remove("hidden")
}

    const incomeNumber=parseFloat(income)
        const softwareNumber=parseFloat(software)
        const coursesNumber=parseFloat(courses)
        const internetNumber=parseFloat(internet)
        const totalCost=softwareNumber +coursesNumber+internetNumber
        const TotalBalance= incomeNumber-totalCost
         balance.innerText=TotalBalance.toFixed(2)
        totalExpense.innerText=totalCost.toFixed(2)
        const results=document.getElementById('results')
            console.log(results);
            results.classList.remove('hidden')
            // history
    const historyItem=document.createElement("div");

    const historyContainer=document.getElementById("history-list")
    historyItem.innerHTML=`
    <h1>this is ib</h1>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <p>income: ${incomeNumber}</p>
    <p>Total Balance: ${TotalBalance}</p>
    `
    historyContainer.appendChild(historyItem)
 historyContainer.insertBefore(historyItem,historyContainer.firstChild)   
})


document.getElementById('calculate-savings').addEventListener("click",function(){
    const income= document.getElementById("income").value ;
    const software= document.getElementById("software").value ;
    const courses= document.getElementById("courses").value ;
    const internet= document.getElementById("internet").value ;
    const totalExpense= document.getElementById("total-expenses");
    const balance= document.getElementById("balance");
   


    const incomeNumber=parseFloat(income)
    const softwareNumber=parseFloat(software)
    const coursesNumber=parseFloat(courses)
    const internetNumber=parseFloat(internet)
    const totalCost=softwareNumber +coursesNumber+internetNumber
    const TotalBalance= incomeNumber-totalCost
    balance.innerText=TotalBalance.toFixed(2)
    totalExpense.innerText=totalCost.toFixed(2)
   
   const savingsRate=document.getElementById("savings").value;
   const savingsAmount=TotalBalance*savingsRate/100
   document.getElementById("savings-amount").innerText=savingsAmount
   const remaingBalance=TotalBalance-savingsAmount
   document.getElementById("remaining-balance").innerText=remaingBalance
   console.log(savingsAmount);
})

const historyTab = document.getElementById("history-tab")
const assistantTab = document.getElementById("assistant-tab");
const expenseForm =document.getElementById("expense-form")
const historySection =document.getElementById("history-section")
historyTab.addEventListener("click",function(){
    historyTab.classList.add(
        "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
    );
    historyTab.classList.remove('text-gray-600');
    assistantTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    assistantTab.classList.add('text-gray-600');
    expenseForm.classList.add("hidden")
    historySection.classList.remove("hidden")
});
assistantTab.addEventListener("click",function(){
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistantTab.classList.remove('text-gray-600');
    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    historyTab.classList.add('text-gray-600');

    expenseForm.classList.remove("hidden")
    historySection.classList.add("hidden")
})