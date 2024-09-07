from fastapi import APIRouter, HTTPException, Query
from ..schemas.proposal import ProposalCreate, ProposalResponse, PaginatedProposalResponse, DetailedProposalResponse
from ..services.proposal import generate_and_store_proposal, get_proposals_by_owner, get_proposal_by_id, get_proposal_by_project_name
from ..services.feature import generate_detailed_features

router = APIRouter()

@router.post("/proposals", response_model=ProposalResponse)
async def create_proposal(proposal_create: ProposalCreate):
    try:
        proposal = await generate_and_store_proposal(
            proposal_create.project_name,
            proposal_create.project_requirement,
            proposal_create.tech_stack,
            proposal_create.owner
        )
        return ProposalResponse(proposal=proposal)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/proposals/owner/{owner}", response_model=PaginatedProposalResponse)
async def list_proposals_by_owner(
    owner: str,
    page: int = Query(1, ge=1, description="Page number"),
    limit: int = Query(10, ge=1, le=100, description="Number of items per page")
):
    try:
        proposals, total = await get_proposals_by_owner(owner, page, limit)
        return PaginatedProposalResponse(
            proposals=[ProposalResponse(proposal=proposal) for proposal in proposals],
            total=total,
            page=page,
            limit=limit
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/proposals/id/{id}", response_model=ProposalResponse)
async def get_proposal(id: str):
    try:
        proposal = await get_proposal_by_id(id)
        if proposal is None:
            raise HTTPException(status_code=404, detail="Proposal not found")
        return ProposalResponse(proposal=proposal)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/proposals/project/{project_name}", response_model=ProposalResponse)
async def get_proposal_by_project(project_name: str):
    try:
        proposal = await get_proposal_by_project_name(project_name)
        if proposal is None:
            raise HTTPException(status_code=404, detail="Proposal not found")
        return ProposalResponse(proposal=proposal)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/proposals/{proposal_id}/features", response_model=DetailedProposalResponse)
async def generate_detailed_proposal(proposal_id: str):
    try:
        initial_proposal = await get_proposal_by_id(proposal_id)
        if initial_proposal is None:
            raise HTTPException(status_code=404, detail="Proposal not found")
        
        detailed_proposal = await generate_detailed_features(initial_proposal.dict())
        return DetailedProposalResponse(proposal=detailed_proposal)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))