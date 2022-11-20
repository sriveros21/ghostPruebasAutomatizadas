# ghostPruebasAutomatizadas
Pruebas automatizadas para el sitio Ghost con Playwright y Kraken.

---
## Integrantes del Grupo 
- Carlos Tovar c.tovarb@uniandes.edu.co
- Helena Patarroyo h.patarroyo@uniandes.edu.co
- Sebastian Arango js.arangom1@uniandes.edu.co
- Sergio Riveros s.riverosg@uniandes.edu.co

---

## Funcionalidades
Las funcionalidades implementadas de la aplicación bajo pruebas son:

1. Posts
2. Pages
3. Tags
4. Sign in
5. Settings
6. Members
7. Integrations
8. Profile

---

## Escenarios de prueba
Los 20 escenarios de prueba (ordenados por funcionalidad):

### Crear:
01. Crear miembro
02. Crear tag
03. Crear page
04. Crear post
05. Crear integración
06. Crear post programado

### Editar: 
07. Editar miembro
08. Editar tag
09. Editar page
10. Editar post
11. Editar perfil de usuario
12. Editar integración

### Borrar:
13. Borrar post
14. Borrar miembro
15. Borrar tag
16. Borrar page
17. Borrar integración

### Sign in:
18. Hacer sign in

### Settings:
19. Configuración settings de post
20. Configuración settings de page

---

# Instrucciones de ejecución de las pruebas
## Pruebas con Playwright:
A continuación, se describen los pasos a seguir para la correcta ejecución de las pruebas con Playwright (20 escenarios):

