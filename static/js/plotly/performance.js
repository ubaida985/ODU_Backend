const csvFile = "../../datasets/CVD/CVD_DA.csv"
const graphOne = document.getElementById("graphOne");
let ldl = [], tobacco = [], alcohol = [], sbp = [];


function plotFromCSV() {
    Plotly.newPlot(graphOne, [{
    x : ldl, 
    y : tobacco}], {
    margin: {t: 0} });
    
    Plotly.newPlot(graphTwo, [{
        x : sbp, 
        y : alcohol}], {
        margin: {t: 0} });
}

onload = fetch(csvFile).then(res => {
    return res.text();
}).then(data => {
    let result = data.split(/\r?\n|\r/).map(
        e => {
            return e.split(",");
        }
    )
    console.log(result.length);
    processData(result)
    plotFromCSV();
})

function processData(data){
    let i = 1;
    while( i < data.length ){
        row = data[i];
        sbp.push(data[i][1]);
        tobacco.push(data[i][2]);
        ldl.push(data[i][3]);
        alcohol.push(data[i][8]);
        ++ i;
    }
}
