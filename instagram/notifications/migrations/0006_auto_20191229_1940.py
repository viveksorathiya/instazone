# Generated by Django 2.0.9 on 2019-12-29 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0005_auto_20181207_1517'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'ordering': ['-updated_at']},
        ),
    ]
