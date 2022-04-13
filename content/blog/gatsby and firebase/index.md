---
title: Deploying gatsby project in FireBase
date: "2021-07-11T22:12:03.284Z"
tags: ["gatsby", "firebase"]
description: "Gatsby and Firebase"
thumbnail: ./gatsby-firebase.jpeg
folder: blog
---

####Pre-requisites
1. Gatsby Project on your local machine
2. Firebase account

####Steps
1. Create a project in Firebase  
    - Go to https://console.firebase.google.com/  
    - Click *Add Project* and finish creating your project.

2. Install the Firebase CLI with npm by running the following command:
    ```bash
    npm install -g firebase-tools
    ```

3. Sign into Firebase using your Google account by running the following command:
    ```bash
    firebase login
    ```

4. Navigate into your gatsby project directory and setup firebase:  
    ```bash
    firebase init
    ```
This command will prompt you to:  
    - select the Firebase products you wish to setup.select *Firebase Hosting*.  
    - select the Firebase Project you wish to use.Select the one you just created.  
    
    When prompted to select your public directory, press enter. It will default to public, which is also Gatsby’s default public directory.

5. Update the *firebase.json* with the following cache settings
    ```json
    {
        "hosting": {
            "public": "public",
            "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
            "headers": [
            {
                "source": "**/*",
                "headers": [
                {
                    "key": "cache-control",
                    "value": "public, max-age=0, must-revalidate"
                }
                ]
            },
            {
                "source": "static/**",
                "headers": [
                {
                    "key": "cache-control",
                    "value": "public, max-age=31536000, immutable"
                }
                ]
            },
            {
                "source": "**/*.@(css|js)",
                "headers": [
                {
                    "key": "cache-control",
                    "value": "public, max-age=31536000, immutable"
                }
                ]
            },
            {
                "source": "sw.js",
                "headers": [
                {
                    "key": "cache-control",
                    "value": "public, max-age=0, must-revalidate"
                }
                ]
            },
            {
                "source": "page-data/**",
                "headers": [
                {
                    "key": "cache-control",
                    "value": "public, max-age=0, must-revalidate"
                }
                ]
            }
            ]
        }
    }
    ```
6. Prepare your site for deployment by running gatsby build. This generates a publishable version of your site in the public folder.
    ```bash
    gatsby build
    ```
7. Deploy your site by running the following command:
    ```bash
    firebase deploy
    ```

All done! Once the deployment concludes, you can access your website using firebaseProjectId.firebaseapp.com or firebaseProjectId.web.app.

####References:

1. [Firebase CLI Reference](https://firebase.google.com/docs/cli)
2. [Get Started with Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)





