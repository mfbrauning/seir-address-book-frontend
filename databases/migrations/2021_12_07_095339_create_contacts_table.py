"""CreateContactsTable Migration."""

from masoniteorm.migrations import Migration


class CreateContactsTable(Migration):
    def up(self):
        """
        Run the migrations.
        """
        with self.schema.create("contacts") as table:
            table.increments("id")
            table.string("name")
            table.string("birthday")
            table.string("email")
            table.string("phone")
            table.string("image")
            table.timestamps()

    def down(self):
        """
        Revert the migrations.
        """
        self.schema.drop("contacts")
