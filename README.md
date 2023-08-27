|  HTTP  | Routes                 | Description               |
|:------:|------------------------|---------------------------|

	BASE URL /auth
|  POST  | /singup                | Sing up user              |
|  POST  | /login                 | Log in user               |
|   GET  | /verify                | Verify auth token         |


	BASE URL /users
|   GET  | /                      | users list                |
|   GET  | /{id}                  | users profile + dogs      |
|   PUT  | /{id}/edit             | users profile edition     |
| DELETE | /{id}/delete           | user deletion             |
|   PUT  | /{id}/dogs/{id}        | user dogs profile edition |
| DELETE | /{id}/delete/dogs/{id} | user dogs deletion        |


	BASE URL /park
|   GET  | /parkList              | park list                 |
|   GET  | /{id}                  | park details              |
|  POST  | /newPark               | create new park           |
|   PUT  | /{id}/edit             | park details edition      |
| DELETE | /{id}/delete           | park deletion             |


	BASE URL /events
|  GET   | /                      | events list + Google maps |
|  GET   | /{id}                  | events details            |
|  PUT   | /{id}/ edit            | events details edition    |
| DELETE | /{id}/ delete          | events deletion           | 
|  POST  | /newEvent              | create new event          |



|          URL          | Description         | Protected |
|:---------------------:|---------------------|-----------|
|           /           | Index page          |           |

|    /iniciar-sesion    | Login page          |           |
|      /registrarse     | Signup page         | YES       |
|           *           |  404 page           |           |

|        /parques       | Park list           |           |
| /parques/detalles/:id | Park details page   |           |
|   /editar-parque/:id  | Edit park details   | YES       |
|     /añadir-parque    | New park form page  | YES       |
|                       |                     |           |
|        /eventos       | Events list         |           |
| /eventos/detalles/:id | Event details page  |           |
|   /editar-evento/:id  | Edit event details  | YES       |
|     /añadir-evento    | New event form page | YES       |


