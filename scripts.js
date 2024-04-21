document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('tokenomicsChart').getContext('2d');
    if(ctx) { // Check if the canvas element exists
        var tokenomicsChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Developer Wallet', 'Locked Liquidity', 'Burn', 'Community'],
                datasets: [{
                    label: 'Token Distribution',
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
                        intersect: false
                    },
                }
            }
        });
    }
});
