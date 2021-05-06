FROM node:slim

LABEL "com.github.actions.name"="github-actions-nodemailer"
LABEL "com.github.actions.description"="Github Actions to send email notifications using Nodemailer."
LABEL "com.github.actions.icon"="mail"
LABEL "com.github.actions.color"="orange"

LABEL "repository"="https://github.com/adelynx/github-actions-nodemailer"
LABEL "homepage"="https://github.com/adelynx/github-actions-nodemailer"
LABEL "maintainer"="Adel Kedjour <adel@kedjour.com>"

COPY LICENSE README.md /

COPY index.js /

COPY package.json /package.json

RUN yarn install

ENTRYPOINT ["node", "/index.js"]
