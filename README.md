# LotoBot
Caixa Loterias Online


# Goals

Find the lower cost/... to win

# Data Mining (JavaScript)

1. Framework: jQuery
1. CAIXA HTML load jQuery + developed DM.JS
1. Devloped DM.js location: ai/src/resources/dataminig/data_mining.js
1. Running tests & extract data:
    1. Run (startup) a server

        ```shell
            $ cd src/resources/
            $ php -S localhost:5000
        ```
    1. [Open Browser at localhost:5000/(processed)lotofacil_draws.html](http://localhost:5000/(processed)lotofacil_draws.html)


# Artificial Intelligence & Statistics (Python)

### Virtual Env

1. Generate venv (by default it initial project has it)
    ```shell
        $ virtualenv -p python3 .venv
    ```
1. Activate env (__always do it before start jupyter__)
    ```shell
        $ source .venv/bin/activate
    ```
1. Install by requirements.txt
    ```shell
      $  pip install -r requirements.txt
    ```

1. Perform any installation (__just an example bellow__)
    ```shell
        $ pip install tensorflow
    ```
1. Freeze requirements
    ```shell
        $ pip freeze > requirements.txt
    ```

### Jupyter Extensions

1. Install the extension plugin to jupyter
    ```shell
        $ pip install jupyter_contrib_nbextensions
    ```
1. Install some extension to the plugin
    ```shell
        $ jupyter contrib nbextension install --user
    ```
1. IF ERROR (before do it, check if your env is activate):
    ```shell
		$ jupyter serverextension disable nbextensions
		$ jupyter serverextension disable nbextensions --user
		$ sudo jupyter serverextension disable nbextensions --sys-prefix
    ```
