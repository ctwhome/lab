<h2>Drupal Resources</h2>

A list of resources to enhance the practises with Drupal, like: 
<ul>
	<li>Drupal Build Script</li>
	<li>Best practises in Drupal</li>
</ul>


<h3>Drupal Build Script</h3>

Antes de realizar el comando de instalación de drush: >> drush site-install profiler url...

Copiar en esta carpeta los ficheros generados desde el sitio de drupal original por el módulo "builder_profile":
(el perfil se puede llamar como se quiera, builder profile o lo que sea). 
<ul>
	<li>builder_profile.info</li>
	<li>builder_profile.install</li>
	<li>builder_profile.profile</li>
</ul>	

Instalar con:

drush site-install portfolio_ctw_profile --locale=es --db-url=sqlite:sites/default/files/.ht.sqlite --account-name=admin --account-pass=admin  --site-name="Portfolio Ctwhome"

rebuild con:


Copiar la toda la carpeta de "profiles" en la carpeta raiz de Drupal.

Después...

Junto a la carpeta "libraries" que a su vez contiene la carpeta "profiler" con lo ficheros necesarios para realizar la instalación con un perfil concreto.


