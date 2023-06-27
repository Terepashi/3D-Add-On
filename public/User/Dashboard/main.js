//Get The Elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//Toggle the navbar menu on click Open/Close 
menuBtn.addEventListener("click", () => {
  menu.classList.toggle('nav-toggle');
});

/*===== Charts =====*/


const config = {responsive: true};
//Bar Chart
const barChartTrace1 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar',
  marker: {
    color: '#ea335d',
  }
};

const barChartTrace2 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [20, 14, 23],
  name: 'LA Zoo',
  type: 'bar',
  marker: {
    color: '#ea335d',
    opacity: 0.6,
  }
};

const barChartData = [barChartTrace1, barChartTrace2];
const layout = {
  barmode: 'stack',
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    pad: 1
  },
  font: {
    color: '#6b6f8a'
  }
};

Plotly.newPlot('barChart', barChartData, layout, config);


var firebaseConfig = {
  apiKey: "AIzaSyAGy8qyRJ2mDK6fl_bh9fWDoRtHILOKyDU",
  databaseURL: "https://authfirebase-561c0-default-rtdb.firebaseio.com/",
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var data = [];
var labels = [];

database.ref('data').on('Img', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    data.push(childData.value);
    labels.push(childData.timestamp);
  })
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    //labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Line 1',
      data: [12, 19, 3, 5, 2, 3, 20, 33, 23, 44, 56, 78],
      borderColor: '#00ff00',
      fill: false
    }, {
      label: 'Line 2',
      data: [32, 45, 12, 56, 34, 23, 12, 45, 67, 23, 12, 34],
      borderColor: '#0000ff',
      fill: false
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Scientific Chart

d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'High',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.High'),
  line: {color: '#ea335d'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: '#03dcee'}
}

var data = [trace1,trace2];
const layout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    pad: 1
  },
  font: {
    color: '#6b6f8a'
  },
  xaxis: {
    range: ['2016-07-01', '2017-02-01'],
    type: 'date'
  },
  yaxis: {
    autorange: true,
    type: 'linear'
  }
};

Plotly.newPlot('scientificChart', data, layout, config);
});


const pieChartData = [{
  values: [19, 26, 55],
  labels: ['March', 'April', 'June'],
  type: 'pie'
}];

const pieChartLayout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  piecolorway: ['#ea335d', '#03dcee', '#178add'],
  showlegend: false,
  margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 10,
    pad: 1
  },
  height: 300,
  width: 300
};

Plotly.newPlot('pieChart', pieChartData, pieChartLayout);

const donutChartData = [{
  values: [10, 40, 50],
  labels: ['Sep', 'Oct', 'Nov'],
  hole: .4,
  type: 'pie',
}];

Plotly.newPlot('donutChart', donutChartData, pieChartLayout);


var carpetChartData = {
    type: 'carpet',
    a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
    b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
    y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
    aaxis: {
      tickprefix: 'a = ',
      ticksuffix: 'm',
      smoothing: 1,
      minorgridcount: 9,
      minorgridcolor: '#ea335d',
      gridcolor: '#ea335d',
      color: '#03dcee'
    },
    baxis: {
      tickprefix: 'b = ',
      ticksuffix: 'Pa',
      smoothing: 1,
      minorgridcount: 9,
      minorgridcolor: '#ea335d',
      gridcolor: '#ea335d',
      color: '#03dcee'
    }
}

const carpetChartLayout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 10,
    pad: 1
  },
  font: {
    color: '#6b6f8a'
  },
  height: 300,
  width: 300
};

Plotly.newPlot('carpetChart', [carpetChartData], carpetChartLayout);
