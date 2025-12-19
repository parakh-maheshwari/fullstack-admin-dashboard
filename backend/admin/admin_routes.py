from fastapi import APIRouter
from models.project_model import Project
from models.client_model import Client
from admin.admin_services import *

router = APIRouter(prefix="/admin", tags=["Admin"])

@router.post("/projects")
def create_project(project: Project):
    return add_project(project.dict())

@router.post("/clients")
def create_client(client: Client):
    return add_client(client.dict())

@router.get("/contacts")
def fetch_contacts():
    return get_contacts()

@router.get("/subscribers")
def fetch_subscribers():
    return get_subscribers()
