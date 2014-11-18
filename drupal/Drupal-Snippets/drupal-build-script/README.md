Drupal Build Shell Script
===========================

Antes de realizar el comando de instalación de drush: >> drush site-install profiler url...

Copiar en esta carpeta los ficheros generados desde el sitio de drupal original por el módulo "builder_profile":
(el perfil se puede llamar como se quiera, builder profile o lo que sea). 

	* builder_profile.info				
	* builder_profile.install
	* builder_profile.profile


Instalar con:

drush site-install portfolio_ctw_profile --locale=es --db-url=sqlite:sites/default/files/.ht.sqlite --account-name=admin --account-pass=admin  --site-name="Portfolio Ctwhome"

rebuild con:


Copiar la toda la carpeta de "profiles" en la carpeta raiz de Drupal.

Después...

Junto a la carpeta "libraries" que a su vez contiene la carpeta "profiler" con lo ficheros necesarios para realizar la instalación con un perfil concreto.


