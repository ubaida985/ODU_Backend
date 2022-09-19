const csvFileCVD = "../../datasets/CVD/CVD_DA.csv"
const csvFilePerformance = "../../datasets/Performance/sp3.csv"
const csvFileQOL = "../../datasets/QoL/QoL2.csv"
const graphOne = document.getElementById("graphOne");
const graphTwo = document.getElementById("graphTwo");
const graphThree = document.getElementById("graphThree");
const graphFour = document.getElementById("graphFour");
const graphFive = document.getElementById("graphFive");
const graphSix = document.getElementById("graphSix");
const graphSeven = document.getElementById("graphSeven");
const graphEight = document.getElementById("graphEight");
const graphNine = document.getElementById("graphNine");
const graphTen = document.getElementById("graphTen");
const graphEleven = document.getElementById("graphEleven");
const graphTwelve = document.getElementById("graphTwelve");
const graphThirteen = document.getElementById("graphThirteen");
const graphFourteen = document.getElementById("graphFourteen");
const graphFifteen = document.getElementById("graphFifteen");
const graphSixteen = document.getElementById("graphSixteen");
let ldl = [], tobacco = [], alcohol = [], sbp = [], adiposity = [], famhist = [], typea = [], obesity = [], age = [], chd = [];
let sex = [], ageP = [], address = [], famsize = [], pstatus = [], medu = [], fedu = [], travelTime = [], studyTime = [], failures = [], schoolsup = [], famsup = [], paid_x = [], activities = [], nursery = [], higher = [], internet = [], romantic = [], famrel = [], freetime = [], goout = [], dalc = [], walc = [], health = [], absences = [], G1_Mat = [], G2_Mat = [], G3_Mat = [], paid_y = [], G1_Por = [], G2_Por = [], G3_Por = [];
let index = [], ageQ = [], education = [], maritalStatus = [], occupation = [], socioEconomicStatus = [], comorbidity = [], tobaccoUse = [], alcoholUse = [], qol = [];


