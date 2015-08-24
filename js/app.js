/**
 * Created by Rahul_Sahay on 8/23/2015.
 */


import * {Component,Template} from 'angular2/angular2';
function Tagline(){}

Tagline.annotations=[
  new angular.Component({
    selector:"message"
  }),
  new angular.View({
    template:"<div><h2>Getting Started With Angular 2!!!</h2></div>"
  })
];

function helloAngular(){}

//Defining Annotations

/*
helloAngular.annotations=[
  new angular.Component({
    selector:"helloAngular"
    }),
  new angular.View({
    directives:[Tagline],
   template:"<div><h1>Hello Angular 2</h1><message></message></div>"
  })
];
*/

@Component({
  selector:'helloAngular'
})
@Template({
  inline:"<div><h1>Hello Angular 2</h1></div>"
})

//Bootstrapping Components

document.addEventListener("DOMContentLoaded",function(){
  angular.bootstrap(helloAngular);
});