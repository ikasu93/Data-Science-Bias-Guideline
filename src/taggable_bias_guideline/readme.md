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
			set_text(`from ipywidgets import Button, Layout, jslink, IntText, IntSlider, Checkbox, FloatText, Text


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

top_left_button = create_expanded_button("Top left", 'info')
top_right_button = create_expanded_button("Top right", 'success')
bottom_left_button = create_expanded_button("Bottom left", 'danger')
bottom_right_button = create_expanded_button("Bottom right", 'warning')

top_left_text = IntText(description='Top left', layout=Layout(width='auto', height='auto'))
top_right_text = IntText(description='Top right', layout=Layout(width='auto', height='auto'))
bottom_left_slider = IntSlider(description='Bottom left', layout=Layout(width='auto', height='auto'))
bottom_right_slider = IntSlider(description='Bottom right', layout=Layout(width='auto', height='auto'))

from ipywidgets import GridspecLayout

grid = GridspecLayout(27, 6)

grid[:1, 0] = create_expanded_button('Phase', 'info')
grid[1:9, 0] = create_expanded_button('Data Ingestion', '')
grid[9:11, 0] = create_expanded_button('Data Cleaning', '')
grid[11:16, 0] = create_expanded_button('Data Visualization', '')
grid[16:22, 0] = create_expanded_button('Data Modeling', '')
grid[22:25, 0] = create_expanded_button('Data Analysis', '')
grid[25:26, 1] = create_link_button('Information to Tagging', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#description', 'info')


grid[:1, 1] = create_expanded_button('Bias', 'info')
grid[:1, 2:8] = create_expanded_button('Best practices and Examples', 'info')

grid[1, 1] = create_checkbox('Data Bias', False)
grid[2, 1] = create_checkbox('Sampling Bias', False)
grid[3, 1] = create_checkbox('Measurement Bias', False)
grid[4, 1] = create_checkbox('Survey Bias', False)
grid[5, 1] = create_checkbox('Seasonal Bias', False)
grid[6, 1] = create_checkbox('Survivorship Bias', False)
grid[7, 1] = create_checkbox('Selection Bias', False)
grid[8, 1] = create_checkbox('Historical Bias', False)

grid[9, 1] = create_checkbox('Exclusion Bias', False)
grid[10,1] = create_checkbox('Data Enrichment Bias', False)

grid[11, 1] = create_checkbox('Framing effect', False)
grid[12, 1] = create_checkbox('Availability Bias', False)
grid[13, 1] = create_checkbox('Overconfidence Bias', False)
grid[14, 1] = create_checkbox('Anchoring Bias', False)
grid[15, 1] = create_checkbox('Confirmation Bias and Signal Error', False)

grid[16, 1] = create_checkbox('Algorithmic Bias', False)
grid[17, 1] = create_checkbox('How Hand Fallacy', False)
grid[18, 1] = create_checkbox('Bandwagon Effect', False)
grid[19, 1] = create_checkbox('Group Attribution Bias', False)
grid[20, 1] = create_checkbox('Aggregation Bias', False)
grid[21, 1] = create_checkbox('Evaluation Bias', False)

grid[22, 1] = create_checkbox('Deployment Bias', False)
grid[23, 1] = create_checkbox('Rescue Bias', False)
grid[24, 1] = create_checkbox('Overfitting and Underfitting Bias', False)

grid[1, 2:8] = create_link_button('Click for Data Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#data-bias-representation-bias', '')
grid[2, 2:8] = create_link_button('Click for Sampling Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#selection-bias', '')
grid[3, 2:8] = create_link_button('Click for Measurement Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#sampling-bias', '')
grid[4,2:8] = create_link_button('Click for Survey Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#measurement-bias-systematic-errors', '')
grid[5, 2:8] = create_link_button('Click for Seasonal Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#survey-bias-self-reporting-bias', '')
grid[6, 2:8] = create_link_button('Click for Survivorship Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#seasonal-bias', '')
grid[7, 2:8] = create_link_button('Click for Selection Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#survivorship-bias', '')
grid[8, 2:8] = create_link_button('Click for Historical Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#historical-bias', '')
grid[9, 2:8] = create_link_button('Click for Exclusion Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#exclusion-bias', '')
grid[10, 2:8] = create_link_button('Click for Data Enrichment Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#data-enrichment-bias', '')
grid[11, 2:8] = create_link_button('Click for Framing Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#1data-visualization-and-framing-effect', '')
grid[12, 2:8] = create_link_button('Click for Availability Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#2data-visualization-and-availability-bias', '')
grid[13, 2:8] = create_link_button('Click for Overconfidence Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#3data-visualization-and-overconfidence-bias', '')
grid[14, 2:8] = create_link_button('Click for Anchoring Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#4data-visualization-and-anchoring-bias', '')
grid[15, 2:8] = create_link_button('Click for Confirmation Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#5data-visualization-confirmation-bias-and-signal-error', '')
grid[16, 2:8] = create_link_button('Click for Algorithmic Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#algorithmic-bias', '')
grid[17, 2:8] = create_link_button('Click for Hot Hand Fallacy Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#hot-hand-fallacy', '')
grid[18, 2:8] = create_link_button('Click for Bandwagon Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#bandwagon-effect', '')
grid[19, 2:8] = create_link_button('Click for Group Attribution Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#group-attribution-bias', '')
grid[20, 2:8] = create_link_button('Click for Aggregation Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#aggregation-bias', '')
grid[21, 2:8] = create_link_button('Click for Evaluation Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#evaluation-bias', '')
grid[22, 2:8] = create_link_button('Click for Deployment Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#deployment-bias', '')
grid[23, 2:8] = create_link_button('Click for Rescue Bias Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#rescue-bias', '')
grid[24, 2:8] = create_link_button('Click for Overfitting/Underfitting Example and Best practice', 'https://github.com/ikasu93/Data-Science-Bias-Guideline/blob/master/README.md#overfitting-and-underfitting', '')
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
    // Run on start
    function load_ipython_extension() {
        defaultCellButton();
		activateTagsButton();
		tagCellButton();
		
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
