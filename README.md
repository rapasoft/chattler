# Itera Chattler

![Chattler](https://lh3.googleusercontent.com/liVaAZQF3VfBrhUackedEGJWSuqYIeUAKgv9d0_jh6nM3KMGD_aHeXSki-P863xn2wm7ICohd2pVO7gIlWXV3k-sE1z-uCWXA8T6gM-wGsydALs2tk4_aTUW6mKC8gtm9InLzx2P_T1WfEgX9p2xEN8tNG8ZUDsSjsW9EwUp5tQy_iKrDSCCgFQGg1Tq4d6r7fVjAhUnn2waXDw2h-uHRkHTWznoOYzO4VeX302QrYqVlj4n1ESpwqWowLWPCNIgkR0J6jxjPy5bXc389DGJbp9WvQpi6WLq5v6bhiqbCrP8_OVgnm7iZHjkJByzeUwTmEcVT8sXkziL0_qPbgD_Bupz45n-yRE5cdmDvYDKNCFf921RssEOBdO5T64ovpLIPei1kQGSp7DuVOz8tRv-Y1VU-T8qt_I87BXD6vK8vmFWIlvujSKfMPaYufhwBctHmA9GlY4_RfvkMgjGuCXnozBxLTx5Pw7fbQgbg_uwQJ0bQz6QT7-Gns3gQP5-8VXyG4kExn6Ur39Cj2-fuUpbz9wvAilNqmhmpkqOXXo_VGvbhKR7a26NPjxkzReJVZI7SqQQO7b035GuFkXFitsoVl4HZ-BwlFZimzKmfYydbXkWli9TsUlIjg=w385-h230-no)

The motivation behind creating this project was [GirlsDay (slovak only)](http://www.girlsday.sk/co-je-to-girlsday/), where Itera participated and hosted several students. We wanted to show what is it like to spend a day within IT company. There were three main blocks: project management, programming and testing. Chattler was the example product we were developing (and testing). 

As such, the idea was to deliver product that's working but has bugs and design flaws (to show that it takes a lot of effort to make everything right).

My part was to program simple Chat client, that could be used by the participants and show them "live coding" (e.g. if I change this, then this happens). The goal wasn't to show them in detail what it takes, just give an overview. 

## How to run the application in development mode

* Clone the repository, 
* Build and run the backend (from root):
```
     mvn clean package
     mvn spring-boot:run
```
* Then build and run frontend (cd to frontend):
```
     npm install
     npm start
```
* Backend runs on `http://localhost:8080`
* Frontend is available on `http://localhost:3000`

**Don't look for tests, there are none! 😱**