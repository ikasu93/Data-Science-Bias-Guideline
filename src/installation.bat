REM install necessary tools
call pip install notebook
call pip install jupyter_contrib_nbextensions
call pip install ipywidgets

call jupyter nbextension enable --py widgetsnbextension
call jupyter nbextensions_configurator enable --user



REM pace the guideline to correct path
if not exist "%appdata%/jupyter/nbextensions\firstExtension" (
	md "%appdata%/jupyter/nbextensions\firstExtension"
	copy "firstExtension" "%appdata%/jupyter/nbextensions\firstExtension"
)

REM start the Guideline
call jupyter nbextension enable firstExtension/main

call startGuideline.bat