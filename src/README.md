# A Tutorial Using the Juypter Notebook extension

## Instruction on using guideline
Applied steps:
1.  Open cmd
2.  install **Jupyter notebook** (https://jupyter.org/install)
3.  install **Jupyter notebook extensions** (https://jupyter-contrib-nbextensions.readthedocs.io/en/latest/install.html) 
4.  copy the folder **"firstExtension"** and pace in **"nbextensions"** path e.g. at "C:\ProgramData\jupyter\nbextensions"
5.  Install **ipywidgets** with 'pip install ipywidgets' in cmd (https://ipywidgets.readthedocs.io/en/latest/user_install.html)
```
pip install ipywidgets
```
6.  **Enable ipywidgets** with 'jupyter nbextension enable --py widgetsnbextension' in cmd
7.  **Enable notebook extensions** with 'jupyter nbextensions_configurator enable --user' in cmd
8.  **Start jupyter notebook** with 'jupyter notebook' in cmd
9.  **Create a new Python file** or open an existing jupyter notebook file
10. Click on **Start Button**('Start Guideline') to start guideline

## Extension
You will see a Guideline with Biases for each 5 Data Science Phase.
Additionally, there are links for description, examples and best practices to each bias. 
The link will redirect you to a github page that provides this information. 

## Procedure
The guideline is for **self-evaluation purposes**. It should give you an overview which biases can occur and show with examples how they can look like. 
### Tagging
If it occurs in your code bias, you can **tag the section** of the code (please see https://github.com/ikasu93/Data-Science-Bias-Guideline#tagging). You can also tag the section with the mitigation method. For this reason it makes sense to structure your code with ln[] to recognize sections that have been tagged with one or more tags.
### Create overview
After completing the implementation and the bias analysis, you have the possibility to create an overview of the tags or the biases and mitigation methods with the second button('Add summary'), in order to have an overview and a transparency of the results to the biases in the analysis.
