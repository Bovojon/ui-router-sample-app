# UI-Router-sample-app
Here we build a simple AngularJS SPA based on the [tutorial from Scotch.io](https://scotch.io/tutorials/angular-routing-using-ui-router)  to learn more about how ui-router works.

So while testing this application, I ran into a problem with XMLHttpRequest loading the page. The error was:
> XMLHttpRequest cannot load file:///C:/Users/username/../ui-router-sample-app/partial-home.html. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.

On stackoverflow, [Kirill Fuchs](http://stackoverflow.com/users/1445460/kirill-fuchs) wrote an answer to a [similar problem](http://stackoverflow.com/questions/27742070/angularjs-error-cross-origin-requests-are-only-supported-for-protocol-schemes):

>This error is happening because you are just opening html documents directly from the browser. To fix this you will need to serve your code from a webserver and access it on localhost.

## Technical Overview
* AngularJS 1.x
* UI Router

## Getting Started
To get started, clone the repository, and run `http-server`.

```shell
git clone <this repo>
cd <this project folder>
http-server
```

This will start a web server on port 8080.


[LIVE EXAMPLE](https://bovojon.github.io/ui-router-sample-app/#/home)
