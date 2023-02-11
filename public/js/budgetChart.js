var ctx = document.getElementById("chart").getContext('2d');
var income = document.getElementById("income").value;
var expense = document.getElementById("expense").value;

console.log(income + "========" + expense)
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ "Expense","Income"],
        datasets: [{    
            data: [expense,income], // Specify the data values array
         
            borderColor: ['#f443368c','#00968896'], // Add custom color border
            backgroundColor: ['#f443368c', '#00968896'], // Add custom color background (Points and Fill)
            borderWidth: 2 // Specify bar border width
        }]},        
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    }
});