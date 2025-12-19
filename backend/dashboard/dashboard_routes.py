from fastapi import APIRouter
from models.contact_model import Contact
from models.subscriber_model import Subscriber
from dashboard.dashboard_services import *

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/projects")
def fetch_projects():
    return get_projects()

@router.get("/clients")
def fetch_clients():
    return get_clients()

@router.post("/contact")
def submit_contact(contact: Contact):
    return add_contact(contact.dict())

@router.post("/subscribe")
def subscribe(subscriber: Subscriber):
    return add_subscriber(subscriber.dict())
