from db import (
    project_collection,
    client_collection,
    contact_collection,
    subscriber_collection
)

def get_projects():
    return list(project_collection.find({}, {"_id": 0}))

def get_clients():
    return list(client_collection.find({}, {"_id": 0}))

def add_contact(data: dict):
    contact_collection.insert_one(data)
    return {"message": "Contact submitted successfully"}

def add_subscriber(data: dict):
    subscriber_collection.insert_one(data)
    return {"message": "Subscribed successfully"}
