## API Morada App

# Modules
 - Usuarios
 - Propiedades
 

 ## API Reference

### Usuarios

 Method | Endpoint | Data | Auth Requeried
 ------ | -------- | ----------- | -----------
 `POST` | /user/login | body: { email, password} | No

 ### Propiedades

    Method  |   Endpoint    |              Data           | Auth Requeried | comments
 ---------- |   --------    |  -------------------------  | -------------  | -----------------------------------
 `GET`      | /property     | query: type, bussinessType  |       NO       | obtener todas las propiedades con opcion de filtro
 `GET`      | /property/:id | url: id                     |       NO       | obtener una sola propiedad / detalle
 `POST`     | /property     | body: {title,...}           |       Si       | Agregar una propiedad
 `DELETE`   | /property/:id | url:  id                    |       Si       | Eliminar una propiedad
 `PUT`      | /property/:id | body: {title,...}           |       Si       | Notificar