REM install necessary tools
call pip install notebook
call pip install jupyter_contrib_nbextensions
call pip install ipywidgets

call jupyter nbextension enable --py widgetsnbextension
call jupyter nbextensions_configurator enable --user



REM pace the guideline to correct path
md "%appdata%/jupyter/nbextensions\taggable_bias_guideline"
copy "taggable_bias_guideline" "%appdata%/jupyter/nbextensions\taggable_bias_guideline"

REM start the Guideline
call jupyter nbextension enable taggable_bias_guideline/main

call startGuideline.bat
