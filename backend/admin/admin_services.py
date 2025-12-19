from db import (
    project_collection,
    client_collection,
    contact_collection,
    subscriber_collection
)

def add_project(data: dict):
    project_collection.insert_one(data)
    return {"message": "Project added"}

def add_client(data: dict):
    client_collection.insert_one(data)
    return {"message": "Client added"}

def get_contacts():
    return list(contact_collection.find({}, {"_id": 0}))

def get_subscribers():
    return list(subscriber_collection.find({}, {"_id": 0}))
