function myFunction() {
  $('#queryresults').empty();
    var temperature = document.getElementById("temperature").value;
    var pupils = document.getElementById("pupils").value;
    var powder = $("#powder:checked").val();
    var gas = $("#gas:checked").val();
    var liquid = $("#liquid:checked").val();
    var mushrooms = $("#mushrooms:checked").val();
    var plant = $("#plant:checked").val();
    var tablet = $("#tablet:checked").val();
    var crystal = $("#crystal:checked").val();
    var inhaling = $("#inhaling:checked").val();
    var injecting = $("#injecting:checked").val();
    var oral = $("#oral:checked").val();
    var smoking = $("#smoking:checked").val();
    var snorting = $("#snorting:checked").val();
    var blankstare = $("#blankstare:checked").val();
    var drymouth = $("#drymouth:checked").val();
    var itching = $("#itching:checked").val();
    var lackmuscle = $("#lackmuscle:checked").val();
    var nausea = $("#nausea:checked").val();
    var redeyes = $("#redeyes:checked").val();
    var slowreflex = $("#slowreflex:checked").val();
    var slurredspeech = $("#slurredspeech:checked").val();
    var teethgrinding = $("#teethgrinding:checked").val();
    var confusion = $("#confusion:checked").val();
    var cyclicbehaviour = $("#cyclicbehaviour:checked").val();
    var disoriented = $("#disoriented:checked").val();
    var drowsiness = $("#drowsiness:checked").val();
    var euphoria = $("#euphoria:checked").val();
    var hallucinations = $("#hallucinations:checked").val();
    var increasedappetite = $("#increasedappetite:checked").val();
    var lossofappetite = $("#lossofappetite:checked").val();
    var paranoia = $("#paranoia:checked").val();
    var relaxed = $("#relaxed:checked").val();
    var repetitivespeech = $("#repetitivespeech:checked").val();
    var restlessness = $("#restlessness:checked").val();
    var talkative = $("#talkative:checked").val();



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
      "?drugs dr:BodyTemperatureGoes dr:" + temperature + " .",
      "?drugs dr:PupilSizeWhenUsed dr:" + pupils + " .",
      powder,
      gas,
      liquid,
      mushrooms,
      plant,
      tablet,
      crystal,
      inhaling,
      injecting,
      oral,
      smoking,
      snorting,
      blankstare,
      drymouth,
      itching,
      lackmuscle,
      nausea,
      redeyes,
      slowreflex,
      slurredspeech,
      teethgrinding,
      confusion,
      cyclicbehaviour,
      disoriented,
      drowsiness,
      euphoria,
      hallucinations,
      increasedappetite,
      lossofappetite,
      paranoia,
      relaxed,
      repetitivespeech,
      restlessness,
      talkative,
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
             console.log(data);
               var results = data.results.bindings;
               if (results != 0) {
                 for (var x = 0; x < results.length; x++) {
                   var drugs = results[x]['drugs']['value'].split("/")[5];
                   document.getElementById('queryresults').insertAdjacentHTML('beforeend',"<li>" + drugs + "</li>");
                 }
               }
               else {
                 document.getElementById('queryresults').insertAdjacentHTML('beforeend',"<li>No results were found</li>");
               }

}
})
};
