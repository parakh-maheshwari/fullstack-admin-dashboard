from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dashboard.dashboard_routes import router as dashboard_router
from admin.admin_routes import router as admin_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard_router)
app.include_router(admin_router)

@app.get("/")
def root():
    return {"status": "Backend running successfully"}
