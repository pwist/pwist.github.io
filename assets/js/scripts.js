/*
* Zoom Images, Get Date and Shadow
* ========================================================================== */

(function() {
  /* variables */
  var shadow = document.getElementById('shadow');
  var images = document.querySelectorAll('a img');
  var imageHeight = window.innerHeight - 20;

  /* events */
  shadow.addEventListener('click', resetShadow, false);
  window.addEventListener('keydown', resetStyles, false);
  window.addEventListener('resize', refreshImageSizes, false);

  /* functions */
  setDate();
  toggleImages();


  function setDate() {
    var currentYear = document.querySelector('.full-year');
    if (currentYear) {
      currentYear.innerHTML = new Date().getFullYear();
    }
  }

  function refreshImageSizes() {
    // select all images
    [].forEach.call(images, function(img) {
      // if image zoomed
      if (img.classList.contains('img-popup')) {
        img.style.maxHeight = imageHeight + 'px';
        img.style.marginLeft = '-' + (img.offsetWidth / 2) + 'px';
        img.style.marginTop = '-' + (img.offsetHeight / 2) + 'px';
      }
    });
  }

  function resetShadow() {
    shadow.style.display = 'none';
    resetAllImages();
  }

  function resetStyles(event) {
    if (event.keyCode == 27) {
      event.preventDefault();
      shadow.style.display = 'none';
      resetAllImages();
    }
  }

  function resetAllImages() {
    [].forEach.call(images, function(img) {
      img.classList.remove('img-popup');
      img.style.cursor = 'zoom-in';
      img.style.marginLeft = 'auto';
      img.style.marginTop = 'auto';
    });
  }

  function toggleImages() {
    [].forEach.call(images, function(img) {
      img.addEventListener('click', function(event) {
        event.preventDefault();
        img.classList.toggle('img-popup');
        if (img.classList.contains('img-popup')) {
          img.style.cursor = 'zoom-out';
          img.style.maxHeight = imageHeight + 'px';
          img.style.marginLeft = '-' + (img.offsetWidth / 2) + 'px';
          img.style.marginTop = '-' + (img.offsetHeight / 2) + 'px';
          shadow.style.display = 'block';
        } else {
          img.style.cursor = 'zoom-in';
          img.style.maxHeight = '100%';
          img.style.marginLeft = 'auto';
          img.style.marginTop = 'auto';
          shadow.style.display = 'none';
        }
      });
    });
  }
})();


/*
* Aside Resize
* ========================================================================== */

(function() {
  var aside = document.querySelector('.sidebar');
  var mainContainer = document.querySelectorAll('.content-wrapper');
  var switcher = document.getElementById('switcher');

  switcher.addEventListener('click', slide, false);


  function slide() {
    aside.classList.add('transition-divs');
    aside.classList.toggle('aside-left');
    [].forEach.call(mainContainer, function(c) {
      c.classList.add('transition-divs');
      c.classList.toggle('centering');
    });
  }
})();


function addSvgAndLoadData(lang) {
  var margin = {top: 20, right: 160, bottom: 35, left: 30};

  var width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  var svg = d3.select("#charts")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var parse = d3.time.format("%Y").parse;
  var dataColumns;
  var dataFile;

  if (lang == "sv") {
    dataColumns = ["Gädda", "Abborre", "Lake", "Gös", "Braxen", "Mört", "Id", "Övrigt"];
    dataFile = "/json_data/fangster.json";
  } else {
    dataColumns = ["Hauki", "Ahven", "Made", "Kuha", "Lahna", "Särki", "Säynävä", "Muut"];
    dataFile = "/json_data/saalit.json";
  }
  d3.json(dataFile, function(error, data) {
  if (error) {
      throw error;
  }
      var dataset = d3.layout.stack()(dataColumns.map(function(fish) {
          return data.map(function(d) {
              return {x: parse(d.year), y: +d[fish]};
              });
          })
      );
      renderStackedBarchart(width, height, svg, dataset, dataColumns);
  });

}

function renderStackedBarchart(width, height, svg, dataset, dataColumns) {
  console.log(dataset);
  var x = d3.scale.ordinal()
  .domain(dataset[0].map(function(d) { return d.x; }))
  .rangeRoundBands([10, width-10], 0.02);

  var y = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
  .range([height, 0]);

  var colors = d3.scale.category10();

  var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(5)
  .tickSize(-width, 0, 0)
  .tickFormat( function(d) { return d } );

  var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .tickFormat(d3.time.format("%Y"));

  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

  svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

  var groups = svg.selectAll("g.cost")
  .data(dataset)
  .enter().append("g")
  .attr("class", "cost")
  .style("fill", function(d, i) { return colors(i); });

  var rect = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d) { return x(d.x); })
  .attr("y", function(d) { return y(d.y0 + d.y); })
  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
  .attr("width", x.rangeBand())
  .on("mouseover", function() {
    tooltip.style("display", null);
  })
  .on("mouseout", function() {
    tooltip.style("display", "none");
  })
  .on("mousemove", function(d) {
  var xPosition = d3.mouse(this)[0] - 15;
  var yPosition = d3.mouse(this)[1] - 25;
  tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
  tooltip.select("text").text(d.y + " kg");
  });


  var legend = svg.selectAll(".legend")
  .data(dataColumns)
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });

  legend.append("rect")
  .attr("x", width - 18)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", function(d, i) {return colors(i);});

  legend.append("text")
  .attr("x", width + 5)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .text(function(d, i) {
      return dataColumns[i];
  });


  var tooltip = svg.append("g")
  .attr("class", "tooltip")
  .style("display", "none");

  tooltip.append("rect")
  .attr("width", 30)
  .attr("height", 20)
  .attr("fill", "white")
  .style("opacity", 0.5);

  tooltip.append("text")
  .attr("x", 15)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .attr("font-size", "12px")
  .attr("font-weight", "bold");
}