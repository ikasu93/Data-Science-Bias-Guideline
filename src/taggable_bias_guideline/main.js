define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

        // Adds a cell above current cell (will be top if no cells)
        var add_cell = function() {
		if(boolGuideline === false){
			Jupyter.notebook.select(0);
			Jupyter.notebook.
			insert_cell_above('code').
        // Define default cell here
			set_text(`from ipywidgets import Button, HTML, Layout


def create_expanded_button(description, button_style):
	return Button(description=description, button_style=button_style, layout=Layout(height='auto', width='auto'))

import webbrowser

def create_link_button(description, link, button_style):
    button = create_expanded_button(description, button_style)
    def on_button_click(b):
        webbrowser.open(link)
    button.on_click(on_button_click)
    return button	
	
def create_checkbox(description, value):
	return Checkbox(value=value, description=description)

from ipywidgets import GridspecLayout

grid = GridspecLayout(27, 6)

grid[:1, 0] = create_link_button('Data Science Phases', 'https://github.com/ikasu93/Data-Science-Bias-Guideline', 'info')
grid[1:9, 0] = create_link_button('Data Ingestion', 'https://github.com/ikasu93/Data-Science-Bias-Guideline#data-ingestion-phase', '')
grid[9:11, 0] = create_link_button('Data Scrubbing', 'https://github.com/ikasu93/Data-Science-Bias-Guideline#data-scrubbing-phase', '')
grid[11:16, 0] = create_link_button('Data Visualization', 'https://github.com/ikasu93/Data-Science-Bias-Guideline#data-visualization-phase', '')
grid[16:22, 0] = create_link_button('Data Modeling', 'https://github.com/ikasu93/Data-Science-Bias-Guideline#data-modeling-phase', '')
grid[22:25, 0] = create_link_button('Data Analysis', 'https://github.com/ikasu93/Data-Science-Bias-Guideline#data-analysis-phase', '')
grid[25:26, 1] = create_link_button('Information to Tagging', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#description', 'info')

grid[:1, 1:3] = create_expanded_button('List of biases', 'info')
grid[:1, 3:8] = create_expanded_button('Best practices & examples', 'info')

grid[1, 1:3] = HTML(value = 'Data Bias')
grid[2, 1:3] = HTML(value = 'Sampling Bias')
grid[3, 1:3] = HTML(value = 'Measurement Bias')
grid[4, 1:3] = HTML(value = 'Survey Bias')
grid[5, 1:3] = HTML(value = 'Seasonal Bias')
grid[6, 1:3] = HTML(value = 'Survivorship Bias')
grid[7, 1:3] = HTML(value = 'Selection Bias')
grid[8, 1:3] = HTML(value = 'Historical Bias')

grid[9, 1:3] = HTML(value = 'Exclusion Bias')
grid[10,1:3] = HTML(value = 'Data Enrichment Bias')

grid[11, 1:3] = HTML(value = 'Framing effect')
grid[12, 1:3] = HTML(value = 'Availability Bias')
grid[13, 1:3] = HTML(value = 'Overconfidence Bias')
grid[14, 1:3] = HTML(value = 'Anchoring Bias')
grid[15, 1:3] = HTML(value = 'Confirmation Bias & Signal Error')

grid[16, 1:3] = HTML(value = 'Algorithmic Bias')
grid[17, 1:3] = HTML(value = 'How Hand Fallacy')
grid[18, 1:3] = HTML(value = 'Bandwagon Effect')
grid[19, 1:3] = HTML(value = 'Group Attribution Bias')
grid[20, 1:3] = HTML(value = 'Aggregation Bias')
grid[21, 1:3] = HTML(value = 'Evaluation Bias')

grid[22, 1:3] = HTML(value = 'Deployment Bias')
grid[23, 1:3] = HTML(value = 'Rescue Bias')
grid[24, 1:3] = HTML(value = 'Overfitting & Underfitting')

grid[1, 3:8] = create_link_button('Click for Data Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#data-bias-representation-bias', '')
grid[2, 3:8] = create_link_button('Click for Sampling Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#selection-bias', '')
grid[3, 3:8] = create_link_button('Click for Measurement Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#sampling-bias', '')
grid[4, 3:8] = create_link_button('Click for Survey Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#measurement-bias-systematic-errors', '')
grid[5, 3:8] = create_link_button('Click for Seasonal Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#survey-bias-self-reporting-bias', '')
grid[6, 3:8] = create_link_button('Click for Survivorship Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#seasonal-bias', '')
grid[7, 3:8] = create_link_button('Click for Selection Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#survivorship-bias', '')
grid[8, 3:8] = create_link_button('Click for Historical Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#historical-bias', '')
grid[9, 3:8] = create_link_button('Click for Exclusion Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#exclusion-bias', '')
grid[10, 3:8] = create_link_button('Click for Data Enrichment Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#data-enrichment-bias', '')
grid[11, 3:8] = create_link_button('Click for Framing Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#1data-visualization-and-framing-effect', '')
grid[12, 3:8] = create_link_button('Click for Availability Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#2data-visualization-and-availability-bias', '')
grid[13, 3:8] = create_link_button('Click for Overconfidence Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#3data-visualization-and-overconfidence-bias', '')
grid[14, 3:8] = create_link_button('Click for Anchoring Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#4data-visualization-and-anchoring-bias', '')
grid[15, 3:8] = create_link_button('Click for Confirmation Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#5data-visualization-confirmation-bias-and-signal-error', '')
grid[16, 3:8] = create_link_button('Click for Algorithmic Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#algorithmic-bias', '')
grid[17, 3:8] = create_link_button('Click for Hot Hand Fallacy Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#hot-hand-fallacy', '')
grid[18, 3:8] = create_link_button('Click for Bandwagon Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#bandwagon-effect', '')
grid[19, 3:8] = create_link_button('Click for Group Attribution Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#group-attribution-bias', '')
grid[20, 3:8] = create_link_button('Click for Aggregation Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#aggregation-bias', '')
grid[21, 3:8] = create_link_button('Click for Evaluation Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#evaluation-bias', '')
grid[22, 3:8] = create_link_button('Click for Deployment Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#deployment-bias', '')
grid[23, 3:8] = create_link_button('Click for Rescue Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#rescue-bias', '')
grid[24, 3:8] = create_link_button('Click for Overfitting/Underfitting Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#overfitting-and-underfitting', '')
grid`);
        //Jupyter.notebook.to_markdown(0);
	Jupyter.notebook.select_prev();
	Jupyter.notebook.execute_cell_and_select_below();
	boolGuideline = true
		}
		else{
			Jupyter.notebook.scroll_to_top();
		}
		
      };
      // Button to add default cell
      var defaultCellButton = function () {
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Start Guideline',
                  'icon' : 'fa-play-circle',
                  'handler': add_cell
              }, 'Start DS Guideline', 'Default guideline')
          ])
      }
	  var activateTagsButton = function () {
          Jupyter.toolbar.add_buttons_group([	
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Activate/Deactivate Tags',
                  'icon' : 'fa-tags',
                  'handler': activateTags
              }, 'Activate Tags', 'Default summary')
          ])
      }
	  var tagCellButton = function () {
          Jupyter.toolbar.add_buttons_group([	
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add summary',
                  'icon' : 'fa-list',
                  'handler': tags
              }, 'Create Tag Summary', 'Default tags')
          ])
      }
	  var autocompleteButton = function () {
          Jupyter.toolbar.add_buttons_group([	
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Autocomplete',
                  'icon' : 'magic',
                  'handler': activateAutocomplete
              }, 'Autocomplete', 'Default autocomplete')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        defaultCellButton();
		activateTagsButton();
		tagCellButton();
		autocompleteButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});

