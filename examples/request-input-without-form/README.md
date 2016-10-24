# Formulaire Ajax

Toutes les extensions de vos fichiers js doivent être comme suit __*.app.js**__

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

- callback_module: le nom de l'objet après window.app.*
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

echo json_encode( array(
	'success' => true,
	'data' => array(
		'module' => 'example_form', // Doit être renommé en object
		'callback_success' => 'display_title', // Doir être renommé en success
		'title' => $_POST['title']  // Faille de sécurité; On s'en fou, mais à ne pas faire!
	)
) );

?>

```

## JS

Le fichier exemple.app.js

```js
window.app.example_form = {};

window.app.example_form.display_title = function( element, response ) {
	alert( response.data.title );
}

```

# Task lists

- [x] Gestion de l'envoie de la requête
- [x] Gestion de la réponse
- [ ] Gestion des erreurs
- [ ] Gestion du loader
- [ ] Renommer les données de réponse de la requête
