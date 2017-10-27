var url = "http://localhost:5820/Eindproject/query?reasoning=true";
    var query = [

"PREFIX rdfs:		<http://www.w3.org/2000/01/rdf-schema#>",
"PREFIX dbo:		<http://dbpedia.org/ontology/>",
"PREFIX dbr:	<http://dbpedia.org/resource/>",
"PREFIX dr: <http://www.semanticweb.org/Group6/drugs/>",
"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>",
"PREFIX dbp: <http://dbpedia.org/property/>",
"PREFIX owl: <http://www.w3.org/2002/07/owl#>",
"SELECT DISTINCT ?drugs",
"WHERE {",
"?drugs rdf:type dr:Drug .",
"} ORDER BY ASC(UCASE(str(?drugs)))",
].join(" ");
    $.ajax({
        headers : {
            Accept: 'application/sparql-results+json'
        },
        url: url,
        data: {
            query: query
        },
        success: function(data) {
            var results = data.results.bindings;

            for (var x = 0; x < results.length; x++) {
              var drugs = results[x]['drugs']['value'].split("/")[5];

                //var res = results[i].abstract.value;
                document.getElementById('content').insertAdjacentHTML('beforeend','<p id=' + 'DrugsName' + ' onclick="showInformation(\'' + drugs + '\')">' + drugs + '</p>');
            console.log(results);
        }
      }
   });

