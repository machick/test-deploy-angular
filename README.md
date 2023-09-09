# TestDeploy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## capz solo esto
`docker compose up -d --build`

# NOTAS CI/CD
`docker build -t angular-deploy .`
`docker run -d -it -p 80:80 angular-deploy`
## update
`docker compose up -d --build`


## Angular Comands
ng generate module modules/<Modulo-Especifico>/<Modulo-Especifico>-routing --flat ///Routing del modulo especifico
ng generate module modules/authentication/authentication-routing --flat ///Routing del modulo especifico


ng generate component modules/<Modulo-Especifico>/components/<Nombre-Especifico> //Componente Login para el Modulo Autentificacion
ng generate component modules/<Modulo-Especifico>/components/<Nombre-Especifico> //Componente * para el Modulo *


ng generate component shared/components/<nombre de componentes Compartido>

