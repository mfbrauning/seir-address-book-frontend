# Project 4
#### By Fran Brauning

## Project Summary

An address book web app where a user can create a list of contacts with their information.

## Models

Model: Contact

- name: String
- birthday: String or Date
- email: String
- phone: String
- image: String

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /contacts | GET | get all contacts (index) |
| /contacts | POST | create a contact (create)|
| /contacts/:id | PUT | update a conctact (update)|
| /contacts/:id | DELETE | delete a contact (destroy)|

## User Stories

- As a user I can see a list of my contacts
- As a user I can add a new contact
- As a user I can edit a contact
- As a user I can delete a contact

## Wireframe

<img width="600px" src="img1.png" />
<br/>
<img width="600px" src="img2.png" />

## Components

- Header (Component)
- Footer (Component)
- AllContacts (Page)
- SingleContact (Page)
- Add/Edit Form (Page)

## List of Technologies

- JS
- CSS
- HTML
- Python
- Masonite
- Postgres
