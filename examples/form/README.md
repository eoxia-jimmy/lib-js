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
- callback_success: la fonction dans le fichier JavaScript du module y lors du "success": true
- callback_error: la fonction dans le fichier JavaScript du module y lors du "success": false

Voir exemple ci-dessous.

# Code

```html
<form action="saveData.php" method="POST">
	<label>
		<span>Titre</span>
		<input type="text" name="title" value="Mon super titre" />
	</label>

	<input type="submit" class="submit-form" />
</form>
```

# Task lists

- [x] Gestion de l'envoie de la requête
- [x] Gestion de la réponse
- [ ] Gestion des erreurs
- [ ] Gestion du loader
