
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["2013-Jan", "2014-Jan"],
      datasets: [
        {
          label: "energy savings (KWH)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [791,573]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'CARS - Great Job!You used 573 KWH last month, compared to 791 KWH in the same month last year. The resulting savings is enought to offset the energy consumption of six average-size cars for one month.'
      }
    }
});

new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["2013-Jan", "2014-Jan"],
      datasets: [
        {
          label: "trees savings (trees)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [791,573]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'TREES - Great Job!You used 573 TREES last month, compared to 791 TREES in the same month last year. The resulting savings is enought to offset the energy consumption of six average-size TREES for one month.'
      }
    }
});

new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["2013-Jan", "2014-Jan"],
      datasets: [
        {
          label: "carbon savings (KWH)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [791,573]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'CARBONS - Great Job!You used 573 Pounds last month, compared to 791 Pounds in the same month last year. The resulting savings is enought to offset the energy consumption of 300 pounds for one month.'
      }
    }
});