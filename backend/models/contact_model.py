from pydantic import BaseModel

class Contact(BaseModel):
    full_name: str
    email: str
    mobile: str
    city: str
