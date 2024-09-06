from pydantic import BaseModel
from ..models.proposal import ProposalInDB

class ProposalCreate(BaseModel):
    project_name: str
    project_requirement: str
    tech_stack: str

class ProposalResponse(BaseModel):
    proposal: ProposalInDB