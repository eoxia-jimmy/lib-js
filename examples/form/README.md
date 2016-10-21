# Formulaire Ajax

## Description

Tous les input dans un formulaires seront envoyés en AJAX à **condition** d'avoir un bouton avec la class "submit-form".

La réponse de la requête doit contenir au minimum le json suivant:
```json
{
	"success": true|false
	"data (facultative)": {
		"callback_module (facultative)": "mon_module",
		"callback_success (facultative)": "callback_success",
		"callback_error (facultative)": "callback_error"
	}
}
```


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