function showInformation(drug) {
  $('#Name').empty();
  $('#Form').empty();
  $('#Intake').empty();
  $('#Effect').empty();
  $('#Risk').empty();
  $('#Active').empty();
  $('#Addiction').empty();
  $('#Dependency').empty();
  $('#Excretion').empty();
  $('#UK').empty();
  $('#US').empty();
  $('#AU').empty();
  $('#CA').empty();
  $('#DE').empty();

  var url = "http://localhost:5820/Eindproject/query?reasoning=true";
  var query = [
    "PREFIX rdfs:		<http://www.w3.org/2000/01/rdf-schema#>",
    "PREFIX dbo:		<http://dbpedia.org/ontology/>",
    "PREFIX dbr:	<http://dbpedia.org/resource/>",
    "PREFIX dr: <http://www.semanticweb.org/Group6/drugs/>",
    "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>",
    "PREFIX dbp: <http://dbpedia.org/property/>",
    "PREFIX owl: <http://www.w3.org/2002/07/owl#>",
   "SELECT ?othername ?form ?intake ?effect ?risk ?active",
   "?addiction ?dependency ?excretion ?legaluk ?legalus",
   "?legalau ?legalca ?legalde",
   "WHERE {",
   "OPTIONAL { dr:" + drug + " owl:sameAs ?othername}",
   "OPTIONAL { dr:" + drug + " dr:ExistsInForm ?form}",
   "OPTIONAL { dr:" + drug + " dr:Intake ?intake}",
   "OPTIONAL { dr:" + drug + " dr:GivesEffect ?effect}",
   "OPTIONAL { dr:" + drug + " dr:ContainsRisk ?risk}",
   "OPTIONAL { dr:" + drug + " dbp:active ?active}",
   "OPTIONAL { dr:" + drug + " dbp:addictionLiability ?addiction}",
   "OPTIONAL { dr:" + drug + " dbp:dependencyLiability ?dependency}",
   "OPTIONAL { dr:" + drug + " dbp:excretion ?excretion}",
   "OPTIONAL { dr:" + drug + " dbp:legalUk ?legaluk}",
   "OPTIONAL { dr:" + drug + " dbp:legalUs ?legalus}",
   "OPTIONAL { dr:" + drug + " dbp:legalAu ?legalau}",
   "OPTIONAL { dr:" + drug + " dbp:legalCa ?legalca}",
   "OPTIONAL { dr:" + drug + " dbp:legalDe ?legalde}",
   "} LIMIT 1",
  ].join(" ");
     $.ajax({
         headers : {
             Accept: 'application/sparql-results+json'
         },
         url: url,
         data: {
             query: query
         },
         success: function(data) {
             var results = data.results.bindings;
             console.log(results);
            for (var x = 0; x < results.length; x++) {

              if(results[x]['othername'] !== undefined) {
                var othername = results[x]['othername']['value'].split("/")[5];
                document.getElementById('Name').insertAdjacentHTML('beforeend',"<p>" + othername + "</p>");
              }

              else {
                document.getElementById('Name').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['form'] !== undefined) {
                var form = results[x]['form']['value'];
                document.getElementById('Form').insertAdjacentHTML('beforeend',"<p>" + form + "</p>");
              }

              else {
                document.getElementById('Form').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['intake'] !== undefined) {
                var intake = results[x]['intake']['value'];
                document.getElementById('Intake').insertAdjacentHTML('beforeend',"<p>" + intake + "</p>");
              }

              else {
                document.getElementById('Intake').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['effect'] !== undefined) {
                var effect = results[x]['effect']['value'];
                document.getElementById('Effect').insertAdjacentHTML('beforeend',"<p>" + effect + "</p>");
              }

              else {
                document.getElementById('Effect').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['risk'] !== undefined) {
                var risk = results[x]['risk']['value'];
                document.getElementById('Risk').insertAdjacentHTML('beforeend',"<p>" + risk + "</p>");
              }

              else {
                document.getElementById('Risk').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['active'] !== undefined) {
                var active = results[x]['active']['value'];
                document.getElementById('Active').insertAdjacentHTML('beforeend',"<p>" + active + "</p>");
              }

              else {
                document.getElementById('Active').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['addiction'] !== undefined) {
                var addiction = results[x]['addiction']['value'];
                document.getElementById('Addiction').insertAdjacentHTML('beforeend',"<p>" + addiction + "</p>");
              }

              else {
                document.getElementById('Addiction').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['dependency'] !== undefined) {
                var dependency = results[x]['dependency']['value'];
                document.getElementById('Dependency').insertAdjacentHTML('beforeend',"<p>" + dependency + "</p>");
              }

              else {
                document.getElementById('Dependency').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['excretion'] !== undefined) {
                var excretion = results[x]['excretion']['value'];
                document.getElementById('Excretion').insertAdjacentHTML('beforeend',"<p>" + excretion + "</p>");
              }

              else {
                document.getElementById('Excretion').insertAdjacentHTML('beforeend',"<p>Not in our ontology</p>");
              }

              if(results[x]['legaluk'] !== undefined) {
                var legaluk = results[x]['legaluk']['value'];
                document.getElementById('UK').insertAdjacentHTML('beforeend',"<p>United Kingdom: " + legaluk + "</p>");
              }

              else {
                document.getElementById('UK').insertAdjacentHTML('beforeend',"<p>United Kingdom: Not in our ontology</p>");
              }

              if(results[x]['legalus'] !== undefined) {
                var legalus = results[x]['legalus']['value'];
                document.getElementById('US').insertAdjacentHTML('beforeend',"<p>United States: " + legalus + "</p>");
              }

              else {
                document.getElementById('US').insertAdjacentHTML('beforeend',"<p>United States: Not in our ontology</p>");
              }

              if(results[x]['legalau'] !== undefined) {
                var legalau = results[x]['legalau']['value'];
                document.getElementById('AU').insertAdjacentHTML('beforeend',"<p>Australia: " + legalau + "</p>");
              }

              else {
                document.getElementById('AU').insertAdjacentHTML('beforeend',"<p>Australia: Not in our ontology</p>");
              }

              if(results[x]['legalca'] !== undefined) {
                var legalca = results[x]['legalca']['value'];
                document.getElementById('CA').insertAdjacentHTML('beforeend',"<p>Canada: " + legalca + "</p>");
              }

              else {
                document.getElementById('CA').insertAdjacentHTML('beforeend',"<p>Canada: Not in our ontology</p>");
              }

              if(results[x]['legalde'] !== undefined) {
                var legalde = results[x]['legalde']['value'];
                document.getElementById('DE').insertAdjacentHTML('beforeend',"<p>Germany: " + legalde + "</p>");
              }

              else {
                document.getElementById('DE').insertAdjacentHTML('beforeend',"<p>Germany: Not in our ontology</p>");
              }

       }
     }
   })
  };
