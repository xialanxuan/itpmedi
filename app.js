var X = 25;
var Y = 10;
var width = 1000;
var height = 1000;
var xscale = d3.scale.linear().domain([96, 101]).range([0, width]);
var yscale = d3.scale.linear().domain([50, 100]).range([height, 0]);
var rectwidth = 20;
var svg = d3.select("body").append("svg").attr("width", 2000).attr("height", 2000);
var data = [{
    temperature: 96.3,
    Maxheartrate: 80,
    Minheartrate: 70

}, {
    temperature: 98.3,
    Maxheartrate: 90,
    Minheartrate: 70

}, {
    temperature: 99.3,
    Maxheartrate: 86,
    Minheartrate: 74
}]

svg.append("g").attr("transform", "translate(200,0)").selectAll("rect").data(data).enter().append("rect")
    .attr("x",
        function(d) {
            return xscale(d.temperature);
        })
    .attr("height",
        function(d) {
            return yscale(d.Minheartrate) - yscale(d.Maxheartrate);
        }
    )
    .attr("y",
        function(d) {
            return yscale(d.Maxheartrate);
        }
    )
    .attr("width", rectwidth);

svg.append("g").attr("class", "axis").attr("transform", "translate(200,1100)").call(d3.svg.axis().scale(xscale).ticks(X).orient("down"));
svg.append("g").attr("class", "axis").attr("transform", "translate(200,100)").call(d3.svg.axis().scale(yscale).ticks(Y).orient("left"));
