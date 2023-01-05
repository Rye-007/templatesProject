
var chartPie_Data = {
    labels: ['HP', 'DELL', 'Apple iMac', 'ทั้งหมด'],
    datasets: [{
      label: 'Count of Votes',
      data: [17, 12, 5, 7,],
      backgroundColor: [ 'red','blue','yellow','green']
    }]
  }
// Pie Chart
var chartPie = document.getElementById('chartPie').getContext('2d');
var chartPie_options = {
  cutoutPercentage: 0,
  cutoutPercentage: 70,
  legend: {position:'right',
    labels:{
      pointStyle:'circle',
      usePointStyle:true
    }
  }
};
if (chartPie) {
  new Chart(chartPie, {
    type: 'pie',
    data: chartPie_Data,
    options: chartPie_options
  });
}

  // chart 2
var chartPie_Data = {
  labels: ['HP', 'DELL', 'Macbook Pro', 'Macbook Air', 'ทั้งหมด', ],
  datasets: [{
    label: 'Count of Votes',
    data: [17, 12, 5, 7, 2,],
    backgroundColor: [ 'red','blue','yellow','green','purple',]
  }]
}
// Pie Chart
var chartPie2 = document.getElementById('chartPie2').getContext('2d');
var chartPie_options = {
cutoutPercentage: 0,
cutoutPercentage: 70,
legend: {position:'right',
  labels:{
    pointStyle:'circle',
    usePointStyle:true
  }
}
};
if (chartPie) {
new Chart(chartPie2, {
  type: 'pie',
  data: chartPie_Data,
  options: chartPie_options
});
}

  // chart 3
var chartPie_Data = {
  labels: ['ยืม','คืน','ทั้งหมด'],
  datasets: [{
    label: 'Count of Votes',
    data: [17, 12, 10],
    backgroundColor: [ 'red','blue','green']
  }]
}
// Pie Chart
var chartPie3 = document.getElementById('chartPie3').getContext('2d');
var chartPie_options = {
cutoutPercentage: 0,
cutoutPercentage: 70,
legend: {position:'right',
  labels:{
    pointStyle:'circle',
    usePointStyle:true
  }
}
};
if (chartPie) {
new Chart(chartPie3, {
  type: 'pie',
  data: chartPie_Data,
  options: chartPie_options
});
}

  // chart 4
  var chartPie_Data = {
    labels: ['OS', 'Microsoft', 'Adobe', 'ทั้งหมด'],
    datasets: [{
      label: 'Count of Votes',
      data: [17, 12, 5, 7],
      backgroundColor: [ 'red','blue','yellow','green']
    }]
  }
// Pie Chart
var chartPie4 = document.getElementById('chartPie4').getContext('2d');
var chartPie_options = {
  cutoutPercentage: 0,
  cutoutPercentage: 70,
  legend: {position:'right',
    labels:{
      pointStyle:'circle',
      usePointStyle:true,
      
    }
  }
};
if (chartPie) {
  new Chart(chartPie4, {
    type: 'pie',
    data: chartPie_Data,
    options: chartPie_options
  });
}