function plotFromCSV() {

    //cvd first graph
    var data = [
        {
            x: ldl,
            y: tobacco,
            //TODO : fix this color thing
            marker: {
                color: 'famhist'
            },
            boxpoints: 'all',
            type: 'box'
        }
      ];
      var layout = {
        xaxis: {
          title: 'Low-density lipoprotein',
          zeroline: false
        },
        yaxis: {
          title: 'Tobacco Consumption (kg)',
          zeroline: false
        }
      };  
      
    Plotly.newPlot(graphOne, data, layout)
    

    //cvd second graph
    var trace1 = {
        x: sbp,
        y: alcohol,
        type: "histogram",
      };
      var trace2 = {
        x: sbp,
        y: alcohol,
        type: "histogram",
      };
      data = [trace1, trace2];
      var layout = { 
        barmode: "stack", 
        title: "SBP vs Alcohol", 
        xaxis: {title: "Systollic BP"}, 
        yaxis: {title: "Alcohol"}
      };
      Plotly.newPlot(graphTwo, data, layout);


      //performance first graph
      data = [
        {
            x: walc,
            y: failures,
            boxpoints: 'all',
            type: 'box'
        }
      ];
      var layout = {
        xaxis: {
          title: 'Walc',
          zeroline: false
        },
        yaxis: {
          title: 'Failures',
          zeroline: false
        }
      };  
      
    Plotly.newPlot(graphThree, data, layout)

    //performance second graph
    //TODO: COLOR : SEX
    data =[ {
        x: walc,
        y: failures,
        type: "bar",
      }];
    Plotly.newPlot(graphFour, data, layout);


    //performance third graph
    //TODO : COLOR SEX
    data =[ {
        x: G3_Por,
        y: walc,
        type: "bar",
      }];
      var layout = {
        xaxis: {
          title: 'G3_Por',
          zeroline: false
        },
        yaxis: {
          title: 'Walc',
          zeroline: false
        }
      };  
    Plotly.newPlot(graphFive, data, layout);

    //performance fourth graph
    //TODO : COLOR SEX
    var data = [{
        values: walc,
        type: 'pie',
        labels: absences,
      }];
      
      var layout = {
        title: 'Effect of Alcohol Consumption on Absences'
      };
    Plotly.newPlot(graphSix, data, layout);

    //performance fifth graph
    data =[ {
        x: walc,
        type: "histogram", 
        marker:  sex
        ,
      }];
      var layout = {
        xaxis: {
          title: 'Walc',
          zeroline: false
        }
      };  
    Plotly.newPlot(graphSeven, data, layout);

    //performance sixth graph
    data = [{
        type: 'scatter3d',
        mode: 'lines',
        x: studyTime,
        y: freetime,
        z: walc,
        opacity: 1,
        line: {
          width: 6,
          color: sex,
          reversescale: false
        }
      }];
    layout =  {
        height: 640
      }
    Plotly.newPlot(graphEight, data, layout);

    //performance seven graph
    //TODO COLOR SEX
    data = [{
        type: 'scatterternary',
        mode: 'markers',
        a: walc,
        b: freetime,
        c: studyTime,
        marker: {
            symbol: 100,
            color: '#DB7365',
            size: 14,
            line: { width: 2 }
        },
    }]
    Plotly.newPlot(graphNine, data, layout);


    //PERFORMANCE EIGHTH GRAPH
    //TODO Color Romantic, FacetCol Sex
    var trace1 = {
        x: studyTime,
        y: walc,
        mode: 'markers',
        type: 'scatter'
      };
      
      var data = [trace1];
      Plotly.newPlot(graphTen, data);


      //PERFORMANCE NINTH GRAPH
      //TODO COLOR SEX, 
      data =[ {
        x: walc,
        y: G3_Mat,
        type: "histogram", 
        marker:  sex,
        mode: 'group'
        ,
      }];
      var layout = {
        xaxis: {
          title: 'Alchol Consumption',
          zeroline: false
        },
        yaxis: {
            title: 'Logical Marks',
            zeroline: false
          },
        barmode: 'group'
      };  
    Plotly.newPlot(graphEleven, data, layout);


      //PERFORMANCE TENTH GRAPH
      //TODO COLOR SEX
      data =[ {
        x: walc,
        y: G3_Por,
        type: "histogram", 
        marker:  sex
        ,
      }];
      var layout = {
        xaxis: {
          title: 'Alchol Consumption',
          zeroline: false
        },
        yaxis: {
            title: 'Literature Marks',
            zeroline: false
          },
          barmode: 'group'
      };  
    Plotly.newPlot(graphTwelve, data, layout);




      //PERFORMANCE ELEVENTH GRAPH
      //TODO color marital status
      data =[ {
        x: education,
        y: qol,
        type: "histogram", 
        marker:  sex
        ,
      }];
      var layout = {
        xaxis: {
          title: 'Education',
          zeroline: false
        },
        yaxis: {
            title: 'Sum of QoL',
            zeroline: false
          },
          barmode: 'group'
      };  
    Plotly.newPlot(graphThirteen, data, layout);

    

      //Quality of lifef first GRAPH
      //TODO color tobaccoUse
      data =[ {
        x: alcoholUse,
        y: qol,
        type: "histogram", 
        marker:  sex
        ,
      }];
      var layout = {
        xaxis: {
          title: 'Alcohol Use',
          zeroline: false
        },
        yaxis: {
            title: 'Sum of QoL',
            zeroline: false
          },
          barmode: 'group'
      };  
    Plotly.newPlot(graphFourteen, data, layout);
      
    
    

      //Quality of lifef second GRAPH
      //TODO color and title
      var data = [{
        values: alcoholUse,
        type: 'pie',
        labels: maritalStatus,
        title: ''
      }];
      
      var layout = {
        title: 'Effect of Alcohol Consumption on Absences'
      };
    Plotly.newPlot(graphFifteen, data, layout);
      
    
    

      //Quality of lifef third GRAPH
      //TODO color and title
      var data = [{
        values: alcoholUse,
        type: 'pie',
        labels: socioEconomicStatus,
        title: ''
      }];
      
      var layout = {
        title: 'Effect of Alcohol Consumption on Absences'
      };
    Plotly.newPlot(graphSixteen, data, layout);
      
}

function getDataCVD(){
    fetch(csvFileCVD).then(res => {
        return res.text();
    }).then(data => {
        let result = data.split(/\r?\n|\r/).map(
            e => {
                return e.split(",");
            }
        )
        console.log(result.length);
        processDataCVD(result)
        plotFromCSV();
    })
}
function processDataCVD(data){
    let i = 0;
    while( i < data.length ){
        row = data[i];
        sbp.push(data[i][1]);
        tobacco.push(data[i][2]);
        ldl.push(data[i][3]);
        adiposity.push(data[i][4]);
        famhist.push(data[i][5]);
        typea.push(data[i][6]);
        obesity.push(data[i][7]);
        alcohol.push(data[i][8]);
        age.push(data[i][9]);
        chd.push(data[i][10]);

        ++ i;
    }
}


function getDataPerformance(){
    fetch(csvFilePerformance).then(res => {
        return res.text();
    }).then(data => {
        let result = data.split(/\r?\n|\r/).map(
            e => {
                return e.split(",");
            }
        )
        console.log(result.length);
        processDataPerformance(result)
        plotFromCSV();
    })
}


