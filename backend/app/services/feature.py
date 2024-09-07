from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.prompts import ChatPromptTemplate
from ..config import settings
from ..models.feature import DetailedProposal

system_template = """You are an expert project manager and software architect with deep expertise in Agile methodologies and modern software development practices. Your task is to generate a detailed project plan based on the initial proposal.

For each project phase, provide the following details:
1. Features: List and describe the features to be implemented in this phase.
2. Constraints: Identify any constraints or limitations for this phase.
3. Team: Specify the human resource requirements (roles and skills needed).
4. Tasks: Break down the work into specific tasks required to complete the features.

Use the provided initial proposal as a starting point and expand on it with more detail and structure. Ensure that the output follows the format specified in the OUTPUT_INSTRUCTION.

INITIAL_PROPOSAL:
{initial_proposal}

OUTPUT_INSTRUCTION:
{output_instruction}"""

user_template = """Please generate a detailed project plan based on the initial proposal."""

prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system", system_template),
        ("user", user_template)
    ]
)

async def generate_detailed_features(initial_proposal: dict) -> DetailedProposal:
    model = ChatOpenAI(model="gpt-4-turbo-2024-04-09", api_key=settings.OPENAI_API_KEY)
    parser = PydanticOutputParser(pydantic_object=DetailedProposal)
    
    prompt = prompt_template.invoke({
        "initial_proposal": initial_proposal,
        "output_instruction": parser.get_format_instructions()
    })

    result = model.invoke(prompt)
    detailed_proposal = parser.parse(result.content)
    
    return detailed_proposal