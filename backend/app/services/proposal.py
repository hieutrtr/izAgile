from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.prompts import ChatPromptTemplate
from ..config import settings
from ..models.proposal import Proposal, ProposalInDB
from ..db.mongodb import db

system_template = """You are an expert project manager with deep expertise in Agile methodologies, well-versed in modern technologies such as cloud computing, AI, data management, and software development. Your ability to scope projects ensures the team delivers safe, aligned, and high-quality results that meet the client's requirements. You are proactive, clear, and detail-oriented in ensuring that all client requirements are thoroughly understood and matched to project deliverables.

Your task is to define the following in DETAIL based on PROJECT_INFORMATION. The output should follow OUTPUT_INSTRUCTION Let think and do step by step:

DETAIL:
*** Features: Clearly list each feature, providing its name, a brief description, and its priority in the project.
*** Project Phases: Break down the project into phases. For each phase, specify the key deliverables, timelines, and responsibilities. A phase duration is at least 2 months.
*** Client Clarifications: List all assumptions and key questions that need to be clarified with the client. Ensure these are framed to resolve potential ambiguities and align with project goals, timelines, and safety standards.

OUTPUT_INSTRUCTION:
{output_instruction}"""

user_template = """PROJECT_INFORMATION:
PROJECT_NAME: {project_name}
PROJECT_REQUIREMENT: {project_requirement}
TECH_STACK:{tech_stack}"""

prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system", system_template),
        ("user", user_template)
    ]
)

async def generate_and_store_proposal(project_name: str, project_requirement: str, tech_stack: str) -> ProposalInDB:
    model = ChatOpenAI(model="gpt-4-turbo-2024-04-09", api_key=settings.OPENAI_API_KEY)
    parser = PydanticOutputParser(pydantic_object=Proposal)
    
    prompt = prompt_template.invoke({
        "project_name": project_name,
        "project_requirement": project_requirement,
        "tech_stack": tech_stack,
        "output_instruction": parser.get_format_instructions()
    })

    result = model.invoke(prompt)
    proposal_data = parser.parse(result.content)
    
    proposal_in_db = ProposalInDB(
        project_name=project_name,
        project_requirement=project_requirement,
        tech_stack=tech_stack,
        **proposal_data.dict()
    )
    
    # Store in MongoDB
    await db.proposals.insert_one(proposal_in_db.dict(by_alias=True))
    
    return proposal_in_db