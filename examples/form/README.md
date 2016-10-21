# Formulaire Ajax

## Description

Tous les input dans un formulaires seront envoyés en AJAX à **condition** d'avoir un bouton avec la class "submit-form".

La réponse de la requête doit contenir au minimum le json suivant:
```json
{
	"success": true,
	"data (facultative)": {
		"callback_module (facultative)": "mon_module",
		"callback_success (facultative)": "callback_success",
		"callback_error (facultative)": "callback_error"
	}
}
```

- callback_module: le nom du dossier du module
- callback_success: la fonction dans le fichier JavaScript du module y lors du "success": **true**
- callback_error: la fonction dans le fichier JavaScript du module y lors du "success": **false**

Voir exemple ci-dessous.

# Code

## HTML

Le formulaire avec le input submit contenant la classe "submit-form", **sans ça**, le formulaire ne marche pas.

```html
<form action="saveData.php" method="POST">
	<label>
		<span>Titre</span>
		<input type="text" name="title" value="Mon super titre" />
	</label>

	<input type="submit" class="submit-form" />
</form>
```

## PHP

Le fichier saveData.php, gère le traitement PHP (Enregistrement BDD, ect), ainsi que le retour de la requête en JSON.

```php
<?php

echo json_encode( array( 'success' => true, 'data' => array( 'callback_module' => 'display', 'callback_success' => 'display_title', 'title' => $_POST['title'] ) ) ); // Faille de sécurité; On s'en fou, mais à ne pas faire!
die();

?>
```

## JS

Le fichier exemple.js

```js
window.app.display.display_title = function( element, response ) {

}
```

# Task lists

- [x] Gestion de l'envoie de la requête
- [x] Gestion de la réponse
- [ ] Gestion des erreurs
- [ ] Gestion du loader
