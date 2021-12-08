"""ContactTableSeeder Seeder."""

from masoniteorm.seeds import Seeder
from app.Contact import Contact


class ContactTableSeeder(Seeder):
    def run(self):
        Contact.create({"name": "Fran Brauning", "birthday": "January 28", "email": "franbrauning@gmail.com", "phone": "111-222-3333", "image": "https://pbs.twimg.com/profile_images/1466781461474852874/wTjEzLAl_400x400.jpg"})
        Contact.create({"name": "Zack S.", "birthday": "December 5", "email": "zack@gmail.com", "phone": "111-222-3344", "image":"https://pbs.twimg.com/profile_images/701082597879898114/2QWEjax5_400x400.jpg"})
        Contact.create({"name": "Kevin", "birthday": "January 28", "email": "franbrauning@gmail.com", "phone": "111-222-3333", "image": "https://pbs.twimg.com/profile_images/1118185676489596929/8TQviEcv_400x400.jpg"})

