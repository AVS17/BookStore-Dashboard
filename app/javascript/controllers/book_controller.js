import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const divElement = this.element;
        const data = JSON.parse(divElement.getAttribute('data-books-sells'));
        const id = divElement.getAttribute('book-id');
        let xValues = [];


        for (let i = 0; i < data.length; i++) {
            xValues.push(i);
        }

        new Chart(`book_chart_${id}`, {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    fill: false,
                    lineTension: 0,
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(52,152,219)",
                    data: data
                }]
            },
            options: {
                legend: { display: false },
                title: { display: false }
            }
        });
    }
}