### Crear tag / Editar tag / Borrar tag:
1. Ir a la carpeta playwright > playwright-test > tag.spec.ts
2. En el interior, se puede encontrar:
3. Instrucción beforeEach, la cual contiene los pasos previos para la ejecución, tales como las credenciales de inicio de sesión en Ghost y su instrucción de clic para ingresar; el enrutamiento a la página o sección de la prueba; y el título de la página de la prueba.
4. Método para la prueba de la funcionalidad "Tags" y el escenario "Crear tag".
5. Método para la prueba de la funcionalidad "Tags" y el escenario "Editar tag".
6. Método para la prueba de la funcionalidad "Tags" y el escenario "Borrar tag".
7. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear page / Editar page / Config settings page / Borrar page:
1. Ir a la carpeta playwright > playwright-test > page.spec.ts
2. En el interior, se puede encontrar:
3. Instrucción beforeEach, la cual contiene los pasos previos para la ejecución, tales como las credenciales de inicio de sesión en Ghost y su instrucción de clic para ingresar; el enrutamiento a la página o sección de la prueba; y el título de la página de la prueba.
4. Método para la prueba de la funcionalidad "Pages" y el escenario "Crear page".
5. Método para la prueba de la funcionalidad "Pages" y el escenario "Editar page".
6. Método para la prueba de la funcionalidad "Pages" y el escenario "Settings de page".
7. Método para la prueba de la funcionalidad "Pages" y el escenario "Borrar page".
8. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear integración / Editar integración / Borrar integración:
1. Ir a la carpeta playwright > playwright-test > integration.spec.ts
2. En el interior, se puede encontrar:
3. Instrucción beforeEach, la cual contiene los pasos previos para la ejecución, tales como las credenciales de inicio de sesión en Ghost y su instrucción de clic para ingresar; el enrutamiento a la página o sección de la prueba; y el título de la página de la prueba.
4. Método para la prueba de la funcionalidad "Integrations" y el escenario "Crear integration".
5. Método para la prueba de la funcionalidad "Integrations" y el escenario "Editar integration".
6. Método para la prueba de la funcionalidad "Integrations" y el escenario "Borrar integration".
7. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear member / Editar member / Borrar member:
1. Ir a la carpeta playwright > playwright-test > member.spec.ts
2. En el interior, se puede encontrar:
3. Instrucción beforeEach, la cual contiene los pasos previos para la ejecución, tales como las credenciales de inicio de sesión en Ghost y su instrucción de clic para ingresar; el enrutamiento a la página o sección de la prueba; y el título de la página de la prueba.
4. Método para la prueba de la funcionalidad "Members" y el escenario "Crear member".
5. Método para la prueba de la funcionalidad "Members" y el escenario "Editar member".
6. Método para la prueba de la funcionalidad "Members" y el escenario "Borrar member".
7. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear post / Editar post / Config settings post / Borrar post:
1. Ir a la carpeta playwright > playwright-test > post.spec.ts
2. En el interior, se puede encontrar:
3. Instrucción beforeEach, la cual contiene los pasos previos para la ejecución, tales como las credenciales de inicio de sesión en Ghost y su instrucción de clic para ingresar; el enrutamiento a la página o sección de la prueba; y el título de la página de la prueba.
4. Método para la prueba de la funcionalidad "Posts" y el escenario "Crear post".
5. Método para la prueba de la funcionalidad "Posts" y el escenario "Editar post".
6. Método para la prueba de la funcionalidad "Posts" y el escenario "Settings de post".
7. Método para la prueba de la funcionalidad "Posts" y el escenario "Borrar post".
8. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Editar perfil de usuario:
1. Ir a la carpeta playwright > playwright-test > profile.spec.ts
2. En el interior, se puede encontrar:
3. Instrucción beforeEach, la cual contiene los pasos previos para la ejecución, tales como las credenciales de inicio de sesión en Ghost y su instrucción de clic para ingresar; el enrutamiento a la página o sección de la prueba; y el título de la página de la prueba.
4. Método para la prueba de la funcionalidad "Profile" y el escenario "Editar profile".
5. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Sign in:
1. Ir a la carpeta playwright > playwright-test > sign.spec.ts
2. En el interior, se puede encontrar:
3. Instrucción beforeEach, la cual contiene los pasos previos para la ejecución, tales como las credenciales de inicio de sesión en Ghost y su instrucción de clic para ingresar; el enrutamiento a la página o sección de la prueba; y el título de la página de la prueba.
4. Método para la prueba de la funcionalidad "Sign In" y el escenario "Sign In".
5. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Guía de ejecución
1. Para ejecutar los escenarios, se descarga la extensión en Visual Code llamada "Playwright Test for VSCode", desarrollada por Microsoft, con versión v0.2.16.
2. Una vez instalada, se habilita en la columna de íconos izquierda un ícono con forma de "probeta de laboratorio", y al dar clic, se encuentran los escenarios de prueba precargados.
3. Se debe levantar la instancia de Ghost de forma local, para esto, se debe ir a la carpeta donde se tiene instalado Ghost y ejecutar el comando "ghost start". La instancia estará en "http://localhost:2368/ghost/".
4. Se debe tener presente que la instancia de Ghost debe estar arriba (ver paso 3). Si las credenciales de Ghost local son diferentes, se deben cambiar en el archivo de cada prueba para que esta pase, de lo contrario fallará por credenciales.
5. Seguir la ruta playwright > playwright-tests > {nombreTest}.spec.ts. Se puede ver un símbolo de "play" en el nombre, dar clic en este botón. La prueba comenzará a ejecutarse.
6. Si se da clic en las flechas para desplegar información hacia abajo, se pueden ver los nombres de los métodos de las pruebas que están dentro de cada prueba.
7. Al terminar la ejecución, la prueba muestra un indicador de exitoso en color verde.
8. Si se quiere que la prueba se ejecute headless o non-headless, hay una casilla de verificación en la parte de abajo del árbol del proyecto, bajo el nombre "PLAYWRIGHT". Dependiendo el estado de esta casilla se ejecuta la prueba con o sin UI de Chrome.

---

## Pruebas con Kraken:
A continuación, se describen los pasos a seguir para la correcta ejecución de las pruebas con Kraken:

