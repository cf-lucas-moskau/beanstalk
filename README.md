# Welcome to beanstalk


## What is this project for?

This project was created for an experiment at UIO, the university of Oslo.

Idea for the experiemnt is to gather information on how different factors influence the behaviour of investors.


## How to get started

You have to move into the repistory first. enter `cd Sophia/Frontend/beanstalk/` in the console

Then run

`npm install`

to install the packages and then

`npm run dev`

to start the application.

It will start running under

`http://localhost:5173/`

## What is already there?

The idea is to have a user get into the system by clicking a link like this:

`http://localhost:5173/?experiment=98KLh34HGFe8`

This link includes the experiment id as a parameter.

The user then needs to give consent,

![Consent](https://cdn.discordapp.com/attachments/803349639351894067/1198894462286430260/Bildschirmfoto_2024-01-22_um_08.38.21.png)

After giving the consent, you get to the experiment page. On this page there is a list of startups the user can invest in. He has a set amount of money he can spend.

e.g:

`http://localhost:5173/experiment/98KLh34HGFe8`

![Experiment Page](https://cdn.discordapp.com/attachments/803349639351894067/1198907362065534976/Bildschirmfoto_2024-01-22_um_09.29.43.png)

The user can then invest in the startups. At the end the user can end the experiment and the data gets sent to the experiment owner.

![Investment](https://cdn.discordapp.com/attachments/803349639351894067/1198907946764083210/Bildschirmfoto_2024-01-22_um_09.32.03.png)



> !IMPORTANT! We are using Svelte Store to store data thoughout the app! Please make yourself familiar and use it as well!

TODO

[] For each experiment, the consent page needs to be specific. So when on the page `http://localhost:5173/?experiment=98KLh34HGFe8` we need to get the id of the experiment first, then need to get the corresponding consent data, that is stored in the `data.js` file and display that.

[] After the consent page, the user needs to be redirected to a explanation page that explains experiment he is about to go on. This needs to be specific again. Similar to the consent page.

[] Make the experiments display randomly. BUT only for one participant. So it should not be random everytime a participant goes onto the `/experiment` page but rather be determined ONCE.

[] If you click "invest" on a startup, you should get a pop up that asks you for the reason why you invested. There only needs to be a text area that allows the user to enter something, no checkbox or anything.

[] At the end of an experiment we need to determine what the participant gets as return. It should be the amount left to invest + (+- 5% of the invested amount). Meaning the amount the participant invested has a chance of decreasing from -5% to +5%

[] Underneath the "Left to invest: " Box in the experiments overview there should be the investments you already did displayed underneath.

[] On the experment site we should have the ability to adjust the invested amount. So the experiment site needs to know how much has alread been invested and then give the possibility to change that. This change should then trigger the pop up again where the participant needs to explain himself

[] TIME TRACKING: We need to implement time tracking. We need to know how long each participant spends on each site. This doesnt need to be specific, this can simply be saved by saving the routes. There should also be a click counter of each route.

[] Once the participant finishes the experiment, we need to save the data somewhere.


