from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import relationship

from database.db import Base, engine

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)

    profile = relationship("Profile", back_populates="user")

Base.metadata.create_all(bind=engine)
    