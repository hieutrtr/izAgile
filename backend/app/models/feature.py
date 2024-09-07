from pydantic import BaseModel, Field
from typing import List

class Task(BaseModel):
    name: str = Field(description="The name of the task")
    description: str = Field(description="A brief description of the task")
    estimated_time: str = Field(description="Estimated time to complete the task")

class Feature(BaseModel):
    name: str = Field(description="The name of the feature")
    description: str = Field(description="A detailed description of the feature")
    priority: str = Field(description="The priority level of the feature (e.g., High, Medium, Low)")
    tasks: List[Task] = Field(description="List of tasks required to implement this feature")

class Phase(BaseModel):
    name: str = Field(description="The name of the project phase")
    duration: str = Field(description="The duration of the phase")
    features: List[Feature] = Field(description="List of features to be implemented in this phase")
    constraints: List[str] = Field(description="List of constraints or limitations for this phase")
    team: List[str] = Field(description="List of required team members (roles/skills) for this phase")

class DetailedProposal(BaseModel):
    project_name: str = Field(description="The name of the project")
    phases: List[Phase] = Field(description="List of detailed project phases")