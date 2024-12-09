| URI | Méthode HTTP | Auths? | Opération |
|---|---|---|---|
| **`comments`** | GET | JWT | READ ALL FILTERED : Lire tous les commentaires et les filtrer par film |
| **`comments/:filmId`** | POST | JWT | CREATE ONE : Ajouter un commentaire sur un film en y associant l'utilisateur authentifié |
| **`comments/:id`** | DELETE | JWT | DELETE ONE : Effacer un commentaire sur un film sur base de l'utilisateur authentifié |
