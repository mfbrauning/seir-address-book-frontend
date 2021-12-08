""" A ContactController Module """

from masonite.controllers import Controller
from masonite.request import Request
from app.Contact import Contact


class ContactController(Controller):
    def __init__(self, request: Request):
        self.request = request

    def show(self):
        id = self.request.param("id")
        return Contact.where("id", id).get()

    def index(self):
        return Contact.all()

    def create(self):
        name = self.request.input("name")
        birthday = self.request.input("birthday")
        email = self.request.input("email")
        phone = self.request.input("phone")
        image = self.request.input("image")
        contact = Contact.create({"name": name, "birthday": birthday, "email": email, "phone": phone, "image": image})
        return contact

    def update(self):
        id = self.request.param("id")
        name = self.request.input("name")
        birthday = self.request.input("birthday")
        email = self.request.input("email")
        phone = self.request.input("phone")
        image = self.request.input("image")
        Contact.where("id",id).update({"name": name, "birthday": birthday, "email": email, "phone": phone, "image": image})
        return Contact.where("id",id).get()

    def destroy(self):
        id = self.request.param("id")
        contact = Contact.where("id",id).get()
        Contact.where("id",id).delete()
        return contact