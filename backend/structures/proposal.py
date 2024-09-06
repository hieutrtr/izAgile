from pydantic import BaseModel, Field
from typing import List, Dict

class Feature(BaseModel):
    name: str = Field(description="The name of the feature")
    description: str = Field(description="A brief description of the feature")
    priority: str = Field(description="The priority level of the feature (e.g., High, Medium, Low)")

class ProjectPhase(BaseModel):
    phase: str = Field(description="The name of the project phase")
    duration: str = Field(description="The duration of the phase")
    key_deliverables: List[str] = Field(description="A list of key deliverables for the phase")

class ClientClarification(BaseModel):
    question: str = Field(description="A clarification question from the client")
    assumption: str = Field(description="The assumption for the clarification question")

class Proposal(BaseModel):
    features: List[Feature] = Field(description="A list of features for the project")
    project_phases: List[ProjectPhase] = Field(description="A list of phases for the project")
    client_clarifications: List[ClientClarification] = Field(description="A list of clarification questions from the client")