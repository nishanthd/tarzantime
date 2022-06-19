---
title: Django quick setup
date: "2021-07-11T22:12:03.284Z"
tags: ["gatsby", "firebase"]
description: "Gatsby and Firebase"
thumbnail: ./django.png
folder: blog
---

Django is one of the famous Python framework for fastest way to build web applications and rest APIs using various available plugins.In this article, lets see how you can setup a django project in simple steps.

####Pre-requisites
[Python](https://www.python.org/downloads/) installed in your machine


####Steps
1. Env setup
```shell
    $ pip3 install pipenv
```
2. Creating project
```shell
    $ mkdir django-sample
    $ cd django-sample
    $ pipenv install django
```
3. Activate your virtual env
```shell
    $ pipenv shell
```
4. Using django-admin
```shell
    $ django-admin startproject django-sample .
    $ python manage.py startapp playground
```