### Crear tag / Editar tag / Borrar tag:
1. Ir a la carpeta kraken > features, allí se encuentra un archivo por cada acción (1_create_tag.feature, 2_edit_tag.feature, 3_config_page.feature,  3_delete_tag.feature)
2. Cada archivo coniene instrucciones dadas por el patrón GivenWhenThen y cada paso se define en el archivo en la ruta kraken > features > web > step_definitions > step.js
3. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear page / Editar page / Config settings page / Borrar page:
1. Ir a la carpeta kraken > features, allí se encuentra un archivo por cada acción (1_create_page.feature, 2_edit_page.feature, 3_delete_page.feature)
2. Cada archivo coniene instrucciones dadas por el patrón GivenWhenThen y cada paso se define en el archivo en la ruta kraken > features > web > step_definitions > step.js
3. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear integración / Editar integración / Borrar integración:
1. Ir a la carpeta kraken > features, allí se encuentra un archivo por cada acción (1_create_integration.feature, 2_edit_integration.feature, 3_delete_integration.feature)
2. Cada archivo coniene instrucciones dadas por el patrón GivenWhenThen y cada paso se define en el archivo en la ruta kraken > features > web > step_definitions > step.js
3. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear member / Editar member / Borrar member:
1. Ir a la carpeta kraken > features, allí se encuentra un archivo por cada acción (1_create_member.feature, 2_edit_member.feature, 3_delete_member.feature)
2. Cada archivo coniene instrucciones dadas por el patrón GivenWhenThen y cada paso se define en el archivo en la ruta kraken > features > web > step_definitions > step.js
3. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Crear post / Editar post / Config settings post / Borrar post:
1. Ir a la carpeta kraken > features, allí se encuentra un archivo por cada acción (1_create_post.feature, 2_edit_post.feature, 0_post_setting.feature,  3_delete_post.feature)
2. Cada archivo coniene instrucciones dadas por el patrón GivenWhenThen y cada paso se define en el archivo en la ruta kraken > features > web > step_definitions > step.js
3. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Editar perfil de usuario:
1. Ir a la carpeta kraken > features, allí se encuentra un archivo 2_edit_user.feature
2. El archivo coniene instrucciones dadas por el patrón GivenWhenThen y cada paso se define en el archivo en la ruta kraken > features > web > step_definitions > step.js
3. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Sign in:
1. Ir a la carpeta kraken > features, allí se encuentra un archivo 4_sign_up.feature
2. El archivo coniene instrucciones dadas por el patrón GivenWhenThen y cada paso se define en el archivo en la ruta kraken > features > web > step_definitions > step.js
3. Para la ejecución de los escenarios, consultar la "Guía de ejecución".

### Guía de ejecución
1. Se debe levantar la instancia de Ghost de forma local, para esto, se debe ir a la carpeta donde se tiene instalado Ghost y ejecutar el comando "ghost start". La instancia estará en "http://localhost:2368/ghost/".
2. Se debe tener presente que la instancia de Ghost debe estar arriba. Si las credenciales de Ghost local son diferentes, se deben cambiar en el archivo kraken > properties.json, de lo contrario fallará por credenciales.
3. En la carpeta raíz de kraken, ejecutar el siguiente comando para instalar las dependencias
`` npm install ``
4. validar que las variables de entorno están configuradas corriendo el siguiente comando
`` ./node_modules/kraken-node/bin/kraken-node doctor ``
5. Si alguno de los resultados del comando anterior aparece como [Not Installed] se debe descargar Android Studio y setear las variables de entorno
`` export ANDROID_HOME=/Users/<usuario>/Library/Android/sdk`` 
`` export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/Contents/Home/bin/ ``
`` export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools ``
6. Desde la carpeta raiz ejecutar el siguiente comando, se abrirá una ventana de Chrome y las pruebas empezarán a correr.
`` ./node_modules/kraken-node/bin/kraken-node run ``

[Ejecución Herramientas Semana 6](../../wiki)