function onCellAdded(){
	var currentCell = Jupyter.notebook.find_cell_index(Jupyter.notebook.get_selected_cell())+1;
	$("div.input").eq(0).hide();
	Jupyter.notebook.events.off("create.Cell", onCellAdded)
} 

Jupyter.notebook.events.on("create.Cell",onCellAdded);

var boolGuideline = false;
var add_cell = function() {
	Jupyter.notebook.
	insert_cell_at_index(0).
	// Define default cell here
	set_text(`Define default cell here`);
	Jupyter.notebook.select_prev();
	Jupyter.notebook.execute_cell_and_select_below();
	boolGuideline = true
};

var boolTag = false;
function activateTags(){

	if (boolTag === false){
		
		document.querySelector("#menu-cell-toolbar-submenu > li:nth-child(6) > a").click();
		boolTag = true;
	}
	else{
		document.querySelector("#menu-cell-toolbar-submenu > li:nth-child(1) > a").click();
		boolTag = false;
	}
}

function tags(){

	const tagList = [];
	
	Jupyter.notebook.get_cells().forEach(cell => {
    const tags = cell.metadata.tags;

    if (tags) tags.forEach(tag => tagList.push(tag));
});
	console.log("--------------------------------------------------------------------------------------------------");
	console.log("List of biases in this code and used mitigation methods:");
	for (const t of tagList) {
		console.log("-"+t);
	};
	console.log("--------------------------------------------------------------------------------------------------");
	var messages = "List of biases in this code and used mitigation methods: \n \n";
	if(tagList && tagList.length){
		for (const t of tagList) {
			messages+= "- "+t+"\n";
		};
		window.alert(messages)
	}
	else {
		window.alert("No taggings found!")
	}
	var tString = tagList.toString();

}

