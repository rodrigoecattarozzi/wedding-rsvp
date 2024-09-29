import React, { Component } from "react";
import Chart from "chart.js/auto";

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.chartContainerRef = React.createRef();
        this.chartInstance = null;
    }

    componentDidMount() {
        const ctx = this.chartContainerRef.current.getContext("2d");

        this.chartInstance = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Aceptadas", "Rechazadas"],
                datasets: [
                    {
                        label: "Invitaciones",
                        data: [
                            this.props.totalAcceptedInvitations,
                            this.props.totalRejectedInvitations,
                        ],
                        backgroundColor: ["#4ade80", "#f87171"],
                        borderColor: ["#22c55e", "#ef4444"],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                
            },
        });
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.totalAcceptedInvitations !==
                this.props.totalAcceptedInvitations ||
            prevProps.totalRejectedInvitations !==
                this.props.totalRejectedInvitations
        ) {
            this.chartInstance.data.datasets[0].data = [
                this.props.totalAcceptedInvitations,
                this.props.totalRejectedInvitations,
            ];
            this.chartInstance.update();
        }
    }

    componentWillUnmount() {
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }
    }

    render() {
        return <canvas ref={this.chartContainerRef} />;
    }
}

export default PieChart;
