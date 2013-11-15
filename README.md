shortcutlib
===========

Unstable[Not yet stable], GPL, jQuery-like javascript library

Don't you feel sad to depend on jQuery for all your projects? I personnaly wanted to implement the jQuery functions I use the most in a lightweight library that does not try to fix old browsers.

## How to use

Almost like jQuery, but $() is replaced with q.d()

## Using q.ready()

I did not implement a function that tries to guess when the page is loaded, like jQuery.ready().
The method for doing this is different from browser to browser and I did not feel like writing
browser specific code in this library. A q.ready() method exists, but you have to call it at the end of your HTML.

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
## Why ?
Because.