/*
// Autocompletion for Tagging
*/
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
	  a.style.borderBottom = "1px solid #d4d4d4"; 
	  a.style.zIndex = "5";
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
		  
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }

  });
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the keywords*/
var keywords = ["databias", "representationbias", "repair", "labeling", "datatargeting", "advanceddatamining", "selectionbias", "randomsubgroupchoice",
"samplingbias", "simplerandomsampling", "stratifiedrandomsampling",
"measurementbias", "systematicerrors", "multiplemeasuringdevices", "multipledataspecialists",
"surveybias", "selfreportingbias", "balancedquestionnaires",
"seasonalbias", "indepthseasonaltrendsknowledge", "historicaltrendreview",
"survivorshipbias",
"historicalbias", "knearestneigbor", "arima", "regression", "angelbasedoutlierdetection",
"dataenrichmentbias", "differentrankingparameters", "kernalbasedlocaloutlierfactor",
"cognitivebias", "datavisualization", "framingeffect", "strategicvisualizationtools",
"avaiabilitybias", "properweighting",
"overconfidencebias", "scientificmindset",
"anchoringbias", "criticalthinking", "decisionsviahistoricalpatterns",
"confirmationbias", "signalerror", "alternativesources", "testing",
"algorithmicbias", "aif360", "fairecsys",
"hothandfallacy", "systematicthinking",
"bandwagoneffect", "rethinking",
"groupattributionbias", "ingroupbias", "outgrouphomogeneitybias", "selfanalysis",
"aggregationbias", "coupledlearningtechniques", "multitasklearning", "fairrepresentationlearning", "spaceprojection", 
"evaluationbias", "subgroupevaluation", "multiplemetrics", "confidenceintervals", "smote",
"deploymentbias", "usertraining", "ethicalmodeltrainingwithunbiaseddata",
"rescuebias", "selfevaluation",
"overfitting", "underfitting", "processmining", "penaltymethods", "earlystopping", "L14regulation", "preprocessing", "postprocessing"];
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/

function activateAutocomplete(){
	$("input").on("click", () => autocomplete($("input:focus").prevObject[0].activeElement, keywords));
}