function processDataPerformance(data){
    let i = 0;
    while( i < data.length ){
        row = data[i];
        sex.push(data[i][1]);
        ageP.push(data[i][2]);
        address.push(data[i][3]);
        famsize.push(data[i][4]);
        pstatus.push(data[i][5]);
        medu.push(data[i][6]);
        fedu.push(data[i][7]);
        travelTime.push(data[i][8]);
        studyTime.push(data[i][9]);
        failures.push(data[i][10]);
        schoolsup.push(data[i][10]);
        famsup.push(data[i][11]);
        paid_x.push(data[i][12]);
        activities.push(data[i][13]);
        nursery.push(data[i][14]);
        higher.push(data[i][15]);
        internet.push(data[i][16]);
        romantic.push(data[i][17]);
        famrel.push(data[i][18]);
        freetime.push(data[i][19]);
        goout.push(data[i][20]);
        dalc.push(data[i][21]);
        walc.push(data[i][22]);
        health.push(data[i][23]);
        absences.push(data[i][24]);
        G1_Mat.push(data[i][25]);
        G2_Mat.push(data[i][26]);
        G3_Mat.push(data[i][27]);
        paid_y.push(data[i][28]);
        G1_Por.push(data[i][29]);
        G2_Por.push(data[i][30]);
        G3_Por.push(data[i][31]);

        ++ i;
    }
}

function getDataQOL(){
    fetch(csvFileQOL).then(res => {
        return res.text();
    }).then(data => {
        let result = data.split(/\r?\n|\r/).map(
            e => {
                return e.split(",");
            }
        )
        console.log(result.length);
        processDataQOL(result)
        plotFromCSV();
    })
}

function processDataQOL(data){
    let i = 0;
    while( i < data.length ){
        row = data[i];
        index.push(data[i][1]);
        ageQ.push(data[i][2]);
        education.push(data[i][3]);
        maritalStatus.push(data[i][4]);
        occupation.push(data[i][5]);
        socioEconomicStatus.push(data[i][6]);
        comorbidity.push(data[i][7]);
        tobaccoUse.push(data[i][8]);
        alcoholUse.push(data[i][9]);
        qol.push(data[i][10]);

        ++ i;
    }
}

getDataCVD();
getDataPerformance();
getDataQOL();

var x, y;
function optionSelected(element){
    x = element.options[element.selectedIndex].value;
}

