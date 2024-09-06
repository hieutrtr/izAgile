from fastapi import APIRouter, HTTPException
from ..schemas.proposal import ProposalCreate, ProposalResponse
from ..services.proposal import generate_and_store_proposal

router = APIRouter()

@router.post("/proposals", response_model=ProposalResponse)
async def create_proposal(proposal_create: ProposalCreate):
    try:
        proposal = await generate_and_store_proposal(
            proposal_create.project_name,
            proposal_create.project_requirement,
            proposal_create.tech_stack
        )
        return ProposalResponse(proposal=proposal)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))