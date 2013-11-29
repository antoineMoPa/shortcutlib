shortcutLib
===========

GPL, jQuery-like javascript library

Warning: shortutLib is not ready for production yet. I recommend Zepto.js for similar features and lightness.

Don't you feel sad to depend on jQuery for all your projects? I personnaly wanted to implement the jQuery functions I use the most in a lightweight library that does not try to fix old browsers. In other words, I do not support weird browsers such as IE8.

## How to use

Almost like jQuery, but $() is replaced with q.d()

## Using q.ready()

A q.ready() method exists, but you have to call it at the end of your HTML.

In your HTML:

    [...]
    <script>
        q.ready()
    </script>
    </body>
    </html>

In your Javascript:

    q.ready(function(){
        doYourStuff()
    })

## Selecting stuff

q.d("selector") uses querySelectorAll() (And its syntax)

Example:

    q.d(".myclass")
    q.d("#myId")
    q.d(".parent-class .myClass")
    q.d(".parent-class > div:nth-child(10):hover:not(.blue)")

## Implemented methods
    q.d(".class").find()
    q.d(".class").before()
    q.d(".class").after()
    q.d(".class").append()
    q.d(".class").prepend()
    q.d(".class").remove()
    q.d(".class").clear()    //Empty innerHTML 
    q.d(".class").text()
    q.d(".class").html()
    q.d(".class").addClass()
    q.d(".class").removeClass()
    q.d(".class").toggleClass()
    q.d(".class").hasClass()
    q.d(".class").on()
    q.d(".class").one()
    q.d(".class").unbind()
    q.d(".class").css()    //Syntax: ({width:"300px"}), not ("width":"300px")
    q.d(".class").hide()
    q.d(".class").show()
    q.d(".class").height()
    q.d(".class").width()
    q.d(".class").val()
    q.d(".class").top()
    q.d(".class").left()
    q.d(".class").attr()
    q.d(".class").and(".class")    //Include another set of element matching selector
    q.d(".class").item()
    q.d(".class").eq()
    q.d(".class").parent()
    q.d(".class").each(function(){
                           //this.element is the current dom element
                           q.d(this.element).addClass("classname")
                       })
    q.d(".class").first()
## Non-goals

* Implement all jQuery functions
* Support old browsers (A goal, however, is to support Chrome and Firefox)
* It was once a goal to include a custom preprocessor for CSS and HTML, but it was a bad idea !

## To-Do

Write tests in the current test folder (The folder already exists because I started to test q.assert, q.equal, etc.).

## Why are you coding this while jQuery exists?
Because of reasons.