function dynamicChart(element){
    y = element.options[element.selectedIndex].value;
    if( x == 'ldl' ){
        x = ldl;
    }else if( x == 'tobacco' ){
        x = tobacco;
    }else if( x == 'adiposity' ){
        x = adiposity;
    }else if( x == 'alcohol' ){
        x = alcohol;
    }else if( x == 'sbp' ){
        x = sbp;
    }else if( x == 'famhist' ){
        x = famhist;
    }else if( x == 'typea' ){
        x = typea;
    }else if( x == 'obesity' ){
        x = obesity;
    }else if( x == 'age' ){
        x = age;
    }else if( x == 'chd' ){
        x = chd;
    }else if( x == 'sex' ){
        x = sex;
    }else if( x == 'ageP' ){
        x = ageP;
    }else if( x == 'address' ){
        x = address;
    }else if( x == 'famsize' ){
        x = famsize;
    }else if( x == 'pstatus' ){
        x = pstatus;
    }else if( x == 'medu' ){
        x = medu;
    }else if( x == 'fedu' ){
        x = fedu;
    }else if( x == 'travelTime' ){
        x = travelTime;
    }else if( x == 'studyTime' ){
        x = studyTime;
    }else if( x == 'failures' ){
        x = failures;
    }else if( x == 'schoolsup' ){
        x = schoolsup;
    }else if( x == 'fams_up' ){
        x = fams_up;
    }else if( x == 'paid_x' ){
        x = paid_x;
    }else if( x == 'activities' ){
        x = activities;
    }else if( x == 'nursery' ){
        x = nursery;
    }else if( x == 'higher' ){
        x = higher;
    }else if( x == 'internet' ){
        x = internet;
    }else if( x == 'romantic' ){
        x = romantic;
    }else if( x == 'famrel' ){
        x = famrel;
    }else if( x == 'freetime' ){
        x = freetime;
    }else if( x == 'goout' ){
        x = goout;
    }else if( x == 'dalc' ){
        x = dalc;
    }else if( x == 'walc' ){
        x = walc;
    }else if( x == 'health' ){
        x = health;
    }else if( x == 'absences' ){
        x = absences;
    }else if( x == 'G1_Mat' ){
        x = G1_Mat;
    }else if( x == 'G2_Mat' ){
        x = G2_Mat;
    }else if( x == 'G3_Mat' ){
        x = G3_Mat;
    }else if( x == 'G1_Por' ){
        x = G1_Por;
    }else if( x == 'G2_Por' ){
        x = G2_Por;
    }else if( x == 'G3_Por' ){
        x = G3_Por;
    }else if( x == 'paid_y' ){
        x = paid_y;
    }else if( x == 'index' ){
        x = index;
    }else if( x == 'education' ){
        x = education;
    }else if( x == 'maritalStatus' ){
        x = maritalStatus;
    }else if( x == 'occupation' ){
        x = occupation;
    }else if( x == 'socioEconomicStatus' ){
        x = socioEconomicStatus;
    }else if( x == 'comorbidity' ){
        x = comorbidity;
    }else if( x == 'tobaccoUse' ){
        x = tobaccoUse;
    }else if( x == 'alcoholUse' ){
        x = alcoholUse;
    }else if( x == 'qol' ){
        x = qol;
    }

    if( y == 'ldl' ){
        y = ldl;
    }else if( y == 'tobacco' ){
        y = tobacco;
    }else if( y == 'adiposity' ){
        y = adiposity;
    }else if( y == 'alcohol' ){
        y = alcohol;
    }else if( y == 'sbp' ){
        y = sbp;
    }else if( y == 'famhist' ){
        y = famhist;
    }else if( y == 'typea' ){
        y = typea;
    }else if( y == 'obesity' ){
        y = obesity;
    }else if( y == 'age' ){
        y = age;
    }else if( y == 'chd' ){
        y = chd;
    }else if( y == 'sex' ){
        y = sex;
    }else if( y == 'ageP' ){
        y = ageP;
    }else if( y == 'address' ){
        y = address;
    }else if( y == 'famsize' ){
        y = famsize;
    }else if( y == 'pstatus' ){
        y = pstatus;
    }else if( y == 'medu' ){
        y = medu;
    }else if( y == 'fedu' ){
        y = fedu;
    }else if( y == 'travelTime' ){
        y = travelTime;
    }else if( y == 'studyTime' ){
        y = studyTime;
    }else if( y == 'failures' ){
        y = failures;
    }else if( y == 'schoolsup' ){
        y = schoolsup;
    }else if( y == 'fams_up' ){
        y = fams_up;
    }else if( y == 'paid_x' ){
        y = paid_x;
    }else if( y == 'activities' ){
        y = activities;
    }else if( y == 'nursery' ){
        y = nursery;
    }else if( y == 'higher' ){
        y = higher;
    }else if( y == 'internet' ){
        y = internet;
    }else if( y == 'romantic' ){
        y = romantic;
    }else if( y == 'famrel' ){
        y = famrel;
    }else if( y == 'freetime' ){
        y = freetime;
    }else if( y == 'goout' ){
        y = goout;
    }else if( y == 'dalc' ){
        y = dalc;
    }else if( y == 'walc' ){
        y = walc;
    }else if( y == 'health' ){
        y = health;
    }else if( y == 'absences' ){
        y = absences;
    }else if( y == 'G1_Mat' ){
        y = G1_Mat;
    }else if( y == 'G2_Mat' ){
        y = G2_Mat;
    }else if( y == 'G3_Mat' ){
        y = G3_Mat;
    }else if( y == 'G1_Por' ){
        y = G1_Por;
    }else if( y == 'G2_Por' ){
        y = G2_Por;
    }else if( y == 'G3_Por' ){
        y = G3_Por;
    }else if( y == 'paid_y' ){
        y = paid_y;
    }else if( y == 'index' ){
        y = index;
    }else if( y == 'education' ){
        y = education;
    }else if( y == 'maritalStatus' ){
        y = maritalStatus;
    }else if( y == 'occupation' ){
        y = occupation;
    }else if( y == 'socioEconomicStatus' ){
        y = socioEconomicStatus;
    }else if( y == 'comorbidity' ){
        y = comorbidity;
    }else if( y == 'tobaccoUse' ){
        y = tobaccoUse;
    }else if( y == 'alcoholUse' ){
        y = alcoholUse;
    }else if( y == 'qol' ){
        y = qol;
    }

    //cvd first graph
    var data = [
        {
            x: x,
            y: y,
            //TODO : fix this color thing
            marker: {
                color: 'famhist'
            },
            boxpoints: 'all',
            type: 'box'
        }
      ];
      
    Plotly.newPlot("formContainer", data)
}   
/**PYTHON -> JS
 * NAMES becomes LABELS
 */