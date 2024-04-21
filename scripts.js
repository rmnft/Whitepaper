document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('tokenomicsChart').getContext('2d');
    if (ctx) {
        var tokenomicsChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Developer Wallet', 'Locked Liquidity', 'Burn', 'Community'],
                datasets: [{
                    data: [2, 7, 45.2, 45.6],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    datalabels: {
                        color: '#fff',
                        anchor: 'end',
                        align: 'start',
                        offset: -10,
                        borderRadius: 25,
                        backgroundColor: (context) => {
                            return context.dataset.backgroundColor[context.dataIndex];
                        },
                        formatter: (value, context) => {
                            let sum = 0;
                            let dataArr = context.dataset.data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage = (value*100 / sum).toFixed(2)+"%";
                            return percentage;
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });
    }
});
