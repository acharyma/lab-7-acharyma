//ORIGINAL NODE FILE!

// var dataset;
// const total_width = 1000;
// const total_height = 600;


// d3.json("airports.json", d3.autoType).then(data=>{
//     console.log(data);
//     const margin = { top: 100, right: 20, bottom: 40, left: 90 }
//     const width = total_width - margin.left - margin.right
//     const height = total_height - margin.top - margin.bottom; 

//     let svg = d3.select(".chart-container1").append("svg").attr("viewBox", [0,0,width,height]);


//     let nodes = data.nodes;
//     console.log(nodes)
//     let edges = data.links;
//     console.log(edges)

//     let force = d3.forceSimulation(nodes)
//         .force("charge", d3.forceManyBody().strength(-25))
//         .force("link", d3.forceLink(edges).distance(30))
//         .force("center",d3.forceCenter()
//             .x(width/2)
//             .y(height/2)
//         );

    
//     let link = svg
//         .selectAll(".link")
//         .data(edges)
//         .enter()
//         .append("line")
//         .attr("stroke", "black")
//         .attr("class", "link")
    
//     const size = d3.scaleLinear()
//         .domain(d3.extent(nodes, d=>d.passengers))
//         .range([5, 14]);
    
//     nodes.forEach(d=>{
//         d.r = size(d.passengers);
//     })



//     let drag = simulation => {
  
//         function dragstarted(event) {
//           if (!event.active) simulation.alphaTarget(0.3).restart();
//           event.subject.fx = event.subject.x;
//           event.subject.fy = event.subject.y;
//         }
        
//         function dragged(event) {
//           event.subject.fx = event.x;
//           event.subject.fy = event.y;
//         }
        
//         function dragended(event) {
//           if (!event.active) simulation.alphaTarget(0);
//           event.subject.fx = null;
//           event.subject.fy = null;
//         }
        
//         return d3.drag()
//             .on("start", dragstarted)
//             .on("drag", dragged)
//             .on("end", dragended); 
//       }



//     let node = svg
//     .selectAll(".node")
//     .data(data.nodes)
//     .enter()
//     .append("circle")
//     .attr("class", "node")
//     .attr("r", d=>d.r)
//     .attr("fill", "orange")
//     .call(drag(force));

//     node.append("title")
//         .text(d=>d.name);


//     force.on("tick", function() {
//         node.attr("cx", function(d) {
//             return d.x;
//             })
//             .attr("cy", function(d) {
//             return d.y;
//             });
    
//         link.attr("x1", function(d) {
//             return d.source.x;
//             })
//             .attr("y1", function(d) {
//             return d.source.y;
//             })
//             .attr("x2", function(d) {
//             return d.target.x;
//             })
//             .attr("y2", function(d) {
//             return d.target.y;
//             });
//         });

// });