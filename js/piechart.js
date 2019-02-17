function getCustomTooltipFunction(offset) {
    return function (tooltip) {
        // Tooltip Element
        var tooltipEl = $('#chartjs-tooltip');

        // Hide if no tooltip
        if (!tooltip) {
            tooltipEl.css({
                opacity: 0
            });
            return;
        }

        // Set caret Position
        tooltipEl.removeClass('above below');
        tooltipEl.addClass(tooltip.yAlign);

        // Set Text
        tooltipEl.html(tooltip.text);

        // Display, position, and set styles for font
        tooltipEl.css({
            opacity: 1,
            left: tooltip.x + offset + 'px',
            top: tooltip.y + offset + 'px',
            fontFamily: tooltip.fontFamily,
            fontSize: tooltip.fontSize,
            fontStyle: tooltip.fontStyle,
        });
    }
}

var doughnutData = [{
    value: 20,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red",
}, {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
}, {
    value: 30,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
}, {
    value: 40,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "Grey"
}, {
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
}

];

var doughnutData2 = [{
    value: 10,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red",
}, {
    value: 100,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
}, {
    value: 20,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
}, {
    value: 60,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "Grey"
}, {
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
}

];

var ctx1 = $("#d1").get(0).getContext("2d");
var myChart1 = new Chart(ctx1).Doughnut(doughnutData, {
    percentageInnerCutout: 90,
    customTooltips: getCustomTooltipFunction(0)
});

var ctx2 = $("#d2").get(0).getContext("2d");
var myChart2 = new Chart(ctx2).Doughnut(doughnutData2, {
    percentageInnerCutout: 90,
    customTooltips: getCustomTooltipFunction(50)
});
