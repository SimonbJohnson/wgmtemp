function generateDistance(id,data,rows,columns,state,details){
	console.log('distance');
    let width = $(id).width();
    let scale = width/columns;

    let svg = d3.select(id)
            .append("svg")
            .attr("width", width)
            .attr("height", rows*scale);

    data.forEach(function(d){
        let circleWeight1 = d['Q16-most'];
        let circleWeight2 = d['Q16-few'];
        let circleWeight3 = d['Q17'];
        //d.circle1Y = Math.min(d['Q16-most']/d['Q16-few']*20,40)+10;
        d.circle1Y = Math.min(d['Q16-most'],50)
        //d.circle2Y = Math.min(d['Q16-few']/d['Q16-most']*20,40)+10;
        d.circle2Y = Math.min(d['Q16-few'],50)
        d.circle3X = d['Q17'];
    });


    svg.selectAll("text")
      .data(data)
    .enter().append("text")
      .attr('class','countrylabel')
      .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
      .attr("y",function(d,i) { return (i % rows)*scale + scale*0.9; })
      .style("text-anchor", "middle")
      .text(function(d){
        return d['country name'];
      });

  if(details==true){
    svg.selectAll(".whitecircle1")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + 0.25*scale })
        .attr("cy", function(d,i) { return (i % rows)*scale+d.circle1Y*scale/100+scale*0.15; })
        .attr("r", function(d){ return 100*scale/750})
        .attr("fill","#FFFFFF")
        .style("stroke",'#999999')
        .style("stroke-width",1);

      svg.selectAll(".whitecircle2")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + 0.75*scale })
        .attr("cy", function(d,i) { return (i % rows)*scale+d.circle2Y*scale/100+scale*0.15; })
        .attr("r", function(d){ return 100*scale/750})
        .attr("fill","#FFFFFF")
        .style("stroke",'#999999')
        .style("stroke-width",1);        
  }

    if(state>1){
      if(state>2){
        svg.selectAll("line2")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1", function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("x2", function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("y1", function(d,i) {
            return (i % rows)*scale + scale * 0.15
          })
          .attr("y2", function(d,i) {
            return (i % rows)*scale + scale * 0.65
          })
          .attr("stroke","#ffffff00")
          .attr("stroke-width",scale*0.1)
          .attr("stroke-linecap","round");

        svg.selectAll("line3")
          .data(data)
        .enter().append("line")
          .attr("class", "line")
          .attr("x1", function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("x2", function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
          .attr("y1", function(d,i) {
            return (i % rows)*scale + scale * 0.15+(1-d['Q17']/100.0)*0.55*scale
          })
          .attr("y2", function(d,i) {
            return (i % rows)*scale + scale * 0.7
          })
          .attr("stroke",function(d){
            return getHex(d['Q17']);
          })
          .attr("stroke-width",scale*0.08)
          .attr("stroke-linecap","round");
      }

      svg.selectAll("line4")
        .data(data)
      .enter().append("line")
        .attr("class", "line")
        .attr("x1", function(d,i) { return Math.floor(i / rows) * scale + 0.25*scale })
        .attr("y1", function(d,i) { return (i % rows)*scale+d.circle1Y*scale/100+scale*0.15; })
        .attr("x2", function(d,i) { return Math.floor(i / rows) * scale + 0.75*scale })
        .attr("y2", function(d,i) { return (i % rows)*scale+d.circle2Y*scale/100+scale*0.15; })
        .attr("stroke", "#3F1A13")
        .attr("stroke-width", 2*scale/100);


      svg.selectAll(".circle2")
        .data(data)
      .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + 0.75*scale })
        .attr("cy", function(d,i) { return (i % rows)*scale+d.circle2Y*scale/100+scale*0.15; })
        .attr("r", function(d){
          return Math.sqrt(d['Q16-few'])*scale/75
        })
        .attr("fill","#F8B133");
  }

    svg.selectAll(".circle1")
      .data(data)
    .enter().append("circle")
      .attr("class", "circle")
      .attr("cx", function(d,i) { return Math.floor(i / rows) * scale + 0.25*scale })
      .attr("cy", function(d,i) { return (i % rows)*scale+d.circle1Y*scale/100+scale*0.15; })
      .attr("r", function(d){ 
      	return Math.sqrt(d['Q16-most'])*scale/75
      })
      .attr("fill","#4DAFCE");

    if(details==true){
      svg.selectAll("textlabel1")
        .data(data)
      .enter().append("text")
        .attr('class','percentlabel')
        .attr("x",function(d,i) { return Math.floor(i / rows) * scale + scale*0.5 })
        .attr("y",function(d,i) { return (i % rows)*scale + scale * 0.15+(1-d['Q17']/100.0)*0.55*scale; })
        .attr("dy","-1.2rem")
        .style("text-anchor", "middle")
        .text(function(d){
          return parseInt(d['Q17'])+'%';
        });

      svg.selectAll("textlabel2")
        .data(data)
      .enter().append("text")
        .attr('class','percentlabel')
        .attr("x", function(d,i) { return Math.floor(i / rows) * scale + 0.25*scale })
        .attr("y", function(d,i) { return (i % rows)*scale+d.circle1Y*scale/100+scale*0.15; })        
        .attr("dy",parseInt(150*scale/750)+"px")
        .style("text-anchor", "middle")
        .text(function(d){
          return parseInt(d['Q16-most'])+'%';
        });

      svg.selectAll("textlabel3")
        .data(data)
      .enter().append("text")
        .attr('class','percentlabel')
        .attr("x", function(d,i) { return Math.floor(i / rows) * scale + 0.75*scale })
        .attr("y", function(d,i) { return (i % rows)*scale+d.circle2Y*scale/100+scale*0.15; })        
        .attr("dy",parseInt(150*scale/750)+"px")
        .style("text-anchor", "middle")
        .text(function(d){
          return parseInt(d['Q16-few'])+'%';
        });
    }
}

function getHex(value){
  let upper = [63, 26, 19];
  //let lower = [185, 178, 164];
  let lower = [211, 206, 197];
  value = Math.max(value - 50,0);
  let r = Math.floor(upper[0]*value/50 + lower[0]*(1-value/50));
  let g = Math.floor(upper[1]*value/50 + lower[1]*(1-value/50));
  let b = Math.floor(upper[2]*value/50 + lower[2]*(1-value/50));
  return "rgb("+r+","+g+","+b+")";
}