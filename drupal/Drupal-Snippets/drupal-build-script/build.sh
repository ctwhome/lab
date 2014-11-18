#Build de Drupal
# Este constructor instala el sitio 
#Definición de variables


txtred=$(tput setaf 1) # Red
txtgrn=$(tput setaf 2) # Green
txtylw=$(tput setaf 3) # Yellow
txtblu=$(tput setaf 4) # Blue
txtpur=$(tput setaf 5) # Purple
txtcyn=$(tput setaf 6) # Cyan
txtwht=$(tput setaf 7) # White
txtrst=$(tput sgr0) # Text reset.

#Definición de Funciones
showLogo() {
	clear
cat << EOF
${txtgrn}
=====================================================================
 _____                         _   ____  _    _ _____ _      _____  
|  __ \                       | | |  _ \| |  | |_   _| |    |  __ \ 
| |  | |_ __ _   _ _ __   __ _| | | |_) | |  | | | | | |    | |  | |
| |  | | '__| | | | '_ \ / _· | | |  _ <| |  | | | | | |    | |  | |
| |__| | |  | |_| | |_) | (_| | | | |_) | |__| |_| |_| |____| |__| |
|_____/|_|   \__,_| .__/ \__,_|_| |____/ \____/|_____|______|_____/ 
                  | |                                               
                  |_|                                           
=====================================================================	
${txtrst}
EOF
}


function parametros() {
	showLogo

	case $# in
		0)
			echo "No has metido parámetros"
			;;
		1)
			echo "Metiste 1"
			;;
		2)
			echo "Metiste 2"
			;;
		*)
  			echo $# no me vale :\(
  			;;
	esac
} #fin de la función parametros


function instalar(){
	
	echo "${txtred}NOTA: ${txtrst}"
cat << EOF
${txtgrn}Antes de instalar drupal tomando los módulos, themes, features y nodes del SVN, necesitas tener configurada una base de datos en tu máquina localhost.
El usuario de administrador y contraseña será: ${txtylw}"admin / ariadnasi"
${txtcyn}
Pulsa [Enter] para continuar...
${txtgrn}
EOF

	#pulsa enter para continuar
	read


	#Petición de los datos del sitio y base de datos
	echo "${txtcyn}Introduce la ruta absoluta donde se intalará tu drupal. El script te creará por defecto la carpeta 'localweb'."
	echo "Por ejemplo: /var/www/dev/mi_sitio   ${txtred} Importante: no introducir la barra final${txtcyn} "
	read localweb
	# echo "${txtgrn}La descarga e instalacción del drupal se realizará en $localweb/localweb\n\n${txtcyn}"
	# echo "- Introduce el nombre de la base de datos (se reemplazará o creará si no existe)":
	# read dbname
	# echo - Introduce el nombre de usuario de la base de datos:
	# read usernamedb
	# echo - Introduce la contraseña base de datos:
	# read passdb
	# echo "- Introduce el puerto (suele ser el 3306):"
	# read port


	echo "${txtgrn}\n\nDescargando los ficheros necesarios, puede tardar unos segundos..."
	
	#Copiamos el makefile.make en localweb y lo ejecutamos para que se descargue el core y los módulos de los terceros.#
	cp makefile.make $localweb
	cd $localweb
		echo "${txtgrn}\nEliminando instalaciones anteriores de localweb (sudo)${txtcyn}"
		sudo rm -rf localweb
		drush make makefile.make localweb
		rm makefile.make
	cd - #Volvemos a la ruta anterior
		

	#Copiamos los ficheros necesarios para la instalación en el directorio de localweb
	echo ${txtgrn}
	cp -rf ../sites/all/themes/* $localweb/localweb/sites/all/themes 				#se copia el theme
	mkdir $localweb/localweb/sites/all/features										#se crea la carpeta feature
	cp -rf ../sites/all/features/* $localweb/localweb/sites/all/features 			#se copian las features
	cp -rf ../profiles/* $localweb/localweb/profiles 								#se copian los perfiles
	cp -rf ../sites/all/modules/* $localweb/localweb/sites/all/modules 				#se copian las features


	
	# instalación del sitio
# cat << EOF
# ${txtcyn}
# ¿Qué perfil quieres instalar? Introduce el número correspondiente.
# 	1 - Perfil de desarrollo (con todos los módulos + devel)
# 	2 - Perfil de producción
# ${txtgrn}
# EOF
# 		read profileread

# 		case $profileread in
# 		1)
# 			profile="dev-profile.profile"
# 			;;
# 		2)
# 			profile="production-profile.profile"
# 			;;
# 		*)	
#   			echo "${txtgrn}No has elegido ningún perfil."
#   			echo "operación cancelada." 
#   			echo "bye :) \n\n"
# 			exit 1
#   			;;
# 	esac

	cd $localweb/localweb
	

	#Antes de aplicar el profile hay que descargar y activar el módulo builder profile...
	#drush dl profile 				#libreria
	#drush dl profiler_builder		#modulo
	#drush en profiler_builder		#activacion del módulo


	drush site-install  dev-profile --db-url=mysql://root:ariadnasi@127.0.0.1/drupal_asi --account-mail=admin@admin.com --account-name=admin --account-pass=ariadnasi -y
	
	# activación de features
	# importación del contenido
	exit 1


	cd localweb	
		echo "Configurando drupal en localweb...${txtcyn}"
		drush site-install builder_profile.profile --db-url=mysql://$usernamedb:$passdb@127.0.0.1:$port/$dbname --account-mail=admin@admin.com --account-name=admin --account-pass=ariadnasi -y
		echo ${txtgrn}
		#drush site-install builder_profile --db-url=mysql://root:ariadnasi@127.0.0.1/drupal_asi --account-mail=admin@admin.com --account-name=admin --account-pass=ariadnasi
	cd ..

} #Fin de  instalar


function update(){ 
	echo update
}


function commit(){
	echo commit
} #Fin commit



function showMenu(){
	showLogo
cat << EOF
	${txtgrn}Introduce una de las opciones por teclado o pulsa "Enter" para salir.

	 ${txtred} 1 - Instalar drupal en local con la configuración del svn (svn checkout + instalación)
	 ${txtcyn} 2 - svn update (con el sitio ya instalado)
	 ${txtgrn} 3 - salir ${txtrst}

EOF

	# ${txtcyn} 3 - svn commit
	read menu
	case $menu in
			1)
				instalar
				;;
			2)
				update
				;;
			# 3)
			# 	echo "Metiste 2"
			# 	;;
			*)
				showLogo
	  			echo "${txtgrn}bye :) \n\n"
				exit 1
	  			;;
		esac
	
} # Fin showMenu



# ############################## #
# 			   MAIN				 #
# ############################## #
showLogo

echo "${txtrst}¿Estás en el /build-site de tu copia del svn en local? Es importante. \n${txtgrn}[Pulsar \"Enter\" o \"n\" para salir]"
read opt

if [[ $opt = "n" ]]; then
	showLogo
  	echo No se ha realizado ninguna operación :\(
  	echo "${txtgrn}bye  \n\n"
	exit 1
	
else
	#parametros
	showMenu

	echo "${txtgrn} \n\nFin :)"
  	echo "bye  \n\n"

fi