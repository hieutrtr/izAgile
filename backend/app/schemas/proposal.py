from pydantic import BaseModel
from typing import List
from ..models.proposal import ProposalInDB

class ProposalCreate(BaseModel):
    project_name: str
    project_requirement: str
    tech_stack: str
    owner: str

class ProposalResponse(BaseModel):
    proposal: ProposalInDB

class PaginatedProposalResponse(BaseModel):
    proposals: List[ProposalResponse]
    total: int
    page: int
    limit: int