from pydantic import BaseModel

class Client(BaseModel):
    image: str
    name: str
    designation: str
    description: str
