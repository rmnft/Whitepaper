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
                maintainAspectRatio: false, // Add this line to maintain aspect ratio
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    datalabels: {
                        color: '#fff',
                        display: function(context) {
                            return context.dataset.data[context.dataIndex] > 0; // Add this function to display data labels conditionally
                        },
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value, context) => {
                            let sum = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            let percentage = (value / sum * 100).toFixed(2) + '%';
                            return percentage;
                        }
                    }
                }
            },
            plugins: [ChartDataLabels] // Make sure this plugin is included
        });
    }
});
