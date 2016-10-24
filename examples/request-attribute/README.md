# Formulaire Ajax

Toutes les extensions de vos fichiers js doivent être comme suit __*.app.js**__

## Important

- Tous les attributs envoyés par cette requête doivent commencer par "data-", ex: **"data-id"**, lors de l'éxécution du script de la lib, "data-id" deviendra **"id"** (sans le data)
- L'attribut "data-nonce" est **automatiquement** converti en "_wpnonce"
- La balise HTML passe en état **"disabled"** lors du clique sur celui-ci

## Description

Tous les attributs dans la balise voulu seront envoyés en AJAX à **condition** d'avoir la class "action-attribute".

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
<button class="action-attribute" data-id="10" data-nonce="JIOFJAZIOFJO">Clique moi!</button>
```

## PHP

Gère le traitement PHP (Enregistrement BDD, ect), ainsi que le retour de la requête en JSON.

```php
<?php

echo json_encode( array(
    'success' => true,
    'data' => array(
        'module' => 'example_form', // Doit être renommé en object
        'callback_success' => 'delete_button' // Doit être renommé en success
    )
) );

?>
```

## JS

Le fichier exemple.app.js

```js
window.app.request_attribute = {};

window.app.request_attribute.delete_button = function( element, response ) {
  jQuery( element ).remove();
}
