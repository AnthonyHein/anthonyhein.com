function drawChart0() {
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Percent of Code'],
        ['Python',      60],
        ['Javascript',  14],
        ['HTML',        10],
        ['Golang',      7],
        ['R',           5],
        ['CSS',         3],
        ['SQL',         1],
    ]);

    var options = {
        title: 'Estimated Language Use by % (Past 6 months)',
        tooltip: {
            text: 'percentage'
        },
        pieSliceText: 'label',
        titleTextStyle: {
            color: '#1E2A45'
        },
        legend: {
            textStyle: {
                color: '#1E2A45'
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Percent of Code'],
        ['Python',  50],
        ['C',  37],
        ['Other',   13]
    ]);

    var options = {
        title: 'Estimated Language Use by % (Past Year)',
        tooltip: {
            text: 'percentage'
        },
        pieSliceText: 'label',
        titleTextStyle: {
            color: '#1E2A45'
        },
        legend: {
            textStyle: {
                color: '#1E2A45'
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Percent of Code'],
        ['Python',  36],
        ['C',  25],
        ['Java',   34],
        ['Other',   5]
    ]);

    var options = {
        title: 'Estimated Language Use by % (All Time)',
        tooltip: {
            text: 'percentage'
        },
        pieSliceText: 'label',
        titleTextStyle: {
            color: '#1E2A45'
        },
        legend: {
            textStyle: {
                color: '#1E2A45'
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Projects', { role: 'style' }],
        ['Java', 18, '#3366CC'],
        ['Python', 12, '#DC3912'],
        ['SQL', 8, '#FF9900'],
        ['C', 6, '#109618'],
        ['HTML/CSS', 6, '#990099'],
        ['Verilog', 6, '#0099C6'],
        ['Javascript', 5, '#DD4477'],
        ['R', 3, '#66AA00'],
        ['ARMv8', 1, '#B82E2E'],
        ['Golang', 1, '#316395'],
    ]);
    
    var options = {
        title: '# of Projects Using Language (All Time)',
        titleTextStyle: {
            color: '#1E2A45'
        },
        hAxis: {
            title: 'Language',
            color: '#1E2A45'
        },
        vAxis: {
            title: 'Projects',
            color: '#1E2A45',
            format: '##',
            gridlines: {
                multiple: 1,
                interval: 1
            }
        },
        legend: { position: 'none' }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("chart"));
    chart.draw(data, options);
}

$(document).ready(function() {
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart0);
    $('#chart').addClass('chart-0');
    
    
    $('#chart-right').click(function () {
        if ($('#chart').hasClass('chart-0')) {
            $('#chart').removeClass('chart-0');
            $('#chart').addClass('chart-1');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart1);
        }
        else if ($('#chart').hasClass('chart-1')) {
            $('#chart').removeClass('chart-1');
            $('#chart').addClass('chart-2');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart2);
        }
        else if ($('#chart').hasClass('chart-2')) {
            $('#chart').removeClass('chart-2');
            $('#chart').addClass('chart-3');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart3);
        }
        else if ($('#chart').hasClass('chart-3')) {
            $('#chart').removeClass('chart-3');
            $('#chart').addClass('chart-0');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart0);
        }
    });  
    
    
    $('#chart-left').click(function () {
        if ($('#chart').hasClass('chart-0')) {
            $('#chart').removeClass('chart-0');
            $('#chart').addClass('chart-3');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart3);
        }
        else if ($('#chart').hasClass('chart-1')) {
            $('#chart').removeClass('chart-1');
            $('#chart').addClass('chart-0');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart0);
        }
        else if ($('#chart').hasClass('chart-2')) {
            $('#chart').removeClass('chart-2');
            $('#chart').addClass('chart-1');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart1);
        }
        else if ($('#chart').hasClass('chart-3')) {
            $('#chart').removeClass('chart-3');
            $('#chart').addClass('chart-2');
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart2);
        }
    });   
    
});